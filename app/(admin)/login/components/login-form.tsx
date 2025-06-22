"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

import { loginAction } from "@/app/actions/login/login.action";

export default function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, {});
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.push("/admin");
    }
  }, [state.success, router]);

  return (
    <form
      action={action}
      className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8"
    >
      <div className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            이메일
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="admin@example.com"
          />
          {state.errors?.email && (
            <p className="mt-2 text-sm text-red-600">{state.errors.email[0]}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            비밀번호
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="••••••••"
          />
          {state.errors?.password && (
            <p className="mt-2 text-sm text-red-600">
              {state.errors.password[0]}
            </p>
          )}
        </div>

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
          {pending ? "로그인 중..." : "로그인"}
        </button>
      </div>
    </form>
  );
}
