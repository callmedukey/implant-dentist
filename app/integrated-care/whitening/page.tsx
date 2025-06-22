import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import teethBeforeAfterWhitening from "@/public/images/integrated-care/whitening/teeh-before-after-whitening.webp";
import whiteningBackground from "@/public/images/integrated-care/whitening/whitening-definition-bg.webp";
import whiteningMain from "@/public/images/integrated-care/whitening/whitening-main.webp";
import whiteningProduct from "@/public/images/integrated-care/whitening/whitening-product.webp";

export const metadata: Metadata = {
  title: "치아미백 | 조은이플란트치과",
  description:
    "변색된 치아에 특수 약제를 적용해 치아 본연의 밝은 색을 되찾아주는 전문 치아미백 시술. 개인별 맞춤 치아미백 솔루션을 제공합니다.",
  keywords:
    "치아미백, 치아 화이트닝, 미백 시술, 치아 변색 치료, 조은이플란트치과",
  openGraph: {
    title: "치아미백 | 조은이플란트치과",
    description:
      "변색된 치아에 특수 약제를 적용해 치아 본연의 밝은 색을 되찾아주는 전문 치아미백 시술.",
    type: "website",
  },
};

const WhiteningPage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-2 px-4 md:px-8 max-w-6xl mx-auto w-full text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary uppercase leading-[1.6]"
        >
          CHOONEEPLANT DENTAL CLINIC
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-3xl md:text-4xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6]"
        >
          치아미백
        </motion.h1>
      </motion.section>

      {/* Main Image Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 0.8,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="w-full mt-12 md:mt-14 lg:mt-[3.625rem]"
      >
        <div className="relative w-full h-[15rem] sm:h-[20rem] md:h-[40rem] lg:h-[48.938rem]">
          <Image
            src={whiteningMain}
            alt="치아미백 시술"
            fill
            quality={100}
            className="object-cover object-right"
            priority
          />
        </div>
      </motion.section>

      {/* What is Whitening Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-6xl mx-auto w-full px-4 md:px-8 mt-20 md:mt-24 lg:mt-[7.5rem]"
      >
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[2.313rem]">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-4 md:gap-5 lg:gap-[1.563rem] text-center max-w-[35.938rem]">
            <h2 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6]">
              치아미백이란?
            </h2>
            <p className="text-base md:text-lg lg:text-[1.44rem] text-dark-primary leading-[1.6]">
              변색된 치아에 특수 약제를 적용해 치아 본연의 밝은 색을 되찾아
              미소에 자신감을 되찾아주는 시술입니다.
            </p>
          </div>

          {/* Background Image */}
          <div className="relative w-full h-[15rem] md:h-[18rem] lg:h-[21rem] rounded-lg overflow-hidden">
            <Image
              src={whiteningBackground}
              alt="치아미백 배경 이미지"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Customized Whitening Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-6xl mx-auto w-full px-4 md:px-8 mt-20 md:mt-24 lg:mt-[7.5rem]"
      >
        <div className="flex flex-col gap-10 md:gap-12 lg:gap-[5rem]">
          {/* Header */}
          <div className="text-center max-w-[68.375rem] mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary leading-[1.6] mb-2">
              개인의 치아상태와 색상, 변색의 원인을 고려한 치아미백
            </h2>
            <p className="text-base md:text-lg lg:text-[1.44rem] leading-[1.6]">
              조은이플란트치과에서는{" "}
              <span className="text-teal-secondary font-bold">
                맞춤형 치아 미백 솔루션
              </span>
              을 제공합니다.
            </p>
          </div>

          {/* Before/After Images */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full h-[8rem] lg:h-[15rem]"
          >
            <Image
              src={teethBeforeAfterWhitening}
              alt="치아미백 전후 비교"
              fill
              quality={100}
              className="object-fit object-center"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Professional Whitening Product Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-6xl mx-auto w-full px-4 md:px-8 mt-20 md:mt-24 lg:mt-[7.5rem]"
      >
        <div className="flex flex-col lg:flex-row justify-center items-center rounded-lg overflow-hidden">
          {/* Content */}
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-[3.5rem] py-12 md:py-16 lg:py-20 lg:pr-8 flex-1">
            {/* Header */}
            <div className="flex flex-col gap-4">
              <p className="text-sm md:text-base lg:text-[1.2rem] text-teal-secondary uppercase leading-[1.6]">
                CHOONEEPLANT DENTAL CLINIC
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary leading-[1.6]">
                식약처가 허가한 전문가용 치아미백제
              </h2>
              <p className="text-base md:text-lg text-dark-primary leading-[1.6]">
                조은이플란트치과는 식약처에서 안정성과 효과성을
                <br />
                인증받은 정품재료만 사용합니다.
              </p>
            </div>

            {/* Feature Box */}
            <div className="bg-teal-secondary rounded-lg p-6 md:p-8 lg:p-10 text-center">
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap justify-center items-center gap-2">
                  <span className="bg-white text-teal-secondary font-bold text-xl md:text-2xl leading-[1.6] px-4 rounded">
                    환자 1인당 1키트
                  </span>
                  <span className="text-white font-bold text-xl md:text-2xl leading-[1.6]">
                    를
                  </span>
                </div>
                <p className="text-white font-bold text-xl md:text-2xl leading-[1.6]">
                  온전히 모두 사용합니다.
                </p>
                <p className="text-white text-base md:text-lg  leading-[1.6] mt-2">
                  조은이플란트치과에서 효과 좋은 치아미백 결과를 만나보세요!
                </p>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative w-full lg:w-[29.313rem] h-[20rem] md:h-[25rem] lg:h-[34.438rem] rounded-lg overflow-hidden"
          >
            <Image
              src={whiteningProduct}
              alt="전문가용 치아미백제"
              fill
              quality={100}
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default WhiteningPage;
