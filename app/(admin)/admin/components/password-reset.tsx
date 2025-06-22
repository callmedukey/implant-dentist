"use client";

import { useActionState, useEffect } from "react";

import { resetPasswordAction } from "@/app/actions/admin/password.action";

export default function PasswordReset() {
  const [state, action, pending] = useActionState(resetPasswordAction, {});

  useEffect(() => {
    if (state.success) {
      // Clear form on success
      const form = document.getElementById(
        "password-reset-form"
      ) as HTMLFormElement;
      if (form) {
        form.reset();
      }
    }
  }, [state.success]);

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          비밀번호 변경
        </h2>

        <form id="password-reset-form" action={action} className="space-y-6">
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              현재 비밀번호
            </label>
            <input
              id="currentPassword"
              name="currentPassword"
              type="password"
              autoComplete="current-password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            {state.errors?.currentPassword && (
              <p className="mt-2 text-sm text-red-600">
                {state.errors.currentPassword[0]}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              새 비밀번호
            </label>
            <input
              id="newPassword"
              name="newPassword"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            <p className="mt-1 text-sm text-gray-500">
              8-16자, 영문자와 숫자 포함
            </p>
            {state.errors?.newPassword && (
              <p className="mt-2 text-sm text-red-600">
                {state.errors.newPassword[0]}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              새 비밀번호 확인
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
            {state.errors?.confirmPassword && (
              <p className="mt-2 text-sm text-red-600">
                {state.errors.confirmPassword[0]}
              </p>
            )}
          </div>

          {state.errors?._form && (
            <div className="rounded-md bg-red-50 p-4">
              <p className="text-sm text-red-800">{state.errors._form[0]}</p>
            </div>
          )}

          {state.success && (
            <div className="rounded-md bg-green-50 p-4">
              <p className="text-sm text-green-800">
                비밀번호가 성공적으로 변경되었습니다.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {pending ? "변경 중..." : "비밀번호 변경"}
          </button>
        </form>
      </div>
    </div>
  );
}
