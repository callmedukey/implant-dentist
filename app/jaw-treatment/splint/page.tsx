import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import splintHabitControl from "@/public/images/jaw-treatment/splint-habit-control.webp";
import splintJointStability from "@/public/images/jaw-treatment/splint-joint-stability.webp";
import splintMainBg from "@/public/images/jaw-treatment/splint-main-bg.webp";
import splintPainRelief from "@/public/images/jaw-treatment/splint-pain-relief.webp";

export const metadata: Metadata = {
  title: "교합안정 스플린트 | 조은이플란트치과",
  description:
    "교합안정 스플린트는 턱관절 장애 및 이갈이, 이악물기 등의 증상을 완화하기 위해 사용하는 맞춤형 장치입니다.",
  keywords:
    "교합안정 스플린트, 턱관절 스플린트, 이갈이 치료, 이악물기 치료, 턱관절 장치, 조은이플란트치과",
  openGraph: {
    title: "교합안정 스플린트 | 조은이플란트치과",
    description:
      "턱관절을 위한 맞춤 치료, 교합안정 스플린트로 편안한 일상을 되찾으세요.",
    type: "website",
  },
};

const SplintPage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 **:break-keep">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-12 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
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
            교합안정 스플린트
          </motion.h1>
        </div>
      </motion.section>

      {/* Main Info Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full mt-16 md:mt-20 lg:mt-[5.938rem] px-4 md:px-8 lg:px-[3.5rem] max-w-7xl mx-auto"
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
          className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch"
        >
          {/* Image on the left */}
          <div className="relative w-full h-[20rem] md:h-[22rem] lg:h-[25.75rem] rounded-lg overflow-hidden">
            <Image
              src={splintMainBg}
              alt="교합안정 스플린트"
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          {/* Text on the right */}
          <div className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-10 px-0 lg:px-2 max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary leading-[1.6]">
              턱관절을 위한 맞춤 치료
            </h2>
            <p className="text-base md:text-lg lg:text-[1.44rem] text-dark-primary leading-[1.6]">
              교합안정 스플린트는 턱관절 장애 및 이갈이, 이악물기 등의 증상을
              완화하기 위해 사용하는 맞춤형 장치입니다.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Effects Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full mt-20 md:mt-24 lg:mt-[5.938rem]"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-teal-secondary py-4"
        >
          <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white text-center leading-[1.6]">
            스플린트 치료의 효과
          </h2>
        </motion.div>

        {/* Effects Cards */}
        <div className="px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto mt-12 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Effect 1 - 턱관절 통증 완화 */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-6"
            >
              <div className="relative w-full h-[20.588rem] rounded-lg overflow-hidden">
                <Image
                  src={splintPainRelief}
                  alt="턱관절 통증 완화"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-3 text-center">
                <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                  턱관절 통증 완화
                </h3>
                <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                  턱관절의 통증을 완화하고, 이갈이·이악물기 등으로 발생하는
                  불편함을 줄이는 데 효과적입니다.
                </p>
              </div>
            </motion.div>

            {/* Effect 2 - 턱관절 안정 */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-6"
            >
              <div className="relative w-full h-[20.588rem] rounded-lg overflow-hidden">
                <Image
                  src={splintJointStability}
                  alt="턱관절 안정"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-3 text-center">
                <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                  턱관절 안정
                </h3>
                <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                  턱관절의 과도한 부담을 줄이고, 저작근의 긴장을 완화하여 통증
                  개선과 관절 안정에 도움을 줍니다.
                </p>
              </div>
            </motion.div>

            {/* Effect 3 - 수면 악습관 조절 · 교합 균형 */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-6"
            >
              <div className="relative w-full h-[20.588rem] rounded-lg overflow-hidden">
                <Image
                  src={splintHabitControl}
                  alt="수면 악습관 조절"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2 px-3 text-center">
                <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                  수면 악습관 조절 · 교합 균형
                </h3>
                <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                  특히 수면 중 무의식적인 악습관을 조절하고, 교합의 균형을
                  유지하는 데 효과적입니다.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Closing CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full mt-20 md:mt-24 lg:mt-[8.125rem] mb-16 px-4 md:px-8 lg:px-[4.813rem] max-w-[52.688rem] mx-auto"
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
          className="text-center"
        >
          <p className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-dark-primary leading-[1.6]">
            조은이플란트치과는 정밀 진단을 바탕으로 환자 맞춤형 스플린트를
            제작하여,
            <br className="hidden md:block" />
            <span className="text-teal-secondary font-bold">
              턱관절의 기능 회복
            </span>{" "}
            과{" "}
            <span className="text-teal-secondary font-bold">
              장기적인 구강 건강 유지
            </span>
            를 도와드립니다.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SplintPage;
