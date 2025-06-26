import * as motion from "motion/react-client";
import Image from "next/image";

import painReliefHeroBg from "@/public/images/pain-relief/pain-relief-hero-bg.webp";

export default function PainReliefHero() {
  return (
    <section className="relative w-full h-[15rem] md:h-[20rem] lg:h-[39.75rem] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={painReliefHeroBg}
          alt="무통 치료 배경"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-[95.625rem] w-full px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-3 md:gap-4 lg:gap-2 max-w-3xl mx-auto text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl md:text-2xl lg:text-4xl font-bold text-white leading-[1.6]"
            >
              치과 치료 너무 무서우시죠?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl md:text-2xl lg:text-4xl font-bold text-white leading-[1.6]"
            >
              조은이플란트치과가 준비했습니다.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
