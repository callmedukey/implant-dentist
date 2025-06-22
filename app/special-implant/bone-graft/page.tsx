import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import bioOssFeature from "@/public/images/bone-graft/bio-oss-feature.webp";
import bioOssProduct from "@/public/images/bone-graft/bio-oss-product.webp";

export const metadata: Metadata = {
  title: "스위스 명품 뼈이식재 바이오오스 | 조은이플란트치과",
  description:
    "양주 조은이플란트치과는 스위스 기업 가이스트리히사의 잇몸뼈 이식재 바이오오스(Bio-Oss)를 사용합니다. 일반 치과에서는 찾아보기 어렵고, 대학병원에서만 사용하는 프리미엄 뼈이식재입니다.",
  keywords:
    "바이오오스, Bio-Oss, 뼈이식재, 스위스 뼈이식재, 가이스트리히, 대학병원 뼈이식재, 잇몸뼈 이식",
  openGraph: {
    title: "스위스 명품 뼈이식재 바이오오스 | 조은이플란트치과",
    description:
      "대학병원에서만 사용한다는 스위스 명품 뼈이식재 바이오오스를 조은이플란트치과에서 만나보세요.",
    type: "website",
  },
};

const BoneGraftPage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 **:break-keep">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-16 md:gap-20 lg:gap-[6.3rem] px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
      >
        {/* Header Section */}
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[3.5rem] text-center">
          {/* Title Group */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-2"
          >
            <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary opacity-50 uppercase">
              CHOONEEPLANT DENTAL CLINIC
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary mt-2">
              스위스 명품 뼈이식재 바이오오스
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-lg md:text-xl lg:text-[1.44rem] text-black max-w-[45.5rem]"
          >
            일반 치과에서는 찾아보기 어렵고,
            <br />
            대학병원에서만 사용한다는 {`'바이오오스'`}를 들어보셨나요?
          </motion.p>
        </div>

        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full max-w-[33.6875rem] h-[20rem] md:h-[28rem] lg:h-[33.6875rem] mx-auto"
        >
          <Image
            src={bioOssProduct}
            alt="바이오오스 제품"
            fill
            quality={100}
            className="object-contain"
          />
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-dark-primary text-center leading-relaxed"
        >
          양주 조은이플란트치과는 스위스 기업 가이스트리히사의
          <br />
          잇몸뼈 이식재 바이오오스(Bio-Oss)를 사용합니다
        </motion.p>
      </motion.section>

      {/* Full Width Banner */}
      <section className="w-full bg-teal-secondary mt-16 md:mt-20 lg:mt-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="py-10 md:py-12 lg:py-10 px-4 md:px-8 lg:px-[3.5rem]"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="bg-white rounded px-4 py-0"
            >
              <span className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
                잇몸뼈 이식
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30, letterSpacing: "-0.05em" }}
              whileInView={{ opacity: 1, y: 0, letterSpacing: "0em" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-white text-center"
            >
              임플란트 전에 꼭 확인하세요!
            </motion.h2>
          </div>
        </motion.div>
      </section>

      {/* Bio-Oss Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center gap-16 md:gap-20 lg:gap-[5.5rem] px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full mt-16 md:mt-20 lg:mt-24"
      >
        {/* Feature Row */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[1.875rem] w-full">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full lg:w-[33.75rem] h-[20rem] md:h-[24rem] lg:h-[23.75rem] rounded-lg overflow-hidden order-2 lg:order-1"
          >
            <Image
              src={bioOssFeature}
              alt="바이오오스 특징"
              fill
              quality={100}
              className="object-cover"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6 w-full max-w-[35rem] px-0 lg:px-2 order-1 lg:order-2"
          >
            <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary">
              왜 바이오오스를 선택해야 할까요?
            </h2>
            <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary leading-relaxed">
              바이오오스는 뛰어난 생체 적합성을 바탕으로 임플란트가 뼈에{" "}
              <span className="font-bold text-teal-secondary">
                자연스럽게 결합되도록{" "}
              </span>
              도와주며,{" "}
              <span className="font-bold text-teal-secondary">
                시술 후 빠른 회복
              </span>
              을 촉진합니다.
            </p>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="px-0 md:px-12 lg:px-[4.8rem]"
        >
          <p className="text-xl md:text-2xl font-bold text-dark-primary text-center leading-relaxed max-w-xl">
            조은이플란트는 항상 최고의 시술 방식을 고민하며,{" "}
            <span className="font-bold text-teal-secondary">
              최적의 치료 결과
            </span>
            와 <span className="font-bold text-teal-secondary">빠른 회복</span>
            을 제공합니다.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default BoneGraftPage;
