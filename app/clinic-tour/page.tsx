import * as motion from "motion/react-client";
import { Metadata } from "next";

import { ClinicCarousel } from "./components/clinic-carousel";

export const metadata: Metadata = {
  title: "둘러보기 | 조은이플란트치과",
  description:
    "조은이플란트치과의 현대적이고 편안한 시설을 둘러보세요. 최신 의료장비와 쾌적한 환경을 갖춘 치과 내부를 소개합니다.",
  keywords:
    "치과 시설, 치과 둘러보기, 치과 인테리어, 최신 의료장비, 쾌적한 치과, 조은이플란트치과 시설, 양주 치과 시설",
  openGraph: {
    title: "둘러보기 | 조은이플란트치과",
    description:
      "조은이플란트치과의 현대적이고 편안한 시설을 둘러보세요. 최신 의료장비와 쾌적한 환경을 갖춘 치과 내부를 소개합니다.",
    type: "website",
  },
};

const ClinicTourPage = () => {
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
          둘러보기
        </motion.h1>
      </div>

      {/* Carousel Section */}
      <ClinicCarousel />
    </motion.div>
  );
};

export default ClinicTourPage;
