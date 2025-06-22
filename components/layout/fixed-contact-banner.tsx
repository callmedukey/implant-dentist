"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { usePathname } from "next/navigation";

const FixedContactBanner = () => {
  const [open, setOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const footerGap = document.getElementById("footer-gap");
      if (!footerGap || !bannerRef.current) return;

      const gapRect = footerGap.getBoundingClientRect();
      const bannerHeight = bannerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      // Check if the gap is visible and if we should dock the banner
      if (gapRect.top <= windowHeight - bannerHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (pathname.includes("/admin") || pathname.includes("/login")) return null;

  // Form component to be reused
  const ContactForm = () => (
    <motion.form
      className="flex flex-col gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {/* Name Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <label
          htmlFor="name-input"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          성함
        </label>
        <motion.input
          id="name-input"
          type="text"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 outline-none transition-all duration-200 focus:border-teal-secondary focus:ring-2 focus:ring-teal-secondary/20"
          placeholder="이름을 입력하세요"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Contact Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label
          htmlFor="contact-input"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          연락처
        </label>
        <motion.input
          id="contact-input"
          type="tel"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 outline-none transition-all duration-200 focus:border-teal-secondary focus:ring-2 focus:ring-teal-secondary/20"
          placeholder="010-0000-0000"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Inquiry Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <label
          htmlFor="inquiry-input"
          className="block mb-2 text-sm font-bold text-gray-700"
        >
          문의내용
        </label>
        <motion.textarea
          id="inquiry-input"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-700 outline-none transition-all duration-200 focus:border-teal-secondary focus:ring-2 focus:ring-teal-secondary/20 min-h-[6rem]"
          placeholder="문의사항을 입력하세요"
          whileFocus={{ scale: 1.02 }}
        />
      </motion.div>

      {/* Privacy Agreement Checkbox */}
      <motion.div
        className="flex items-center gap-2.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Checkbox
            id="privacy-agreement"
            className="h-5 w-5 border-gray-300 data-[state=checked]:bg-teal-secondary data-[state=checked]:border-teal-secondary"
          />
        </motion.div>
        <label
          htmlFor="privacy-agreement"
          className="cursor-pointer text-sm text-gray-700"
        >
          개인정보 수집 및 이용 동의
        </label>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-teal-secondary px-6 py-3 text-white shadow-lg hover:scale-105 duration-300 font-bold w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.7,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
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
  );

  return (
    <>
      {/* Mobile Vertical Button */}
      <div className="fixed left-0 top-3/4 -translate-y-1/2 z-50 max:hidden">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <motion.button
              className="bg-teal-secondary text-white p-3 rounded-r-lg shadow-lg font-bold text-base writing-mode-vertical-rl"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                willChange: "transform",
              }}
            >
              상담 신청하기
            </motion.button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">상담 신청</DialogTitle>
            </DialogHeader>
            <ContactForm />
          </DialogContent>
        </Dialog>
      </div>

      {/* Desktop Fixed Banner */}
      <motion.div
        ref={bannerRef}
        className="fixed bottom-0 left-0 right-0 z-50 bg-teal-secondary hidden max:block"
        initial={{ y: 100 }}
        animate={{
          y: 0,
          opacity: isAtBottom ? 0 : 1,
          pointerEvents: isAtBottom ? "none" : "auto",
        }}
        transition={{
          y: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        style={{ willChange: "transform, opacity" }}
      >
        <div className="mx-auto max-w-screen-max p-2.5">
          <div className="flex items-center justify-center gap-[1.3125rem] bg-teal-secondary px-10 py-2">
            {/* Desktop Form */}
            <motion.form className="flex items-center gap-[1.3125rem]">
              {/* Name Input */}
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="desktop-name-input"
                  className="flex items-center justify-center gap-2.5 px-4 py-2 text-lg leading-[1.6] text-white font-bold"
                >
                  성함
                </label>
                <motion.input
                  id="desktop-name-input"
                  type="text"
                  className="h-8 w-40 rounded bg-white/25 px-3 text-white placeholder-white/60 outline-none transition-all duration-200"
                  placeholder="이름을 입력하세요"
                  whileFocus={{ scale: 1.02 }}
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
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="desktop-contact-input"
                  className="flex items-center justify-center gap-2.5 px-4 py-2 text-lg leading-[1.6] text-white font-bold"
                >
                  연락처
                </label>
                <motion.input
                  id="desktop-contact-input"
                  type="tel"
                  className="h-8 w-40 rounded bg-white/25 px-3 text-white placeholder-white/60 outline-none transition-all duration-200"
                  placeholder="010-0000-0000"
                  whileFocus={{ scale: 1.02 }}
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
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="desktop-inquiry-input"
                  className="flex items-center justify-center gap-2.5 px-4 py-2 text-lg leading-[1.6] text-white font-bold"
                >
                  문의내용
                </label>
                <motion.input
                  id="desktop-inquiry-input"
                  type="text"
                  className="h-8 w-[13.75rem] rounded bg-white/25 px-3 text-white placeholder-white/60 outline-none transition-all duration-200"
                  placeholder="문의사항을 입력하세요"
                  whileFocus={{ scale: 1.02 }}
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
              <motion.div
                className="flex items-center gap-2.5 px-4 py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2.5"
                >
                  <Checkbox
                    id="desktop-privacy-agreement"
                    className="h-5 w-5 border-white/50 bg-white/25 data-[state=checked]:bg-white data-[state=checked]:border-white data-[state=checked]:text-teal-secondary"
                  />
                </motion.div>
                <label
                  htmlFor="desktop-privacy-agreement"
                  className="cursor-pointer text-lg leading-[1.6] text-white font-bold"
                >
                  개인정보 수집 및 이용 동의
                </label>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-white px-6 py-1 text-lg leading-[1.6] text-teal-secondary shadow-lg hover:scale-105 duration-300 font-bold"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.7,
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
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
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FixedContactBanner;
