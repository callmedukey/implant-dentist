import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import ctScanIcon from "@/public/images/digital/3d-ct-scan.svg";
import digitalCard1Bg from "@/public/images/digital/digital-card-1-bg.webp";
import digitalCard2Bg from "@/public/images/digital/digital-card-2-bg.webp";
import digitalCard3Bg from "@/public/images/digital/digital-card-3-bg.webp";
import digitalImplantMain from "@/public/images/digital/digital-implant-main.webp";
import digitalSurgeryIcon from "@/public/images/digital/digital-surgery.svg";
import surgeryRouteIcon from "@/public/images/digital/surgery-route.svg";

export const metadata: Metadata = {
  title: "디지털 임플란트 | 조은이플란트치과",
  description:
    "3D CT를 통한 정밀한 디지털 모의 수술로 빠르고 안전한 네비게이션 임플란트 시술을 제공합니다.",
  keywords:
    "디지털 임플란트, 네비게이션 임플란트, 3D CT, 디지털 모의 수술, 정밀 임플란트",
  openGraph: {
    title: "디지털 임플란트 | 조은이플란트치과",
    description:
      "3D CT를 통한 정밀한 디지털 모의 수술로 빠르고 안전한 네비게이션 임플란트 시술",
    type: "website",
  },
};

export default function DigitalImplantPage() {
  return (
    <main className="min-h-screen bg-white">
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary mt-4 mb-16">
              디지털 임플란트
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 md:mt-10"
          >
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={digitalImplantMain}
                alt="디지털 임플란트 시술 이미지"
                quality={100}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Implant Section */}
      <section className="py-20 md:py-28 overflow-x-hidden">
        <div className="mx-auto max-w-[69.375rem] px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary mb-3">
              네비게이션 임플란트
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-dark-primary max-w-5xl mx-auto px-8 leading-relaxed mt-8">
              네비게이션 임플란트는 3D CT를 통해 골조직, 신경 위치 등을 파악하여
              디지털 모의 수술을 진행한 후 빠르고 안전성 높은 수술경로를
              찾아주는 디지털 임플란트 시술방법입니다.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="block md:hidden">
            {/* Mobile Layout - Vertical Steps */}
            <div className="flex flex-col gap-12">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20">
                  <Image
                    src={ctScanIcon}
                    alt="3D CT 스캔 아이콘"
                    unoptimized
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-teal-secondary" />
                <h3 className="text-lg font-bold text-black text-center">
                  3D CT 스캔
                </h3>
              </motion.div>

              {/* Vertical Line */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[0.09375rem] h-16 bg-teal-secondary mx-auto -my-8"
              />

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20">
                  <Image
                    src={surgeryRouteIcon}
                    alt="수술 경로 파악 아이콘"
                    unoptimized
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-teal-secondary" />
                <h3 className="text-lg font-bold text-black text-center">
                  안전성 높은
                  <br />
                  수술 경로 파악
                </h3>
              </motion.div>

              {/* Vertical Line */}
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-[0.09375rem] h-16 bg-teal-secondary mx-auto -my-8"
              />

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-20 h-20">
                  <Image
                    src={digitalSurgeryIcon}
                    alt="디지털 모의 수술 아이콘"
                    unoptimized
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-teal-secondary" />
                <h3 className="text-lg font-bold text-black text-center">
                  디지털 모의 수술
                </h3>
              </motion.div>
            </div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden md:block space-y-10">
            {/* Icons Row */}
            <div className="flex flex-row justify-center items-center gap-24 md:gap-40 lg:gap-[18rem]">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-20 h-20"
              >
                <Image
                  src={ctScanIcon}
                  alt="3D CT 스캔 아이콘"
                  unoptimized
                  className="w-full h-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-20 h-20"
              >
                <Image
                  src={surgeryRouteIcon}
                  alt="수술 경로 파악 아이콘"
                  unoptimized
                  className="w-full h-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-20 h-20"
              >
                <Image
                  src={digitalSurgeryIcon}
                  alt="디지털 모의 수술 아이콘"
                  unoptimized
                  className="w-full h-full"
                />
              </motion.div>
            </div>

            {/* Line with Dots */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-screen h-[0.09375rem] bg-teal-secondary"
              />
              <div className="flex flex-row justify-center items-center gap-24 md:gap-40 lg:gap-[18rem]">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-20 h-[0.9375rem] flex justify-center items-center"
                >
                  <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-teal-secondary z-10" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: 1.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-20 h-[0.9375rem] flex justify-center items-center"
                >
                  <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-teal-secondary z-10" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.4,
                    delay: 1.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="w-20 h-[0.9375rem] flex justify-center items-center"
                >
                  <div className="w-[0.9375rem] h-[0.9375rem] rounded-full bg-teal-secondary z-10" />
                </motion.div>
              </div>
            </div>

            {/* Text Row */}
            <div className="flex flex-row justify-center items-center gap-24 md:gap-40 lg:gap-[18rem]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-20 flex justify-center"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-black text-center whitespace-nowrap">
                  3D CT 스캔
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-20 flex justify-center"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-black text-center whitespace-nowrap">
                  안전성 높은 수술 경로 파악
                </h3>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 1.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-20 flex justify-center"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-black text-center whitespace-nowrap">
                  디지털 모의 수술
                </h3>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Paradigm Section */}
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
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-base md:text-lg text-white mb-2"
            >
              CHOONEEPLANT DENTAL CLINIC
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white"
            >
              디지털 임플란트, 기존의 패러다임을 바꾸다
            </motion.h2>
          </div>
        </motion.div>

        <div className="mx-auto max-w-6xl px-4 md:px-8 lg:px-[3.5rem]">
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-6"
            >
              <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
                <Image
                  src={digitalCard1Bg}
                  alt="경험을 넘어선 치과 치료"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-4">
                <h3 className="text-xl md:text-[1.44rem] font-bold text-teal-secondary text-center">
                  경험을 넘어선 치과 치료
                </h3>
                <p className="text-base md:text-lg text-dark-primary text-center leading-relaxed">
                  조은이플란트치과는 감각이나 경험치에만 의존하지 않습니다.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-6"
            >
              <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
                <Image
                  src={digitalCard2Bg}
                  alt="데이터에 기반한 정확한 진단"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-4">
                <h3 className="text-xl md:text-[1.44rem] font-bold text-teal-secondary text-center">
                  데이터에 기반한 정확한 진단
                </h3>
                <p className="text-base md:text-lg text-dark-primary text-center leading-relaxed">
                  돌다리도 두드리듯, 정확하고 객관적인 데이터로 진단하고
                  식립합니다.
                </p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-6"
            >
              <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
                <Image
                  src={digitalCard3Bg}
                  alt="최신 장비로 설계한 임플란트"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-4 mb-24">
                <h3 className="text-xl md:text-[1.44rem] font-bold text-teal-secondary text-center">
                  최신 장비로 설계한 임플란트
                </h3>
                <p className="text-base md:text-lg text-dark-primary text-center leading-relaxed">
                  정밀한 CT와 최신 스캐너를 이용하여 파악된 정확한 환자 데이터를
                  기반으로 식립을 계획합니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
