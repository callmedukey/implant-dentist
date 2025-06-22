import { Metadata } from "next";

import LoginForm from "./components/login-form";

export const metadata: Metadata = {
  title: "관리자 로그인 | 조은이플란트치과",
  description: "조은이플란트치과 관리자 로그인 페이지",
  robots: "noindex, nofollow",
};

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            관리자 로그인
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            관리자 계정으로 로그인하세요
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
