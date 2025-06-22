import { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PopupManagement from "./components/popup-management";
import PasswordReset from "./components/password-reset";

export const metadata: Metadata = {
  title: "관리자 대시보드 | 조은이플란트치과",
  description: "조은이플란트치과 관리자 대시보드",
  robots: "noindex, nofollow",
};

export default async function AdminPage() {
  const session = await auth();
  
  if (!session || session.user.role !== "ADMIN") {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8 flex flex-col">
      <div className="mx-auto max-w-7xl w-full flex-1">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          관리자 대시보드
        </h1>
        
        <Tabs defaultValue="popup" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="popup">팝업 관리</TabsTrigger>
            <TabsTrigger value="password">비밀번호 변경</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popup" className="mt-6">
            <PopupManagement />
          </TabsContent>
          
          <TabsContent value="password" className="mt-6">
            <PasswordReset />
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="mx-auto max-w-7xl w-full mt-8 pt-8 border-t">
        <form action={async () => {
          "use server";
          const { signOut } = await import("@/auth");
          await signOut({ redirectTo: "/admin/login" });
        }}>
          <button
            type="submit"
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            로그아웃
          </button>
        </form>
      </div>
    </div>
  );
}