import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import apicectomyInfoBg from "@/public/images/natural-tooth/apicectomy-info-bg.webp";
import apicectomyStep1 from "@/public/images/natural-tooth/apicectomy-step1.webp";
import apicectomyStep2 from "@/public/images/natural-tooth/apicectomy-step2.webp";
import apicectomyStep3 from "@/public/images/natural-tooth/apicectomy-step3.webp";
import apicectomyStep4 from "@/public/images/natural-tooth/apicectomy-step4.webp";

export const metadata: Metadata = {
  title: "치근단절제술 | 조은이플란트치과",
  description:
    "치아를 보존하기 위한 마지막 치료 선택지로 고려할 수 있습니다. 치아를 살리는 또 다른 방법, 치근단 절제술.",
  keywords:
    "치근단절제술, 치근단 절제술, 치아 보존, 자연치 보존, 치아 살리기, 조은이플란트치과",
  openGraph: {
    title: "치근단절제술 | 조은이플란트치과",
    description:
      "치아를 보존하기 위한 마지막 치료 선택지, 전문의가 시행하는 정밀한 치근단절제술.",
    type: "website",
  },
};

const ApicectomyPage = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-20 lg:py-24 **:break-keep">
      {/* Header Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-12 px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
      >
        <div className="flex flex-col items-center gap-2 text-center">
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

          <div className="flex flex-col items-center gap-2">
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
              치근단절제술
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
              className="text-xl md:text-2xl lg:text-[1.728rem] font-bold text-teal-secondary leading-[1.6]"
            >
              치아를 보존하기 위한 마지막 치료 선택지로 고려할 수 있습니다
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Apicoectomy Banner Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full mt-12 md:mt-16 lg:mt-[4.375rem]"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-teal-secondary py-6 px-4 md:px-8 lg:px-14"
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-1 px-4">
            <p className="text-base md:text-lg lg:text-[1.2rem] text-teal-bg leading-[1.6]">
              Apicoectomy
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-white leading-[1.6]">
              치아를 살리는 또 다른 방법, 치근단 절제술이란?
            </h2>
          </div>
        </motion.div>
      </motion.section>

      {/* Description Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full mt-16 md:mt-20 lg:mt-[5.5rem] max-w-6xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-stretch rounded-lg overflow-hidden"
        >
          {/* Image on the left */}
          <div className="relative w-full lg:w-1/2 h-[20rem] md:h-[22rem] lg:h-[23.75rem] rounded-lg overflow-hidden">
            <Image
              src={apicectomyInfoBg}
              alt="치근단절제술 설명"
              fill
              quality={100}
              className="object-cover"
            />
          </div>

          {/* Text on the right */}
          <div className="flex flex-col justify-center gap-6 md:gap-8 lg:gap-10 lg:w-1/2 px-0 lg:px-8">
            <p className="text-base md:text-lg lg:text-xl text-dark-primary leading-[1.6]">
              신경치료 후에도 뿌리 부위의 염증이 사라지지 않거나, 신경관이 막혀
              정상적인 치료가 어려운 경우, 잇몸을 절개해 염증 부위를 제거하고
              뿌리 끝에서 신경치료를 다시 시행하는 치료입니다.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* When Needed Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-10 md:gap-10 mt-16 md:mt-20 lg:mt-[5.5rem] max-w-6xl mx-auto w-full px-4"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border-b border-dark-primary pb-2 w-full"
        >
          <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary">
            치근단절제술이 필요한 경우
          </h2>
        </motion.div>

        {/* Cases List */}
        <div className="flex flex-col gap-0 w-full">
          {/* Case 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="flex items-center justify-center p-4 md:p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                  01
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                신경치료를 했으나 치아뿌리 끝에 염증이 생기고 잇몸에서 고름이
                나오는 경우
              </p>
            </div>
          </motion.div>

          {/* Case 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="flex items-center justify-center p-4 md:p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                  02
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                일반적인 재신경치료로 나아지지 않는 경우
              </p>
            </div>
          </motion.div>

          {/* Case 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="flex items-center justify-center p-4 md:p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                  03
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                과거 보철치료를 받은 치아의 뿌리까지 상한 경우
              </p>
            </div>
          </motion.div>

          {/* Case 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="flex items-center justify-center p-4 md:p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                  04
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                치아의 신경이 막혀있어서 치료가 불가능한 경우
              </p>
            </div>
          </motion.div>

          {/* Case 5 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="flex items-center justify-center p-4 md:p-6 w-full md:w-[7.563rem] shrink-0">
              <div className="bg-teal-secondary rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 flex items-center justify-center">
                <span className="text-base md:text-lg lg:text-xl font-bold text-white">
                  05
                </span>
              </div>
            </div>
            <div className="p-4 md:p-6 pt-0 md:pt-6 flex-1">
              <p className="text-lg md:text-xl lg:text-[1.44rem] text-dark-primary">
                과거 치료로 인해 치아에 기둥이 있어 재신경치료를 하기 어려운
                경우
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-12 md:gap-16 lg:gap-20 mt-16 md:mt-20 lg:mt-[5.5rem] px-4 md:px-8 lg:px-[3.5rem] max-w-6xl mx-auto w-full"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="border-b border-dark-primary pb-2 w-full"
        >
          <h2 className="text-2xl md:text-3xl lg:text-[2.074rem] font-bold text-dark-primary">
            치근단절제술 시술과정
          </h2>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={apicectomyStep1}
                alt="치근단절제술 1단계"
                fill
                quality={100}
                className="object-contain md:object-cover md:object-bottom"
              />
            </div>
            <div className="flex flex-col gap-2 px-4 text-center">
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                STEP 01
              </h3>
              <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                치아의 뿌리 끝 염증 조직을 제거하기 위해 잇몸 쪽으로 치아 뿌리에
                접근합니다.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={apicectomyStep2}
                alt="치근단절제술 2단계"
                fill
                quality={100}
                className="object-contain md:object-cover md:object-bottom"
              />
            </div>
            <div className="flex flex-col gap-2 px-4 text-center">
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                STEP 02
              </h3>
              <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                뿌리 끝 부분에 낭종이나 농양 또는 육아종을 확인합니다.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={apicectomyStep3}
                alt="치근단절제술 3단계"
                fill
                quality={100}
                className="object-contain md:object-cover md:object-bottom"
              />
            </div>
            <div className="flex flex-col gap-2 px-4 text-center">
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                STEP 03
              </h3>
              <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                염증 조직을 제거한 후,
                <br />
                오염된 치아 뿌리 끝을
                <br />
                삭제합니다.
              </p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6"
          >
            <div className="relative w-full h-[15rem] rounded-lg overflow-hidden">
              <Image
                src={apicectomyStep4}
                alt="치근단절제술 4단계"
                fill
                quality={100}
                className="object-contain md:object-cover md:object-bottom"
              />
            </div>
            <div className="flex flex-col gap-2 px-4 text-center">
              <h3 className="text-xl md:text-2xl lg:text-[1.44rem] font-bold text-teal-secondary leading-[1.6]">
                STEP 04
              </h3>
              <p className="text-base md:text-lg lg:text-[1.2rem] text-dark-primary leading-[1.6]">
                뿌리 끝에 MTA (Mineral Trioxide Aggregate) 충전 후 마무리
                해줍니다.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* MTA Info Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="w-full mt-16 md:mt-20 lg:mt-[5.5rem] mb-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-teal-secondary py-10 px-4 md:px-8 lg:px-14"
        >
          <div className="max-w-6xl mx-auto flex flex-col gap-2 text-center px-4">
            <p className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-white leading-[1.6]">
              충전을 할 때는 MTA라는 특수 생체 재료를 사용해야 치료가 완벽하게
              이루어질 수 있습니다.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 mt-2">
              <span className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-white leading-[1.6]">
                MTA는 일반적인 충전재와는 달리,
              </span>
              <span className="bg-white text-teal-secondary px-4 py-0 rounded text-lg md:text-xl lg:text-[1.44rem] font-bold leading-[1.6]">
                치아 뿌리 주변 조직의 재생을 돕는 기능
              </span>
              <span className="text-lg md:text-xl lg:text-[1.44rem] font-bold text-white leading-[1.6]">
                을 가지고 있습니다.
              </span>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default ApicectomyPage;
