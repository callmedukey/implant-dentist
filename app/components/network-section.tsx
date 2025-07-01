"use client";

import { motion } from "motion/react";
import Image from "next/image";

import { Marquee } from "@/components/magicui/marquee";
import goldenLeavesImage from "@/public/images/network/golden-leaves.webp";
import networkLogo1 from "@/public/images/network/network-logo-1.webp";
import networkLogo2 from "@/public/images/network/network-logo-2.webp";
import networkLogo3 from "@/public/images/network/network-logo-3.webp";
import networkLogo4 from "@/public/images/network/network-logo-4.webp";

const logos = [
  { src: networkLogo1, alt: "협력병원" },
  { src: networkLogo2, alt: "협력병원" },
  { src: networkLogo3, alt: "협력병원" },
  { src: networkLogo4, alt: "협력병원" },
];

const NetworkSection = () => {
  return (
    <section className="relative py-4 md:py-10 overflow-hidden">
      <div className="max-w-[95.625rem] mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 md:gap-6"
          >
            <Image
              src={goldenLeavesImage}
              alt="장식"
              quality={100}
              className="w-48 md:w-64 lg:w-96 h-auto"
            />
            <h2 className="text-xl md:text-3xl lg:text-4xl text-primary text-center font-bold">
              신뢰를 더하는 협진 네트워크
            </h2>
            <p className="text-14 md:text-lg lg:text-xl text-primary text-center max-w-5xl">
              다양한 의료기관과의 협진 네트워크를 통해 보다 전문적이고 체계적인
              치과 진료 서비스를 제공합니다.
            </p>
          </motion.div>

          {/* Logo Slider */}
          <motion.div 
            className="relative w-full mt-4 md:mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Marquee
              className="[--duration:15s] [--gap:2rem] md:[--gap:6rem] lg:[--gap:2rem] mb-8"
              pauseOnHover
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-lg p-4 md:p-6"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    quality={100}
                    className="h-12 md:h-14 lg:h-16 w-auto object-fit"
                  />
                </div>
              ))}
            </Marquee>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
