import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import diagnosisIcon from "@/public/images/integrated-care/accurate-diagnosis-icon.webp";
import heroBg from "@/public/images/integrated-care/cavity-hero-bg.webp";
import dentinCavity from "@/public/images/integrated-care/dentin-cavity.webp";
import enamelCavity from "@/public/images/integrated-care/enamel-cavity.webp";
import preservationIcon from "@/public/images/integrated-care/natural-tooth-preservation-icon.webp";
import necrosisCavity from "@/public/images/integrated-care/pulp-necrosis-cavity.webp";
import pulpitisCavity from "@/public/images/integrated-care/pulpitis-cavity.webp";
import longevityIcon from "@/public/images/integrated-care/tooth-longevity-icon.webp";

export const metadata: Metadata = {
  title: "충치치료 | 조은이플란트치과",
  description:
    "뽑지 않고 최대한 살리는 충치치료. 예방과 보존을 1순위로 치료합니다. 정확한 진단과 최소 침습 치료로 자연치아를 보호합니다.",
  keywords: "충치치료, 보존치료, 자연치아 보존, 레진치료, 인레이, 신경치료",
  openGraph: {
    title: "충치치료 | 조은이플란트치과",
    description: "예방과 보존을 1순위로 하는 충치치료",
    type: "website",
  },
};

export default function CavityPage() {
  return (
    <main className="min-h-screen bg-white **:break-keep">
      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center space-y-2"
          >
            <p className="text-base md:text-lg text-dark-primary/50">
              CHOONEEPLANT DENTAL CLINIC
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary mt-4">
              뽑지 않고 최대한 살리는 충치치료
            </h1>
            <p className="text-xl md:text-2xl lg:text-[1.725rem] font-bold text-teal-secondary mt-2">
              예방과 보존을 1순위로 치료합니다
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[20rem] md:h-[28rem] lg:h-[33.25rem] rounded-lg overflow-hidden mt-12"
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
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-dark-primary pb-4 mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary">
              조은이플란트치과의 보존 중심 충치치료
            </h2>
            <p className="text-lg md:text-xl text-dark-primary mt-4">
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
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-[4.375rem]">
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
              className="flex flex-col items-center gap-8 w-[18.75rem]"
            >
              <Image
                src={preservationIcon}
                alt="자연치아 보존 치료"
                width={100}
                height={100}
                quality={100}
                className="w-[6.25rem] h-[6.25rem]"
              />
              <div className="text-center space-y-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-teal-secondary">
                  자연치아 보존 치료
                </h3>
                <p className="text-base text-dark-primary">
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
              className="flex flex-col items-center gap-8 w-[18.75rem]"
            >
              <Image
                src={longevityIcon}
                alt="치아 수명 연장 치료"
                width={100}
                height={100}
                quality={100}
                className="w-[6.25rem] h-[6.25rem]"
              />
              <div className="text-center space-y-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-teal-secondary">
                  치아 수명 연장 치료
                </h3>
                <p className="text-base text-dark-primary">
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
              className="flex flex-col items-center gap-8 w-[18.75rem]"
            >
              <Image
                src={diagnosisIcon}
                alt="정확한 진단, 섬세한 치료"
                width={100}
                height={100}
                quality={100}
                className="w-[6.25rem] h-[6.25rem]"
              />
              <div className="text-center space-y-2">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-teal-secondary">
                  정확한 진단, 섬세한 치료
                </h3>
                <p className="text-base text-dark-primary">
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
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-dark-primary pb-2 mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary">
              충치 진행단계 및 치료방법
            </h2>
          </motion.div>

          {/* Cavity Stages Grid */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
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
              className="flex flex-col w-full sm:w-[16rem] h-[25.4375rem]"
            >
              <div className="relative">
                <div className="relative h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                  <Image
                    src={enamelCavity}
                    alt="법랑질 충치"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-base">
                  법랑질 충치
                </div>
              </div>
              <div className="flex flex-col gap-2 py-4 px-2 flex-1">
                <p className="text-sm md:text-base text-dark-primary text-center flex-1">
                  치아 겉면인 법랑질의 충치로
                  <br />
                  통증이 거의 없습니다.
                </p>
                <p className="text-lg md:text-xl font-bold text-teal-secondary text-center">
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
              className="flex flex-col w-full sm:w-[16rem] h-[25.4375rem]"
            >
              <div className="relative">
                <div className="relative h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                  <Image
                    src={dentinCavity}
                    alt="상아질 충치"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-base">
                  상아질 충치
                </div>
              </div>
              <div className="flex flex-col gap-2 py-4 px-2 flex-1">
                <p className="text-sm md:text-base text-dark-primary text-center flex-1">
                  법랑질 안쪽에 있는 상아질까지 충치가 진행되어 뜨겁거나 차가운
                  음식을 먹으면 시린 증상이 나타납니다.
                </p>
                <p className="text-lg md:text-xl font-bold text-teal-secondary text-center">
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
              className="flex flex-col w-full sm:w-[16rem] h-[25.4375rem]"
            >
              <div className="relative">
                <div className="relative h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                  <Image
                    src={pulpitisCavity}
                    alt="치수염 충치"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-base">
                  치수염 충치
                </div>
              </div>
              <div className="flex flex-col gap-2 py-4 px-2 flex-1">
                <p className="text-sm md:text-base text-dark-primary text-center flex-1">
                  상아질 안쪽 신경까지 염증이 진행되어 극심한 통증으로
                  <br />
                  참기 어려운 정도가 됩니다.
                </p>
                <p className="text-lg md:text-xl font-bold text-teal-secondary text-center">
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
              className="flex flex-col w-full sm:w-[16rem] h-[25.4375rem]"
            >
              <div className="relative">
                <div className="relative h-[15rem] rounded-t-lg overflow-hidden bg-teal-secondary">
                  <Image
                    src={necrosisCavity}
                    alt="치수 괴사"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary font-bold px-4 py-0.5 rounded-full text-base">
                  치수 괴사
                </div>
              </div>
              <div className="flex flex-col gap-2 py-4 px-2 flex-1">
                <p className="text-sm md:text-base text-dark-primary text-center flex-1">
                  치아 내부에 있는 조직이 괴사되고,
                  <br />
                  뿌리 주변의 염증으로 인하여 뼈가
                  <br />
                  점차 소실됩니다.
                </p>
                <p className="text-lg md:text-xl font-bold text-teal-secondary text-center">
                  발치 + 임플란트
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
