import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import mtaBg from "@/public/images/natural-tooth/mta-treatment-bg.webp";

export const metadata: Metadata = {
  title: "MTA 신경치료 | 조은이플란트치과",
  description:
    "생체 친화적 재료인 MTA를 이용한 최신 신경치료. 우수한 밀폐력과 조직 재생 능력으로 치아 보존률을 높입니다.",
  keywords: "MTA 신경치료, 신경치료, 치근단 수술, 생체친화적 치료, 치아보존",
  openGraph: {
    title: "MTA 신경치료 | 조은이플란트치과",
    description: "최신 MTA 기술로 치아 보존률을 높이는 신경치료",
    type: "website",
  },
};

export default function MTAPage() {
  return (
    <main className="min-h-screen bg-white **:break-keep">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-[69.375rem] px-4">
          <div className="flex flex-col gap-12 md:gap-16">
            {/* Title and Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <p className="text-base md:text-lg text-dark-primary/50">
                  CHOONEEPLANT DENTAL CLINIC
                </p>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary">
                  MTA 신경치료란?
                </h1>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-dark-primary">
                신경을 제거하고 생체 친화적 재료인 MTA로 채워넣는 술식을 MTA
                신경치료라고 합니다.
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full h-[25rem] md:h-[30rem] lg:h-[39.4375rem] rounded-lg overflow-hidden"
            >
              <Image
                src={mtaBg}
                alt="MTA 신경치료"
                fill
                quality={100}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* MTA Information Section */}
      <section className="py-16 md:py-20 bg-[#97B6BB]">
        <div className="mx-auto max-w-[90rem] px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-2"
          >
            <p className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white">
              조은이플란트치과는 신경치료 및 치근단 수술 시
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="inline-block bg-white text-[#97B6BB] font-bold text-2xl md:text-3xl lg:text-[2.074rem] px-4 py-1 rounded">
                MTA(Mineral Trioxide Aggregate)
              </span>
              <span className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white">
                를 적용합니다.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl font-bold text-dark-primary text-center px-6 md:px-12"
          >
            <span className="text-teal-secondary font-bold">
              우수한 밀폐력과 조직 재생 능력
            </span>{" "}
            을 갖춘 MTA는 치아 보존률을 높이고 예후를 개선하는{" "}
            <span className="text-teal-secondary font-bold">
              최신 치료 방식
            </span>
            입니다.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
