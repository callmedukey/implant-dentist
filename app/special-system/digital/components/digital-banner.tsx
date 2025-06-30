import * as motion from "motion/react-client";
import Image from "next/image";

import digitalBannerImage from "@/public/images/digital/digital-banner.webp";

export default function DigitalBanner() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-[95.625rem]">
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[2.6875rem]"
        >
          {/* Header Section */}
          <div className="flex flex-col items-center gap-2 md:gap-3 lg:gap-4 text-center px-4">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-14 md:text-base lg:text-lg text-dark-primary opacity-50"
            >
              CHOONEEPLANT DENTAL CLINIC
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary"
            >
              디지털 시스템
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
              className="text-base md:text-lg lg:text-xl font-bold text-dark-primary"
            >
              정확성 높고 객관적인 <br className="md:hidden" />
              <span className="text-teal-secondary">
                디지털진단 3D CT, 디지털 분석 프로그램
              </span>
            </motion.p>
          </div>

          {/* Banner Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[15rem] md:h-[20rem] lg:h-[37rem] rounded-lg overflow-hidden max-w-7xl"
          >
            <Image
              src={digitalBannerImage}
              alt="디지털 시스템 배너"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
