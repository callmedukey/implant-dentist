"use server";

import { hash, compare } from "bcryptjs";
import { z } from "zod";

import { auth } from "@/auth";
import { prisma } from "@/prisma/prisma-client";

const passwordSchema = z
  .object({
    currentPassword: z.string().min(1, "현재 비밀번호를 입력해주세요."),
    newPassword: z
      .string()
      .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
      .max(16, "비밀번호는 16자 이하여야 합니다.")
      .regex(
        /^(?=.*[A-Za-z])(?=.*\d)/,
        "비밀번호는 영문자와 숫자를 포함해야 합니다."
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "새 비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export type PasswordResetState = {
  errors?: {
    currentPassword?: string[];
    newPassword?: string[];
    confirmPassword?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export async function resetPasswordAction(
  prevState: PasswordResetState,
  formData: FormData
): Promise<PasswordResetState> {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    return {
      errors: {
        _form: ["권한이 없습니다."],
      },
    };
  }

  const validatedFields = passwordSchema.safeParse({
    currentPassword: formData.get("currentPassword"),
    newPassword: formData.get("newPassword"),
    confirmPassword: formData.get("confirmPassword"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    // Get current user
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user || !user.password) {
      return {
        errors: {
          _form: ["사용자를 찾을 수 없습니다."],
        },
      };
    }

    // Verify current password
    const passwordMatch = await compare(
      validatedFields.data.currentPassword,
      user.password
    );

    if (!passwordMatch) {
      return {
        errors: {
          currentPassword: ["현재 비밀번호가 올바르지 않습니다."],
        },
      };
    }

    // Hash new password
    const hashedPassword = await hash(validatedFields.data.newPassword, 10);

    // Update password
    await prisma.user.update({
      where: { id: session.user.id },
      data: { password: hashedPassword },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to reset password:", error);
    return {
      errors: {
        _form: ["비밀번호 변경 중 오류가 발생했습니다."],
      },
    };
  }
}
