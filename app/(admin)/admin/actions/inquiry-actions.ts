"use server";

import { redirect } from "next/navigation";

import { auth } from "@/auth";
import { prisma } from "@/prisma/prisma-client";

interface GetInquiriesParams {
  page?: number;
  limit?: number;
  search?: string;
  sortOrder?: "asc" | "desc";
}

export async function getInquiries({
  page = 1,
  limit = 10,
  search = "",
  sortOrder = "desc",
}: GetInquiriesParams = {}) {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  try {
    // Build where clause for search
    const where = search
      ? {
          OR: [
            { name: { contains: search, mode: "insensitive" as const } },
            { phone: { contains: search, mode: "insensitive" as const } },
          ],
        }
      : {};

    // Get total count for pagination
    const totalCount = await prisma.inquiry.count({ where });

    // Calculate pagination
    const skip = (page - 1) * limit;
    const totalPages = Math.ceil(totalCount / limit);

    // Fetch inquiries with pagination
    const inquiries = await prisma.inquiry.findMany({
      where,
      orderBy: {
        createdAt: sortOrder,
      },
      skip,
      take: limit,
      select: {
        id: true,
        name: true,
        phone: true,
        message: true,
        isAgreed: true,
        createdAt: true,
      },
    });

    return {
      inquiries,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNextPage: page < totalPages,
        hasPrevPage: page > 1,
      },
    };
  } catch (error) {
    console.error("Failed to fetch inquiries:", error);
    return {
      inquiries: [],
      pagination: {
        currentPage: 1,
        totalPages: 0,
        totalCount: 0,
        hasNextPage: false,
        hasPrevPage: false,
      },
    };
  }
}

export async function getInquiryById(id: string) {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  try {
    const inquiry = await prisma.inquiry.findUnique({
      where: { id },
    });

    return inquiry;
  } catch (error) {
    console.error("Failed to fetch inquiry:", error);
    return null;
  }
}

export async function deleteInquiry(id: string) {
  const session = await auth();

  if (!session || session.user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  try {
    await prisma.inquiry.delete({
      where: { id },
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to delete inquiry:", error);
    return { success: false, error: "삭제 중 오류가 발생했습니다." };
  }
}
