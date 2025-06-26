"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import Image from "next/image";
import React from "react";

import joSeungWonImage from "@/public/images/doctors/jo-seung-won.webp";
import leeChungHwiImage from "@/public/images/doctors/lee-chung-hwi.webp";
import leeJongWonImage from "@/public/images/doctors/lee-jong-won.webp";

interface DoctorData {
  name: string;
  title: string;
  image: any;
  credentials: string[];
}

const doctors: DoctorData[] = [
  {
    name: "이충휘",
    title: "대표원장",
    image: leeChungHwiImage,
    credentials: [
      "보건복지부 인증 통합치의학과 전문의",
      "고려대학교 임상치의학대학원 임플란트학과 석사",
      "단국대학교 치과대학 졸업",
      "서울대학교 치의학대학원 교육연수원 고급치의학 연수",
      "미국 펜실베니아 대학 신경치료 연수",
      "미국 UCLA 치과대학 익스턴십",
      "오스템 임플란트 master course 수료",
      "대한턱관절교합학회 정회원",
      "대한구강악안면임플란트학회 정회원",
      "대한치과보철학회 정회원",
      "전) 서울연세치과 원장",
      "전) 서울연세치과 원장",
      "전) 부산 성분도치과병원 진료과장",
      "전) 인제군보건소 치과과장",
      "전) 완도군의료원 구강보건센터 센터장",
    ],
  },
  {
    name: "조승원",
    title: "대표원장",
    image: joSeungWonImage,
    credentials: [
      "보건복지부 인증 구강악안면외과 전문의",
      "악안면성형재건외과 인정의",
      "현) 한림대학교 성심병원 겸임교수",
      "평촌 성심병원 구강악안면외과 외래교수",
      "한림대학교 성심병원 구강악안면외과 레지던트 수료",
      "한림대학교 성심병원 인턴 수료",
      "단국대학교 치과대학 졸업",
      "미국 UCLA 치과대락 익스턴십",
      "덴티움 임플란트 live surgery moderator",
      "미국심장협회 인준 BLS provider",
      "대한구강악안면외과학회 정회원",
      "대한악안면성형재건외과학회 정회원",
      "2021년 국제종합학술대회 (GAMEX) 우수상",
      "SCI(E) 논문 19편 발표",
    ],
  },
  {
    name: "이종원",
    title: "대표원장",
    image: leeJongWonImage,
    credentials: [
      "보건복지부 인증 통합치의학과 전문의",
      "원광대학교 치과대학 졸업",
      "Osstem AIC Lmplant course 수료",
      "CIRD sinus graft advanced seminar 수료",
      "Megagen Densha Osseodensification Academy 수료",
      "DeArk prosthodontics course 수료",
      "Apex endodontics course 수료",
      "국가구강검진의사",
      "턱관절장애 연수회 수료",
      "Osstem, Dentium implant training course",
      "Osstem implant master course faculty",
      "대한통합치과학회 정회원",
      "대한구강악안면 임플란트학회 정회원",
      "대한보철학회 정회원",
    ],
  },
];

const DoctorCard = ({
  doctor,
  index,
}: {
  doctor: DoctorData;
  index: number;
}) => {
  const isEven = index % 2 === 0;
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 0.95,
        }}
        transition={{
          duration: 1.2,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: 0.2,
        }}
        className="relative h-[25rem] w-full lg:h-[50rem] lg:w-[33.75rem] overflow-hidden"
      >
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: isInView ? 1 : 1.1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src={doctor.image}
            alt={`${doctor.name} ${doctor.title}`}
            quality={100}
            fill
            className="object-contain lg:object-cover lg:object-top"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-end gap-4 md:gap-5 lg:gap-6 p-4 md:p-6 lg:px-8 lg:py-8">
        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={{
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : isEven ? -20 : 20,
          }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center gap-2">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary">
              {doctor.name}
            </h3>
            <span className="text-14 md:text-base lg:text-lg font-normal text-dark-primary">
              {doctor.title}
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: isInView ? 1 : 0,
              scale: isInView ? 1 : 0.8,
            }}
            transition={{
              duration: 0.6,
              delay: 0.6,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-secondary px-4 py-1 w-fit"
          >
            <span className="text-14 md:text-sm lg:text-base font-normal text-white">
              주요약력
            </span>
          </motion.div>
        </motion.div>

        {/* Credentials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex max-h-[35rem] flex-col overflow-y-auto"
        >
          <div className="flex flex-col gap-2">
            {doctor.credentials.map((credential, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : -10,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + idx * 0.05,
                  ease: "easeOut",
                }}
                className="flex items-center gap-2"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{
                    scale: isInView ? 1 : 0,
                    rotate: isInView ? 0 : -180,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + idx * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <ChevronRight className="size-4 text-dark-primary flex-shrink-0" />
                </motion.div>
                <span className="text-14 md:text-base lg:text-lg font-normal text-dark-primary">
                  {credential}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const DoctorsIntroSection = () => {
  return (
    <section className="mx-auto flex w-full max-w-[69.375rem] flex-col gap-12 md:gap-16 lg:gap-20 px-4 pb-8 md:pb-12 lg:pb-16 md:px-0">
      {doctors.map((doctor, index) => (
        <DoctorCard key={doctor.name} doctor={doctor} index={index} />
      ))}
    </section>
  );
};

export default DoctorsIntroSection;
