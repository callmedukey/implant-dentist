import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import biopsyProcess from "@/public/images/integrated-care/biopsy-process.webp";
import softTissueBanner from "@/public/images/integrated-care/soft-tissue-banner.webp";

export const metadata: Metadata = {
  title: "구강연조직질환 | 조은이플란트치과",
  description:
    "입안의 잇몸, 혀, 뺨 안쪽 점막 등 부드러운 조직에 생기는 질환을 말합니다. 염증, 궤양, 색소침착, 백반증 등 다양한 형태로 나타나며, 정확한 진단과 조기 치료가 중요합니다.",
  keywords:
    "구강연조직질환, 구강 조직검사, 구강병리과 협진, 염증, 궤양, 색소침착, 백반증, 조은이플란트치과",
  openGraph: {
    title: "구강연조직질환 | 조은이플란트치과",
    description:
      "서울대학교 치과병원 구강병리과와의 협진으로 대학병원에 가지 않고도 편리하게 조직검사를 받으실 수 있습니다.",
    type: "website",
  },
};

const SoftTissuePage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 **:break-keep">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-10 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
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
            구강연조직질환
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
            className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary leading-[1.6] max-w-5xl px-0 md:px-8 lg:px-[4.5rem] mt-4"
          >
            입안의 잇몸, 혀, 뺨 안쪽 점막 등 부드러운 조직에 생기는 질환을
            말합니다. 염증, 궤양, 색소침착, 백반증 등 다양한 형태로 나타나며,
            정확한 진단과 조기 치료가 중요합니다.
          </motion.p>
        </div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center gap-10 w-full"
        >
          <div className="relative w-full max-w-[56rem] h-[15rem] sm:h-[20rem] md:h-[24rem] lg:h-[28.688rem] rounded-lg overflow-hidden">
            <Image
              src={softTissueBanner}
              alt="구강연조직질환 설명"
              fill
              quality={100}
              className="object-fit"
            />
          </div>

          <p className="text-xl md:text-2xl lg:text-[1.728rem] font-bold text-dark-primary text-center leading-[1.6]">
            조은이플란트치과에서{" "}
            <span className="text-teal-secondary font-bold">
              대학병원에 가지 않고도 편리하게 조직검사
            </span>
            를 받으실 수 있습니다.
          </p>
        </motion.div>
      </motion.section>

      {/* University Collaboration Banner */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full mt-16 md:mt-20 lg:mt-[5.875rem]"
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
          className="bg-teal-secondary py-4 px-2"
        >
          <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white text-center leading-[1.6]">
            서울대학교 치과병원 구강병리과와의 협진 진행
          </h2>
        </motion.div>
      </motion.section>

      {/* Biopsy Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4 md:gap-20 lg:gap-[7.5rem] mt-16 md:mt-20 lg:mt-[5.875rem] px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
      >
        {/* Process Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full px-4"
        >
          <div className="border-b border-dark-primary pb-2">
            <h2 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary">
              구강조직검사 진행 과정
            </h2>
          </div>
        </motion.div>

        {/* Process Flowchart */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full h-[40rem] md:h-[60rem] lg:h-[75.408rem]"
        >
          <Image
            src={biopsyProcess}
            alt="구강조직검사 진행 과정"
            fill
            quality={100}
            className="object-contain"
          />
        </motion.div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-2xl font-bold text-dark-primary text-center leading-[1.6] px-4"
        >
          연조직 질환 이외에도{" "}
          <span className="text-teal-secondary font-bold">
            뼈 내부에 발생한 물혹이나 낭종도
          </span>{" "}
          편리하게 조직검사 가능합니다
        </motion.p>
      </motion.section>
    </div>
  );
};

export default SoftTissuePage;
