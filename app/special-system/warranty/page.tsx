import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import decorativeBrackets from "@/public/images/warranty/decorative-brackets.svg";
import osstemLogo1 from "@/public/images/warranty/osstem-logo-1.webp";
import osstemLogo2 from "@/public/images/warranty/osstem-logo-2.webp";
import warrantyCardImage from "@/public/images/warranty/warranty-card.webp";

export const metadata: Metadata = {
  title: "보증 시스템 | 조은이플란트치과",
  description:
    "조은이플란트치과는 비급여 치료에 대해 독립된 보증 시스템을 운영하여 치료의 지속성과 신뢰를 함께 제공합니다.",
  keywords:
    "치료 보증, 보증 시스템, 비급여 진료 보증, 치료 보증서, 임플란트 보증, 조은이플란트치과",
  openGraph: {
    title: "보증 시스템 | 조은이플란트치과",
    description:
      "진료 후 보증서를 제공하며, 건강한 치아를 유지할 수 있도록 관리해드립니다.",
    type: "website",
  },
};

const WarrantyPage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 **:break-keep">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 px-4 md:px-8 lg:px-[3.5rem] max-w-[95.625rem] mx-auto w-full mb-12 md:mb-16 lg:mb-[4.4375rem]"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-2 text-center"
        >
          <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary opacity-50 uppercase">
            CHOONEEPLANT DENTAL CLINIC
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary mt-4">
            보증 시스템
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary text-center max-w-[33.25rem]"
        >
          <span className="font-bold text-teal-secondary">비급여 치료</span>에
          대해{" "}
          <span className="font-bold text-teal-secondary">
            독립된 보증 시스템
          </span>{" "}
          을 운영하여
          <br />
          치료의 지속성과 신뢰를 함께 제공합니다.
        </motion.p>
      </motion.section>

      {/* Content Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 lg:gap-[3.4375rem] px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
      >
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-2 md:gap-4 lg:gap-[0.625rem] w-full lg:w-[32.75rem] border-b border-dark-primary pb-4 md:pb-6 lg:pb-4 text-center lg:text-left mr-auto"
        >
          <h2 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary">
            조은이플란트치과 치료보증기간
          </h2>
          <p className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-teal-secondary">
            조은이플란트는 진료 후 보증서를 제공하며,
            <br />
            건강한 치아를 유지할 수 있도록 관리해드립니다
          </p>
        </motion.div>

        {/* Warranty Card Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-[19.6875rem] lg:w-[19.6875rem] h-[28rem] lg:h-[28.125rem] rounded-lg overflow-hidden"
        >
          <Image
            src={warrantyCardImage}
            alt="조은이플란트치과 보증서"
            fill
            quality={100}
            className="object-cover"
          />
        </motion.div>
      </motion.section>

      {/* Warranty Details Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12 mt-16 md:mt-20 lg:mt-24 w-full pt-12 md:pt-16 lg:pt-24 xl:pt-40"
      >
        {/* Title Section with decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex flex-col items-center gap-4 md:gap-6 w-full max-w-[46.875rem] mx-auto"
        >
          {/* Decorative brackets */}
          <div className="relative flex items-center justify-center w-full">
            <Image
              src={decorativeBrackets}
              alt="장식 요소"
              width={449}
              height={116}
              className="absolute w-[280px] md:w-[360px] lg:w-[449px] h-auto -translate-y-10"
              unoptimized
            />
            <h3 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary text-center relative z-10 py-4">
              정품 임플란트 사용
            </h3>
          </div>
          <div className="w-full border-b border-dark-primary mt-2 md:mt-3"></div>
        </motion.div>

        {/* Brand Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[1.875rem] px-4 md:px-8 lg:px-[3.5rem] max-w-[46.875rem] mx-auto w-full">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[1.625rem] w-full hover:scale-102 transition-transform duration-300"
          >
            <div className="flex flex-col text-center px-4 md:px-6">
              <p className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-dark-primary whitespace-nowrap">
                세계적인 신뢰를 받는 프리미엄
              </p>
              <p className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary whitespace-nowrap">
                임플란트 토탈 솔루션
              </p>
            </div>
            <div className="relative w-full max-w-[20rem] h-[7.25rem]">
              <Image
                src={osstemLogo1}
                alt="오스템 임플란트 로고"
                fill
                quality={100}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[1.625rem] w-full hover:scale-102 transition-transform duration-300"
          >
            <div className="flex flex-col text-center px-4 md:px-6">
              <p className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-dark-primary">
                열악한 골질에서도 빠르게
              </p>
              <p className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
                안정적인 골유착
              </p>
            </div>
            <div className="relative w-full max-w-[20rem] h-[7.25rem]">
              <Image
                src={osstemLogo2}
                alt="오스템 임플란트 로고 2"
                fill
                quality={100}
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="w-full max-w-[46.875rem] mx-auto"
        >
          <div className="bg-teal-secondary py-4 md:py-6 lg:py-[0.625rem] px-4">
            <p className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-white text-center">
              브랜드별 정품 보증서를 지급해드립니다
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default WarrantyPage;
