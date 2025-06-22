import { Metadata } from "next";
import React from "react";

import AboutFinalSection from "./components/about-final-section";
import AccentSection from "./components/accent-section";
import BasicInfoSection from "./components/basic-info-section";
import ImageBanner from "./components/image-banner";
import ImageWithOverlayTextSection from "./components/image-with-overlay-text-section";
import TopVideoSection from "./components/top-video-section";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "병원소개",
  description:
    "조은이플란트치과 양주점은 20년 경력의 구강외과 전문의와 함께 편안하고 신뢰할 수 있는 진료환경을 제공합니다. 디지털 시스템과 무통 진료 시스템으로 안전한 치료를 약속드립니다.",
  keywords: [
    "양주 치과",
    "양주 임플란트",
    "조은이플란트치과",
    "구강외과 전문의",
    "양주시 치과의원",
    "디지털 임플란트",
    "무통 진료",
    "치과 병원 소개",
    "양주 구강외과",
    "부흥로 치과",
  ],
  openGraph: {
    title: "병원소개",
    description:
      "20년 경력의 구강외과 전문의와 함께하는 조은이플란트치과 양주점. 디지털 시스템과 무통 진료로 편안한 치료를 제공합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "조은이플란트치과",
  },
  alternates: {
    canonical: "/about",
  },
};

const page = () => {
  return (
    <div>
      <TopVideoSection />
      <AccentSection />
      <ImageWithOverlayTextSection />
      <BasicInfoSection />
      <ImageBanner />
      <AboutFinalSection />
    </div>
  );
};

export default page;
