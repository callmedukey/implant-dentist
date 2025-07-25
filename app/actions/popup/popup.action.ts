"use server";

import { writeFile, mkdir } from "fs/promises";
import path from "path";

import { revalidatePath } from "next/cache";
import sharp from "sharp";

import { auth } from "@/auth";
import { PopupType } from "@/prisma/generated/prisma";
import { prisma } from "@/prisma/prisma-client";

export type PopupState = {
  errors?: {
    title?: string[];
    content?: string[];
    type?: string[];
    image?: string[];
    _form?: string[];
  };
  success?: boolean;
};

export async function createPopupAction(
  prevState: PopupState,
  formData: FormData
): Promise<PopupState> {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    return {
      errors: {
        _form: ["권한이 없습니다."],
      },
    };
  }

  const type = formData.get("type") as PopupType;
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const imageFile = formData.get("image") as File;

  // Validation
  if (!type) {
    return {
      errors: {
        type: ["팝업 타입을 선택해주세요."],
      },
    };
  }

  if (type === "TEXT") {
    if (!title || !content) {
      return {
        errors: {
          title: !title ? ["제목을 입력해주세요."] : undefined,
          content: !content ? ["내용을 입력해주세요."] : undefined,
        },
      };
    }
  } else if (type === "IMAGE") {
    if (!imageFile || imageFile.size === 0) {
      return {
        errors: {
          image: ["이미지를 업로드해주세요."],
        },
      };
    }

    // Validate image type
    const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
    if (!validTypes.includes(imageFile.type)) {
      return {
        errors: {
          image: ["JPG, PNG, WebP 형식의 이미지만 업로드 가능합니다."],
        },
      };
    }

    // Validate image size (5MB)
    if (imageFile.size > 5 * 1024 * 1024) {
      return {
        errors: {
          image: ["이미지 크기는 5MB 이하여야 합니다."],
        },
      };
    }
  }

  try {
    let imageUrl: string | undefined;
    let imageWidth: number | undefined;
    let imageHeight: number | undefined;

    // Handle image upload
    if (type === "IMAGE" && imageFile && imageFile.size > 0) {
      const uploadsDir = path.join(process.cwd(), "public", "uploads");

      // Create uploads directory if it doesn't exist
      await mkdir(uploadsDir, { recursive: true });

      // Generate unique filename
      const timestamp = Date.now();
      const filename = `popup-${timestamp}-${imageFile.name}`;
      const filepath = path.join(uploadsDir, filename);

      // Convert File to Buffer
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Get image dimensions using sharp
      const metadata = await sharp(buffer).metadata();
      imageWidth = metadata.width;
      imageHeight = metadata.height;

      // Write file
      await writeFile(filepath, buffer);

      imageUrl = `/api/uploads/${filename}`;
    }

    // Create popup in database
    await prisma.popup.create({
      data: {
        type,
        title: type === "TEXT" ? title : undefined,
        content: type === "TEXT" ? content : undefined,
        popupImage: imageUrl
          ? {
              create: {
                imageUrl,
                width: imageWidth || 0,
                height: imageHeight || 0,
              },
            }
          : undefined,
      },
    });

    revalidatePath("/admin");
    revalidatePath("/", "layout"); // Revalidate root layout to show new popups

    return { success: true };
  } catch (error) {
    console.error("Failed to create popup:", error);
    return {
      errors: {
        _form: ["팝업 생성 중 오류가 발생했습니다."],
      },
    };
  }
}

export async function getPopupsAction() {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  const popups = await prisma.popup.findMany({
    include: {
      popupImage: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return popups;
}

export async function deletePopupAction(id: string): Promise<void> {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    throw new Error("Unauthorized");
  }

  await prisma.popup.delete({
    where: { id },
  });

  revalidatePath("/admin");
  revalidatePath("/", "layout"); // Revalidate root layout to reflect deleted popups
}
