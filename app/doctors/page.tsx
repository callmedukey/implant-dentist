import React from "react";
import { Metadata } from "next";
import DoctorsHeadingSection from "./components/doctors-heading-section";
import DoctorsIntroSection from "./components/doctors-intro-section";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "전문의 소개",
  description:
    "조은이플란트치과는 보건복지부 인증 전문의로 구성된 치과입니다. 통합치의학과 전문의와 구강악안면외과 전문의가 풍부한 경험과 전문 지식으로 안전한 진료를 제공합니다.",
  keywords: [
    "양주 치과 전문의",
    "구강악안면외과 전문의",
    "통합치의학과 전문의",
    "보건복지부 인증 전문의",
    "양주 임플란트 전문의",
    "치과 전문의 소개",
    "이충휘 원장",
    "조승원 원장",
    "이종원 원장",
    "양주 치과 의료진",
    "한림대학교 성심병원",
    "고려대학교 임상치의학대학원",
  ],
  openGraph: {
    title: "전문의 소개 | 조은이플란트치과",
    description:
      "보건복지부 인증 전문의로 구성된 조은이플란트치과. 통합치의학과, 구강악안면외과 전문의가 함께하는 신뢰할 수 있는 치과입니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "조은이플란트치과",
  },
  alternates: {
    canonical: "/doctors",
  },
};

const page = () => {
  return (
    <div>
      <DoctorsHeadingSection />
      <DoctorsIntroSection />
    </div>
  );
};

export default page;
