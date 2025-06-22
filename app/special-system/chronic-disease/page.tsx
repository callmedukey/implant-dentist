import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";

import cardiovascularBg from "@/public/images/chronic-disease/cardiovascular-bg.webp";
import diabetesBg from "@/public/images/chronic-disease/diabetes-bg.webp";
import dialysisBg from "@/public/images/chronic-disease/dialysis-bg.webp";
import doctorIcon from "@/public/images/chronic-disease/doctor-icon.svg";
import hypertensionBg from "@/public/images/chronic-disease/hypertension-bg.webp";
import osteoporosisBg from "@/public/images/chronic-disease/osteoporosis-bg.webp";
import patientIcon from "@/public/images/chronic-disease/patient-icon.svg";

import { ChronicDiseaseBanner } from "./components/chronic-disease-banner";
import ChronicDiseaseInfo from "./components/chronic-disease-info";

export const metadata: Metadata = {
  title: "만성질환 특화진료 | 조은이플란트치과",
  description:
    "당뇨, 고혈압, 심혈관 질환, 골다공증, 신장 투석 등 만성질환이 있는 분들도 안심하고 치료 받을 수 있도록 만성질환에 특화된 진료 프로세스를 갖추고 있습니다.",
  keywords:
    "만성질환 치과, 당뇨 치과치료, 고혈압 치과치료, 심혈관질환 치과, 골다공증 치과, 신장투석 치과, 전신질환 치과, 조은이플란트치과",
  openGraph: {
    title: "만성질환 특화진료 | 조은이플란트치과",
    description:
      "당뇨, 고혈압, 심혈관 질환, 골다공증, 신장 투석 등 만성질환이 있는 분들도 안심하고 치료 받을 수 있도록 만성질환에 특화된 진료 프로세스를 갖추고 있습니다.",
    type: "website",
  },
};

const chronicDiseases = [
  { id: 1, name: "당뇨", image: diabetesBg },
  { id: 2, name: "고혈압", image: hypertensionBg },
  { id: 3, name: "심혈관 질환", image: cardiovascularBg },
  { id: 4, name: "골다공증", image: osteoporosisBg },
  { id: 5, name: "신장 투석", image: dialysisBg },
];

const ChronicDiseasePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col **:break-keep"
    >
      <div className="w-full py-16 md:py-24">
        <div className="w-full max-w-[69.375rem] mx-auto px-4 flex flex-col gap-12 sm:gap-16 md:gap-24">
          {/* Header Section */}
          <div className="flex flex-col items-center gap-2">
            <motion.p
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-base md:text-lg text-dark-primary text-center uppercase leading-[1.6] font-normal mr-auto"
            >
              CHOONEEPLANT DENTAL CLINIC
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center gap-2 mr-auto"
            >
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center py-4">
                만성질환 특화진료
              </h1>
            </motion.div>
          </div>

          {/* Chronic Disease Badges */}
          <motion.section
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="w-full bg-teal-secondary rounded-lg py-8 md:py-12 px-4 md:px-16"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-[4.375rem]">
              {chronicDiseases.map((disease, index) => (
                <motion.div
                  key={disease.id}
                  initial={{ opacity: 0, y: 40, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 * index,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="flex flex-col items-center gap-6 w-28"
                >
                  <div className="relative w-28 h-28 rounded-full bg-[#EBF3FF] flex items-center justify-center">
                    <div className="relative w-20 h-20">
                      <Image
                        src={disease.image}
                        alt={disease.name}
                        fill
                        quality={100}
                        className="object-contain scale-95"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white text-center whitespace-nowrap">
                    {disease.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Content Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col lg:flex-row gap-10 items-start lg:items-center **:break-keep"
          >
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex-1 flex flex-col gap-10"
            >
              <h2 className="text-2xl md:text-3xl lg:text-[2.0737rem] font-bold text-dark-primary leading-[1.6]">
                전신상태를 고려한 세심한 치과진료,
                <br />
                양주{" "}
                <span className="text-teal-primary">
                  조은이플란트치과의 기본
                </span>
                입니다
              </h2>
              <p className="text-lg md:text-xl font-normal text-dark-primary leading-[1.6]">
                당뇨, 고혈압, 심혈관 질환, 골다공증, 신장 투석 등 만성질환이
                있는 분들도 안심하고 치료 받을 수 있도록 만성질환에 특화된 진료
                프로세스를 갖추고 있습니다.
              </p>
            </motion.div>

            {/* Icons */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-14"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full max-w-[28.25rem]"
              >
                <Image
                  src={doctorIcon}
                  alt="가톨릭대학교 의정부성모병원 로고"
                  unoptimized
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="w-full max-w-[28.25rem]"
              >
                <Image
                  src={patientIcon}
                  alt="의정부을지대학교병원 로고"
                  unoptimized
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </motion.section>
        </div>
      </div>

      {/* Banner Section - Full Width */}
      <ChronicDiseaseBanner />

      <ChronicDiseaseInfo />
    </motion.div>
  );
};

export default ChronicDiseasePage;
