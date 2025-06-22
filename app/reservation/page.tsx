import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import kakaoChatImage from "@/public/images/reservation/kakao-chat.webp";
import naverBookingImage from "@/public/images/reservation/naver-booking.webp";
import phoneIcon from "@/public/images/reservation/phone-icon.svg";

export const metadata: Metadata = {
  title: "진료 및 예약안내 | 조은이플란트치과",
  description:
    "조은이플란트치과의 진료시간 안내와 전화, 카카오톡, 네이버를 통한 간편한 예약 방법을 안내합니다.",
  keywords:
    "치과 예약, 진료시간, 카카오톡 예약, 네이버 예약, 전화 예약, 조은이플란트치과 예약, 양주 치과 예약",
  openGraph: {
    title: "진료 및 예약안내 | 조은이플란트치과",
    description:
      "조은이플란트치과의 진료시간 안내와 전화, 카카오톡, 네이버를 통한 간편한 예약 방법을 안내합니다.",
    type: "website",
  },
};

const ReservationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center py-16 md:py-24 **:break-keep"
    >
      <div className="w-full max-w-[69.375rem] px-4 flex flex-col gap-12 md:gap-16 lg:gap-[7.4375rem]">
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
            className="text-base md:text-lg text-dark-primary text-center uppercase"
          >
            CHOONEEPLANT DENTAL CLINIC
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center"
          >
            진료 및 예약안내
          </motion.h1>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-[7.4375rem]">
          {/* Operating Hours Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-[1.8125rem] items-start lg:items-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary w-full lg:w-[15.9375rem] flex-shrink-0">
              진료시간 안내
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-[1.875rem] w-full">
              {/* Monday/Tuesday/Thursday/Friday */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-teal-bg rounded-lg flex flex-col justify-center items-center text-center p-12 md:p-14 gap-6 h-[12.1875rem] hover:scale-102 transition-transform duration-200"
              >
                <p className="text-xl font-bold text-teal-secondary">
                  월화목금
                </p>
                <p className="text-xl font-bold text-dark-primary whitespace-nowrap">
                  AM 09:30 ~ PM 06:30
                </p>
              </motion.div>

              {/* Wednesday Night */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-teal-bg rounded-lg flex flex-col justify-center items-center text-center p-12 md:p-14 gap-6 h-[12.1875rem] hover:scale-102 transition-transform duration-200"
              >
                <p className="text-xl font-bold text-teal-secondary">
                  수 · 야간 진료
                </p>
                <p className="text-xl font-bold text-dark-primary whitespace-nowrap">
                  AM 09:30 ~ PM 07:30
                </p>
              </motion.div>

              {/* Saturday */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-teal-bg rounded-lg flex flex-col justify-center items-center text-center p-12 md:p-14 gap-6 h-[12.1875rem] hover:scale-102 transition-transform duration-200"
              >
                <p className="text-xl font-bold text-teal-secondary">토요일</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-teal-secondary"></div>
                </div>
              </motion.div>

              {/* Sunday & Holidays */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-teal-bg rounded-lg flex flex-col justify-center items-center text-center p-12 md:p-14 gap-6 h-[12.1875rem] hover:scale-102 transition-transform duration-200"
              >
                <p className="text-xl font-bold text-teal-secondary">
                  일요일 · 공휴일
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-teal-secondary"></div>
                </div>
              </motion.div>

              {/* Lunch Break - Spans 2 columns */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-teal-secondary rounded-lg flex flex-col justify-center items-center text-center p-12 md:p-14 gap-6 h-[12.1875rem] md:col-span-2 hover:scale-102 transition-transform duration-200"
              >
                <p className="text-xl font-bold text-white">점심시간</p>
                <p className="text-xl font-bold text-white whitespace-nowrap">
                  PM 01:00 ~ PM 02:00
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* Reservation Section */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col lg:flex-row gap-6 lg:gap-[1.875rem] items-start lg:items-center mb-24"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary w-full lg:w-[15.9375rem] flex-shrink-0">
              예약 바로가기
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-[1.875rem] w-full">
              {/* Phone Consultation */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="hover:-translate-y-1 transition-transform duration-200"
              >
                <Link
                  href="tel:031-847-5550"
                  className="bg-gray-lighter rounded-lg flex flex-col justify-center items-center text-center p-12 md:p-14 gap-8 h-[19rem] hover:shadow-lg transition-shadow block"
                >
                  <Image
                    src={phoneIcon}
                    alt="전화 아이콘"
                    width={80}
                    height={80}
                    unoptimized
                  />
                  <div className="flex flex-col gap-6">
                    <p className="text-xl font-bold text-dark-primary">
                      전화 상담
                    </p>
                    <p className="text-xl font-bold text-teal-secondary whitespace-nowrap">
                      031-847-5550
                    </p>
                  </div>
                </Link>
              </motion.div>

              {/* Kakao Chat */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gray-lighter rounded-lg flex flex-col justify-between items-center text-center p-12 md:p-14 h-[19rem] relative overflow-hidden hover:-translate-y-1 transition-transform duration-200"
              >
                <Image
                  src={kakaoChatImage}
                  alt="카카오톡 채팅"
                  width={80}
                  height={80}
                  quality={100}
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-dark-primary">
                    채팅 상담
                  </p>
                  <p className="text-base text-teal-secondary mt-2 whitespace-nowrap">
                    @조은이플란트치과의원
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors"
                >
                  <span className="text-base">예약하기</span>
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
              </motion.div>

              {/* Naver Booking */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-gray-lighter rounded-lg flex flex-col justify-between items-center text-center p-12 md:p-14 h-[19rem] relative overflow-hidden hover:-translate-y-1 transition-transform duration-200"
              >
                <Image
                  src={naverBookingImage}
                  alt="네이버 예약"
                  width={80}
                  height={80}
                  quality={100}
                />
                <div className="flex flex-col">
                  <p className="text-xl font-bold text-dark-primary">
                    간편 예약
                  </p>
                  <p className="text-base text-teal-secondary mt-2 whitespace-nowrap">
                    조은이플란트치과 양주점
                  </p>
                </div>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors"
                >
                  <span className="text-base">예약하기</span>
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
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>
    </motion.div>
  );
};

export default ReservationPage;
