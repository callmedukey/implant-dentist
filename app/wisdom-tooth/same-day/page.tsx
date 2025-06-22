import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import angledWT from "@/public/images/wisdom-tooth/angled-wisdom-tooth.webp";
import horizontalWT from "@/public/images/wisdom-tooth/horizontal-wisdom-tooth.webp";
import sameDay from "@/public/images/wisdom-tooth/same-day-wisdom-tooth-bg.webp";
import verticalWT from "@/public/images/wisdom-tooth/vertical-wisdom-tooth.webp";

export const metadata: Metadata = {
  title: "당일 사랑니 발치 | 조은이플란트치과",
  description:
    "대학병원 방문 없이 당일 진단부터 수술까지 원스톱 사랑니 발치. 구강악안면외과 전문의가 직접 진료합니다.",
  keywords:
    "당일 사랑니, 당일 발치, 원스톱 사랑니, 즉시 사랑니 발치, 빠른 사랑니 수술",
  openGraph: {
    title: "당일 사랑니 발치 | 조은이플란트치과",
    description: "대학병원 방문 없이 당일 진단부터 수술까지 원스톱 사랑니 발치",
    type: "website",
  },
};

export default function SameDayWisdomToothPage() {
  return (
    <main className="min-h-screen bg-white **:break-keep">
      {/* Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-28">
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
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:pb-20 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-12"
          >
            {/* Background Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
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
              <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary my-4">
                구강악안면외과의 전문의 직접 발치
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-dark-primary px-6 mt-4">
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
      <section className="py-20 md:py-28">
        {/* Full Width Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="bg-teal-secondary w-full mb-20"
        >
          <div className="py-10 md:py-10 px-4 text-center">
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
              <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
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
          <div className="flex flex-wrap justify-center gap-8 md:gap-10 lg:gap-14 max-w-[69.375rem] mx-auto">
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
              className="flex flex-col items-center gap-2 w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-2.333rem)]"
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
              className="flex flex-col items-center gap-2 w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-2.333rem)]"
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
              className="flex flex-col items-center gap-2 w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-2.333rem)]"
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
            transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-dark-primary max-w-7xl mx-auto mt-20 px-6 xl:whitespace-nowrap text-center mb-16"
          >
            신경과 가까운 고난도 케이스도 안전하게 수술하며, 회복까지 세심하게
            관리합니다. 대학병원 수준의 수술을 기다림 없이 편안하게 받아보세요.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
