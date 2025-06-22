import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import ctaBg from "@/public/images/jaw-treatment/jaw-treatment-cta-bg.webp";
import equipmentBg from "@/public/images/jaw-treatment/jaw-treatment-equipment-bg.webp";

export const metadata: Metadata = {
  title: "턱관절 치료 장비 | 조은이플란트치과",
  description:
    "턱관절 장애 치료를 위한 최신 물리치료 장비. 열, 전기자극 등 물리적 자극을 통해 근경련과 통증을 효과적으로 완화합니다.",
  keywords:
    "턱관절 치료 장비, 물리치료 장비, 턱관절 물리치료, TMJ 치료기, 전기자극 치료",
  openGraph: {
    title: "턱관절 치료 장비 | 조은이플란트치과",
    description: "최신 물리치료 장비로 턱관절 장애를 효과적으로 치료합니다",
    type: "website",
  },
};

export default function JawTreatmentEquipmentPage() {
  return (
    <main className="min-h-screen bg-white **:break-keep">
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-[69.375rem] px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="mb-2 text-base md:text-lg text-dark-primary/50">
              CHOONEEPLANT DENTAL CLINIC
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary mt-4 mb-6">
              턱관절 치료
            </h1>
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto mt-12 space-y-8"
          >
            <p className="text-base md:text-lg lg:text-xl text-dark-primary text-center">
              턱관절 장애의 치료에는 약물치료, 장치치료, 물리치료, 수술적 치료
              등 다양한 접근이 있습니다.
            </p>
            <p className="text-base md:text-lg lg:text-xl text-dark-primary text-center">
              이 중 물리치료는 열, 전기자극 등{" "}
              <span className="text-teal-secondary font-bold">
                물리적 자극 을 통해 손상된 조직의 회복을 촉진하고,{" "}
              </span>
              근경련 및 관절의 경직, 통증을 효과적으로 완화하는 치료법으로 널리
              사용됩니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Equipment Showcase Section */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-[69.375rem] px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-full rounded-lg overflow-hidden"
          >
            <Image
              src={equipmentBg}
              alt="턱관절 치료 장비"
              quality={100}
              className="w-full h-auto"
              style={{ maxHeight: "600px", objectFit: "contain" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Treatment Methods Section */}
      <section className="py-16 md:py-20 bg-teal-secondary">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-2"
          >
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white">
              조은이플란트치과는 중주파 물리치료기를 포함한 턱관절 전문 장비를
              도입하여,
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
              <span className="inline-block bg-white text-teal-secondary font-bold text-lg md:text-xl lg:text-2xl px-4 py-1 rounded">
                저출력 레이저 자극 요법(Low-Level Laser Therapy, LLLT)
              </span>
              <span className="text-lg md:text-xl lg:text-2xl font-bold text-white">
                과
              </span>
              <span className="inline-block bg-white text-[#97B6BB] font-bold text-lg md:text-xl lg:text-2xl px-4 py-1 rounded">
                저주파 전기자극 요법 (TENS therapy)
              </span>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-white pt-2">
              등 다양한 비수술적 치료를 시행하고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 md:pb-28 mt-20 md:mt-24 lg:mt-[8.125rem]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex flex-col lg:flex-row items-stretch"
        >
          {/* Image - 50% */}
          <div className="relative w-full lg:w-1/2 h-[20rem] md:h-[25rem] lg:h-[30.3125rem]">
            <Image
              src={ctaBg}
              alt="턱관절 치료 상담"
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          {/* Text Content - 50% */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-12 lg:px-16 py-12 lg:py-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="space-y-6 lg:space-y-8"
            >
              <h3 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary">
                턱의 불편함과 통증으로
                <br className="hidden sm:block" />
                일상생활이 어려우셨다면ㅡ
              </h3>
              <p className="text-lg md:text-xl lg:text-2xl text-dark-primary max-w-2xl">
                <span className="text-teal-secondary font-bold">
                  전문 장비와 체계적인 진료
                </span>
                가 이루어지는 조은이플란트 치과에서 턱관절 물리치료를 받아보시기
                바랍니다.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
