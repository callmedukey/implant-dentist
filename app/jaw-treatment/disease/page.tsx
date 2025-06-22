import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import causeBadHabits from "@/public/images/jaw-treatment/cause-bad-habits.webp";
import causeMalocclusion from "@/public/images/jaw-treatment/cause-malocclusion.webp";
import causeStress from "@/public/images/jaw-treatment/cause-stress.webp";
import causeTrauma from "@/public/images/jaw-treatment/cause-trauma.webp";
import symptomFacialAsymmetry from "@/public/images/jaw-treatment/symptom-facial-asymmetry.webp";
import symptomJawPain from "@/public/images/jaw-treatment/symptom-jaw-pain.webp";
import symptomJawSound from "@/public/images/jaw-treatment/symptom-jaw-sound.webp";
import symptomLimitedOpening from "@/public/images/jaw-treatment/symptom-limited-opening.webp";
import symptomNeckShoulder from "@/public/images/jaw-treatment/symptom-neck-shoulder.webp";
import symptomTinnitusHeadache from "@/public/images/jaw-treatment/symptom-tinnitus-headache.webp";
import tmdInfoBg from "@/public/images/jaw-treatment/tmd-info-bg.webp";

export const metadata: Metadata = {
  title: "턱관절 질환 | 조은이플란트치과",
  description:
    "조은이플란트는 환자 개개인의 상태를 고려해 턱 통증을 치료하고, 턱관절 건강을 확실히 지켜드립니다.",
  keywords:
    "턱관절 질환, 턱관절 장애, 턱 통증, TMD, 턱관절 치료, 조은이플란트치과",
  openGraph: {
    title: "턱관절 질환 | 조은이플란트치과",
    description: "전문의의 정확한 진단과 치료로 턱관절 건강을 지켜드립니다.",
    type: "website",
  },
};

