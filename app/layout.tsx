import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import FixedContactBanner from "@/components/layout/fixed-contact-banner";
import PopupProvider from "@/components/popup-provider";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import FixedMenus from "@/components/layout/fixed-menus";

const Pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  style: "normal",
});

export const metadata: Metadata = {
  title: {
    template: "%s | 조은이플란트치과",
    default: "조은이플란트치과 - 언제 어디서나, 같은 마음으로 진료합니다",
  },
  description:
    "글림케어는 매트리스, 소파, 에어컨 청소부터 입주 청소까지 제공하는 전문 청소 서비스입니다. 집과 사무실을 새롭게 만들어드리며, 합리적인 가격으로 최상의 만족을 경험하세요.",
  keywords: [
    "글림케어",
    "전문 청소",
    "청소 서비스",
    "홈클리닝",
    "사무실 청소",
    "매트리스 청소",
    "소파 청소",
    "에어컨 청소",
    "입주 청소",
    "이사 청소",
    "에어컨 분해 청소",
    "시스템 에어컨 청소",
    "패브릭 소파 청소",
    "청소 교육",
    "청소 창업",
  ],
  creator: "글림케어 팀",
  publisher: "글림케어",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "naver-site-verification": "e188b72fc98bbdc1c86a82729e7dae5f499a770f",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={cn(`${Pretendard.variable} antialiased`)}>
        <PopupProvider>
          <Header />
          <main className="pt-[4rem] sm:pt-[6.25rem]">{children}</main>
          <Footer />
          <FixedContactBanner />
          <FixedMenus />
        </PopupProvider>
      </body>
    </html>
  );
}
