import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// Import images for special implant main

import bioOssFeature from "@/public/images/bone-graft/bio-oss-feature.webp";
import bioOssProduct from "@/public/images/bone-graft/bio-oss-product.webp";
import ctScanIcon from "@/public/images/digital/3d-ct-scan.svg";
import digitalCard1Bg from "@/public/images/digital/digital-card-1-bg.webp";
import digitalCard2Bg from "@/public/images/digital/digital-card-2-bg.webp";
import digitalCard3Bg from "@/public/images/digital/digital-card-3-bg.webp";
import digitalImplantMain from "@/public/images/digital/digital-implant-main.webp";
import digitalSurgeryIcon from "@/public/images/digital/digital-surgery.svg";
import surgeryRouteIcon from "@/public/images/digital/surgery-route.svg";
import specialCard1Bg from "@/public/images/services/implant-bg.webp";
import toothIcon from "@/public/images/special-implant/insurance-tooth-icon.webp";
import specialCard2Bg from "@/public/images/special-implant/special-card-2-bg.webp";
import specialCard3Bg from "@/public/images/special-implant/special-card-3-bg.webp";
import specialCard4Bg from "@/public/images/special-implant/special-card-4-bg.webp";
import specialCareBg from "@/public/images/special-implant/special-care-bg.webp";

export const metadata: Metadata = {
  title: "특별한 임플란트 | 조은이플란트치과",
  description:
    "고난이도 케이스일수록 강한 임플란트, 조은이플란트치과가 보여드립니다. 명품 뼈이식재, 디지털 임플란트, 보험 임플란트까지 특별한 치료를 경험하세요.",
  keywords:
    "고난이도 임플란트, 특별한 임플란트, 바이오오스, 디지털 임플란트, 보험 임플란트, 조은이플란트치과",
  openGraph: {
    title: "특별한 임플란트 | 조은이플란트치과",
    description:
      "고난이도 케이스일수록 강한 임플란트, 20년 경력의 전문의가 제공하는 특별한 치료를 경험하세요.",
    type: "website",
  },
};