const JawDiseasePage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 **:break-keep">
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
          className="text-3xl md:text-4xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6]"
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
          className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary leading-[1.6] mt-2"
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
        className="w-full mt-16 md:mt-20 lg:mt-[5.938rem]"
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
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-[3.5rem] flex flex-col gap-1">
            <p className="text-base md:text-lg lg:text-[1.2rem] text-teal-bg leading-[1.6]">
              Temporomandibular Disorder
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-white leading-[1.6]">
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
        className="w-full mt-20 md:mt-24 lg:mt-[8.125rem]"
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
          <div className="relative w-full lg:w-1/2 h-[20rem] md:h-[25rem] lg:h-[30.313rem]">
            <Image
              src={tmdInfoBg}
              alt="턱관절 장애 설명 배경"
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          {/* Text on the right - 50% */}
          <div className="flex flex-col justify-center gap-6 md:gap-8 w-full lg:w-1/2 px-8 md:px-12 lg:px-16 py-12 lg:py-0 lg:-translate-y-16">
            <h3 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary leading-[1.6]">
              턱관절 장애 (TMD)란?
            </h3>
            <p className="text-base md:text-lg lg:text-[1.44rem] text-dark-primary leading-[1.6] max-w-lg">
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
        className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 mt-20 md:mt-24 lg:mt-[8.125rem] px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
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
          className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary text-center leading-[1.6]"
        >
          턱관절 장애의 원인
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
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
            className="flex flex-col gap-6"
          >
            <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={causeMalocclusion}
                alt="부정교합 원인"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 px-2 text-center">
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                부정교합
              </h3>
              <p className="text-base md:text-lg text-dark-primary leading-[1.6] tracking-tight">
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
            className="flex flex-col gap-6"
          >
            <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={causeBadHabits}
                alt="악습관 원인"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 px-3 text-center">
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                악습관
              </h3>
              <p className="text-base md:text-lg text-dark-primary leading-[1.6] tracking-tight">
                이갈이, 이 악물기, 턱 내밀기, 턱 받치기, 장시간 껌을 씹거나 혀를
                내미는 습관 등
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
            className="flex flex-col gap-6"
          >
            <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={causeStress}
                alt="스트레스 원인"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 px-2 text-center">
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                스트레스
              </h3>
              <p className="text-base md:text-lg text-dark-primary leading-[1.6] tracking-tight">
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
            className="flex flex-col gap-6"
          >
            <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={causeTrauma}
                alt="외상 원인"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 px-1 text-center">
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                외상
              </h3>
              <p className="text-base md:text-lg text-dark-primary leading-[1.6] tracking-tight">
                치과치료 등으로 인해 장시간 입을 벌리고 있었거나 교통사고 또는
                상해를 입었을 때
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
        className="flex flex-col items-center gap-12 md:gap-16 lg:gap-[4.375rem] mt-20 md:mt-24 lg:mt-[8.125rem] px-4 md:px-8 lg:px-[3.5rem] max-w-4xl mx-auto w-full"
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
          className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary text-center leading-[1.6]"
        >
          턱관절 장애의 증상
        </motion.h2>

        <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 w-full">
          {/* Symptoms Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
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
              className="flex flex-col items-center gap-8 md:gap-10 bg-gray-lighter rounded-lg p-6 md:p-8"
            >
              <div className="relative w-[6.25rem] h-[6.25rem]">
                <Image
                  src={symptomJawSound}
                  alt="턱관절소리 증상"
                  fill
                  quality={100}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
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
              className="flex flex-col items-center gap-8 md:gap-10 bg-gray-lighter rounded-lg p-6 md:p-8"
            >
              <div className="relative w-[6.25rem] h-[6.25rem]">
                <Image
                  src={symptomLimitedOpening}
                  alt="벌어지지 않는 입 증상"
                  fill
                  quality={100}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
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
              className="flex flex-col items-center gap-8 md:gap-10 bg-gray-lighter rounded-lg p-6 md:p-8"
            >
              <div className="relative w-[6.25rem] h-[6.25rem]">
                <Image
                  src={symptomJawPain}
                  alt="턱관절 통증 증상"
                  fill
                  quality={100}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
                턱관절 통증
              </h3>
            </motion.div>
          </div>

          {/* Symptoms Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 lg:gap-14">
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
              className="flex flex-col items-center gap-8 md:gap-10 bg-gray-lighter rounded-lg p-6 md:p-8"
            >
              <div className="relative w-[6.25rem] h-[6.25rem]">
                <Image
                  src={symptomTinnitusHeadache}
                  alt="이명 편두통 증상"
                  fill
                  quality={100}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
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
              className="flex flex-col items-center gap-8 md:gap-10 bg-gray-lighter rounded-lg p-6 md:p-8"
            >
              <div className="relative w-[6.25rem] h-[6.25rem]">
                <Image
                  src={symptomNeckShoulder}
                  alt="목 어깨 결림 증상"
                  fill
                  quality={100}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
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
              className="flex flex-col items-center gap-8 md:gap-10 bg-gray-lighter rounded-lg p-6 md:p-8"
            >
              <div className="relative w-[6.25rem] h-[6.25rem]">
                <Image
                  src={symptomFacialAsymmetry}
                  alt="안면 비대칭 증상"
                  fill
                  quality={100}
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary text-center leading-[1.6]">
                안면 비대칭
              </h3>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Treatment Approach Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-10 md:gap-10 mt-20 md:mt-24 lg:mt-[8.125rem] px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full mb-16"
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
            조은이플란트치과의{" "}
            <span className="text-teal-secondary">턱관절 치료</span>
          </h2>
        </motion.div>

        {/* Treatment Items */}
        <div className="flex flex-col gap-0 w-full">
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
            <div className="flex items-center justify-center p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                  01
                </span>
              </div>
            </div>
            <div className="p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
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
            <div className="flex items-center justify-center p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                  02
                </span>
              </div>
            </div>
            <div className="p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
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
            <div className="flex items-center justify-center p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                  03
                </span>
              </div>
            </div>
            <div className="p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
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
            <div className="flex items-center justify-center p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                  04
                </span>
              </div>
            </div>
            <div className="p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
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
            <div className="flex items-center justify-center p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full px-4 py-3 flex items-center justify-center">
                <span className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-white">
                  05
                </span>
              </div>
            </div>
            <div className="p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary text-center md:text-left">
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
  );
};

export default JawDiseasePage;
