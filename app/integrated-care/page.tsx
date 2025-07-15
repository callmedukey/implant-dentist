import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

// Import images from whitening page
import diagnosisIcon from "@/public/images/integrated-care/accurate-diagnosis-icon.webp";
import biopsyProcess from "@/public/images/integrated-care/biopsy-process.webp";
import heroBg from "@/public/images/integrated-care/cavity-hero-bg.webp";
import dentinCavity from "@/public/images/integrated-care/dentin-cavity.webp";
import enamelCavity from "@/public/images/integrated-care/enamel-cavity.webp";
import preservationIcon from "@/public/images/integrated-care/natural-tooth-preservation-icon.webp";
import necrosisCavity from "@/public/images/integrated-care/pulp-necrosis-cavity.webp";
import pulpitisCavity from "@/public/images/integrated-care/pulpitis-cavity.webp";
import softTissueBanner from "@/public/images/integrated-care/soft-tissue-banner.webp";
import longevityIcon from "@/public/images/integrated-care/tooth-longevity-icon.webp";
import teethBeforeAfterWhitening from "@/public/images/integrated-care/whitening/teeh-before-after-whitening.webp";
import toothIcon1 from "@/public/images/integrated-care/whitening/tooth-icon-1.svg";
import toothIcon2 from "@/public/images/integrated-care/whitening/tooth-icon-2.svg";
import whiteningBackground from "@/public/images/integrated-care/whitening/whitening-definition-bg.webp";
import whiteningMain from "@/public/images/integrated-care/whitening/whitening-main.webp";
import whiteningProduct from "@/public/images/integrated-care/whitening/whitening-product.webp";

export const metadata: Metadata = {
  title: "통합진료 | 조은이플란트치과",
  description:
    "치아미백, 충치치료, 구강연조직질환 등 종합적인 구강 진료 서비스. 예방과 보존을 1순위로 하는 조은이플란트치과의 통합진료.",
  keywords:
    "통합진료, 치아미백, 충치치료, 구강연조직질환, 보존치료, 자연치아 보존, 조은이플란트치과",
  openGraph: {
    title: "통합진료 | 조은이플란트치과",
    description: "종합적인 구강 건강을 위한 통합진료 서비스",
    type: "website",
  },
};

