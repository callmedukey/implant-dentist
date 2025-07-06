import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

// Import images from disease page
import causeBadHabits from "@/public/images/jaw-treatment/cause-bad-habits.webp";
import causeMalocclusion from "@/public/images/jaw-treatment/cause-malocclusion.webp";
import causeStress from "@/public/images/jaw-treatment/cause-stress.webp";
import causeTrauma from "@/public/images/jaw-treatment/cause-trauma.webp";
import ctaBg from "@/public/images/jaw-treatment/jaw-treatment-cta-bg.webp";
import equipmentBg from "@/public/images/jaw-treatment/jaw-treatment-equipment-bg.webp";
import splintHabitControl from "@/public/images/jaw-treatment/splint-habit-control.webp";
import splintJointStability from "@/public/images/jaw-treatment/splint-joint-stability.webp";
import splintMainBg from "@/public/images/jaw-treatment/splint-main-bg.webp";
import splintPainRelief from "@/public/images/jaw-treatment/splint-pain-relief.webp";
import symptomFacialAsymmetry from "@/public/images/jaw-treatment/symptom-facial-asymmetry.webp";
import symptomJawPain from "@/public/images/jaw-treatment/symptom-jaw-pain.webp";
import symptomJawSound from "@/public/images/jaw-treatment/symptom-jaw-sound.webp";
import symptomLimitedOpening from "@/public/images/jaw-treatment/symptom-limited-opening.webp";
import symptomNeckShoulder from "@/public/images/jaw-treatment/symptom-neck-shoulder.webp";
import symptomTinnitusHeadache from "@/public/images/jaw-treatment/symptom-tinnitus-headache.webp";
import tmdInfoBg from "@/public/images/jaw-treatment/tmd-info-bg.webp";

// Import images from equipment page

// Import images from splint page

export const metadata: Metadata = {
  title: "턱관절 치료 | 조은이플란트치과",
  description:
    "조은이플란트는 환자 개개인의 상태를 고려해 턱 통증을 치료하고, 턱관절 건강을 확실히 지켜드립니다. 최신 물리치료 장비와 교합안정 스플린트를 통한 전문적인 치료.",
  keywords:
    "턱관절 질환, 턱관절 장애, 턱 통증, TMD, 턱관절 치료, 물리치료 장비, 교합안정 스플린트, 조은이플란트치과",
  openGraph: {
    title: "턱관절 치료 | 조은이플란트치과",
    description: "전문의의 정확한 진단과 치료로 턱관절 건강을 지켜드립니다.",
    type: "website",
  },
};

