import * as motion from "motion/react-client";
import Image from "next/image";
import React from "react";

import backgroundImage from "@/public/images/about/overlay-background.webp";
import patientIcon from "@/public/images/about/patient-icon.svg";
import accentLogo from "@/public/images/white-accent-logo.svg";

const ImageWithOverlayTextSection = () => {
  return (
    <section className="relative w-full h-[24rem] sm:h-[30.5rem] overflow-hidden pt-4 md:py-0">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="치과 배경 이미지"
          fill
          quality={100}
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-tertiary" />
      </div>

      {/* Content Cards */}
      <div className="relative z-10 flex sm:items-center md:items-end justify-center h-full px-4 max-w-screen-xl md:mx-auto">
        <div className="flex items-end gap-4 sm:gap-5 sm:mr-auto">
          {/* First Card - Natural Tooth Preservation */}
          <motion.div
            className="bg-teal-secondary rounded-t-lg p-4 md:p-6 lg:py-[4.25rem] px-4 flex flex-col items-center text-center max-w-[20rem] h-[14rem] w-full sm:h-[27.5rem] **:break-keep"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ willChange: "transform" }}
          >
            <div className="flex flex-col items-center gap-5">
              {/* Logo */}
              <Image
                src={accentLogo}
                alt="조은이플란트치과 로고"
                unoptimized
                className="fill-white stroke-white text-white w-42"
              />

              {/* Divider */}
              <div className="w-10 h-[0.094rem] bg-white" />

              {/* Text */}
              <p className="text-white text-14 md:text-base lg:text-lg leading-[1.6em] whitespace-nowrap">
                자연치아 보존에 집중하는
                <br />
                환자 중심 치과 진료
              </p>
            </div>
          </motion.div>

          {/* Second Card - Long-lasting Implants */}
          <motion.div
            className="bg-teal-bg rounded-t-lg p-4 md:p-6 lg:p-10 flex flex-col items-center text-center max-w-[14rem] w-full **:break-keep"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ willChange: "transform" }}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Patient Icon */}
              <div className="w-20 h-20 flex items-center justify-center">
                <Image src={patientIcon} alt="환자 아이콘" unoptimized />
              </div>

              {/* Text */}
              <p className="text-teal-secondary text-14 md:text-base lg:text-lg font-normal leading-[1.6em]">
                오랫동안 안심하고
                <br />
                사용할 수 있는
                <br />
                뛰어난 임플란트
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageWithOverlayTextSection;
