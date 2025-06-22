import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import toothIcon from "@/public/images/special-implant/insurance-tooth-icon.webp";

export const metadata: Metadata = {
  title: "보험 임플란트 | 조은이플란트치과",
  description:
    "65세 이상 환자분들의 건강한 노후를 함께합니다. 건강보험 적용으로 부담 없는 임플란트 치료를 받으세요.",
  keywords:
    "보험 임플란트, 건강보험 임플란트, 65세 이상 임플란트, 노인 임플란트, 조은이플란트치과",
  openGraph: {
    title: "보험 임플란트 | 조은이플란트치과",
    description:
      "65세 이상 환자분들을 위한 건강보험 적용 임플란트, 조은이플란트치과에서 함께합니다.",
    type: "website",
  },
};

const InsurancePage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 **:break-keep">
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
        className="flex flex-col items-center gap-16 md:gap-20 lg:gap-[7.5rem] mt-16 md:mt-20 lg:mt-[7.5rem] w-full"
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
            className="flex flex-wrap justify-center items-center gap-2 pt-16 px-4 md:px-8 lg:px-[3.5rem]"
          >
            <div className="flex flex-col items-center gap-10">
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
              <div className="flex flex-col gap-4 w-full max-w-[19.063rem]">
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
        className="flex flex-col gap-10 md:gap-10 lg:gap-10 mt-20 md:mt-24 lg:mt-[7.5rem] px-4 md:px-8 lg:px-[3.5rem] max-w-[69.375rem] mx-auto w-full mb-16"
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
                1인 평생 2개로 아랫니, 윗니 구분 없이 어금니와 앞니 모두 적용
                가능합니다.
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
              <p className="text-lg text-dark-primary">치료비 본인부담금 30%</p>
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
              <div className="flex flex-col gap-6">
                <p className="text-lg text-dark-primary leading-[1.6]">
                  치아 1개도 없는 무치악의 경우, 전체 임플란트를 해야 하는 비용
                  부담이 크기 때문에 대상에서 제외됩니다. 단, 무치악은 틀니
                  건강보험을 적용받을 수 있습니다.
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
  );
};

export default InsurancePage;
