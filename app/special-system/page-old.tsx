import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

// Import images
import sterilizationHeroBg from "@/public/images/sterilization/sterilization-hero-bg.webp";
import individualToolsImage from "@/public/images/sterilization/sterilization-individual-tools.webp";
import safeEnvironmentImage from "@/public/images/sterilization/sterilization-safe-environment.webp";
import sanitizedWaterImage from "@/public/images/sterilization/sterilization-sanitized-water.webp";
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

export default function SpecialSystemPage() {
  return (
    <main>
      {/* 만성질환 특화진료 Section */}
      <section id="chronic-disease" className="scroll-mt-[6.25rem]">
        <div className="flex flex-col items-center py-16 md:py-24 **:break-keep">
          {/* Header Section */}
          <div className="w-full max-w-[69.375rem] px-4 flex flex-col gap-10 md:gap-16">
            <div className="flex flex-col items-center gap-2">
              <motion.p
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-base md:text-lg text-dark-primary text-center uppercase"
              >
                CHOONEEPLANT DENTAL CLINIC
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center"
              >
                만성질환 특화진료
              </motion.h1>
            </div>

            {/* Disease Badges */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap justify-center gap-3 md:gap-4"
            >
              {["당뇨", "고혈압", "심혈관 질환", "골다공증", "신장 투석"].map(
                (disease, index) => (
                  <motion.span
                    key={disease}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + index * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="px-4 md:px-6 py-2 md:py-3 bg-gray-lighter rounded-full text-base md:text-lg font-medium text-dark-primary hover:bg-teal-bg hover:text-teal-secondary transition-colors duration-300"
                  >
                    {disease}
                  </motion.span>
                )
              )}
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            >
              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-6">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-primary leading-relaxed">
                  만성질환 환자분들도
                  <br />
                  <span className="text-teal-secondary">안전한 치과치료</span>를
                  받으실 수 있습니다.
                </h2>
                <p className="text-base md:text-lg text-dark-primary leading-relaxed">
                  조은이플란트치과는 만성질환 환자분들의 특수한 상황을 고려하여
                  맞춤형 치료 계획을 수립합니다. 전신 건강 상태를 면밀히
                  파악하고, 담당 의료진과의 협진을 통해 안전하고 효과적인 치료를
                  제공합니다.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Banner Section */}
          <ChronicDiseaseBanner />

          {/* Info Section */}
          <ChronicDiseaseInfo />
        </div>
      </section>

      {/* 디지털시스템 Section */}
      <section id="digital" className="scroll-mt-[6.25rem]">
        <DigitalBanner />
        <RealDataSection />
        <DigitalScanner />
      </section>

      {/* 통증완화시스템 Section */}
      <section id="pain-relief" className="scroll-mt-[6.25rem]">
        <PainReliefHero />
        <PainReliefSystem />
      </section>

      {/* 멸균시스템 Section */}
      <section id="sterilization" className="scroll-mt-[6.25rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center pt-8 pb-20 md:pt-0 md:pb-24 **:break-keep"
        >
          <div className="w-full max-w-[69.375rem] px-4 flex flex-col gap-16 md:gap-20">
            {/* Hero Section */}
            <div className="flex flex-col items-center gap-8 md:gap-12">
              <div className="flex flex-col items-center gap-2">
                <motion.p
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-base md:text-lg text-dark-primary text-center uppercase"
                >
                  CHOONEEPLANT DENTAL CLINIC
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center"
                >
                  멸균 시스템
                </motion.h1>
              </div>

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full relative rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={sterilizationHeroBg}
                  alt="조은이플란트치과 멸균 시스템"
                  width={1110}
                  height={400}
                  quality={100}
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
              </motion.div>
            </div>

            {/* Emphasis Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center gap-6 text-center"
            >
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-primary leading-relaxed">
                조은이플란트치과는
                <br />
                <span className="text-teal-secondary">
                  체계적인 멸균 시스템
                </span>
                으로 안전한 진료환경을 만듭니다
              </h2>
              <p className="text-base md:text-lg text-dark-primary/70 max-w-[50rem] leading-relaxed">
                모든 기구는 환자별로 개별 포장되어 멸균 처리되며, 진료 시 직접
                개봉하여 사용합니다. 또한 살균 진료수 시스템을 통해 세균과
                바이러스로부터 안전한 진료 환경을 제공합니다.
              </p>
            </motion.div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1 - 1인 1기구 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gray-lighter rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-[200px] md:h-[240px]">
                  <Image
                    src={individualToolsImage}
                    alt="1인 1기구 시스템"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-dark-primary mb-3">
                    1인 1기구
                  </h3>
                  <p className="text-sm md:text-base text-dark-primary/70 leading-relaxed">
                    환자별 개별 포장 멸균으로
                    <br />
                    교차 감염을 완벽히 차단합니다
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - 살균 진료수 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gray-lighter rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-[200px] md:h-[240px]">
                  <Image
                    src={sanitizedWaterImage}
                    alt="살균 진료수 시스템"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-dark-primary mb-3">
                    살균 진료수
                  </h3>
                  <p className="text-sm md:text-base text-dark-primary/70 leading-relaxed">
                    특수 정수 시스템으로
                    <br />
                    안전한 진료수를 공급합니다
                  </p>
                </div>
              </motion.div>

              {/* Card 3 - 안전한 진료 환경 */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gray-lighter rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-[200px] md:h-[240px]">
                  <Image
                    src={safeEnvironmentImage}
                    alt="안전한 진료 환경"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold text-dark-primary mb-3">
                    안전한 진료 환경
                  </h3>
                  <p className="text-sm md:text-base text-dark-primary/70 leading-relaxed">
                    공기 살균 시스템으로
                    <br />
                    쾌적한 진료 공간을 유지합니다
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 보증 시스템 Section */}
      <section id="warranty" className="scroll-mt-[6.25rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center pt-8 pb-20 md:pt-0 md:pb-24 **:break-keep"
        >
          <div className="w-full max-w-[69.375rem] px-4 flex flex-col gap-16 md:gap-20">
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
                className="text-base md:text-lg text-dark-primary text-center uppercase"
              >
                CHOONEEPLANT DENTAL CLINIC
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center"
              >
                보증 시스템
              </motion.h1>
            </div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            >
              {/* Warranty Card Image */}
              <motion.div
                initial={{ opacity: 0, x: -40, scale: 0.9 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex-1 relative"
              >
                <Image
                  src={warrantyCardImage}
                  alt="조은이플란트치과 보증서"
                  width={540}
                  height={380}
                  quality={100}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex-1 flex flex-col gap-6"
              >
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-primary leading-relaxed">
                  안심하고 받는 치료,
                  <br />
                  <span className="text-teal-secondary">확실한 보증</span>
                  으로 책임집니다
                </h2>
                <p className="text-base md:text-lg text-dark-primary/80 leading-relaxed">
                  조은이플란트치과는 모든 치료에 대해 체계적인 보증 시스템을
                  운영합니다. 정품 재료 사용과 숙련된 의료진의 시술로 최상의
                  결과를 약속드립니다.
                </p>
                <div className="flex flex-col gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-secondary rounded-full"></div>
                    <span className="text-base md:text-lg text-dark-primary">
                      시술 후 정기적인 사후관리 제공
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-secondary rounded-full"></div>
                    <span className="text-base md:text-lg text-dark-primary">
                      공식 인증된 정품 재료만 사용
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-teal-secondary rounded-full"></div>
                    <span className="text-base md:text-lg text-dark-primary">
                      투명한 치료 과정 및 비용 안내
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Warranty Details */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-teal-bg rounded-lg p-8 md:p-12"
            >
              <div className="flex flex-col items-center gap-8">
                <h3 className="text-lg md:text-xl font-bold text-dark-primary text-center">
                  오스템 임플란트 공식 인증 병원
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
                  <Image
                    src={osstemLogo1}
                    alt="오스템 임플란트"
                    width={180}
                    height={60}
                    quality={100}
                    className="h-12 md:h-16 w-auto"
                  />
                  <div className="h-12 md:h-16 w-px bg-gray-light hidden md:block"></div>
                  <Image
                    src={osstemLogo2}
                    alt="오스템 TS III"
                    width={140}
                    height={60}
                    quality={100}
                    className="h-12 md:h-16 w-auto"
                  />
                </div>
                <p className="text-sm md:text-base text-dark-primary/70 text-center max-w-[40rem]">
                  조은이플란트치과는 오스템 임플란트 공식 파트너로서, 정품
                  임플란트만을 사용하며 체계적인 사후 관리를 제공합니다.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
