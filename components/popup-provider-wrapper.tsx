import type { Popup, PopupImage } from "@/prisma/generated/prisma";
import { prisma } from "@/prisma/prisma-client";

import PopupProvider from "./popup-provider";

export default async function PopupProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  let popups: (Popup & { popupImage: PopupImage | null })[] = [];

  try {
    popups = await prisma.popup.findMany({
      include: {
        popupImage: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error("Failed to fetch popups:", error);
  }

  // Generate preload links for popup images
  const preloadLinks = popups
    .filter((popup) => popup.popupImage?.imageUrl)
    .slice(0, 3) // Preload only first 3 images to avoid performance impact
    .map((popup) => (
      <link
        key={popup.id}
        rel="preload"
        as="image"
        href={popup.popupImage!.imageUrl}
      />
    ));

  return (
    <>
      {preloadLinks}
      <PopupProvider initialPopups={popups}>{children}</PopupProvider>
    </>
  );
}