export default function SpecialImplantPage() {
  return (
    <main>
      {/* 특별한 임플란트 Section - EXACT COPY FROM special-implant/page.tsx */}
      <section
        id="special-implant"
        className="scroll-mt-[6.25rem] pt-8 pb-0 md:pt-0 md:pb-0"
      >
        <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 **:break-keep">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary uppercase"
            >
              CHOONEEPLANT DENTAL CLINIC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary"
            >
              조은이플란트의 특별함
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary mt-1"
            >
              고난이도 케이스일수록 강한 임플란트,
              <br />
              조은이플란트치과가 보여드립니다.
            </motion.p>
          </motion.section>

          {/* Special Features Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-12 md:gap-16 lg:gap-20 mt-12 md:mt-16 lg:mt-20 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
          >
            {/* Card 1 - 치과 전문의 직접 수술 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-6 rounded-lg overflow-hidden"
            >
              {/* Background Image */}
              <div className="relative w-full lg:w-1/2 h-[20rem] md:h-[24rem] lg:h-[23.75rem] rounded-lg overflow-hidden order-2 lg:order-1">
                <Image
                  src={specialCard1Bg}
                  alt="치과 전문의 진료 모습"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 px-0 lg:px-4 w-full lg:w-1/2 order-1 lg:order-2">
                <div className="flex items-center gap-4">
                  <span className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
                    01
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-dark-primary">
                    치과 전문의 직접 수술
                  </h3>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <p className="text-base lg:text-lg text-dark-primary leading-relaxed">
                    조은이플란트치과의 전문의가 만족스러운 결과를 받아볼 수
                    있도록{" "}
                    <span className="font-bold text-teal-secondary">
                      직접 꼼꼼하게 진료와 수술
                    </span>
                    을 하고있습니다
                  </p>

                  <Link
                    href="/about#doctors"
                    className="inline-flex items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors w-fit mt-4 lg:mt-6"
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
                </div>
              </div>
            </motion.div>

            {/* Card 2 - 첨단 디지털 장비와 기술력 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-6 rounded-lg overflow-hidden"
            >
              {/* Content */}
              <div className="flex flex-col gap-4 px-0 lg:px-4 w-full lg:w-1/2">
                <div className="flex items-center gap-4">
                  <span className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
                    02
                  </span>
                  <h3 className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-dark-primary">
                    첨단 디지털 장비와 기술력
                  </h3>
                </div>

                <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed mt-2">
                  장비에 진심인 조은이플란트는 빠르게 변해가는 임플란트 트렌드를
                  항상 익히고,{" "}
                  <span className="font-bold text-teal-secondary">
                    원내 디지털 장비를 주기적으로
                  </span>
                  <br className="hidden lg:block" />
                  <span className="font-bold text-teal-secondary">
                    최신으로 업그레이드
                  </span>
                  하며 빠르고 정밀한 진료가 이루어질 수 있는 환경을 마련하고
                  있습니다.
                </p>
              </div>

              {/* Background Image */}
              <div className="relative w-full lg:w-1/2 h-[20rem] md:h-[24rem] lg:h-[23.75rem] rounded-lg overflow-hidden">
                <Image
                  src={specialCard2Bg}
                  alt="첨단 디지털 장비"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.section>

          {/* Additional Features Section - Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[1.625rem] mt-12 md:mt-16 lg:mt-20 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full">
            {/* Card 3 - Left Column */}
            <div className="flex flex-col gap-4">
              {/* Header with colored background */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-teal-secondary rounded-lg p-6 md:p-8 lg:p-10 flex flex-col items-center"
              >
                <div className="flex items-center gap-4 flex-col">
                  <div className="bg-white rounded-full px-4 py-3">
                    <span className="text-xl md:text-2xl font-bold text-teal-secondary">
                      03
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    임상적 예후가 검증된 정품만 사용
                  </h3>
                </div>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full h-[20rem] lg:h-[23.75rem] rounded-lg overflow-hidden"
              >
                <Image
                  src={specialCard3Bg}
                  alt="정품 재료 사용"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="px-0 lg:px-9"
              >
                <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed">
                  조은이플란트치과는 임상적 예후가 검증된{" "}
                  <span className="font-bold text-teal-secondary">
                    100% <br /> 정품
                  </span>{" "}
                  재료만을 사용하며, 정품 보증서를 지급 합니다.
                </p>
              </motion.div>
            </div>

            {/* Card 4 - Right Column */}
            <div className="flex flex-col gap-4">
              {/* Image at top */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full h-[20rem] lg:h-[21.75rem] rounded-lg overflow-hidden"
              >
                <Image
                  src={specialCard4Bg}
                  alt="고난도 수술"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </motion.div>

              {/* Header below image */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-teal-bg rounded-lg p-6 md:p-8 lg:p-10 flex flex-col items-center"
              >
                <div className="flex items-center gap-4 flex-col">
                  <div className="bg-white rounded-full px-4 py-3">
                    <span className="text-xl md:text-2xl font-bold text-teal-secondary">
                      04
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-teal-secondary">
                    고난도 수술 및 재수술
                  </h3>
                </div>
              </motion.div>

              {/* Text at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="px-6 lg:px-8"
              >
                <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed">
                  조은이플란트치과는{" "}
                  <span className="font-bold text-teal-secondary">
                    고난이도 케이스에 강합니다.
                  </span>
                </p>
                <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed">
                  풍부한 경험과 수많은 임상 증례로 고난도를 요하는 진료도 정확성
                  높게 치료가 가능합니다.
                </p>
              </motion.div>
            </div>
          </section>

          {/* After Care Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6 mt-12 md:mt-16 lg:mt-20 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full h-[25rem] md:h-[30rem] lg:h-[35rem] rounded-lg overflow-hidden"
            >
              <Image
                src={specialCareBg}
                alt="사후관리케어"
                fill
                quality={100}
                className="object-cover"
              />
            </motion.div>

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <span className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
                05
              </span>
              <h3 className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-dark-primary">
                사후관리케어
              </h3>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-2 text-center px-0 md:px-8 pb-6 md:pb-8 lg:pb-12"
            >
              <p className="text-sm md:text-base lg:text-lg text-teal-secondary font-bold leading-relaxed">
                치과 치료는 끝이 아니라, 관리의 시작입니다.
              </p>
              <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed">
                조은이플란트치과는 식립한 임플란트를 오랫동안 잘 사용하실 수
                있도록 꼼꼼하게 케어해드립니다.
              </p>
            </motion.div>
          </motion.section>
        </div>
      </section>

      {/* 명품 뼈이식 Section - EXACT COPY FROM bone-graft/page.tsx */}
      <section
        id="bone-graft"
        className="scroll-mt-[6.25rem] pt-8 pb-0 md:pt-0 md:pb-0"
      >
        <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 **:break-keep">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
          >
            {/* Header Section */}
            <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-12 text-center">
              {/* Title Group */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-2"
              >
                <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary opacity-50 uppercase">
                  CHOONEEPLANT DENTAL CLINIC
                </p>
                <h1 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary mt-2">
                  스위스 명품 뼈이식재 바이오오스
                </h1>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg md:text-xl lg:text-[1.44rem] text-black max-w-[45.5rem]"
              >
                일반 치과에서는 찾아보기 어렵고,
                <br />
                대학병원에서만 사용한다는 {"바이오오스"}를 들어보셨나요?
              </motion.p>
            </div>

            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[33.6875rem] h-[20rem] md:h-[28rem] lg:h-[33.6875rem] mx-auto"
            >
              <Image
                src={bioOssProduct}
                alt="바이오오스 제품"
                fill
                quality={100}
                className="object-contain"
              />
            </motion.div>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-dark-primary text-center leading-relaxed"
            >
              양주 조은이플란트치과는 스위스 기업 가이스트리히사의
              <br />
              잇몸뼈 이식재 바이오오스(Bio-Oss)를 사용합니다
            </motion.p>
          </motion.section>

          {/* Full Width Banner */}
          <section className="w-full bg-teal-secondary mt-12 md:mt-16 lg:mt-20 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="py-8 md:py-10 lg:py-8 px-4 md:px-8 lg:px-[3.5rem]"
            >
              <div className="flex flex-col items-center justify-center gap-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  className="bg-white rounded px-4 py-0"
                >
                  <span className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
                    잇몸뼈 이식
                  </span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 30, letterSpacing: "-0.05em" }}
                  whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-white text-center"
                >
                  임플란트 전에 꼭 확인하세요!
                </motion.h2>
              </div>
            </motion.div>
          </section>

          {/* Bio-Oss Features Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full mt-12 md:mt-16 lg:mt-20"
          >
            {/* Feature Row */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[1.875rem] w-full">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 0.95 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full lg:w-[33.75rem] h-[20rem] md:h-[24rem] lg:h-[23.75rem] rounded-lg overflow-hidden order-2 lg:order-1"
              >
                <Image
                  src={bioOssFeature}
                  alt="바이오오스 특징"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-4 w-full max-w-[35rem] px-0 lg:px-2 order-1 lg:order-2"
              >
                <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary">
                  왜 바이오오스를 선택해야 할까요?
                </h2>
                <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary leading-relaxed">
                  바이오오스는 뛰어난 생체 적합성을 바탕으로 임플란트가 뼈에{" "}
                  <span className="font-bold text-teal-secondary">
                    자연스럽게 결합되도록{" "}
                  </span>
                  도와주며,{" "}
                  <span className="font-bold text-teal-secondary">
                    시술 후 빠른 회복
                  </span>
                  을 촉진합니다.
                </p>
              </motion.div>
            </div>

            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="px-0 md:px-12 lg:px-[4.8rem]"
            >
              <p className="text-xl md:text-2xl font-bold text-dark-primary text-center leading-relaxed max-w-xl">
                조은이플란트는 항상 최고의 시술 방식을 고민하며,{" "}
                <span className="font-bold text-teal-secondary">
                  최적의 치료 결과
                </span>
                와{" "}
                <span className="font-bold text-teal-secondary">빠른 회복</span>
                을 제공합니다.
              </p>
            </motion.div>
          </motion.section>
        </div>
      </section>

      {/* 디지털 임플란트 Section - EXACT COPY FROM digital/page.tsx */}
      <section
        id="digital"
        className="scroll-mt-[6.25rem] min-h-screen bg-white pt-8 pb-0 md:pt-0 md:pb-0"
      >
        {/* Hero Section */}
        <section className="pt-20 pb-16 md:pt-24 md:pb-20">
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
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary mt-4 mb-12">
                디지털 임플란트
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
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
        <section className="py-16 md:py-20 overflow-x-hidden">
          <div className="mx-auto max-w-[69.375rem] px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-8 md:mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary mb-3">
                네비게이션 임플란트
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-dark-primary max-w-5xl mx-auto px-8 leading-relaxed mt-4">
                네비게이션 임플란트는 3D CT를 통해 골조직, 신경 위치 등을
                파악하여 디지털 모의 수술을 진행한 후 빠르고 안전성 높은
                수술경로를 찾아주는 디지털 임플란트 시술방법입니다.
              </p>
            </motion.div>

            {/* Process Steps */}
            <div className="block md:hidden">
              {/* Mobile Layout - Vertical Steps */}
              <div className="flex flex-col gap-6">
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
                  className="w-[0.09375rem] h-12 bg-teal-secondary mx-auto -my-6"
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
                  className="w-[0.09375rem] h-12 bg-teal-secondary mx-auto -my-6"
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
        <section className="py-16 md:py-20">
          {/* Full Width Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-teal-secondary w-full mb-12 md:mb-16"
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
                className="flex flex-col gap-4"
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
                className="flex flex-col gap-4"
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
                className="flex flex-col gap-4"
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
                <div className="flex flex-col gap-2 px-4 mb-12">
                  <h3 className="text-xl md:text-[1.44rem] font-bold text-teal-secondary text-center">
                    최신 장비로 설계한 임플란트
                  </h3>
                  <p className="text-base md:text-lg text-dark-primary text-center leading-relaxed">
                    정밀한 CT와 최신 스캐너를 이용하여 파악된 정확한 환자
                    데이터를 기반으로 식립을 계획합니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </section>

      {/* 보험 임플란트 Section - EXACT COPY FROM insurance/page.tsx */}
      <section
        id="insurance"
        className="scroll-mt-[6.25rem] pt-8 pb-0 md:pt-0 md:pb-0"
      >
        <div className="flex flex-col items-center py-12 md:py-16 lg:py-20 **:break-keep">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2 px-4 md:px-8 lg:px-[3.5rem] max-w-[69.375rem] mx-auto w-full text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary uppercase leading-[1.6]"
            >
              CHOONEEPLANT DENTAL CLINIC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-3xl md:text-4xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6]"
            >
              보험 임플란트
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6] mt-2"
            >
              65세 이상 환자분들의 건강한 노후를 함께합니다
            </motion.p>
          </motion.section>

          {/* Benefits Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 mt-12 md:mt-16 lg:mt-20 w-full"
          >
            {/* Age Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-teal-secondary rounded-full w-[12rem] h-[12rem] md:w-[14rem] md:h-[14rem] lg:w-[16rem] lg:h-[16rem] flex items-center justify-center"
            >
              <span className="text-3xl md:text-4xl lg:text-[2.489rem] font-bold text-white">
                65세 이상
              </span>
            </motion.div>

            {/* Benefits Card Container */}
            <div className="w-full relative">
              {/* Header Badge - Full Width */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="bg-teal-secondary py-4 flex items-center justify-center w-full"
              >
                <span className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-white">
                  혜택 조건
                </span>
              </motion.div>

              {/* Card Content */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-wrap justify-center items-center gap-2 pt-12 px-4 md:px-8 lg:px-[3.5rem]"
              >
                <div className="flex flex-col items-center gap-6">
                  {/* Tooth Icon */}
                  <div className="relative w-[6.25rem] h-[6.25rem] rounded-lg overflow-hidden">
                    <Image
                      src={toothIcon}
                      alt="치아 아이콘"
                      fill
                      quality={100}
                      className="object-cover"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col gap-2 w-full max-w-[19.063rem]">
                    <h3 className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-dark-primary text-center leading-[1.6]">
                      임플란트
                    </h3>
                    <div className="flex flex-col gap-1 text-center">
                      <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary leading-[1.6]">
                        평생 2개까지,
                      </p>
                      <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary leading-[1.6]">
                        치아가 남아있는 상태
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Health Insurance Information Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 md:gap-8 lg:gap-8 mt-12 md:mt-16 lg:mt-20 px-4 md:px-8 lg:px-[3.5rem] max-w-[69.375rem] mx-auto w-full mb-12"
          >
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border-b border-dark-primary pb-2"
            >
              <h2 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary">
                임플란트 건강보험 안내
              </h2>
            </motion.div>

            {/* Info Cards Container */}
            <div className="flex flex-col gap-0">
              {/* 적용 대상 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col md:flex-row items-start"
              >
                <div className="flex items-center gap-2 p-6 w-full md:w-[15.938rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full px-4 py-1 w-[12rem] flex items-center justify-center">
                    <span className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
                      적용 대상
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-0 md:pt-6 flex-1">
                  <p className="text-lg text-dark-primary">
                    만 65세 이상 치아의 일부가 없는 대한민국 국민
                  </p>
                </div>
              </motion.div>

              {/* 적용 부위 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col md:flex-row items-start"
              >
                <div className="flex items-center gap-2 p-6 w-full md:w-[15.938rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full px-4 py-1 w-[12rem] flex items-center justify-center">
                    <span className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
                      적용 부위
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-0 md:pt-6 flex-1">
                  <p className="text-lg text-dark-primary leading-[1.6]">
                    1인 평생 2개로 아랫니, 윗니 구분 없이 어금니와 앞니 모두
                    적용 가능합니다.
                    <br />
                    <span className="text-[#EA0C09] font-bold">
                      (1인당 평생 2개까지 적용되며, 뼈이식 비용은 보험 적용이
                      불가합니다.)
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* 본인부담률 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col md:flex-row items-start"
              >
                <div className="flex items-center gap-2 p-6 w-full md:w-[15.938rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full px-4 py-1 w-[12rem] flex items-center justify-center">
                    <span className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
                      본인부담률
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-0 md:pt-6 flex-1">
                  <p className="text-lg text-dark-primary">
                    치료비 본인부담금 30%
                  </p>
                </div>
              </motion.div>

              {/* 기타 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col md:flex-row items-start"
              >
                <div className="flex items-center gap-2 p-6 w-full md:w-[15.938rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full px-4 py-1 w-[12rem] flex items-center justify-center">
                    <span className="text-lg md:text-xl font-bold text-white whitespace-nowrap">
                      기타
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-0 md:pt-6 flex-1">
                  <div className="flex flex-col gap-4">
                    <p className="text-lg text-dark-primary leading-[1.6]">
                      치아 1개도 없는 무치악의 경우, 전체 임플란트를 해야 하는
                      비용 부담이 크기 때문에 대상에서 제외됩니다. 단, 무치악은
                      틀니 건강보험을 적용받을 수 있습니다.
                    </p>
                    <p className="text-lg text-dark-primary leading-[1.6]">
                      건강보험 틀니 및 임플란트는 반드시 치과 병·의원에서 사전에
                      등록 후 시술하여야 하며 신경치료, 스케일링, 잇몸치료, 잇몸
                      수술 등이 건강보험 적용 되는 치과의 진료 과목입니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
