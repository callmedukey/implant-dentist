import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

// Import images from apicectomy page
import apicectomyInfoBg from "@/public/images/natural-tooth/apicectomy-info-bg.webp";
import apicectomyStep1 from "@/public/images/natural-tooth/apicectomy-step1.webp";
import apicectomyStep2 from "@/public/images/natural-tooth/apicectomy-step2.webp";
import apicectomyStep3 from "@/public/images/natural-tooth/apicectomy-step3.webp";
import apicectomyStep4 from "@/public/images/natural-tooth/apicectomy-step4.webp";
import gumStage1 from "@/public/images/natural-tooth/gum-stage-1.webp";
import gumStage2 from "@/public/images/natural-tooth/gum-stage-2.webp";
import gumStage3 from "@/public/images/natural-tooth/gum-stage-3.webp";
import gumStage4 from "@/public/images/natural-tooth/gum-stage-4.webp";
import mtaBg from "@/public/images/natural-tooth/mta-treatment-bg.webp";
import toothBanner from "@/public/images/natural-tooth/tooth-banner.webp";

export const metadata: Metadata = {
  title: "자연치아 살리기 | 조은이플란트치과",
  description:
    "치근단절제술, MTA 신경치료, 잇몸치료 등 자연치아를 최대한 보존하는 치료. 치아를 살리는 마지막 선택지로 전문적인 보존 치료를 제공합니다.",
  keywords:
    "자연치아 살리기, 치근단절제술, MTA 신경치료, 잇몸치료, 치아보존, 보존치료, 조은이플란트치과",
  openGraph: {
    title: "자연치아 살리기 | 조은이플란트치과",
    description: "자연치아를 최대한 보존하는 전문적인 치료",
    type: "website",
  },
};

