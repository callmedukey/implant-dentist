"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Popup, PopupImage } from "@/prisma/generated/prisma";

type PopupWithImage = Popup & {
  popupImage: PopupImage | null;
};

interface PopupDisplayProps {
  popup: PopupWithImage | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PopupDisplay({
  popup,
  open,
  onOpenChange,
}: PopupDisplayProps) {
  if (!popup) return null;

  const handleDontShowAgain = () => {
    // Store in localStorage with expiry
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 1); // Add 1 day
    localStorage.setItem(`popup-${popup.id}-hidden`, expiry.toISOString());
    onOpenChange(false);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[95vw] md:max-w-[45vw] lg:max-w-[600px] max-h-[80vh] p-0 overflow-hidden flex flex-col gap-0">
        <div
          className={cn(
            "flex-1 overflow-y-auto p-6",
            popup.type === "IMAGE" ? "p-0" : "p-6"
          )}
        >
          {popup.type === "TEXT" ? (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-semibold">
                  {popup.title || "알림"}
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-700 whitespace-pre-wrap">
                  {popup.content}
                </p>
              </div>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="sr-only">팝업 이미지</DialogTitle>
              </DialogHeader>
              {popup.popupImage && (
                <div className="relative w-full">
                  <Image
                    src={popup.popupImage.imageUrl}
                    alt="팝업 이미지"
                    width={popup.popupImage.width}
                    height={popup.popupImage.height}
                    className="w-full h-auto rounded-md"
                    priority
                  />
                </div>
              )}
            </>
          )}
        </div>

        <div className="border-t bg-gray-50 p-4 flex justify-end gap-3">
          <button
            onClick={handleDontShowAgain}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            오늘 하루 보지 않기
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 text-sm bg-teal-secondary font-bold text-white hover:bg-teal-primary rounded-md transition-colors"
          >
            닫기
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
