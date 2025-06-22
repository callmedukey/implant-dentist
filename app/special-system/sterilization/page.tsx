import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import sterilizationHeroBg from "@/public/images/sterilization/sterilization-hero-bg.webp";
import individualToolsImage from "@/public/images/sterilization/sterilization-individual-tools.webp";
import safeEnvironmentImage from "@/public/images/sterilization/sterilization-safe-environment.webp";
import sanitizedWaterImage from "@/public/images/sterilization/sterilization-sanitized-water.webp";

export const metadata: Metadata = {
  title: "멸균 시스템 | 조은이플란트치과",
  description:
    "조은이플란트치과는 교차감염 예방을 위한 체계적인 멸균 시스템을 준수합니다. 1인 1기구 원칙, 살균 진료수 사용으로 안전한 진료 환경을 제공합니다.",
  keywords:
    "멸균 시스템, 치과 위생, 교차감염 예방, 1인 1기구, 살균 진료수, 안전한 진료, 조은이플란트치과",
  openGraph: {
    title: "멸균 시스템 | 조은이플란트치과",
    description:
      "눈에 띄지 않아도 가장 중요하게 지키는 조은이플란트치과의 체계적인 멸균 시스템. 철저한 위생관리로 안전한 진료를 약속합니다.",
    type: "website",
  },
};

const SterilizationPage = () => {
  return (
    <div className="flex flex-col items-center gap-16 md:gap-20 lg:gap-[8.125rem] py-16 md:py-20 lg:py-24 **:break-keep mb-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center w-full gap-6 md:gap-8 lg:gap-[2.6875rem] px-4 md:px-8 lg:px-[3.5rem] max-w-[95.625rem] mx-auto"
      >
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-2 w-full"
        >
          <h1 className="text-2xl md:text-3xl lg:text-[2.489rem] font-bold text-dark-primary">
            멸균 시스템
          </h1>
          <p className="text-xl md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary">
            눈에 띄지 않아도, 가장 중요하게 지킵니다
          </p>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative w-full h-[20rem] md:h-[25rem] lg:h-[29.5rem] rounded-lg overflow-hidden"
        >
          <Image
            src={sterilizationHeroBg}
            alt="멸균 시스템 이미지"
            fill
            quality={100}
            className="object-cover object-[20%_0%] sm:object-center"
          />
        </motion.div>
      </motion.section>

      {/* Emphasis Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center justify-center gap-2 bg-teal-secondary w-full py-8 md:py-10 lg:py-[2.5rem] px-4 md:px-8 lg:px-[3.5rem]"
      >
        <div className="flex flex-col items-center w-full max-w-[95.625rem]">
          <div className="flex flex-col justify-center items-center text-center">
            <span className="text-lg md:text-2xl lg:text-[2.074rem] font-bold text-white">
              조은이플란트치과는 교차감염 예방을 위한{" "}
            </span>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <span className="text-lg md:text-2xl lg:text-[2.074rem] font-bold text-teal-secondary bg-white py-1 px-3 md:px-4 rounded-md">
                체계적인 멸균 시스템
              </span>
              <span className="text-lg md:text-2xl lg:text-[2.074rem] font-bold text-white">
                을 준수합니다.
              </span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cards Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex flex-col items-center gap-10 md:gap-16 lg:gap-20 w-full max-w-[95.625rem] px-4 md:px-8 lg:px-[3.5rem]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[1.875rem] w-full">
          {/* Card 1 - 1인 1기구는 필수 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4 md:gap-6 w-full hover:scale-102 transition-transform duration-300"
          >
            <div className="relative w-full h-[15rem] md:h-[18rem] lg:h-[20.588rem] rounded-lg overflow-hidden">
              <Image
                src={individualToolsImage}
                alt="1인 1기구 시스템"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 text-center px-4 md:px-0">
              <h3 className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-teal-secondary">
                1인 1기구는 필수
              </h3>
              <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary">
                모든 소독 과정을 거친 개인 기구들은 진료
                <br />
                직전 환자분들 앞에서 개봉합니다.
              </p>
            </div>
          </motion.div>

          {/* Card 2 - 살균 진료수 사용 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4 md:gap-6 w-full hover:scale-102 transition-transform duration-300"
          >
            <div className="relative w-full h-[15rem] md:h-[18rem] lg:h-[20.588rem] rounded-lg overflow-hidden">
              <Image
                src={sanitizedWaterImage}
                alt="살균 진료수 시스템"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 text-center px-4 md:px-0">
              <h3 className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-teal-secondary">
                살균 진료수 사용
              </h3>
              <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary">
                진료 도중, 이후 이용하는 체어에서는 엄격하게 살균된 진료수만을
                사용하고 있습니다.
              </p>
            </div>
          </motion.div>

          {/* Card 3 - 안전한 진료 환경을 위한 노력 */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-4 md:gap-6 w-full hover:scale-102 transition-transform duration-300"
          >
            <div className="relative w-full h-[15rem] md:h-[18rem] lg:h-[20.588rem] rounded-lg overflow-hidden">
              <Image
                src={safeEnvironmentImage}
                alt="안전한 진료 환경"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-2 text-center px-4 md:px-0">
              <h3 className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-teal-secondary">
                안전한 진료 환경을 위한 노력
              </h3>
              <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary">
                조은이플란트치과는 철저한 위생관리 시스템을 운영하고 있습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default SterilizationPage;