export default function NaturalToothPage() {
  return (
    <main className="**:break-keep">
      {/* 치근단절제술 Section - EXACT COPY FROM apicectomy/page.tsx */}
      <section id="apicectomy" className="scroll-mt-[6.25rem]">
        <div className="flex flex-col items-center py-8 md:py-12 lg:py-16 **:break-keep">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
          >
            <div className="flex flex-col items-center gap-2 text-center">
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

              <div className="flex flex-col items-center gap-2">
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
                  치근단절제술
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
                  className="text-xl md:text-2xl lg:text-[1.728rem] font-bold text-teal-secondary leading-[1.6]"
                >
                  치아를 보존하기 위한 마지막 치료 선택지로 고려할 수 있습니다
                </motion.p>
              </div>
            </div>
          </motion.section>

          {/* Apicoectomy Banner Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full mt-8 md:mt-12 lg:mt-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-teal-secondary py-4 px-4 md:px-8 lg:px-14"
            >
              <div className="max-w-6xl mx-auto flex flex-col gap-1 px-4">
                <p className="text-base md:text-lg lg:text-[1.2rem] text-teal-bg leading-[1.6]">
                  Apicoectomy
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white leading-[1.6]">
                  치아를 살리는 또 다른 방법, 치근단 절제술이란?
                </h2>
              </div>
            </motion.div>
          </motion.section>

          {/* Description Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full mt-10 md:mt-14 lg:mt-20 max-w-6xl mx-auto px-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-stretch rounded-lg overflow-hidden"
            >
              {/* Image on the left */}
              <div className="relative w-full lg:w-1/2 h-[20rem] md:h-[22rem] lg:h-[23.75rem] rounded-lg overflow-hidden">
                <Image
                  src={apicectomyInfoBg}
                  alt="치근단절제술 설명"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>

              {/* Text on the right */}
              <div className="flex flex-col justify-center gap-4 md:gap-6 lg:gap-8 lg:w-1/2 px-0 lg:px-8">
                <p className="text-base md:text-lg lg:text-xl text-dark-primary leading-[1.6]">
                  신경치료 후에도 뿌리 부위의 염증이 사라지지 않거나, 신경관이
                  막혀 정상적인 치료가 어려운 경우, 잇몸을 절개해 염증 부위를
                  제거하고 뿌리 끝에서 신경치료를 다시 시행하는 치료입니다.
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* When Needed Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 md:gap-8 mt-10 md:mt-14 lg:mt-20 max-w-6xl mx-auto w-full px-4"
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
              className="border-b border-dark-primary pb-2 w-full"
            >
              <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary">
                치근단절제술이 필요한 경우
              </h2>
            </motion.div>

            {/* Cases List */}
            <div className="flex flex-col gap-0 w-full">
              {/* Case 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex items-center justify-center p-3 md:p-4 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                    <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                      01
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-4 pt-0 md:pt-4 flex-1">
                  <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                    신경치료를 했으나 치아뿌리 끝에 염증이 생기고 잇몸에서
                    고름이 나오는 경우
                  </p>
                </div>
              </motion.div>

              {/* Case 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex items-center justify-center p-3 md:p-4 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                    <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                      02
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-4 pt-0 md:pt-4 flex-1">
                  <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                    일반적인 재신경치료로 나아지지 않는 경우
                  </p>
                </div>
              </motion.div>

              {/* Case 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex items-center justify-center p-3 md:p-4 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                    <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                      03
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-4 pt-0 md:pt-4 flex-1">
                  <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                    과거 보철치료를 받은 치아의 뿌리까지 상한 경우
                  </p>
                </div>
              </motion.div>

              {/* Case 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex items-center justify-center p-3 md:p-4 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                    <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                      04
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-4 pt-0 md:pt-4 flex-1">
                  <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                    치아의 신경이 막혀있어서 치료가 불가능한 경우
                  </p>
                </div>
              </motion.div>

              {/* Case 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col md:flex-row items-center"
              >
                <div className="flex items-center justify-center p-3 md:p-4 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                    <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                      05
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-4 pt-0 md:pt-4 flex-1">
                  <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                    과거 치료로 인해 치아에 기둥이 있어 재신경치료를 하기 어려운
                    경우
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 mt-10 md:mt-14 lg:mt-20 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
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
              className="border-b border-dark-primary pb-2 w-full"
            >
              <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary">
                치근단절제술 시술과정
              </h2>
            </motion.div>

            {/* Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-4"
              >
                <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
                  <Image
                    src={apicectomyStep1}
                    alt="치근단절제술 1단계"
                    fill
                    quality={100}
                    className="object-contain md:object-cover md:object-bottom"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4 text-center">
                  <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                    STEP 01
                  </h3>
                  <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                    치아의 뿌리 끝 염증 조직을 제거하기 위해 잇몸 쪽으로 치아
                    뿌리에 접근합니다.
                  </p>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-4"
              >
                <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
                  <Image
                    src={apicectomyStep2}
                    alt="치근단절제술 2단계"
                    fill
                    quality={100}
                    className="object-contain md:object-cover md:object-bottom"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4 text-center">
                  <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                    STEP 02
                  </h3>
                  <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                    뿌리 끝 부분에 낭종이나 농양 또는 육아종을 확인합니다.
                  </p>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-4"
              >
                <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
                  <Image
                    src={apicectomyStep3}
                    alt="치근단절제술 3단계"
                    fill
                    quality={100}
                    className="object-contain md:object-cover md:object-bottom"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4 text-center">
                  <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                    STEP 03
                  </h3>
                  <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                    염증 조직을 제거한 후,
                    <br />
                    오염된 치아 뿌리 끝을
                    <br />
                    삭제합니다.
                  </p>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-4"
              >
                <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
                  <Image
                    src={apicectomyStep4}
                    alt="치근단절제술 4단계"
                    fill
                    quality={100}
                    className="object-contain md:object-cover md:object-bottom"
                  />
                </div>
                <div className="flex flex-col gap-2 px-4 text-center">
                  <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                    STEP 04
                  </h3>
                  <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                    뿌리 끝에 MTA (Mineral Trioxide Aggregate) 충전 후 마무리
                    해줍니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* MTA Info Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full mt-10 md:mt-14 lg:mt-20 mb-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-teal-secondary py-6 px-4 md:px-8 lg:px-14"
            >
              <div className="max-w-6xl mx-auto flex flex-col gap-2 text-center px-4">
                <p className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-white leading-[1.6]">
                  충전을 할 때는 MTA라는 특수 생체 재료를 사용해야 치료가
                  완벽하게 이루어질 수 있습니다.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
                  <span className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-white leading-[1.6]">
                    MTA는 일반적인 충전재와는 달리,
                  </span>
                  <span className="bg-white text-teal-secondary px-4 py-0 rounded text-lg md:text-xl lg:text-[1.44rem] font-bold leading-[1.6]">
                    치아 뿌리 주변 조직의 재생을 돕는 기능
                  </span>
                  <span className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-white leading-[1.6]">
                    을 가지고 있습니다.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </section>

      {/* MTA 신경치료 Section - EXACT COPY FROM mta/page.tsx */}
      <section
        id="mta"
        className="scroll-mt-[6.25rem] min-h-screen bg-white **:break-keep"
      >
        {/* Hero Section */}
        <section className="pt-16 pb-8 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-[69.375rem] px-4">
            <div className="flex flex-col gap-8 md:gap-12">
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
        <section className="py-8 md:py-12 bg-[#97B6BB]">
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
        <section className="py-12 md:py-16">
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
      </section>

      {/* 잇몸치료 Section - EXACT COPY FROM gum-treatment/page.tsx */}
      <section id="gum-treatment" className="scroll-mt-[6.25rem]">
        <div className="flex flex-col items-center py-8 md:py-12 lg:py-16">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-12 px-4 md:px-8 max-w-[70.375rem] mx-auto w-full"
          >
            <div className="flex flex-col items-center gap-2 text-center">
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

              <div className="flex flex-col items-center gap-2">
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
                  잇몸치료의 중요성과 진행 방법
                </motion.h1>
              </div>
            </div>
          </motion.section>

          {/* Periodontal Treatment Banner Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full mt-8 md:mt-12 lg:mt-16 overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src={toothBanner}
              alt="치아 배너 이미지"
              quality={100}
              fill
              className="object-cover object-right"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-30 lg:hidden" />

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col gap-2 py-12 justify-center items-start max-w-6xl mx-auto w-full px-4"
            >
              <p className="text-base md:text-lg lg:text-[1.2rem] text-white leading-[1.6]">
                Periodontal Treatment
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-white leading-[1.6]">
                잇몸치료란?
              </h2>
              <p className="text-xl text-white leading-[1.6] max-w-2xl break-keep">
                치주질환은 성인에서 매우 흔한 구강 질환입니다. 초기에는 통증이
                거의 없어 방치되기 쉬우며, 만성적으로 진행되면 치아를 지탱하는
                조직이 파괴되어 치아 상실로 이어질 수 있습니다. 그렇지만 가벼운
                잇몸질환은 잇몸 치료만으로도 충분히 관리와 개선이 가능합니다.
              </p>
            </motion.div>
          </motion.section>

          {/* Periodontal Disease Stages Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 mt-10 md:mt-14 lg:mt-16 px-4 max-w-6xl mx-auto w-full"
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
              className="border-b border-dark-primary pb-2 mb-10 w-full"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary">
                잇몸질환 진행단계 및 치료방법
              </h2>
            </motion.div>

            {/* Stages Grid */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {/* Stage 1 - 치은염 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full max-w-[20rem] sm:w-[16rem] h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={gumStage1}
                      alt="치은염"
                      fill
                      quality={100}
                      className="object-contain object-bottom sm:object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-base">
                    치은염
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-3 px-2 flex-1">
                  <p className="text-sm md:text-base text-dark-primary text-center">
                    치주낭 길이 3mm 이하
                  </p>
                  <p className="text-lg md:text-xl font-bold text-teal-secondary text-center">
                    스케일링 치료
                  </p>
                </div>
              </motion.div>

              {/* Stage 2 - 초기 치주염 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full max-w-[20rem] sm:w-[16rem] h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={gumStage2}
                      alt="초기 치주염"
                      fill
                      quality={100}
                      className="object-contain object-bottom sm:object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-base">
                    초기 치주염
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-3 px-2 flex-1">
                  <p className="text-sm md:text-base text-dark-primary text-center">
                    치주낭 길이 3~5mm 이하
                  </p>
                  <p className="text-lg md:text-xl font-bold text-teal-secondary text-center">
                    치근활택술 치료
                  </p>
                </div>
              </motion.div>

              {/* Stage 3 - 중기 치주염 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full max-w-[20rem] sm:w-[16rem] h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={gumStage3}
                      alt="중기 치주염"
                      fill
                      quality={100}
                      className="object-contain object-bottom sm:object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-base">
                    중기 치주염
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-3 px-2 flex-1">
                  <p className="text-sm md:text-base text-dark-primary text-center">
                    치주낭 길이 5~7mm 이하
                  </p>
                  <p className="text-lg md:text-xl font-bold text-teal-secondary text-center">
                    치주소파술 치료
                  </p>
                </div>
              </motion.div>

              {/* Stage 4 - 말기 치주염 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full max-w-[20rem] sm:w-[16rem] h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={gumStage4}
                      alt="말기 치주염"
                      fill
                      quality={100}
                      className="object-contain object-bottom sm:object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-base">
                    말기 치주염
                  </div>
                </div>
                <div className="flex flex-col gap-2 py-3 px-2 flex-1">
                  <p className="text-sm md:text-base text-dark-primary text-center">
                    치주낭 길이 7mm 이상
                  </p>
                  <p className="text-lg md:text-xl font-bold text-teal-secondary text-center">
                    치주수술
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
