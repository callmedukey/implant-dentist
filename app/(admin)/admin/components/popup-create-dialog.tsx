"use client";

import { useActionState, useState, useEffect } from "react";

import { createPopupAction } from "@/app/actions/popup/popup.action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PopupType } from "@/prisma/generated/prisma";

export default function PopupCreateDialog() {
  const [state, action, pending] = useActionState(createPopupAction, {});
  const [popupType, setPopupType] = useState<PopupType>("TEXT");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (state.success) {
      setOpen(false);
      setImagePreview(null);
      setImageDimensions(null);
      // Reset form
      const form = document.getElementById(
        "popup-create-form"
      ) as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }
  }, [state.success]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);

        // Get image dimensions
        const img = new Image();
        img.onload = () => {
          setImageDimensions({ width: img.width, height: img.height });
        };
        img.src = result;
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
      setImageDimensions(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
          새 팝업 만들기
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>팝업 생성</DialogTitle>
          <DialogDescription>
            텍스트 또는 이미지 팝업을 생성할 수 있습니다.
          </DialogDescription>
        </DialogHeader>

        <form id="popup-create-form" action={action} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              팝업 타입
            </label>
            <select
              name="type"
              value={popupType}
              onChange={(e) => setPopupType(e.target.value as PopupType)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            >
              <option value="TEXT">텍스트 팝업</option>
              <option value="IMAGE">이미지 팝업</option>
            </select>
            {state.errors?.type && (
              <p className="mt-2 text-sm text-red-600">
                {state.errors.type[0]}
              </p>
            )}
          </div>

          {popupType === "TEXT" && (
            <>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  제목
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="팝업 제목을 입력하세요"
                />
                {state.errors?.title && (
                  <p className="mt-2 text-sm text-red-600">
                    {state.errors.title[0]}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="content"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  내용
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="팝업 내용을 입력하세요"
                />
                {state.errors?.content && (
                  <p className="mt-2 text-sm text-red-600">
                    {state.errors.content[0]}
                  </p>
                )}
              </div>
            </>
          )}

          {popupType === "IMAGE" && (
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                이미지 업로드
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp"
                onChange={handleImageChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <p className="mt-1 text-sm text-gray-500">
                JPG, PNG, WebP 형식 (최대 5MB)
              </p>
              {state.errors?.image && (
                <p className="mt-2 text-sm text-red-600">
                  {state.errors.image[0]}
                </p>
              )}

              {imagePreview && (
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    미리보기
                  </p>
                  <img
                    src={imagePreview}
                    alt="팝업 이미지 미리보기"
                    className="max-w-full h-auto max-h-48 rounded-md border border-gray-300"
                  />
                  {imageDimensions && (
                    <p className="mt-2 text-sm text-gray-600">
                      크기: {imageDimensions.width} × {imageDimensions.height}px
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {state.errors?._form && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-800">{state.errors._form[0]}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {pending ? "생성 중..." : "팝업 생성"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
