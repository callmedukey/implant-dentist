import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import highDifficultyBg from "@/public/images/wisdom-tooth/high-difficulty-wisdom-tooth.webp";
import nerveLineBg from "@/public/images/wisdom-tooth/nerve-line-wisdom-tooth.webp";
import specialistIcon from "@/public/images/wisdom-tooth/surgeon-association.webp";

export const metadata: Metadata = {
  title: "사랑니 발치 | 조은이플란트치과",
  description:
    "구강악안면외과 전문의가 진행하는 안전한 사랑니 발치. 대학병원 수준의 전문적인 진료를 제공합니다.",
  keywords:
    "사랑니 발치, 구강악안면외과, 전문의 사랑니, 사랑니 수술, 매복 사랑니",
  openGraph: {
    title: "사랑니 발치 | 조은이플란트치과",
    description:
      "구강악안면외과 전문의가 진행하는 안전한 사랑니 발치. 대학병원 수준의 전문적인 진료",
    type: "website",
  },
};

export default function WisdomToothPage() {
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
              구강악안면외과 전문의 사랑니 발치
            </h1>
            <p className="text-xl md:text-2xl text-dark-primary">
              사랑니 발치, 더 이상 대학병원 가실 필요 없습니다!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialist Section */}
      <section className="pb-20 md:py-28">
        <div className="mx-auto max-w-[69.375rem] px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-secondary">
              조은이플란트치과에서는 구강악안면외과 전문의가 직접 발치합니다
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[20.7rem] h-[20.7rem] md:w-[27.6rem] md:h-[27.6rem] lg:w-[34.5rem] lg:h-[34.5rem] mx-auto"
          >
            <Image
              src={specialistIcon}
              alt="구강악안면외과 전문의 아이콘"
              width={552}
              height={552}
              className="w-full h-full object-contain"
              quality={100}
            />

            <Link
              href="/medical-staff"
              className="mx-auto flex w-fit sm:absolute -right-24 bottom-20 sm:inline-flex items-center gap-4 bg-teal-secondary hover:bg-teal-secondary/90 text-white px-6 py-1 rounded-full transition-colors duration-200"
            >
              <span className="text-base">전문의 보기</span>
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4H9M9 4L6 1M9 4L6 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl lg:text-2xl text-dark-primary text-center max-w-5xl mx-auto break-keep mt-16 lg:mt-0"
          >
            조은이플란트치과는 매복 사랑니 발치 수술의 경험이 풍부한
            구강악안면외과 전문의가
            <br className="hidden lg:block" />{" "}
            <span className="font-bold text-teal-secondary">
              신경과 인접한 고난도 사랑니까지
            </span>{" "}
            직접 진료 및 수술합니다.
          </motion.p>
        </div>
      </section>

      {/* Safe & Reliable Section */}
      <section className="py-20 md:py-28">
        {/* Full Width Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-teal-secondary w-full mb-16 md:mb-20"
        >
          <div className="p-8 md:p-10 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white"
            >
              안전하고 믿을 수 있는 사랑니 발치
            </motion.h2>
          </div>
        </motion.div>

        <div className="mx-auto max-w-[69.375rem] px-4">
          {/* Cards Container */}
          <div className="flex flex-col gap-8 md:gap-10">
            {/* Card 1 - High Difficulty */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-lg overflow-hidden md:overflow-visible md:flex md:items-center md:w-full"
            >
              {/* Mobile Layout - Overlay Style */}
              <div className="relative w-full h-[23.75rem] md:hidden">
                <Image
                  src={highDifficultyBg}
                  alt="고난도 사랑니 발치"
                  fill
                  quality={100}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    고난도 사랑니 발치
                  </h3>
                  <p className="text-base font-bold">
                    수많은 고난도 케이스와 다양한 사랑니 발치 경험을 보유한
                    전문가가 직접 시술합니다.
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden md:block md:w-1/2 md:h-[23.75rem] relative md:rounded-lg overflow-hidden">
                <Image
                  src={highDifficultyBg}
                  alt="고난도 사랑니 발치"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="hidden md:block md:w-1/2 md:p-12">
                <h3 className="text-[2.074rem] font-bold mb-4 text-dark-primary">
                  고난도 사랑니 발치
                </h3>
                <p className="text-lg lg:text-xl text-dark-primary">
                  수많은 고난도 케이스와 다양한 사랑니 발치 경험을 보유한
                  전문가가 직접 시술합니다.
                </p>
              </div>
            </motion.div>

            {/* Card 2 - Nerve Line */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-lg overflow-hidden md:overflow-visible md:flex md:items-center md:w-full"
            >
              {/* Mobile Layout - Overlay Style */}
              <div className="relative w-full h-[23.75rem] md:hidden">
                <Image
                  src={nerveLineBg}
                  alt="신경선까지 고려한 발치"
                  fill
                  quality={100}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    신경선까지 고려한 발치
                  </h3>
                  <p className="text-base font-bold">
                    디지털 정밀 진단을 통해 신경선까지 정확히 분석하여 안전한
                    사랑니 발치가 가능합니다.
                  </p>
                </div>
              </div>

              {/* Desktop Layout - Side by Side */}
              <div className="hidden md:block md:w-1/2 md:h-[23.75rem] relative md:rounded-lg overflow-hidden">
                <Image
                  src={nerveLineBg}
                  alt="신경선까지 고려한 발치"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="hidden md:block md:w-1/2 md:p-12">
                <h3 className="text-[2.074rem] font-bold mb-4 text-dark-primary">
                  신경선까지 고려한 발치
                </h3>
                <p className="text-lg lg:text-xl text-dark-primary">
                  디지털 정밀 진단을 통해 신경선까지 정확히 분석하여 안전한
                  사랑니 발치가 가능합니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
