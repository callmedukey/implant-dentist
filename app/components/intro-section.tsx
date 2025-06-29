import * as motion from "motion/react-client";
import Image from "next/image";

import doctorImage from "@/public/images/intro/doctor-lee.webp";
import quoteSvg1 from "@/public/images/intro/quote-left-1.svg";
import quoteSvg2 from "@/public/images/intro/quote-left-2.svg";

import { TextGenerateEffect } from "./text-generate-effect";

const IntroSection = () => {
  return (
    <section className="w-full flex justify-center bg-[#F8F8F8] pt-12 md:pt-20 mb-12 md:mb-20 mt-24">
      <div className="w-full max-w-screen-max px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 xl:flex flex-col lg:flex-row items-end"
        >
          {/* Doctor Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-[42.5rem] h-[25rem] md:h-[35rem] lg:h-[43.1875rem] relative"
          >
            <Image
              src={doctorImage}
              alt="이충휘 대표원장"
              fill
              quality={100}
              className="object-cover object-top rounded-lg lg:rounded-none"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1 flex flex-col justify-center items-center gap-4 p-8 md:p-12 lg:p-14 **:break-keep z-10"
          >
            {/* Header with quote */}
            <div className="w-full flex items-center justify-between gap-2 max-w-md mr-auto">
              {/* Name and Title */}
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-2xl md:text-4xl text-teal-secondary">
                  이충휘
                </h3>
                <span className="text-14 md:text-lg text-teal-secondary">
                  양주점 대표원장
                </span>
              </div>

              {/* Quote Icon */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-[4.8125rem] lg:h-[4.8125rem] bg-white rounded-full flex items-center justify-center">
                <Image
                  src={quoteSvg1}
                  alt=""
                  unoptimized
                  className="absolute left-[0.2rem]"
                />
                <Image
                  src={quoteSvg2}
                  alt=""
                  width={35}
                  height={55}
                  unoptimized
                  className="absolute right-[0.2rem]"
                />
              </div>
            </div>

            {/* Quote Text */}
            <div className="flex flex-col gap-4 md:gap-6 lg:gap-[1.4375rem] w-full max-w-md mr-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <TextGenerateEffect
                  words="환자 한 분, 한 분의 소중함을 잊지 않겠습니다."
                  className="text-14 md:text-xl  text-dark-primary leading-relaxed"
                  duration={0.8}
                  delay={0}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <TextGenerateEffect
                  words="정확한 진단과 정직한 진료, 그리고 끝까지 책임지는 치료로 보답하겠습니다."
                  className="text-14 md:text-xl text-dark-primary leading-relaxed"
                  duration={0.8}
                  delay={1.5}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <TextGenerateEffect
                  words="언제 어디서나 같은 마음으로 진료하는 조은이플란트치과가 되겠습니다."
                  className="text-14 md:text-xl text-dark-primary leading-relaxed"
                  duration={0.8}
                  delay={3}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
