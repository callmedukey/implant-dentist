import { NextResponse } from "next/server";

import { prisma } from "@/prisma/prisma-client";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const popups = await prisma.popup.findMany({
      include: {
        popupImage: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(popups);
  } catch (error) {
    console.error("Failed to fetch popups:", error);
    return NextResponse.json(
      { error: "Failed to fetch popups" },
      { status: 500 }
    );
  }
}
