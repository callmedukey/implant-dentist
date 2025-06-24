import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

// Import images from specialist page
import angledWT from "@/public/images/wisdom-tooth/angled-wisdom-tooth.webp";
import highDifficultyBg from "@/public/images/wisdom-tooth/high-difficulty-wisdom-tooth.webp";
import horizontalWT from "@/public/images/wisdom-tooth/horizontal-wisdom-tooth.webp";
import nerveLineBg from "@/public/images/wisdom-tooth/nerve-line-wisdom-tooth.webp";
import sameDay from "@/public/images/wisdom-tooth/same-day-wisdom-tooth-bg.webp";
import specialistIcon from "@/public/images/wisdom-tooth/surgeon-association.webp";
import verticalWT from "@/public/images/wisdom-tooth/vertical-wisdom-tooth.webp";

export const metadata: Metadata = {
  title: "사랑니 발치 | 조은이플란트치과",
  description:
    "구강악안면외과 전문의가 진행하는 안전한 사랑니 발치. 당일 진단부터 수술까지 원스톱 서비스로 대학병원 수준의 전문적인 진료를 제공합니다.",
  keywords:
    "사랑니 발치, 구강악안면외과, 전문의 사랑니, 사랑니 수술, 매복 사랑니, 당일 사랑니, 당일 발치, 원스톱 사랑니",
  openGraph: {
    title: "사랑니 발치 | 조은이플란트치과",
    description:
      "구강악안면외과 전문의가 진행하는 안전한 사랑니 발치. 당일 진단부터 수술까지 원스톱 서비스",
    type: "website",
  },
};

