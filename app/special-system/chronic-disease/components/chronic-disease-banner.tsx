"use client";

import { motion } from "motion/react";
import Image from "next/image";

import bannerImage from "@/public/images/chronic-disease/chronic-disease-banner.webp";

export const ChronicDiseaseBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-full mt-8 md:mt-0"
    >
      <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[458px]">
        {/* Background Image */}
        <Image
          src={bannerImage}
          alt="만성질환 치과치료 배경"
          fill
          quality={100}
          className="object-cover object-right"
          priority
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-[69.375rem] w-full px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-8 md:gap-10 max-w-[35.2rem]"
            >
              {/* Main Text */}
              <div className="flex flex-col gap-2">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-base md:text-xl lg:text-[2.074rem] font-bold text-white leading-[1.6]"
                >
                  만성 질환자는 치과 치료시
                </motion.h2>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-wrap items-center gap-2"
                >
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="inline-block bg-white text-danger font-bold text-base md:text-xl lg:text-[2.074rem] px-2 md:px-3 lg:px-4 py-0 rounded leading-[1.6] text-[#EA0C09]"
                  >
                    더 큰 주의
                  </motion.span>
                  <span className="text-base md:text-xl lg:text-[2.074rem] font-bold text-white leading-[1.6]">
                    가 필요합니다.
                  </span>
                </motion.div>
              </div>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-14 md:text-lg lg:text-[2.074rem] font-bold text-white leading-[1.6]"
              >
                만성질환은 치과 치료과정에서 예상치 못한{" "}
                <br className="md:hidden" />
                합병증이나 부작용을 유발할 수 있습니다
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
