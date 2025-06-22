"use server";

import { AuthError } from "next-auth";

import { signIn } from "@/auth";
import { signInSchema } from "@/validations/auth.schema";

export type LoginState = {
  errors?: {
    email?: string[];
    password?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const validatedFields = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await signIn("credentials", {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
      redirectTo: "/admin",
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            errors: {
              _form: ["이메일 또는 비밀번호가 올바르지 않습니다."],
            },
          };
        default:
          return {
            errors: {
              _form: ["로그인 중 오류가 발생했습니다. 다시 시도해주세요."],
            },
          };
      }
    }
    throw error;
  }
}
