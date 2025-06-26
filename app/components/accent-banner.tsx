import * as motion from "motion/react-client";
import Image from "next/image";

import logoImage from "@/public/images/accent-logo.svg";

const AccentBanner = () => {
  return (
    <section className="flex justify-center items-center bg-white py-12 md:min-h-[27.8125rem] px-4 md:px-6 lg:px-8 **:break-keep">
      <div className="flex flex-col items-center gap-4 sm:gap-8 w-full">
        <motion.div
          className="max-w-[15rem] md:max-w-[18rem] lg:max-w-[20.6875rem] h-[9rem] md:h-[11rem] lg:h-[12.576rem]"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        >
          <Image
            src={logoImage}
            alt="조은이플란트치과 로고"
            unoptimized
            className="w-full h-full"
          />
        </motion.div>
        <motion.div
          className="flex flex-col items-center gap-4 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        >
          <h1 className="text-teal-secondary font-pretendard font-bold text-14 md:text-xl lg:text-2xl leading-[160%] text-center">
            언제 어디서나, 같은 마음으로 진료합니다
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default AccentBanner;
