import * as motion from "motion/react-client";
import Image from "next/image";
import staffBgImage from "@/public/images/staff/staff-bg.webp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "의료진 소개 | 조은이플란트치과",
  description: "양주 조은이플란트치과는 전원 치과위생사 면허 소지자로 구성된 의료진이 정성과 책임으로 진료를 돕고 있습니다. 꼼꼼하고 세심한 진료를 약속드립니다.",
  keywords: "양주 치과위생사, 조은이플란트치과 의료진, 양주 치과 스태프, 치과위생사 면허, 양주 임플란트 의료진",
  openGraph: {
    title: "의료진 소개 | 조은이플란트치과",
    description: "전원 치과위생사 면허 소지자로 구성된 의료진이 정성과 책임으로 진료를 돕고 있습니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "조은이플란트치과",
    images: [
      {
        url: "/images/staff/staff-bg.webp",
        width: 1200,
        height: 630,
        alt: "조은이플란트치과 의료진",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "의료진 소개 | 조은이플란트치과",
    description: "전원 치과위생사 면허 소지자로 구성된 의료진이 정성과 책임으로 진료를 돕고 있습니다.",
    images: ["/images/staff/staff-bg.webp"],
  },
  alternates: {
    canonical: "/staff",
  },
};

const StaffPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center py-16 md:py-24 **:break-keep"
    >
      {/* Header Section */}
      <div className="flex flex-col items-center gap-2 w-full max-w-[69.375rem] px-4">
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="text-base md:text-lg text-dark-primary text-center uppercase"
        >
          CHOONEEPLANT DENTAL CLINIC
        </motion.p>

        <div className="flex flex-col items-center gap-8 md:gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center leading-relaxed"
          >
            환자와 가장 가까이에서 만나는 사람,
            <br />
            바로 <span className="text-teal-secondary">치과위생사</span>입니다.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-lg md:text-xl text-black text-center leading-relaxed"
          >
            양주 조은이플란트치과는{" "}
            <span className="text-teal-secondary font-bold">
              전원 치과위생사 면허 소지자
            </span>
            로 구성된
            <br className="hidden md:block" />
            의료진이 정성과 책임으로 진료를 돕고 있습니다.
          </motion.p>
        </div>
      </div>

      {/* Staff Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          duration: 1.2, 
          delay: 0.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileInView={{ 
          scale: [1, 1.02, 1],
          transition: { duration: 2, ease: "easeInOut" }
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full max-w-[69.375rem] h-[400px] md:h-[500px] lg:h-[42.75rem] rounded-lg overflow-hidden my-16 md:my-24 shadow-2xl"
        style={{ willChange: "transform" }}
      >
        <Image
          src={staffBgImage}
          alt="조은이플란트치과 의료진"
          quality={100}
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Promise Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-teal-secondary py-12 md:py-16 px-4 md:px-8 mb-16 md:mb-24 relative overflow-hidden"
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-gradient-to-r from-teal-primary to-teal-secondary origin-left"
          style={{ willChange: "transform" }}
        />
        <div className="max-w-[90rem] mx-auto flex flex-col items-center gap-2 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-xl md:text-2xl font-bold text-white text-center"
          >
            조은이플란트치과는 수준 높은 진료 시스템을 제공해 드릴 것을
            약속드립니다.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-2"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl font-bold text-white"
            >
              한분, 한분을 위한
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7,
                ease: [0.16, 1, 0.3, 1],
                scale: { type: "spring", damping: 15, stiffness: 200 }
              }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-white text-teal-secondary px-4 py-1 rounded font-bold text-xl md:text-2xl cursor-default"
            >
              꼼꼼하고 세심한 진료
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl font-bold text-white"
            >
              를 시행합니다.
            </motion.span>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default StaffPage;