export default function IntegratedCarePage() {
  return (
    <main className="**:break-keep">
      {/* 치아미백 Section - EXACT COPY FROM whitening/page.tsx */}
      <section
        id="whitening"
        className="scroll-mt-[5.75rem] lg:scroll-mt-[6rem]"
      >
        <div className="flex flex-col items-center py-4 md:py-12 lg:py-16 mt-16 md:mt-0">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-2 px-4 md:px-8 max-w-6xl mx-auto w-full text-center"
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
              className="text-14 md:text-lg lg:text-[1.2rem] text-dark-primary uppercase leading-[1.6]"
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
              치아미백
            </motion.h1>
          </motion.section>

          {/* Main Image Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full mt-4 md:mt-10 lg:mt-12"
          >
            <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[40rem] lg:h-[48.938rem]">
              <Image
                src={whiteningMain}
                alt="치아미백 시술"
                fill
                quality={100}
                className="object-cover"
                priority
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 left-1/2 right-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-2 md:gap-4 px-4 text-center w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col items-center gap-2 md:gap-4"
                  >
                    {/* Tooth Icons */}
                    <div className="relative w-[50px] md:w-[60px] lg:w-[88px] h-[50px] md:h-[60px] lg:h-[85px] translate-x-2">
                      <Image
                        src={toothIcon1}
                        alt=""
                        unoptimized
                        className="absolute left-0 top-[10px] md:top-[15px] lg:top-[25px] w-[35px] md:w-[45px] lg:w-[63px] h-auto"
                      />
                      <Image
                        src={toothIcon2}
                        alt=""
                        width={33}
                        height={30}
                        unoptimized
                        className="absolute right-0 top-0 w-[25px] md:w-[30px] lg:w-[41px] h-auto"
                      />
                    </div>

                    {/* First text */}
                    <h2 className="text-xl md:text-4xl lg:text-[3rem] font-bold text-white drop-shadow-md">
                      필터 없이,
                    </h2>

                    {/* Vertical Line */}
                    <div className="w-px h-16 md:h-24 lg:h-32 bg-white"></div>

                    {/* Second text */}
                    <h2 className="text-xl md:text-4xl lg:text-[3rem] font-bold text-white drop-shadow-md">
                      맑고 깨끗하게!
                    </h2>

                    <p className="text-14 md:text-xl lg:text-[1.44rem] font-bold text-white drop-shadow-md">
                      오늘보다 더 환한 내일을 위해
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* What is Whitening Section */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-6xl mx-auto w-full px-4 md:px-8 mt-6 md:mt-16 lg:mt-20 pt-8 md:pt-0"
          >
            <div className="flex flex-col items-center gap-2 md:gap-6 lg:gap-8">
              {/* Text Content */}
              <div className="flex flex-col items-center gap-2 md:gap-4 lg:gap-5 text-center max-w-[35.938rem]">
                <h2 className="text-lg md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6]">
                  치아미백이란?
                </h2>
                <p className="text-14 md:text-lg lg:text-[1.44rem] text-dark-primary leading-[1.6]">
                  변색된 치아에 특수 약제를 적용해 치아 본연의 밝은 색을 되찾아
                  미소에 자신감을 되찾아주는 시술입니다.
                </p>
              </div>

              {/* Background Image */}
              <div className="relative w-full h-[15rem] md:h-[18rem] lg:h-[21rem] rounded-lg overflow-hidden">
                <Image
                  src={whiteningBackground}
                  alt="치아미백 배경 이미지"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.section>

          {/* Customized Whitening Section */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-6xl mx-auto w-full px-4 md:px-8 mt-6 md:mt-16 lg:mt-20 pt-8 md:pt-0"
          >
            <div className="flex flex-col gap-3 md:gap-8 lg:gap-12">
              {/* Header */}
              <div className="text-center max-w-[68.375rem] mx-auto">
                <h2 className="text-lg md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6] mb-2">
                  개인의 치아상태와 색상, 변색의 원인을{" "}
                  <br className="md:hidden" /> 고려한 치아미백
                </h2>
                <p className="text-14 md:text-lg lg:text-[1.44rem] leading-[1.6]">
                  조은이플란트치과에서는{" "}
                  <span className="text-teal-secondary font-bold">
                    맞춤형 치아 미백 솔루션
                  </span>
                  을 제공합니다.
                </p>
              </div>

              {/* Before/After Images */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full h-[5rem] lg:h-[15rem]"
              >
                <Image
                  src={teethBeforeAfterWhitening}
                  alt="치아미백 전후 비교"
                  fill
                  quality={100}
                  className="object-fit object-center"
                />
              </motion.div>
            </div>
          </motion.section>

          {/* Professional Whitening Product Section */}
          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-6xl mx-auto w-full px-4 md:px-8 mt-6 md:mt-16 lg:mt-20"
          >
            <div className="flex flex-col lg:flex-row justify-center items-center rounded-lg overflow-hidden">
              {/* Content */}
              <div className="flex flex-col gap-3 md:gap-8 lg:gap-10 py-4 md:py-12 lg:py-16 lg:pr-8 flex-1 text-center lg:text-left">
                {/* Header */}
                <div className="flex flex-col gap-4">
                  <p className="text-14 md:text-base lg:text-[1.2rem] text-teal-secondary uppercase leading-[1.6]">
                    CHOONEEPLANT DENTAL CLINIC
                  </p>
                  <h2 className="text-lg md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary leading-[1.6]">
                    식약처가 허가한 전문가용 치아미백제
                  </h2>
                  <p className="text-14 md:text-lg text-dark-primary leading-[1.6]">
                    조은이플란트치과는 식약처에서 안정성과 효과성을
                    <br />
                    인증받은 정품재료만 사용합니다.
                  </p>
                </div>

                {/* Feature Box */}
                <div className="bg-teal-secondary rounded-lg p-4 md:p-8 lg:p-10 text-center">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap justify-center items-center gap-2">
                      <span className="bg-white text-teal-secondary font-bold text-base md:text-2xl leading-[1.6] px-3 md:px-4 rounded">
                        환자 1인당 1키트
                      </span>
                      <span className="text-white font-bold text-base md:text-2xl leading-[1.6]">
                        를
                      </span>
                    </div>
                    <p className="text-white font-bold text-base md:text-2xl leading-[1.6]">
                      온전히 모두 사용합니다.
                    </p>
                    <p className="text-white text-14 md:text-lg leading-[1.6] mt-2">
                      조은이플란트치과에서 효과 좋은 치아미백 결과를 만나보세요!
                    </p>
                  </div>
                </div>
              </div>

              {/* Product Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full lg:w-[29.313rem] h-[20rem] md:h-[25rem] lg:h-[34.438rem] rounded-lg overflow-hidden"
              >
                <Image
                  src={whiteningProduct}
                  alt="전문가용 치아미백제"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.section>
        </div>
      </section>

      {/* 충치치료 Section - EXACT COPY FROM cavity/page.tsx */}
      <section
        id="cavity"
        className="scroll-mt-[5rem] min-h-screen bg-white **:break-keep mt-8 md:mt-0"
      >
        {/* Hero Section */}
        <section className="pt-8 pb-4 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-1 md:space-y-2"
            >
              <p className="text-14 md:text-lg text-dark-primary/50">
                CHOONEEPLANT DENTAL CLINIC
              </p>
              <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-dark-primary mt-2 md:mt-4">
                뽑지 않고 최대한 살리는 충치치료
              </h1>
              <p className="text-14 md:text-2xl lg:text-[1.725rem] font-bold text-teal-secondary mt-1 md:mt-2">
                예방과 보존을 1순위로 치료합니다
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
              className="relative w-full h-[15rem] md:h-[28rem] lg:h-[33.25rem] rounded-lg overflow-hidden mt-4 md:mt-8"
            >
              <Image
                src={heroBg}
                alt="충치치료"
                fill
                quality={100}
                className="object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Conservation Treatment Section */}
        <section className="py-4 md:py-12">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-dark-primary pb-2 mb-4 md:mb-8"
            >
              <h2 className="text-lg md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary text-center md:text-left">
                조은이플란트치과의 보존 중심 충치치료
              </h2>
              <p className="text-14 md:text-xl text-dark-primary mt-2 md:mt-4 text-center md:text-left">
                조은이플란트치과는{" "}
                <span className="text-teal-secondary font-bold">
                  충치를 조기에 발견
                </span>
                하고,{" "}
                <span className="text-teal-secondary font-bold">
                  치아를 최대한 보존
                </span>
                하는 것을 가장 중요한 치료 원칙으로 삼고 있습니다.
              </p>
            </motion.div>

            {/* Treatment Philosophy Cards */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-12 mt-8 md:mt-16">
              {/* Natural Tooth Preservation */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-6 w-[18.75rem]"
              >
                <Image
                  src={preservationIcon}
                  alt="자연치아 보존 치료"
                  quality={100}
                  className="w-[5rem] md:w-[6.25rem] h-[5rem] md:h-[6.25rem]"
                />
                <div className="text-center space-y-2">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-teal-secondary">
                    자연치아 보존 치료
                  </h3>
                  <p className="text-14 text-dark-primary">
                    손상된 부위만 정밀하게 제거하고, 자연 치아는 그대로 유지하는
                    보존적 접근을 지향합니다.
                  </p>
                </div>
              </motion.div>

              {/* Tooth Longevity */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-6 w-[18.75rem]"
              >
                <Image
                  src={longevityIcon}
                  alt="치아 수명 연장 치료"
                  quality={100}
                  className="w-[5rem] md:w-[6.25rem] h-[5rem] md:h-[6.25rem]"
                />
                <div className="text-center space-y-2">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-teal-secondary">
                    치아 수명 연장 치료
                  </h3>
                  <p className="text-14 text-dark-primary">
                    불필요하게 치아를 삭제하거나 뽑는 것이 아닌, 자연치의 수명을
                    늘리는 치료를 제공합니다.
                  </p>
                </div>
              </motion.div>

              {/* Accurate Diagnosis */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-3 md:gap-6 w-[18.75rem]"
              >
                <Image
                  src={diagnosisIcon}
                  alt="정확한 진단, 섬세한 치료"
                  quality={100}
                  className="w-[5rem] md:w-[6.25rem] h-[5rem] md:h-[6.25rem]"
                />
                <div className="text-center space-y-2">
                  <h3 className="text-base md:text-xl lg:text-2xl font-bold text-teal-secondary">
                    정확한 진단, 섬세한 치료
                  </h3>
                  <p className="text-14 text-dark-primary">
                    정확한 진단과 최소 침습 치료로,
                    <br />
                    치아 하나하나를 소중히 지켜드립니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cavity Progression Section */}
        <section className="py-6 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-dark-primary pb-1 mb-4 md:mb-10"
            >
              <h2 className="text-lg md:text-4xl lg:text-5xl font-bold text-dark-primary text-center md:text-left">
                충치 진행단계 및 치료방법
              </h2>
            </motion.div>

            {/* Cavity Stages Grid */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-8">
              {/* Enamel Cavity */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full sm:w-[16rem] min-h-[16rem] md:h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[10rem] md:h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={enamelCavity}
                      alt="법랑질 충치"
                      fill
                      quality={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-3 md:px-4 py-0.5 rounded-full text-14 md:text-base">
                    법랑질 충치
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-2 py-2 md:py-3 px-2 flex-1">
                  <p className="text-14 md:text-base text-dark-primary text-center flex-1">
                    치아 겉면인 법랑질의 충치로
                    <br />
                    통증이 거의 없습니다.
                  </p>
                  <p className="text-14 md:text-xl font-bold text-teal-secondary text-center">
                    레진치료
                  </p>
                </div>
              </motion.div>

              {/* Dentin Cavity */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full sm:w-[16rem] min-h-[16rem] md:h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[10rem] md:h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={dentinCavity}
                      alt="상아질 충치"
                      fill
                      quality={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-3 md:px-4 py-0.5 rounded-full text-14 md:text-base">
                    상아질 충치
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-2 py-2 md:py-3 px-2 flex-1">
                  <p className="text-14 md:text-base text-dark-primary text-center flex-1">
                    법랑질 안쪽에 있는 상아질까지 충치가 진행되어 뜨겁거나
                    차가운 음식을 먹으면 시린 증상이 나타납니다.
                  </p>
                  <p className="text-14 md:text-xl font-bold text-teal-secondary text-center">
                    인레이
                  </p>
                </div>
              </motion.div>

              {/* Pulpitis Cavity */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full sm:w-[16rem] min-h-[16rem] md:h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[10rem] md:h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={pulpitisCavity}
                      alt="치수염 충치"
                      fill
                      quality={100}
                      className="object-contain "
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-3 md:px-4 py-0.5 rounded-full text-14 md:text-base">
                    치수염 충치
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-2 py-2 md:py-3 px-2 flex-1">
                  <p className="text-14 md:text-base text-dark-primary text-center flex-1">
                    상아질 안쪽 신경까지 염증이 진행되어 극심한 통증으로
                    <br className="" />
                    참기 어려운 정도가 됩니다.
                  </p>
                  <p className="text-14 md:text-xl font-bold text-teal-secondary text-center">
                    신경치료 + 크라운
                  </p>
                </div>
              </motion.div>

              {/* Pulp Necrosis */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col w-full sm:w-[16rem] min-h-[16rem] md:h-[25.4375rem]"
              >
                <div className="relative">
                  <div className="relative h-[10rem] md:h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                    <Image
                      src={necrosisCavity}
                      alt="치수 괴사"
                      fill
                      quality={100}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-3 md:px-4 py-0.5 rounded-full text-14 md:text-base">
                    치수 괴사
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 md:gap-2 py-2 md:py-3 px-2 flex-1">
                  <p className="text-14 md:text-base text-dark-primary text-center flex-1">
                    치아 내부에 있는 조직이 괴사되고,
                    <br className="hidden sm:block" />
                    뿌리 주변의 염증으로 인하여 뼈가
                    <br className="hidden sm:block" />
                    점차 소실됩니다.
                  </p>
                  <p className="text-14 md:text-xl font-bold text-teal-secondary text-center">
                    발치 + 임플란트
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </section>

      {/* 구강연조직질환 Section - EXACT COPY FROM soft-tissue/page.tsx */}
      <section
        id="soft-tissue"
        className="scroll-mt-[5.25rem] lg:scroll-mt-[6rem] mt-2"
      >
        <div className="flex flex-col items-center py-8 md:py-12 lg:py-16 **:break-keep">
          {/* Header Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-3 md:gap-6 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
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
                className="text-14 md:text-lg lg:text-[1.2rem] text-dark-primary uppercase leading-[1.6]"
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
                className="text-14 md:text-xl lg:text-[1.44rem] text-dark-primary leading-[1.6] max-w-5xl px-0 md:px-8 lg:px-[4.5rem] mt-1 md:mt-2 text-center"
              >
                입안의 잇몸, 혀, 뺨 안쪽 점막 등 부드러운 조직에 생기는 질환을
                말합니다. 염증, 궤양, 색소침착, 백반증 등 다양한 형태로
                나타나며, 정확한 진단과 조기 치료가 중요합니다.
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
              className="flex flex-col items-center gap-3 md:gap-6 w-full"
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

              <p className="text-base md:text-2xl lg:text-[1.728rem] font-bold text-dark-primary text-center leading-[1.6]">
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
            className="w-full mt-16 lg:mt-20"
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
              className="bg-teal-secondary py-3 md:py-4 px-2 text-center"
            >
              <h2 className="text-lg md:text-3xl lg:text-[2.074rem] font-bold text-white text-center leading-[1.6]">
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
            className="flex flex-col items-center gap-3 md:gap-12 lg:gap-16 mt-16 lg:mt-20 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
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
                <h2 className="text-lg md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary text-center md:text-left">
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
              className="relative w-full h-[30rem] md:h-[60rem] lg:h-[75.408rem]"
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
              className="text-14 md:text-2xl font-bold text-dark-primary text-center leading-[1.6] px-4"
            >
              연조직 질환 이외에도{" "}
              <span className="text-teal-secondary font-bold">
                뼈 내부에 발생한 물혹이나 낭종도
              </span>{" "}
              편리하게 조직검사 가능합니다
            </motion.p>
          </motion.section>
        </div>
      </section>
    </main>
  );
}
