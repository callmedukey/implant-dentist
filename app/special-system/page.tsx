import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import cardiovascularBg from "@/public/images/chronic-disease/cardiovascular-bg.webp";
import diabetesBg from "@/public/images/chronic-disease/diabetes-bg.webp";
import dialysisBg from "@/public/images/chronic-disease/dialysis-bg.webp";
import doctorIcon from "@/public/images/chronic-disease/doctor-icon.svg";
import hypertensionBg from "@/public/images/chronic-disease/hypertension-bg.webp";
import osteoporosisBg from "@/public/images/chronic-disease/osteoporosis-bg.webp";
import patientIcon from "@/public/images/chronic-disease/patient-icon.svg";
import sterilizationHeroBg from "@/public/images/sterilization/sterilization-hero-bg.webp";
import individualToolsImage from "@/public/images/sterilization/sterilization-individual-tools.webp";
import safeEnvironmentImage from "@/public/images/sterilization/sterilization-safe-environment.webp";
import sanitizedWaterImage from "@/public/images/sterilization/sterilization-sanitized-water.webp";
import decorativeBrackets from "@/public/images/warranty/decorative-brackets.svg";
import osstemLogo1 from "@/public/images/warranty/osstem-logo-1.webp";
import osstemLogo2 from "@/public/images/warranty/osstem-logo-2.webp";
import warrantyCardImage from "@/public/images/warranty/warranty-card.webp";

// Import components
import { ChronicDiseaseBanner } from "./chronic-disease/components/chronic-disease-banner";
import ChronicDiseaseInfo from "./chronic-disease/components/chronic-disease-info";
import DigitalBanner from "./digital/components/digital-banner";
import DigitalScanner from "./digital/components/digital-scanner";
import RealDataSection from "./digital/components/real-data-section";
import PainReliefHero from "./pain-relief/components/pain-relief-hero";
import PainReliefSystem from "./pain-relief/components/pain-relief-system";

export const metadata: Metadata = {
  title: "스페셜 시스템 | 조은이플란트치과",
  description:
    "조은이플란트치과의 특별한 시스템 - 만성질환 특화진료, 디지털 시스템, 통증완화 시스템, 멸균 시스템, 보증 시스템",
  keywords: "만성질환 치과치료, 디지털 치과, 무통 치료, 멸균 시스템, 치과 보증",
  openGraph: {
    title: "스페셜 시스템 | 조은이플란트치과",
    description:
      "조은이플란트치과의 특별한 시스템으로 안전하고 편안한 치료를 경험하세요",
    type: "website",
  },
};

const chronicDiseases = [
  { id: 1, name: "당뇨", image: diabetesBg },
  { id: 2, name: "고혈압", image: hypertensionBg },
  { id: 3, name: "심혈관 질환", image: cardiovascularBg },
  { id: 4, name: "골다공증", image: osteoporosisBg },
  { id: 5, name: "신장 투석", image: dialysisBg },
];

