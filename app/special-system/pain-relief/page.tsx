import { Metadata } from "next";

import PainReliefHero from "./components/pain-relief-hero";
import PainReliefSystem from "./components/pain-relief-system";

export const metadata: Metadata = {
  title: "무통 치료 시스템 | 조은이플란트치과",
  description:
    "가글 마취, 도포 마취, 디지털 무통 마취까지. 조은이플란트치과에서는 모든 치료에 무통마취기를 사용하여 편안한 치과 치료를 제공합니다.",
  keywords:
    "무통 치료, 무통 마취, 가글 마취, 도포 마취, 디지털 무통 마취, 치과 공포증, 편안한 치과, 조은이플란트치과",
  openGraph: {
    title: "무통 치료 시스템 | 조은이플란트치과",
    description:
      "치과 치료가 무서우신가요? 조은이플란트치과의 3단계 무통 치료 시스템으로 편안한 치료를 경험하세요.",
    type: "website",
  },
};

export default function PainReliefPage() {
  return (
    <main className="min-h-screen bg-white **:break-keep">
      <PainReliefHero />
      <PainReliefSystem />
    </main>
  );
}
