"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import PrivacyPolicyDialog from "@/components/privacy-policy-dialog";
import TermsDialog from "@/components/terms-dialog";
import { Checkbox } from "@/components/ui/checkbox";
import kakaoLogo from "@/public/images/kakao-logo.svg";
import naverLogo from "@/public/images/naver-logo.svg";

const Footer = () => {
  const [showBannerInGap, setShowBannerInGap] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footerGap = document.getElementById("footer-gap");
      if (!footerGap) return;

      const gapRect = footerGap.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const bannerHeight = 72; // Approximate height of the banner

      // Show banner in gap when gap is at the bottom of viewport
      if (gapRect.top <= windowHeight - bannerHeight) {
        setShowBannerInGap(true);
      } else {
        setShowBannerInGap(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <footer className="relative">
      {/* Operation Info Section */}
      <div className="bg-teal-bg">
        <div className="w-full max-w-screen-max mx-auto py-12 lg:py-20">
          <div className="flex flex-wrap justify-center">
            {/* Phone Contact */}
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                className="flex flex-col items-center gap-[1.8125rem] h-full lg:border-r border-teal-secondary lg:pr-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-dark-primary leading-[1.6]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  전화 문의
                </motion.h3>
                <motion.p
                  className="text-lg text-dark-primary leading-[1.6] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  진료 예약 및 진료 상담은
                  <br />
                  언제든지 문의 주세요
                </motion.p>
                <motion.p
                  className="text-3xl font-bold text-teal-secondary leading-[1.6]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  031-847-5550
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Operating Hours */}
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 lg:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex flex-col gap-8 h-full lg:px-8">
                <motion.h3
                  className="text-2xl font-bold text-dark-primary leading-[1.6] text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  진료시간 안내
                </motion.h3>
                <div className="flex flex-col gap-6">
                  <motion.div
                    className="flex flex-col gap-4 max-w-sm mx-auto lg:max-w-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.div
                      className="flex justify-between items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <span className="text-base lg:text-lg text-dark-primary flex items-center whitespace-nowrap">
                        월<span className="font-bold text-3xl">・</span>화
                        <span className="font-bold text-3xl">・</span>목
                        <span className="font-bold text-3xl">・</span>금
                      </span>
                      <span className="text-sm lg:text-base text-dark-primary whitespace-nowrap">
                        AM 09:30 - PM 06:30
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex justify-between items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                    >
                      <span className="text-base lg:text-lg text-dark-primary whitespace-nowrap">
                        수{" "}
                        <span className="text-teal-secondary font-bold">
                          (야간 진료)
                        </span>
                      </span>
                      <span className="text-sm lg:text-base text-dark-primary whitespace-nowrap">
                        AM 09:30 - PM 07:30
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex justify-between items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      <span className="text-base lg:text-lg text-dark-primary whitespace-nowrap">
                        토요일
                      </span>
                      <span className="text-sm lg:text-base text-dark-primary whitespace-nowrap">
                        AM 09:30 - PM 02:00
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex justify-center items-center"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.9 }}
                    >
                      <span className="text-sm lg:text-base text-dark-primary text-center">
                        토요일은 점심시간 없이 진료합니다
                      </span>
                    </motion.div>
                    <motion.div
                      className="flex justify-center items-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 1 }}
                    >
                      <p className="text-base lg:text-lg text-dark-primary text-center font-bold">
                        일요일 및 공휴일 휴진
                      </p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Reservation & Chat */}
            <motion.div
              className="w-full md:w-full lg:w-1/3 px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div
                className="flex flex-col items-center gap-8 h-full lg:border-l border-teal-secondary lg:pl-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.h3
                  className="text-2xl font-bold text-dark-primary leading-[1.6]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  진료 예약 · 채팅 상담
                </motion.h3>
                <div className="flex items-center gap-6">
                  <motion.a
                    href="https://booking.naver.com/booking/13/bizes/860783?tr=bnm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-[3.125rem] h-[3.125rem] rounded-full flex items-center justify-center"
                      whileHover={{
                        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                        y: -2,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image src={naverLogo} alt="네이버 로고" unoptimized />
                    </motion.div>
                    <span className="text-base text-black group-hover:text-teal-secondary transition-colors">
                      네이버 예약
                    </span>
                  </motion.a>
                  <motion.a
                    href="https://pf.kakao.com/_FMavxj/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-4 group"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="w-[3.375rem] h-[3.125rem] flex items-center justify-center"
                      whileHover={{
                        y: -2,
                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image src={kakaoLogo} alt="카카오톡 로고" unoptimized />
                    </motion.div>
                    <span className="text-base text-black group-hover:text-teal-secondary transition-colors">
                      카카오톡 문의
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Gap - This is where the banner will dock */}
      <div
        id="footer-gap"
        className="relative h-[4.5rem] bg-transparent max:block hidden"
        aria-hidden="true"
      >
        {showBannerInGap && (
          <motion.div
            className="absolute inset-0 bg-teal-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto max-w-screen-max h-full">
              <div className="flex items-center justify-center gap-2 lg:gap-[1.3125rem] h-full px-4 lg:px-10">
                {/* Desktop Form */}
                <motion.form className="hidden lg:flex items-center gap-[1.3125rem]">
                  {/* Name Input */}
                  <motion.div className="flex items-center">
                    <label
                      htmlFor="gap-name-input"
                      className="flex items-center justify-center gap-2.5 px-2 lg:px-4 py-2 text-base lg:text-lg leading-[1.6] text-white font-bold"
                    >
                      성함
                    </label>
                    <motion.input
                      id="gap-name-input"
                      type="text"
                      className="h-8 w-28 lg:w-40 rounded bg-white/25 px-3 text-sm lg:text-base text-white placeholder-white/60 outline-none transition-all duration-200"
                      placeholder="이름을 입력하세요"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                      onFocus={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.35)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.25)")
                      }
                    />
                  </motion.div>

                  {/* Contact Input */}
                  <motion.div className="flex items-center">
                    <label
                      htmlFor="gap-contact-input"
                      className="flex items-center justify-center gap-2.5 px-2 lg:px-4 py-2 text-base lg:text-lg leading-[1.6] text-white font-bold"
                    >
                      연락처
                    </label>
                    <motion.input
                      id="gap-contact-input"
                      type="tel"
                      className="h-8 w-28 lg:w-40 rounded bg-white/25 px-3 text-sm lg:text-base text-white placeholder-white/60 outline-none transition-all duration-200"
                      placeholder="010-0000-0000"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                      onFocus={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.35)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.25)")
                      }
                    />
                  </motion.div>

                  {/* Inquiry Input */}
                  <motion.div className="flex items-center">
                    <label
                      htmlFor="gap-inquiry-input"
                      className="flex items-center justify-center gap-2.5 px-2 lg:px-4 py-2 text-base lg:text-lg leading-[1.6] text-white font-bold"
                    >
                      문의내용
                    </label>
                    <motion.input
                      id="gap-inquiry-input"
                      type="text"
                      className="h-8 w-32 lg:w-[13.75rem] rounded bg-white/25 px-3 text-sm lg:text-base text-white placeholder-white/60 outline-none transition-all duration-200"
                      placeholder="문의사항을 입력하세요"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.25)" }}
                      onFocus={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.35)")
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          "rgba(255, 255, 255, 0.25)")
                      }
                    />
                  </motion.div>

                  {/* Privacy Agreement Checkbox */}
                  <motion.div className="flex items-center gap-2.5 px-2 lg:px-4 py-2">
                    <motion.div className="flex items-center gap-2.5">
                      <Checkbox
                        id="gap-privacy-agreement"
                        className="h-5 w-5 border-white/50 bg-white/25 data-[state=checked]:bg-white data-[state=checked]:border-white data-[state=checked]:text-teal-secondary"
                      />
                    </motion.div>
                    <label
                      htmlFor="gap-privacy-agreement"
                      className="cursor-pointer text-base lg:text-lg leading-[1.6] text-white font-bold"
                    >
                      개인정보 수집 및 이용 동의
                    </label>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    className="flex items-center gap-2 rounded-full bg-white px-4 lg:px-6 py-1 text-base lg:text-lg leading-[1.6] text-teal-secondary shadow-lg hover:scale-105 duration-300 font-bold"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    신청하기
                    <ArrowRight strokeWidth={3} className="w-4 h-4" />
                  </motion.button>
                </motion.form>

                {/* Mobile Form */}
                <div className="flex lg:hidden items-center gap-2 text-white font-bold text-sm">
                  <span>빠른 상담 신청</span>
                  <ArrowRight strokeWidth={3} className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Business Info Section */}
      <motion.div
        className="bg-gray-lighter"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col justify-center items-center py-4 lg:py-6 px-4 lg:px-0">
          <motion.div
            className="flex flex-col gap-1 w-full max-w-screen-max"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              className="flex items-center px-4 lg:px-6 py-1 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-lg lg:text-xl font-bold text-dark-primary text-center w-full sm:text-left">
                양주 조은이플란트치과의원
              </h2>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 lg:gap-6 px-4 lg:px-6 py-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-6 text-center lg:text-left mx-auto w-full">
                <motion.span
                  className="text-sm lg:text-base text-dark-primary leading-[1.6]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  경기도 양주시 부흥로 2152-4 2층
                </motion.span>
                <motion.span
                  className="text-sm lg:text-base text-dark-primary leading-[1.6]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  문의 031-847-5550
                </motion.span>
                <motion.span
                  className="text-sm lg:text-base text-dark-primary leading-[1.6]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  대표자 이충휘
                </motion.span>
                <motion.span
                  className="text-sm lg:text-base text-dark-primary leading-[1.6]"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  사업자 번호 284-31-01294
                </motion.span>
              </div>
            </motion.div>
            <motion.div
              className="flex items-center w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <div className="flex flex-col lg:flex-row justify-between items-center gap-2 py-1 border-t border-dark-primary border-opacity-80 w-full">
                <motion.div
                  className="flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >
                  <PrivacyPolicyDialog>
                    <motion.button
                      className="px-2 lg:px-4 py-1 text-xs lg:text-sm text-dark-primary hover:text-teal-secondary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      개인정보처리방침
                    </motion.button>
                  </PrivacyPolicyDialog>
                  <div className="w-0 h-4 border-l border-dark-primary" />
                  <TermsDialog>
                    <motion.button
                      className="px-2 lg:px-4 py-1 text-xs lg:text-sm text-dark-primary hover:text-teal-secondary transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      이용약관
                    </motion.button>
                  </TermsDialog>
                </motion.div>
                <motion.p
                  className="text-xs lg:text-sm text-dark-primary text-center lg:text-right"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1 }}
                >
                  © 2025 조은이플란트치과
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