export default function SpecialSystemPage() {
  return (
    <main>
      {/* 만성질환 특화진료 Section - EXACT COPY FROM chronic-disease/page.tsx */}
      <section id="chronic-disease" className="scroll-mt-[6.25rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col **:break-keep"
        >
          <div className="w-full py-8 md:py-12 lg:py-16">
            <div className="w-full max-w-[69.375rem] mx-auto px-4 flex flex-col gap-8 md:gap-12 lg:gap-24">
              {/* Header Section */}
              <div className="flex flex-col items-center gap-2">
                <motion.p
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-14 md:text-base lg:text-lg text-dark-primary text-center uppercase leading-[1.6] font-normal"
                >
                  CHOONEEPLANT DENTAL CLINIC
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col items-center gap-2 w-full"
                >
                  <h1 className="text-xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary text-center">
                    만성질환 특화진료
                  </h1>
                </motion.div>
              </div>

              {/* Chronic Disease Badges */}
              <motion.section
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full bg-teal-secondary rounded-lg py-4 md:py-8 lg:py-12 px-4 md:px-8 lg:px-16"
              >
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-[4.375rem]">
                  {chronicDiseases.map((disease, index) => (
                    <motion.div
                      key={disease.id}
                      initial={{ opacity: 0, y: 40, scale: 0.8, rotate: -10 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.15 * index,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex flex-col items-center gap-6 w-28"
                    >
                      <div className="relative w-28 h-28 rounded-full bg-[#EBF3FF] flex items-center justify-center">
                        <div className="relative w-20 h-20">
                          <Image
                            src={disease.image}
                            alt={disease.name}
                            fill
                            quality={100}
                            className="object-contain scale-95"
                          />
                        </div>
                      </div>
                      <h3 className="text-14 md:text-lg lg:text-2xl font-bold text-white text-center whitespace-nowrap">
                        {disease.name}
                      </h3>
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* Content Section */}
              <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col lg:flex-row gap-10 items-start lg:items-center **:break-keep"
              >
                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex-1 flex flex-col gap-10"
                >
                  <h2 className="text-xl md:text-2xl lg:text-[2.0737rem] font-bold text-dark-primary leading-[1.6] text-center lg:text-left">
                    전신상태를 고려한 세심한 치과진료,
                    <br />
                    양주{" "}
                    <span className="text-teal-primary">
                      조은이플란트치과의 기본
                    </span>
                    입니다
                  </h2>
                  <p className="text-14 md:text-base lg:text-xl font-normal text-dark-primary leading-[1.6] text-center lg:text-left">
                    당뇨, 고혈압, 심혈관 질환, 골다공증, 신장 투석 등 만성질환이
                    있는 분들도 안심하고 치료 받을 수 있도록 만성질환에 특화된
                    진료 프로세스를 갖추고 있습니다.
                  </p>
                </motion.div>

                {/* Icons */}
                <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid grid-cols-2 md:flex md:flex-col gap-4 md:gap-14"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full max-w-[10rem] md:max-w-[28.25rem]"
                  >
                    <Image
                      src={doctorIcon}
                      alt="가톨릭대학교 의정부성모병원 로고"
                      unoptimized
                      className="w-full h-auto"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full max-w-[10rem] md:max-w-[28.25rem]"
                  >
                    <Image
                      src={patientIcon}
                      alt="의정부을지대학교병원 로고"
                      unoptimized
                      className="w-full h-auto"
                    />
                  </motion.div>
                </motion.div>
              </motion.section>
            </div>
          </div>

          {/* Banner Section - Full Width */}
          <ChronicDiseaseBanner />

          <ChronicDiseaseInfo />
        </motion.div>
      </section>

      {/* 디지털시스템 Section - EXACT COPY FROM digital/page.tsx */}
      <section id="digital" className="scroll-mt-[6.25rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <DigitalBanner />
          <RealDataSection />
          <DigitalScanner />
        </motion.div>
      </section>

      {/* 통증완화시스템 Section - EXACT COPY FROM pain-relief/page.tsx */}
      <section id="pain-relief" className="scroll-mt-[6.25rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <PainReliefHero />
          <PainReliefSystem />
        </motion.div>
      </section>

      {/* 멸균시스템 Section - EXACT COPY FROM sterilization/page.tsx */}
      <section id="sterilization" className="scroll-mt-[6.25rem]">
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[8.125rem] pb-8 md:py-12 lg:py-24 **:break-keep mb-8 md:mb-12 lg:mb-24">
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center w-full gap-4 md:gap-6 lg:gap-[2.6875rem] px-4 md:px-8 lg:px-[3.5rem] max-w-[95.625rem] mx-auto"
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-2 w-full text-center"
            >
              <h1 className="text-xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary">
                멸균 시스템
              </h1>
              <p className="text-14 md:text-lg lg:text-[2.074rem] font-bold text-teal-secondary">
                눈에 띄지 않아도, 가장 중요하게 지킵니다
              </p>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full h-[15rem] md:h-[20rem] lg:h-[29.5rem] rounded-lg overflow-hidden"
            >
              <Image
                src={sterilizationHeroBg}
                alt="멸균 시스템 이미지"
                fill
                quality={100}
                className="object-cover object-[20%_0%] sm:object-center"
              />
            </motion.div>
          </motion.section>

          {/* Emphasis Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center justify-center gap-2 bg-teal-secondary w-full py-4 md:py-8 lg:py-[2.5rem] px-4 md:px-8 lg:px-[3.5rem]"
          >
            <div className="flex flex-col items-center w-full max-w-[95.625rem]">
              <div className="flex flex-col justify-center items-center text-center">
                <span className="text-14 md:text-xl lg:text-[2.074rem] font-bold text-white">
                  조은이플란트치과는 교차감염 예방을 위한{" "}
                </span>
                <div className="flex flex-col md:flex-row items-center gap-2">
                  <span className="text-14 md:text-xl lg:text-[2.074rem] font-bold text-teal-secondary bg-white py-1 px-2 md:px-4 rounded-md">
                    체계적인 멸균 시스템
                  </span>
                  <span className="text-14 md:text-xl lg:text-[2.074rem] font-bold text-white">
                    을 준수합니다.
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Cards Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center gap-6 md:gap-10 lg:gap-20 w-full max-w-[95.625rem] px-4 md:px-8 lg:px-[3.5rem]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-[1.875rem] w-full">
              {/* Card 1 - 1인 1기구는 필수 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-3 md:gap-4 lg:gap-6 w-full hover:scale-102 transition-transform duration-300"
              >
                <div className="relative w-full h-[12rem] md:h-[15rem] lg:h-[20.588rem] rounded-lg overflow-hidden">
                  <Image
                    src={individualToolsImage}
                    alt="1인 1기구 시스템"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 text-center px-4 md:px-0">
                  <h3 className="text-14 md:text-base lg:text-[1.44rem] font-bold text-teal-secondary">
                    1인 1기구는 필수
                  </h3>
                  <p className="text-14 md:text-base lg:text-[1.2rem] text-dark-primary">
                    모든 소독 과정을 거친 개인 기구들은 진료
                    <br />
                    직전 환자분들 앞에서 개봉합니다.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - 살균 진료수 사용 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-3 md:gap-4 lg:gap-6 w-full hover:scale-102 transition-transform duration-300"
              >
                <div className="relative w-full h-[12rem] md:h-[15rem] lg:h-[20.588rem] rounded-lg overflow-hidden">
                  <Image
                    src={sanitizedWaterImage}
                    alt="살균 진료수 시스템"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 text-center px-4 md:px-0">
                  <h3 className="text-14 md:text-base lg:text-[1.44rem] font-bold text-teal-secondary">
                    살균 진료수 사용
                  </h3>
                  <p className="text-14 md:text-base lg:text-[1.2rem] text-dark-primary">
                    진료 도중, 이후 이용하는 체어에서는 엄격하게 살균된
                    진료수만을 사용하고 있습니다.
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - 안전한 진료 환경을 위한 노력 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col gap-3 md:gap-4 lg:gap-6 w-full hover:scale-102 transition-transform duration-300"
              >
                <div className="relative w-full h-[12rem] md:h-[15rem] lg:h-[20.588rem] rounded-lg overflow-hidden">
                  <Image
                    src={safeEnvironmentImage}
                    alt="안전한 진료 환경"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2 text-center px-4 md:px-0">
                  <h3 className="text-14 md:text-base lg:text-[1.44rem] font-bold text-teal-secondary">
                    안전한 진료 환경을 위한 노력
                  </h3>
                  <p className="text-14 md:text-base lg:text-[1.2rem] text-dark-primary">
                    조은이플란트치과는 철저한 위생관리 시스템을 운영하고
                    있습니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>

      {/* 보증 시스템 Section - EXACT COPY FROM warranty/page.tsx */}
      <section id="warranty" className="scroll-mt-[6.25rem]">
        <div className="flex flex-col items-center py-8 md:py-12 lg:py-24 **:break-keep">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3 md:gap-4 lg:gap-8 px-4 md:px-8 lg:px-[3.5rem] max-w-[95.625rem] mx-auto w-full mb-6 md:mb-10 lg:mb-[4.4375rem]"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-2 text-center"
            >
              <p className="text-14 md:text-base lg:text-[1.2rem] text-dark-primary opacity-50 uppercase">
                CHOONEEPLANT DENTAL CLINIC
              </p>
              <h1 className="text-xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary mt-2 md:mt-3 lg:mt-4">
                보증 시스템
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-14 md:text-base lg:text-[1.44rem] text-dark-primary text-center max-w-[33.25rem]"
            >
              <span className="font-bold text-teal-secondary">비급여 치료</span>
              에 대해{" "}
              <span className="font-bold text-teal-secondary">
                독립된 보증 시스템
              </span>{" "}
              을 운영하여
              <br />
              치료의 지속성과 신뢰를 함께 제공합니다.
            </motion.p>
          </motion.section>

          {/* Content Section */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-[3.4375rem] px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-2 md:gap-4 lg:gap-[0.625rem] w-full lg:w-[32.75rem] border-b border-dark-primary pb-4 md:pb-6 lg:pb-4 text-center lg:text-left mr-auto"
            >
              <h2 className="text-xl md:text-2xl lg:text-[2.489rem] font-bold text-dark-primary">
                조은이플란트치과 치료보증기간
              </h2>
              <p className="text-14 md:text-base lg:text-[1.44rem] font-bold text-teal-secondary">
                조은이플란트는 진료 후 보증서를 제공하며,
                <br />
                건강한 치아를 유지할 수 있도록 관리해드립니다
              </p>
            </motion.div>

            {/* Warranty Card Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-full max-w-[19.6875rem] lg:w-[19.6875rem] h-[28rem] lg:h-[28.125rem] rounded-lg overflow-hidden"
            >
              <Image
                src={warrantyCardImage}
                alt="조은이플란트치과 보증서"
                fill
                quality={100}
                className="object-cover"
              />
            </motion.div>
          </motion.section>

          {/* Warranty Details Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center gap-6 md:gap-8 lg:gap-12 mt-8 md:mt-12 lg:mt-24 w-full pt-6 md:pt-10 lg:pt-24 xl:pt-40"
          >
            {/* Title Section with decorative elements */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col items-center gap-4 md:gap-6 w-full max-w-[46.875rem] mx-auto mt-12 sm:mt-0"
            >
              {/* Decorative brackets */}
              <div className="relative flex items-center justify-center w-full">
                <Image
                  src={decorativeBrackets}
                  alt="장식 요소"
                  width={449}
                  height={116}
                  className="absolute w-[280px] md:w-[360px] lg:w-[449px] h-auto -translate-y-10"
                  unoptimized
                />
                <h3 className="text-xl md:text-2xl lg:text-[2.489rem] font-bold text-dark-primary text-center relative z-10 py-2 md:py-3 lg:py-4">
                  정품 임플란트 사용
                </h3>
              </div>
              <div className="w-full border-b border-dark-primary mt-2 md:mt-3"></div>
            </motion.div>

            {/* Brand Cards */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-[1.875rem] px-4 md:px-8 lg:px-[3.5rem] max-w-[46.875rem] mx-auto w-full">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-4 lg:gap-[1.625rem] w-full hover:scale-102 transition-transform duration-300"
              >
                <div className="flex flex-col text-center px-2 md:px-6 h-[3rem] md:h-[4rem] lg:h-[5rem] justify-center">
                  <p className="text-14 md:text-base lg:text-[1.44rem] font-bold text-dark-primary whitespace-nowrap">
                    세계적인 신뢰를 받는 프리미엄
                  </p>
                  <p className="text-14 md:text-lg lg:text-[2.074rem] font-bold text-teal-secondary">
                    임플란트 토탈 솔루션
                  </p>
                </div>
                <div className="relative w-full max-w-[10rem] md:max-w-[20rem] h-[5rem] md:h-[7.25rem]">
                  <Image
                    src={osstemLogo1}
                    alt="오스템 임플란트 로고"
                    fill
                    quality={100}
                    className="object-contain"
                  />
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-4 lg:gap-[1.625rem] w-full hover:scale-102 transition-transform duration-300"
              >
                <div className="flex flex-col text-center px-2 md:px-6 h-[3rem] md:h-[4rem] lg:h-[5rem] justify-center">
                  <p className="text-14 md:text-base lg:text-[1.44rem] font-bold text-dark-primary">
                    열악한 골질에서도 빠르게
                  </p>
                  <p className="text-14 md:text-lg lg:text-[2.074rem] font-bold text-teal-secondary">
                    안정적인 골유착
                  </p>
                </div>
                <div className="relative w-full max-w-[10rem] md:max-w-[20rem] h-[5rem] md:h-[7.25rem]">
                  <Image
                    src={osstemLogo2}
                    alt="오스템 임플란트 로고 2"
                    fill
                    quality={100}
                    className="object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Bottom Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="w-full max-w-[46.875rem] mx-auto"
            >
              <div className="bg-teal-secondary py-4 md:py-6 lg:py-[0.625rem] px-4">
                <p className="text-14 md:text-base lg:text-[1.44rem] font-bold text-white text-center">
                  브랜드별 정품 보증서를 지급해드립니다
                </p>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
