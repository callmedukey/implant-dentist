import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import gumStage1 from "@/public/images/natural-tooth/gum-stage-1.webp";
import gumStage2 from "@/public/images/natural-tooth/gum-stage-2.webp";
import gumStage3 from "@/public/images/natural-tooth/gum-stage-3.webp";
import gumStage4 from "@/public/images/natural-tooth/gum-stage-4.webp";
import toothBanner from "@/public/images/natural-tooth/tooth-banner.webp";

export const metadata: Metadata = {
  title: "잇몸치료 | 조은이플란트치과",
  description:
    "치주질환은 성인에서 매우 흔한 구강 질환입니다. 초기에는 통증이 거의 없어 방치되기 쉬우며, 만성적으로 진행되면 치아를 지탱하는 조직이 파괴되어 치아 상실로 이어질 수 있습니다.",
  keywords:
    "잇몸치료, 치주질환, 치주염, 치은염, 스케일링, 치근활택술, 치주소파술, 치주수술, 조은이플란트치과",
  openGraph: {
    title: "잇몸치료 | 조은이플란트치과",
    description:
      "가벼운 잇몸질환은 잇몸 치료만으로도 충분히 관리와 개선이 가능합니다. 전문의가 시행하는 체계적인 잇몸치료.",
    type: "website",
  },
};

const GumTreatmentPage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24">
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
        className="relative w-full mt-12 md:mt-16 lg:mt-[4.063rem] overflow-hidden"
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
          className="relative flex flex-col gap-2 py-[4.375rem] justify-center items-start max-w-6xl mx-auto w-full px-4"
        >
          <p className="text-base md:text-lg lg:text-[1.2rem] text-white leading-[1.6]">
            Periodontal Treatment
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-white leading-[1.6]">
            잇몸치료란?
          </h2>
          <p className="text-xl text-white leading-[1.6] max-w-2xl break-keep">
            치주질환은 성인에서 매우 흔한 구강 질환입니다. 초기에는 통증이 거의
            없어 방치되기 쉬우며, 만성적으로 진행되면 치아를 지탱하는 조직이
            파괴되어 치아 상실로 이어질 수 있습니다. 그렇지만 가벼운 잇몸질환은
            잇몸 치료만으로도 충분히 관리와 개선이 가능합니다.
          </p>
        </motion.div>
      </motion.section>

      {/* Periodontal Disease Stages Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 mt-16 md:mt-20 lg:mt-[4.063rem] px-4 max-w-6xl mx-auto w-full"
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
          className="border-b border-dark-primary pb-2 mb-16 w-full"
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
            <div className="flex flex-col gap-2 py-4 px-2 flex-1">
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
            <div className="flex flex-col gap-2 py-4 px-2 flex-1">
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
            <div className="flex flex-col gap-2 py-4 px-2 flex-1">
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
            <div className="flex flex-col gap-2 py-4 px-2 flex-1">
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
  );
};

export default GumTreatmentPage;
