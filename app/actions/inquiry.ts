"use server";

import { z } from "zod";

import { prisma } from "@/prisma/prisma-client";

// Validation schema
const inquirySchema = z.object({
  name: z.string().min(2, "이름은 최소 2자 이상이어야 합니다"),
  phone: z
    .string()
    .regex(
      /^010-\d{4}-\d{4}$/,
      "올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)"
    ),
  message: z.string().min(10, "문의 내용은 최소 10자 이상이어야 합니다"),
  isAgreed: z.literal(true, {
    errorMap: () => ({ message: "개인정보 수집 및 이용에 동의해주세요" }),
  }),
});

export type InquiryState = {
  error?: string;
  success?: boolean;
  fieldErrors?: {
    name?: string[];
    phone?: string[];
    message?: string[];
    isAgreed?: string[];
  };
};

export async function createInquiry(
  prevState: InquiryState,
  formData: FormData
): Promise<InquiryState> {
  try {
    // Parse form data
    const rawData = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      isAgreed: formData.get("isAgreed") === "on",
    };

    // Validate data
    const validatedData = inquirySchema.parse(rawData);

    // Save to database
    await prisma.inquiry.create({
      data: validatedData,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        fieldErrors: error.flatten().fieldErrors,
      };
    }

    console.error("Failed to create inquiry:", error);
    return {
      error: "문의 등록 중 오류가 발생했습니다. 다시 시도해주세요.",
    };
  }
}
