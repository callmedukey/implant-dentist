import "./globals.css";
import { Metadata } from "next";
import localFont from "next/font/local";

import FixedContactBanner from "@/components/layout/fixed-contact-banner";
import FixedMenus from "@/components/layout/fixed-menus";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import PopupProviderWrapper from "@/components/popup-provider-wrapper";
import { cn } from "@/lib/utils";

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
    "양주 조은이플란트치과는 임플란트, 턱관절치료, 사랑니발치, 충치치료 등 구강외과 전문의가 제공하는 종합 치과 진료 서비스입니다. 정확한 진단과 정직한 진료로 환자분들의 소중한 치아 건강을 지켜드립니다.",
  keywords: [
    "양주조은이플란트치과",
    "양주치과",
    "양주임플란트",
    "임플란트",
    "디지털임플란트",
    "턱관절치료",
    "사랑니발치",
    "구강외과전문의",
    "충치치료",
    "자연치아살리기",
    "뼈이식",
    "구강검진",
    "치과진료",
    "양주시부흥로치과",
    "이충휘원장",
  ],
  creator: "양주조은이플란트치과",
  publisher: "양주조은이플란트치과",
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
    "google-site-verification": "6CBUj7VPZsNBrwCRfDMziOqma2Y_y3chvwupzv0Da5Y",
    "naver-site-verification": "26dc62c7747c6443193635049068b853015a9010",
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
        <PopupProviderWrapper>
          <Header />
          <main className="pt-[4rem] sm:pt-[6.25rem]">{children}</main>
          <Footer />
          <FixedMenus />
          <FixedContactBanner />
        </PopupProviderWrapper>
      </body>
    </html>
  );
}