export default function JawTreatmentPage() {
  return (
    <main className="**:break-keep">
      {/* 턱관절 질환 Section - EXACT COPY FROM disease/page.tsx */}
      <section
        id="disease"
        className="scroll-mt-[5.75rem] lg:scroll-mt-[6.25rem]"
      >
        <div className="flex flex-col items-center p-4 md:py-12 lg:py-16 **:break-keep mt-16 md:mt-0">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full text-center"
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
              className="text-xl md:text-4xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6]"
            >
              턱관절 질환
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
              className="text-14 md:text-xl lg:text-[1.44rem] text-dark-primary leading-[1.6] mt-1 md:mt-2 text-center"
            >
              조은이플란트는 환자 개개인의 상태를 고려해 턱 통증을 치료하고,
              <br className="hidden md:block" />
              턱관절 건강을 확실히 지켜드립니다.
            </motion.p>
          </motion.section>

          {/* Temporomandibular Disorder Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full mt-4 md:mt-12 lg:mt-16"
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
              className="bg-teal-secondary py-6"
            >
              <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-[3.5rem] flex flex-col gap-1 text-center">
                <p className="text-14 md:text-lg lg:text-[1.2rem] text-teal-bg leading-[1.6]">
                  Temporomandibular Disorder
                </p>
                <h2 className="text-lg md:text-3xl lg:text-[2.489rem] font-bold text-white leading-[1.6]">
                  턱관절 장애 살펴보기
                </h2>
              </div>
            </motion.div>
          </motion.section>

          {/* TMD Information Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full mt-6 md:mt-16 lg:mt-20"
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
              className=" mx-auto flex flex-col lg:flex-row items-stretch"
            >
              {/* Image on the left - 50% */}
              <div className="relative w-full lg:w-1/2 h-[15rem] md:h-[25rem] lg:h-[30.313rem]">
                <Image
                  src={tmdInfoBg}
                  alt="턱관절 장애 설명 배경"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>

              {/* Text on the right - 50% */}
              <div className="flex flex-col justify-center gap-3 md:gap-6 w-full lg:w-1/2 px-4 md:px-12 lg:px-16 py-4 md:py-8 lg:py-0 lg:-translate-y-16 text-center lg:text-left">
                <h3 className="text-xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary leading-[1.6]">
                  턱관절 장애 (TMD)란?
                </h3>
                <p className="text-14 md:text-lg lg:text-[1.44rem] text-dark-primary leading-[1.6] max-w-lg mx-auto lg:mx-0">
                  귀 바로 옆에 위치한 턱관절은 두개골의 측두골과 하악골이 만나서
                  형성되는 관절로, 관절 내 이상이나 저작근의 이상 등으로 턱관절
                  장애가 발생합니다.
                </p>
              </div>
            </motion.div>
          </motion.section>

          {/* Causes Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4 md:gap-12 lg:gap-16 mt-6 md:mt-16 lg:mt-20 px-2 sm:px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary text-center leading-[1.6]"
            >
              턱관절 장애의 원인
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
              {/* Cause 1 - 부정교합 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-3 md:gap-6"
              >
                <div className="relative w-full h-[10rem] md:h-[15rem] rounded-lg overflow-hidden">
                  <Image
                    src={causeMalocclusion}
                    alt="부정교합 원인"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1  text-center">
                  <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                    부정교합
                  </h3>
                  <p className="text-14 md:text-lg text-dark-primary leading-[1.6] tracking-tight">
                    치아의 위치가 변하여 교합 변화가 생겼거나 교합장애, 부정교합
                    등의 문제
                  </p>
                </div>
              </motion.div>

              {/* Cause 2 - 악습관 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-3 md:gap-6"
              >
                <div className="relative w-full h-[10rem] md:h-[15rem] rounded-lg overflow-hidden">
                  <Image
                    src={causeBadHabits}
                    alt="악습관 원인"
                    fill
                    quality={100}
                    className="object-cover object-center"
                  />
                </div>
                <div className="flex flex-col gap-1 px-3 text-center">
                  <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                    악습관
                  </h3>
                  <p className="text-14 md:text-lg text-dark-primary leading-[1.6] tracking-tight">
                    이갈이, 이 악물기, 턱 내밀기, 턱 받치기, 장시간 껌을 씹거나
                    혀를 내미는 습관 등
                  </p>
                </div>
              </motion.div>

              {/* Cause 3 - 스트레스 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-3 md:gap-6"
              >
                <div className="relative w-full h-[10rem] md:h-[15rem] rounded-lg overflow-hidden">
                  <Image
                    src={causeStress}
                    alt="스트레스 원인"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 px-2 text-center">
                  <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                    스트레스
                  </h3>
                  <p className="text-14 md:text-lg text-dark-primary leading-[1.6] tracking-tight">
                    스트레스를 심하게 받거나 불안, 우울, 좌절, 분노 등 정서가
                    불안정한 상태
                  </p>
                </div>
              </motion.div>

              {/* Cause 4 - 외상 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-3 md:gap-6"
              >
                <div className="relative w-full h-[10rem] md:h-[15rem] rounded-lg overflow-hidden">
                  <Image
                    src={causeTrauma}
                    alt="외상 원인"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1 px-1 text-center">
                  <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                    외상
                  </h3>
                  <p className="text-14 md:text-lg text-dark-primary leading-[1.6] tracking-tight">
                    치과치료 등으로 인해 장시간 입을 벌리고 있었거나 교통사고
                    또는 상해를 입었을 때
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Symptoms Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4 md:gap-12 lg:gap-16 lg:mt-20 px-4 md:px-8 lg:px-[3.5rem] max-w-4xl mx-auto w-full mt-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary text-center leading-[1.6]"
            >
              턱관절 장애의 증상
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10 lg:gap-14 w-full">
              {/* Symptom 1 - 턱관절소리 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-8 bg-gray-lighter rounded-lg p-3 md:p-6"
              >
                <div className="relative w-[5rem] md:w-[6.25rem] h-[5rem] md:h-[6.25rem]">
                  <Image
                    src={symptomJawSound}
                    alt="턱관절소리 증상"
                    fill
                    quality={100}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
                  턱관절소리
                </h3>
              </motion.div>

              {/* Symptom 2 - 벌어지지 않는 입 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-8 bg-gray-lighter rounded-lg p-3 md:p-6"
              >
                <div className="relative w-[5rem] md:w-[6.25rem] h-[5rem] md:h-[6.25rem]">
                  <Image
                    src={symptomLimitedOpening}
                    alt="벌어지지 않는 입 증상"
                    fill
                    quality={100}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
                  벌어지지 않는 입
                </h3>
              </motion.div>

              {/* Symptom 3 - 턱관절 통증 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-8 bg-gray-lighter rounded-lg p-3 md:p-6"
              >
                <div className="relative w-[5rem] md:w-[6.25rem] h-[5rem] md:h-[6.25rem]">
                  <Image
                    src={symptomJawPain}
                    alt="턱관절 통증 증상"
                    fill
                    quality={100}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
                  턱관절 통증
                </h3>
              </motion.div>

              {/* Symptom 4 - 이명 · 편두통 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-8 bg-gray-lighter rounded-lg p-3 md:p-6"
              >
                <div className="relative w-[5rem] md:w-[6.25rem] h-[5rem] md:h-[6.25rem]">
                  <Image
                    src={symptomTinnitusHeadache}
                    alt="이명 편두통 증상"
                    fill
                    quality={100}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
                  이명 · 편두통
                </h3>
              </motion.div>

              {/* Symptom 5 - 목 · 어깨 결림 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-8 bg-gray-lighter rounded-lg p-3 md:p-6"
              >
                <div className="relative w-[5rem] md:w-[6.25rem] h-[5rem] md:h-[6.25rem]">
                  <Image
                    src={symptomNeckShoulder}
                    alt="목 어깨 결림 증상"
                    fill
                    quality={100}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
                  목 · 어깨 결림
                </h3>
              </motion.div>

              {/* Symptom 6 - 안면 비대칭 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-8 bg-gray-lighter rounded-lg p-3 md:p-6"
              >
                <div className="relative w-[5rem] md:w-[6.25rem] h-[5rem] md:h-[6.25rem]">
                  <Image
                    src={symptomFacialAsymmetry}
                    alt="안면 비대칭 증상"
                    fill
                    quality={100}
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
                  안면 비대칭
                </h3>
              </motion.div>
            </div>
          </motion.section>

          {/* Treatment Approach Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3 md:gap-8 mt-16 lg:mt-20 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full mb-4 md:mb-8 "
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
              className="border-b border-dark-primary pb-2 w-full text-center md:text-left"
            >
              <h2 className="text-xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary text-center md:text-left">
                조은이플란트치과의{" "}
                <span className="text-teal-secondary">턱관절 치료</span>
              </h2>
            </motion.div>

            {/* Treatment Items */}
            <div className="flex flex-col gap-0 w-full text-center md:text-left">
              {/* Treatment 1 */}
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
                <div className="flex items-center justify-center p-3 md:p-6 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                    <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                      01
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-6 pt-0 md:pt-6 flex-1">
                  <p className="text-14 md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
                    <span className="text-teal-secondary font-bold">
                      비수술적 치료
                    </span>
                    를 우선으로 시행합니다.
                  </p>
                </div>
              </motion.div>

              {/* Treatment 2 */}
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
                <div className="flex items-center justify-center p-3 md:p-6 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                    <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                      02
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-6 pt-0 md:pt-6 flex-1">
                  <p className="text-14 md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
                    <span className="text-teal-secondary font-bold">
                      건강 보험 적용이 가능한 치료
                    </span>
                    를 우선적으로 시행합니다.
                  </p>
                </div>
              </motion.div>

              {/* Treatment 3 */}
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
                <div className="flex items-center justify-center p-3 md:p-6 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                    <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                      03
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-6 pt-0 md:pt-6 flex-1">
                  <p className="text-14 md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
                    <span className="text-teal-secondary font-bold">
                      최첨단 장비
                    </span>
                    를 이용하여{" "}
                    <span className="text-teal-secondary font-bold">
                      정확한 검사{" "}
                    </span>
                    결과 를 토대로 진료합니다.
                  </p>
                </div>
              </motion.div>

              {/* Treatment 4 */}
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
                <div className="flex items-center justify-center p-3 md:p-6 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                    <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                      04
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-6 pt-0 md:pt-6 flex-1">
                  <p className="text-14 md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
                    <span className="text-teal-secondary font-bold">
                      다양한 물리치료{" "}
                    </span>
                    장비 를 적절히 사용합니다.
                  </p>
                </div>
              </motion.div>

              {/* Treatment 5 */}
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
                <div className="flex items-center justify-center p-3 md:p-6 w-full md:w-[7.563rem] shrink-0">
                  <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                    <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                      05
                    </span>
                  </div>
                </div>
                <div className="p-3 md:p-6 pt-0 md:pt-6 flex-1">
                  <p className="text-14 md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
                    <span className="text-teal-secondary font-bold">
                      철저한 소독과 감염관리
                    </span>
                    로 환자의 안전을 최우선으로 생각합니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>

      {/* 턱관절 치료 전문장비 Section - EXACT COPY FROM equipment/page.tsx */}
      <section
        id="equipment"
        className="scroll-mt-[4.25rem] lg:scroll-mt-[4rem] bg-white **:break-keep pt-4 md:pt-8"
      >
        {/* Hero Section */}
        <section className="pt-8 pb-6 md:pt-20 md:pb-16">
          <div className="mx-auto max-w-[69.375rem] px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="mb-1 text-14 md:text-lg text-dark-primary/50">
                CHOONEEPLANT DENTAL CLINIC
              </p>
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-dark-primary mt-1 mb-2 md:mt-2 md:mb-3">
                턱관절 치료
              </h1>
            </motion.div>

            {/* Description Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-5xl mx-auto mt-4 md:mt-8 space-y-3 md:space-y-6"
            >
              <p className="text-14 md:text-lg lg:text-xl text-dark-primary text-center">
                턱관절 장애의 치료에는 약물치료, 장치치료,{" "}
                <br className="md:hidden" /> 물리치료, 수술적 치료 등 다양한
                접근이 있습니다.
              </p>
              <p className="text-14 md:text-lg lg:text-xl text-dark-primary text-center">
                이 중 물리치료는 열, 전기자극 등{" "}
                <span className="text-teal-secondary font-bold">
                  물리적 자극 을 통해 <br className="md:hidden" /> 손상된 조직의
                  회복을 촉진하고,{" "}
                </span>
                근경련 및 관절의 경직, 통증을 <br className="md:hidden" />{" "}
                효과적으로 완화하는 치료법으로 널리 사용됩니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Equipment Showcase Section */}
        <section className="pb-6 md:pb-16">
          <div className="mx-auto max-w-[69.375rem] px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
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
        <section className="py-4 md:py-12 bg-teal-secondary">
          <div className="mx-auto max-w-7xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center sm:space-y-2"
            >
              <p className="text-14 md:text-xl lg:text-2xl font-bold text-white">
                조은이플란트치과는 중주파 물리치료기를 포함한{" "}
                <br className="md:hidden" /> 턱관절 전문 장비를 도입하여,
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-2 md:mt-4">
                <span className="inline-block bg-white text-teal-secondary font-bold text-14 md:text-xl lg:text-2xl px-2 md:px-4 py-1 rounded">
                  저출력 레이저 자극 요법(Low-Level Laser Therapy, LLLT)
                </span>
                <span className="text-14 md:text-xl lg:text-2xl font-bold text-white">
                  과
                </span>
                <span className="inline-block bg-white text-[#97B6BB] font-bold text-14 md:text-xl lg:text-2xl px-3 md:px-4 py-1 rounded">
                  저주파 전기자극 요법 (TENS therapy)
                </span>
              </div>
              <p className="text-14 md:text-xl lg:text-2xl font-bold text-white pt-2">
                등 다양한 비수술적 치료를 시행하고 있습니다.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-6 md:pb-16 mt-6 md:mt-16 lg:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto flex flex-col lg:flex-row items-stretch"
          >
            {/* Image - 50% */}
            <div className="relative w-full lg:w-1/2 h-[15rem] md:h-[25rem] lg:h-[30.3125rem]">
              <Image
                src={ctaBg}
                alt="턱관절 치료 상담"
                fill
                quality={100}
                className="object-cover"
              />
            </div>

            {/* Text Content - 50% */}
            <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 md:px-12 lg:px-16 py-6 md:py-12 lg:py-0">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-3 md:space-y-4 lg:space-y-6 text-center lg:text-left"
              >
                <h3 className="text-xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary">
                  턱의 불편함과 통증으로
                  <br className="hidden sm:block" />
                  일상생활이 어려우셨다면ㅡ
                </h3>
                <p className="text-14 md:text-xl lg:text-2xl text-dark-primary max-w-2xl mx-auto lg:mx-0">
                  <span className="text-teal-secondary font-bold">
                    전문 장비와 체계적인 진료
                  </span>
                  가 이루어지는 조은이플란트 치과에서 턱관절 물리치료를
                  받아보시기 바랍니다.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </section>

      {/* 스플린트 치료 Section - EXACT COPY FROM splint/page.tsx */}
      <section
        id="splint"
        className="scroll-mt-[6rem] lg:scroll-mt-[6.25rem] relative pb-6 sm:mb-12 mb-6"
      >
        <div className="flex flex-col items-center py-4 md:py-12 lg:py-16 **:break-keep">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-4 md:gap-8 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
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
                className="text-xl md:text-4xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6]"
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
            className="w-full mt-8 md:mt-12 lg:mt-16 px-4 md:px-8 lg:px-[3.5rem] max-w-7xl mx-auto"
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
              className="flex flex-col lg:flex-row gap-4 lg:gap-6 items-stretch"
            >
              {/* Image on the left */}
              <div className="relative w-full h-[15rem] md:h-[22rem] lg:h-[25.75rem] rounded-lg overflow-hidden">
                <Image
                  src={splintMainBg}
                  alt="교합안정 스플린트"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>

              {/* Text on the right */}
              <div className="flex flex-col justify-center gap-3 md:gap-6 lg:gap-8 px-0 lg:px-2 max-w-xl text-center lg:text-left">
                <h2 className="text-xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary leading-[1.6]">
                  턱관절을 위한 맞춤 치료
                </h2>
                <p className="text-14 md:text-lg lg:text-[1.44rem] text-dark-primary leading-[1.6]">
                  교합안정 스플린트는 턱관절 장애 및 이갈이, 이악물기 등의
                  증상을 완화하기 위해 사용하는 맞춤형 장치입니다.
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
            className="w-full mt-8 md:mt-24 lg:mt-[5.938rem]"
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
              className="bg-teal-secondary py-3 md:py-4"
            >
              <h2 className="text-lg md:text-3xl lg:text-[2.074rem] font-bold text-white text-center leading-[1.6]">
                스플린트 치료의 효과
              </h2>
            </motion.div>

            {/* Effects Cards */}
            <div className="px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto mt-4 md:mt-12 lg:mt-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
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
                  className="flex flex-col gap-3 md:gap-4"
                >
                  <div className="relative w-full h-[15rem] md:h-[20.588rem] rounded-lg overflow-hidden">
                    <Image
                      src={splintPainRelief}
                      alt="턱관절 통증 완화"
                      fill
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-3 text-center">
                    <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                      턱관절 통증 완화
                    </h3>
                    <p className="text-14 md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
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
                  className="flex flex-col gap-3 md:gap-4"
                >
                  <div className="relative w-full h-[15rem] md:h-[20.588rem] rounded-lg overflow-hidden">
                    <Image
                      src={splintJointStability}
                      alt="턱관절 안정"
                      fill
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-3 text-center">
                    <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                      턱관절 안정
                    </h3>
                    <p className="text-14 md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                      턱관절의 과도한 부담을 줄이고, 저작근의 긴장을 완화하여
                      통증 개선과 관절 안정에 도움을 줍니다.
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
                  className="flex flex-col gap-3 md:gap-4"
                >
                  <div className="relative w-full h-[15rem] md:h-[20.588rem] rounded-lg overflow-hidden">
                    <Image
                      src={splintHabitControl}
                      alt="수면 악습관 조절"
                      fill
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1 px-3 text-center">
                    <h3 className="text-lg md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                      수면 악습관 조절 · 교합 균형
                    </h3>
                    <p className="text-14 md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
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
            className="w-full mt-16 lg:mt-20 mb-16 px-4 md:px-8 lg:px-[4.813rem] max-w-[52.688rem] mx-auto"
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
              <p className="text-14 md:text-xl lg:text-[1.44rem] font-bold text-dark-primary leading-[1.6] text-center">
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

        {/* Non-covered Treatment Fees Button */}
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-4 md:bottom-8 right-4 md:right-8 lg:right-12 inline-flex items-center gap-2 md:gap-4 bg-dark-primary text-white px-4 md:px-6 py-1 rounded-full hover:bg-dark-primary/90 transition-colors duration-200 cursor-default"
          style={{ backgroundColor: "#212323" }}
        >
          <span className="text-xs md:text-base font-normal">비급여수가표</span>
          <Image
            src="/images/icons/chevron-down-icon.svg"
            alt="화살표"
            width={10}
            height={8}
            unoptimized
          />
        </motion.button>
      </section>
    </main>
  );
}
