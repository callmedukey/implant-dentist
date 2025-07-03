"use client";

import Image from "next/image";
import { useState } from "react";

import { deletePopupAction } from "@/app/actions/popup/popup.action";
import PopupDisplay from "@/components/popup-display";
import { Popup, PopupImage } from "@/prisma/generated/prisma";

type PopupWithImage = Popup & {
  popupImage: PopupImage | null;
};

interface PopupListProps {
  popups: PopupWithImage[];
}

export default function PopupList({ popups }: PopupListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [selectedPopup, setSelectedPopup] = useState<PopupWithImage | null>(
    null
  );
  const [showPopup, setShowPopup] = useState(false);

  const handleDelete = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click

    if (!confirm("정말로 이 팝업을 삭제하시겠습니까?")) {
      return;
    }

    setDeletingId(id);
    try {
      await deletePopupAction(id);
    } catch (error) {
      console.error("Failed to delete popup:", error);
      alert("팝업 삭제 중 오류가 발생했습니다.");
    } finally {
      setDeletingId(null);
    }
  };

  const handleCardClick = (popup: PopupWithImage) => {
    setSelectedPopup(popup);
    setShowPopup(true);
  };

  if (popups.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        생성된 팝업이 없습니다.
      </div>
    );
  }

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {popups.map((popup) => (
          <div
            key={popup.id}
            onClick={() => handleCardClick(popup)}
            className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col"
          >
            <div className="flex-1">
              {popup.type === "TEXT" ? (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {popup.title || "제목 없음"}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 whitespace-pre-wrap">
                    {popup.content || "내용 없음"}
                  </p>
                </div>
              ) : (
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    이미지 팝업
                  </p>
                  {popup.popupImage && (
                    <>
                      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
                        <Image
                          src={popup.popupImage.imageUrl}
                          alt="팝업 이미지"
                          fill
                          className="object-contain"
                        />
                      </div>
                      {popup.popupImage.width > 0 && popup.popupImage.height > 0 && (
                        <p className="mt-2 text-xs text-gray-600">
                          크기: {popup.popupImage.width} × {popup.popupImage.height}px
                        </p>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <span className="text-xs text-gray-500">
                {new Date(popup.createdAt).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <button
                onClick={(e) => handleDelete(popup.id, e)}
                disabled={deletingId === popup.id}
                className="text-sm text-red-600 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {deletingId === popup.id ? "삭제 중..." : "삭제"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <PopupDisplay
        popup={selectedPopup}
        open={showPopup}
        onOpenChange={setShowPopup}
      />
    </>
  );
}
