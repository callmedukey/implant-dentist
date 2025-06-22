import { Metadata } from "next";

import DigitalBanner from "./components/digital-banner";
import DigitalScanner from "./components/digital-scanner";
import RealDataSection from "./components/real-data-section";

export const metadata: Metadata = {
  title: "디지털 시스템 | 조은이플란트치과",
  description:
    "정확성 높고 객관적인 디지털진단 3D CT, 디지털 분석 프로그램, 디지털 구강스캐너로 정밀한 진단과 편안한 치료를 제공합니다.",
  keywords:
    "디지털 치과, 3D CT, 디지털 구강스캐너, 디지털 진단, 정밀 진단, 디지털 치아 제작, 조은이플란트치과",
  openGraph: {
    title: "디지털 시스템 | 조은이플란트치과",
    description:
      "최첨단 디지털 장비로 정확한 데이터를 기반으로 정밀하게 진단합니다. 3D CT와 디지털 구강스캐너로 편안하고 정확한 치료를 경험하세요.",
    type: "website",
  },
};

export default function DigitalPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 space-y-16 md:space-y-20 lg:space-y-32">
        <DigitalBanner />
        <RealDataSection />
        <DigitalScanner />
      </div>
    </main>
  );
}
