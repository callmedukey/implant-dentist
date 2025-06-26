"use client";

import { ArrowUp, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

// Import images
import kakaoIcon from "@/public/images/quick-menu/kakao-icon.webp";
import naverBlogIcon from "@/public/images/quick-menu/naver-logo.png";
import naverReservationIcon from "@/public/images/quick-menu/naver-reservation-icon.webp";
import phoneIcon from "@/public/images/quick-menu/phone-icon.svg";

const FixedMenus = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show the menu when scrolled down more than 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsExpanded(false); // Close mobile menu after clicking
  };

  // Render menu items - reusable for both mobile and desktop
  const renderMenuItems = (isMobile = false) => (
    <>
      {/* Kakao Talk */}
      <a
        href="https://pf.kakao.com/_FMavxj/chat"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center ${
          isMobile ? "gap-3 px-0 py-4" : "gap-2 md:gap-4 px-0 py-3 md:py-4"
        } border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200`}
        onClick={() => isMobile && setIsExpanded(false)}
      >
        <Image
          src={kakaoIcon}
          alt="카카오톡 아이콘"
          className={isMobile ? "w-10 h-10" : "w-8 h-8 md:w-10 md:h-10"}
          quality={100}
        />
        <span
          className={`text-dark-primary ${
            isMobile ? "text-sm" : "text-xs md:text-sm"
          }`}
        >
          카톡 상담
        </span>
      </a>

      {/* Naver Reservation */}
      <a
        href="https://booking.naver.com/booking/13/bizes/860783?tr=bnm"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center ${
          isMobile ? "gap-3 px-0 py-4" : "gap-2 md:gap-4 px-0 py-3 md:py-4"
        } border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200`}
        onClick={() => isMobile && setIsExpanded(false)}
      >
        <Image
          src={naverReservationIcon}
          alt="네이버 예약 아이콘"
          className={isMobile ? "w-10 h-10" : "w-8 h-8 md:w-10 md:h-10"}
          quality={100}
        />
        <span
          className={`text-dark-primary ${
            isMobile ? "text-sm" : "text-xs md:text-sm"
          }`}
        >
          네이버 예약
        </span>
      </a>

      {/* Naver Blog */}
      <a
        href="https://blog.naver.com/chooneeplant"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex flex-col items-center ${
          isMobile ? "gap-3 px-0 py-4" : "gap-2 md:gap-4 px-0 py-3 md:py-4"
        } border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200`}
        onClick={() => isMobile && setIsExpanded(false)}
      >
        <Image
          src={naverBlogIcon}
          alt="네이버 블로그 아이콘"
          className={isMobile ? "w-10 h-10" : "w-8 h-8 md:w-10 md:h-10"}
          quality={100}
        />
        <span
          className={`text-dark-primary ${
            isMobile ? "text-sm" : "text-xs md:text-sm"
          }`}
        >
          네이버 블로그
        </span>
      </a>

      {/* Phone */}
      <a
        href="tel:031-847-5550"
        className={`flex flex-col items-center ${
          isMobile ? "gap-3 px-0 py-4" : "gap-2 md:gap-4 px-0 py-3 md:py-4"
        } hover:bg-gray-50 transition-colors duration-200`}
        onClick={() => isMobile && setIsExpanded(false)}
      >
        <div
          className={`relative ${
            isMobile ? "w-10 h-10" : "w-8 h-8 md:w-10 md:h-10"
          }`}
        >
          <Image src={phoneIcon} alt="전화 아이콘" fill unoptimized />
        </div>
        <div className="flex flex-col items-center gap-0">
          <span
            className={`text-dark-primary ${
              isMobile ? "text-sm" : "text-xs md:text-sm"
            } font-bold`}
          >
            031-847-5550
          </span>
          <span
            className={`text-dark-primary ${
              isMobile ? "text-sm" : "text-xs md:text-sm"
            }`}
          >
            전화 문의
          </span>
        </div>
      </a>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`flex flex-col items-center gap-1 px-0 ${
          isMobile ? "py-3" : "py-1.5 md:py-2"
        } bg-gray-100 hover:bg-gray-200 transition-colors duration-200`}
      >
        <ArrowUp
          className={`${
            isMobile ? "w-6 h-6" : "w-5 h-5 md:w-6 md:h-6"
          } text-dark-primary`}
          strokeWidth={2}
        />
        <span
          className={`text-dark-primary ${
            isMobile ? "text-sm" : "text-xs md:text-sm"
          } font-bold`}
        >
          TOP
        </span>
      </button>
    </>
  );

  // Don't show on admin or login pages
  if (pathname.includes("/admin") || pathname.includes("/login")) return null;

  return (
    <>
      {/* Mobile Vertical Button */}
      <motion.div
        className="fixed right-4 bottom-24 z-40 md:hidden"
        initial={{ x: 100 }}
        animate={{
          x: isVisible ? 0 : 100,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-teal-secondary text-white px-3 py-4 rounded-l-lg shadow-lg font-bold text-base"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            willChange: "transform",
          }}
        >
          {isExpanded ? "닫기" : "퀵메뉴"}
        </motion.button>
      </motion.div>

      {/* Mobile Expanded Menu */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Menu Content - positioned from the right edge, sliding left into view */}
            <motion.div
              className="absolute bottom-24 bg-white rounded-l-lg shadow-lg overflow-hidden"
              style={{
                right: 0,
                width: "200px",
              }}
              initial={{ x: 200 }}
              animate={{ x: 0 }}
              exit={{ x: 200 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-teal-secondary px-4 py-3 flex items-center justify-between">
                <span className="text-white text-sm font-bold">QUICK MENU</span>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-white hover:opacity-80 transition-opacity"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Items */}
              <div className="flex flex-col">{renderMenuItems(true)}</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Fixed Menu */}
      <motion.div
        className="fixed right-2 bottom-2 md:right-5 md:bottom-5 z-40 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: isVisible ? 1 : 0,
          y: isVisible ? 0 : 20,
          pointerEvents: isVisible ? "auto" : "none",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden"
          style={{ width: "120px" }}
        >
          {/* Header */}
          <div className="bg-teal-secondary px-4 py-2 text-center">
            <span className="text-white text-sm">QUICK MENU</span>
          </div>

          {/* Menu Items */}
          <div className="flex flex-col">{renderMenuItems(false)}</div>
        </div>
      </motion.div>
    </>
  );
};

export default FixedMenus;