export default function WisdomToothPage() {
  return (
    <main className="min-h-screen bg-white **:break-keep">
      {/* 전문의 직접 발치 Section - EXACT COPY FROM specialist/page.tsx */}
      <section id="specialist" className="scroll-mt-[6.25rem]">
        {/* Hero Section */}
        <section className="pt-16 pb-8 md:pt-20 md:pb-12">
          <div className="mx-auto max-w-[69.375rem] px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="mb-2 text-base md:text-lg text-dark-primary/50">
                CHOONEEPLANT DENTAL CLINIC
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary mt-4 mb-6">
                구강악안면외과 전문의 사랑니 발치
              </h1>
              <p className="text-xl md:text-2xl text-dark-primary">
                사랑니 발치, 더 이상 대학병원 가실 필요 없습니다!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Specialist Section */}
        <section className="pb-8 md:py-12">
          <div className="mx-auto max-w-[69.375rem] px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-6 md:mb-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-teal-secondary">
                조은이플란트치과에서는 구강악면외과 전문의가 직접 발치합니다
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative w-[20.7rem] h-[20.7rem] md:w-[27.6rem] md:h-[27.6rem] lg:w-[34.5rem] lg:h-[34.5rem] mx-auto"
            >
              <Image
                src={specialistIcon}
                alt="구강악안면외과 전문의 아이콘"
                width={552}
                height={552}
                className="w-full h-full object-contain"
                quality={100}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg md:text-xl lg:text-2xl text-dark-primary text-center max-w-5xl mx-auto break-keep mt-8 lg:mt-0"
            >
              조은이플란트치과는 매복 사랑니 발치 수술의 경험이 풍부한
              구강악안면외과 전문의가
              <br className="hidden lg:block" />{" "}
              <span className="font-bold text-teal-secondary">
                신경과 인접한 고난도 사랑니까지
              </span>{" "}
              직접 진료 및 수술합니다.
            </motion.p>
          </div>
        </section>

        {/* Safe & Reliable Section */}
        <section className="py-8 md:py-12">
          {/* Full Width Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-teal-secondary w-full mb-8 md:mb-12"
          >
            <div className="p-6 md:p-8 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white"
              >
                안전하고 믿을 수 있는 사랑니 발치
              </motion.h2>
            </div>
          </motion.div>

          <div className="mx-auto max-w-[69.375rem] px-4">
            {/* Cards Container */}
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Card 1 - High Difficulty */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-lg overflow-hidden md:overflow-visible md:flex md:items-center md:w-full"
              >
                {/* Mobile Layout - Overlay Style */}
                <div className="relative w-full h-[23.75rem] md:hidden">
                  <Image
                    src={highDifficultyBg}
                    alt="고난도 사랑니 발치"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      고난도 사랑니 발치
                    </h3>
                    <p className="text-base font-bold">
                      수많은 고난도 케이스와 다양한 사랑니 발치 경험을 보유한
                      전문가가 직접 시술합니다.
                    </p>
                  </div>
                </div>

                {/* Desktop Layout - Side by Side */}
                <div className="hidden md:block md:w-1/2 md:h-[23.75rem] relative md:rounded-lg overflow-hidden">
                  <Image
                    src={highDifficultyBg}
                    alt="고난도 사랑니 발치"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="hidden md:block md:w-1/2 md:p-8">
                  <h3 className="text-[2.074rem] font-bold mb-2 text-dark-primary">
                    고난도 사랑니 발치
                  </h3>
                  <p className="text-lg lg:text-xl text-dark-primary">
                    수많은 고난도 케이스와 다양한 사랑니 발치 경험을 보유한
                    전문가가 직접 시술합니다.
                  </p>
                </div>
              </motion.div>

              {/* Card 2 - Nerve Line */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-lg overflow-hidden md:overflow-visible md:flex md:items-center md:w-full"
              >
                {/* Mobile Layout - Overlay Style */}
                <div className="relative w-full h-[23.75rem] md:hidden">
                  <Image
                    src={nerveLineBg}
                    alt="신경선까지 고려한 발치"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      신경선까지 고려한 발치
                    </h3>
                    <p className="text-base font-bold">
                      디지털 정밀 진단을 통해 신경선까지 정확히 분석하여 안전한
                      사랑니 발치가 가능합니다.
                    </p>
                  </div>
                </div>

                {/* Desktop Layout - Side by Side */}
                <div className="hidden md:block md:w-1/2 md:h-[23.75rem] relative md:rounded-lg overflow-hidden">
                  <Image
                    src={nerveLineBg}
                    alt="신경선까지 고려한 발치"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </div>
                <div className="hidden md:block md:w-1/2 md:p-8">
                  <h3 className="text-[2.074rem] font-bold mb-2 text-dark-primary">
                    신경선까지 고려한 발치
                  </h3>
                  <p className="text-lg lg:text-xl text-dark-primary">
                    디지털 정밀 진단을 통해 신경선까지 정확히 분석하여 안전한
                    사랑니 발치가 가능합니다.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </section>

      {/* 당일 사랑니 발치 Section - EXACT COPY FROM same-day/page.tsx */}
      <section id="same-day" className="scroll-mt-[6.25rem] pt-8">
        {/* Hero Section */}
        <section className="pt-12 pb-8 md:pt-16 md:pb-12">
          <div className="mx-auto max-w-[69.375rem] px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="mb-2 text-base md:text-lg text-dark-primary/50">
                CHOONEEPLANT DENTAL CLINIC
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-primary mt-2 mb-3">
                당일 사랑니 발치
              </h1>
              <p className="text-xl md:text-2xl lg:text-[1.725rem] font-bold text-teal-secondary">
                사랑니 발치는 구강악안면외과의 전문 진료 영역입니다
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="">
          <div className="mx-auto max-w-6xl px-4 pb-8 sm:pb-12 md:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-8"
            >
              {/* Background Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full h-[20rem] md:h-[24.5rem] rounded-lg overflow-hidden"
              >
                <Image
                  src={sameDay}
                  alt="당일 사랑니 발치 시술 장면"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="max-w-5xl text-center flex flex-col"
              >
                <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary my-2">
                  구강악안면외과의 전문의 직접 발치
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl text-dark-primary px-6 mt-2">
                  조은이플란트치과에서는 복잡하게 매복된 사랑니도 당일 진단 후,{" "}
                  <br className="hidden sm:block" />
                  <span className="font-bold text-teal-secondary">
                    대학병원 겸임교수로 재직 중인 구강악안면외과 전문의
                  </span>
                  가
                  <br className="hidden sm:block" />
                  직접진단부터 수술까지 원스톱으로 진행합니다.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* One-Stop Service Section */}
        <section className="py-8 md:py-12">
          {/* Full Width Banner */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-teal-secondary w-full mb-12"
          >
            <div className="py-6 md:py-8 px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white">
                  조은이플란트치과에서는
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-2 mt-1">
                  <span className="inline-block bg-white text-teal-secondary font-bold text-2xl md:text-3xl lg:text-[2.074rem] px-4 rounded">
                    원스틱 사랑니 발치 서비스
                  </span>
                  <span className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white">
                    를 제공합니다.
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="mx-auto max-w-[90rem] px-4">
            {/* Wisdom Tooth Types Grid */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 max-w-[69.375rem] mx-auto">
              {/* Horizontal Wisdom Tooth */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-1 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.667rem)]"
              >
                <div className="relative w-full h-[18rem] rounded-t-lg overflow-hidden">
                  <Image
                    src={horizontalWT}
                    alt="수평으로 매복된 사랑니"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary px-4 py-1 rounded-full text-base md:text-lg whitespace-nowrap font-bold">
                    수평으로 매복된 사랑니
                  </div>
                </div>
              </motion.div>

              {/* Vertical Wisdom Tooth */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-1 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.667rem)]"
              >
                <div className="relative w-full h-[18rem] rounded-t-lg overflow-hidden">
                  <Image
                    src={verticalWT}
                    alt="수직으로 매복된 사랑니"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary px-4 py-1 rounded-full text-base md:text-lg whitespace-nowrap font-bold text-center">
                    수직으로 매복된 사랑니
                  </div>
                </div>
              </motion.div>

              {/* Angled Wisdom Tooth */}
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex flex-col items-center gap-1 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.667rem)]"
              >
                <div className="relative w-full h-[18rem] rounded-t-lg overflow-hidden">
                  <Image
                    src={angledWT}
                    alt="각도를 가지고 매복된 사랑니"
                    fill
                    quality={100}
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-white text-teal-secondary px-4 py-1 rounded-full text-base md:text-lg whitespace-nowrap font-bold text-center">
                    각도를 가지고 매복된 사랑니
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-lg md:text-xl text-dark-primary max-w-7xl mx-auto mt-12 px-6 xl:whitespace-nowrap text-center mb-8"
            >
              신경과 가까운 고난도 케이스도 안전하게 수술하며, 회복까지 세심하게
              관리합니다. 대학병원 수준의 수술을 기다림 없이 편안하게
              받아보세요.
            </motion.p>
          </div>
        </section>
      </section>
    </main>
  );
}
