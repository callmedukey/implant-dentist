import * as motion from "motion/react-client";
import Image from "next/image";

import digitalPainless from "@/public/images/pain-relief/digital-painless.webp";
import gargleAnesthesia from "@/public/images/pain-relief/gargle-anesthesia.webp";
import painReliefInfoBg from "@/public/images/pain-relief/pain-relief-info-bg.webp";
import topicalAnesthesia from "@/public/images/pain-relief/topical-anesthesia.webp";

const anesthesiaSteps = [
  {
    id: 1,
    image: gargleAnesthesia,
    title: "스케일링 전",
    subtitle: "가글 마취",
  },
  {
    id: 2,
    image: topicalAnesthesia,
    title: "치과마취 전",
    subtitle: "도포 마취",
  },
  {
    id: 3,
    image: digitalPainless,
    title: "마취 통증 완화",
    subtitle: "디지털 무통 마취",
  },
];

export default function PainReliefSystem() {
  return (
    <section className="relative w-full pt-8 md:py-20 lg:py-24 mb-16 lg:mb-24">
      <div className="mx-auto max-w-[90rem] px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-40">
          {/* First Section - Cards */}
          <div className="flex flex-col items-center gap-8 lg:gap-[3.1875rem] w-full">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-3xl lg:text-[2.0738rem] font-bold text-dark-primary text-center"
            >
              조은이플란트치과의 통증 완화 시스템
            </motion.h2>

            {/* Cards Container */}
            <div className="relative w-full">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 lg:gap-[1.875rem] flex-wrap relative">
                {anesthesiaSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2 + index * 0.2,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex flex-col items-center gap-4 md:gap-6 w-full max-w-[21.875rem]"
                  >
                    {/* Card Image */}
                    <div className="relative w-full h-[16rem] rounded-lg overflow-hidden">
                      <Image
                        src={step.image}
                        alt={`${step.title} - ${step.subtitle}`}
                        fill
                        className="object-cover"
                        quality={100}
                      />
                    </div>

                    {/* Dot and Line Container */}
                    <div className="relative flex items-center justify-center w-full h-[0.9375rem]">
                      {/* Line segments between dots - only show on desktop between cards */}
                      {index < anesthesiaSteps.length - 1 && (
                        <div className="absolute left-[50%] w-[calc(100%+1.875rem)] h-[1.5px] bg-teal-secondary hidden lg:block" />
                      )}
                      {/* Number Circle */}
                      <div className="relative z-10 w-[0.9375rem] h-[0.9375rem] bg-teal-secondary rounded-full" />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col items-center">
                      <p className="text-14 md:text-lg lg:text-xl font-bold text-dark-primary">
                        {step.title}
                      </p>
                      <p className="text-14 md:text-lg lg:text-xl font-bold text-teal-secondary">
                        {step.subtitle}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Section - Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-[57.5rem]"
          >
            <div className="flex flex-col items-center gap-10 w-full">
              <div className="flex flex-col items-center gap-4 w-full">
                <motion.h3
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-xl md:text-3xl lg:text-[2.0738rem] font-bold text-dark-primary text-center mt-8 md:mt-0"
                >
                  조은이플란트치과의 통증 완화 시스템
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-14 md:text-xl lg:text-xl text-dark-primary text-center leading-[1.6] px-3 py-4 md:px-4 md:py-6"
                >
                  치과가실때마다 {`"무통마취기로 해주세요"`}라고{" "}
                  <br className="md:hidden" /> 부탁하지 않으셔도 됩니다.
                  <br className="" />
                  조은이플란트치과에서는 마취가 필요한 모든 분들의{" "}
                  <br className="md:hidden" /> 모든 치료에 무통마취기를
                  사용하고있습니다.
                </motion.p>
              </div>

              {/* Background Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full h-[20rem] md:h-[22rem] lg:h-[24.5rem] rounded-lg overflow-hidden"
              >
                <Image
                  src={painReliefInfoBg}
                  alt="무통 마취 시스템"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-base md:text-xl lg:text-[2.0738rem] font-bold text-dark-primary text-center"
              >
                조은이플란트치과에서는 <br className="sm:hidden" />
                <span className="text-teal-secondary">
                  깊은 마취까지 무통마취기
                </span>
                로 가능합니다
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
