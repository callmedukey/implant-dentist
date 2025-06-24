import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import specialCard1Bg from "@/public/images/services/implant-bg.webp";
import specialCard2Bg from "@/public/images/special-implant/special-card-2-bg.webp";
import specialCard3Bg from "@/public/images/special-implant/special-card-3-bg.webp";
import specialCard4Bg from "@/public/images/special-implant/special-card-4-bg.webp";
import specialCareBg from "@/public/images/special-implant/special-care-bg.webp";

export const metadata: Metadata = {
  title: "조은이플란트의 특별함 | 조은이플란트치과",
  description:
    "고난이도 케이스일수록 강한 임플란트, 조은이플란트치과가 보여드립니다. 20년 경력의 구강외과 전문의가 제공하는 특별한 임플란트 치료.",
  keywords:
    "고난이도 임플란트, 특별한 임플란트, 구강외과 전문의, 임플란트 전문, 조은이플란트치과",
  openGraph: {
    title: "조은이플란트의 특별함 | 조은이플란트치과",
    description:
      "고난이도 케이스일수록 강한 임플란트, 20년 경력의 전문의가 제공하는 특별한 치료를 경험하세요.",
    type: "website",
  },
};

const SpecialImplantPage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 **:break-keep">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-4 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary uppercase"
        >
          CHOONEEPLANT DENTAL CLINIC
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary"
        >
          조은이플란트의 특별함
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary mt-2"
        >
          고난이도 케이스일수록 강한 임플란트,
          <br />
          조은이플란트치과가 보여드립니다.
        </motion.p>
      </motion.section>

      {/* Special Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col gap-20 md:gap-20 lg:gap-[7.5rem] mt-20 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
      >
        {/* Card 1 - 치과 전문의 직접 수술 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-6 rounded-lg overflow-hidden"
        >
          {/* Background Image */}
          <div className="relative w-full lg:w-1/2 h-[20rem] md:h-[24rem] lg:h-[23.75rem] rounded-lg overflow-hidden order-2 lg:order-1">
            <Image
              src={specialCard1Bg}
              alt="치과 전문의 진료 모습"
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-4 px-0 lg:px-4 w-full lg:w-1/2 order-1 lg:order-2">
            <div className="flex items-center gap-4">
              <span className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
                01
              </span>
              <h3 className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-dark-primary">
                치과 전문의 직접 수술
              </h3>
            </div>

            <div className="flex flex-col gap-2 mt-4">
              <p className="text-base lg:text-lg text-dark-primary leading-relaxed">
                조은이플란트치과의 전문의가 만족스러운 결과를 받아볼 수 있도록{" "}
                <span className="font-bold text-teal-secondary">
                  직접 꼼꼼하게 진료와 수술
                </span>
                을 하고있습니다
              </p>

              <Link
                href="/doctors"
                className="inline-flex items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors w-fit mt-8 lg:mt-10"
              >
                <span className="text-base">전문의 보기</span>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4H9M9 4L6 1M9 4L6 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Card 2 - 첨단 디지털 장비와 기술력 */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-6 rounded-lg overflow-hidden"
        >
          {/* Content */}
          <div className="flex flex-col gap-4 px-0 lg:px-4 w-full lg:w-1/2">
            <div className="flex items-center gap-4">
              <span className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
                02
              </span>
              <h3 className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-dark-primary">
                첨단 디지털 장비와 기술력
              </h3>
            </div>

            <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed mt-4">
              장비에 진심인 조은이플란트는 빠르게 변해가는 임플란트 트렌드를
              항상 익히고,{" "}
              <span className="font-bold text-teal-secondary">
                원내 디지털 장비를 주기적으로
              </span>
              <br className="hidden lg:block" />
              <span className="font-bold text-teal-secondary">
                최신으로 업그레이드
              </span>
              하며 빠르고 정밀한 진료가 이루어질 수 있는 환경을 마련하고
              있습니다.
            </p>
          </div>

          {/* Background Image */}
          <div className="relative w-full lg:w-1/2 h-[20rem] md:h-[24rem] lg:h-[23.75rem] rounded-lg overflow-hidden">
            <Image
              src={specialCard2Bg}
              alt="첨단 디지털 장비"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Additional Features Section - Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[1.625rem] mt-20 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full">
        {/* Card 3 - Left Column */}
        <div className="flex flex-col gap-7">
          {/* Header with colored background */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-teal-secondary rounded-lg p-6 md:p-8 lg:p-10 flex flex-col items-center"
          >
            <div className="flex items-center gap-4 flex-col">
              <div className="bg-white rounded-full px-4 py-3">
                <span className="text-xl md:text-2xl font-bold text-teal-secondary">
                  03
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                임상적 예후가 검증된 정품만 사용
              </h3>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full h-[20rem] lg:h-[23.75rem] rounded-lg overflow-hidden"
          >
            <Image
              src={specialCard3Bg}
              alt="정품 재료 사용"
              fill
              quality={100}
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="px-0 lg:px-9"
          >
            <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed">
              조은이플란트치과는 임상적 예후가 검증된{" "}
              <span className="font-bold text-teal-secondary">
                100% <br /> 정품
              </span>{" "}
              재료만을 사용하며, 정품 보증서를 지급 합니다.
            </p>
          </motion.div>
        </div>

        {/* Card 4 - Right Column */}
        <div className="flex flex-col gap-7">
          {/* Image at top */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full h-[20rem] lg:h-[21.75rem] rounded-lg overflow-hidden"
          >
            <Image
              src={specialCard4Bg}
              alt="고난도 수술"
              fill
              quality={100}
              className="object-cover"
            />
          </motion.div>

          {/* Header below image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="bg-teal-bg rounded-lg p-6 md:p-8 lg:p-10 flex flex-col items-center"
          >
            <div className="flex items-center gap-4 flex-col">
              <div className="bg-white rounded-full px-4 py-3">
                <span className="text-xl md:text-2xl font-bold text-teal-secondary">
                  04
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-teal-secondary">
                고난도 수술 및 재수술
              </h3>
            </div>
          </motion.div>

          {/* Text at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="px-6 lg:px-8"
          >
            <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed">
              조은이플란트치과는{" "}
              <span className="font-bold text-teal-secondary">
                고난이도 케이스에 강합니다.
              </span>
            </p>
            <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed">
              풍부한 경험과 수많은 임상 증례로 고난도를 요하는 진료도 정확성
              높게 치료가 가능합니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* After Care Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col gap-8 mt-20 md:mt-20 lg:mt-24 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full h-[25rem] md:h-[30rem] lg:h-[35rem] rounded-lg overflow-hidden"
        >
          <Image
            src={specialCareBg}
            alt="사후관리케어"
            fill
            quality={100}
            className="object-cover"
          />
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <span className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
            05
          </span>
          <h3 className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-dark-primary">
            사후관리케어
          </h3>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-2 text-center px-0 md:px-8 pb-8 md:pb-12 lg:pb-[3.5rem]"
        >
          <p className="text-sm md:text-base lg:text-lg text-teal-secondary font-bold leading-relaxed">
            치과 치료는 끝이 아니라, 관리의 시작입니다.
          </p>
          <p className="text-sm md:text-base lg:text-lg text-dark-primary leading-relaxed">
            조은이플란트치과는 식립한 임플란트를 오랫동안 잘 사용하실 수 있도록
            꼼꼼하게 케어해드립니다.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default SpecialImplantPage;
