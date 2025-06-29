import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

import arrowIcon from "@/public/images/about/arrow-right.svg";
import backgroundImage from "@/public/images/about/final-section-bg.webp";

const AboutFinalSection = () => {
  return (
    <section className="w-full max-w-[--breakpoint-max] mx-auto px-4 md:px-8 py-8 md:py-12 lg:py-16">
      <div className="max-w-[69.375rem] mx-auto flex flex-col items-center gap-8 md:gap-12 lg:gap-16">
        {/* Title and subtitle */}
        <div className="max-w-[56.625rem] flex flex-col gap-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed break-keep"
          >
            편안함과 신뢰, 그 이상의 진료환경
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-xl lg:text-2xl font-normal leading-relaxed"
          >
            처음 방문하셔도 안심하실 수 있도록,
            <br className="md:hidden" /> 정성과 배려로 진료합니다.
          </motion.p>
        </div>

        {/* Image with CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[69.375rem] h-[20rem] md:h-[28rem] lg:h-[36rem] rounded-lg overflow-hidden"
        >
          <Image
            src={backgroundImage}
            alt="병원 내부 환경"
            fill
            className="object-cover"
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1530px) 90vw, 1110px"
          />
          <div className="absolute inset-0 flex flex-col justify-end items-end p-6 md:p-8 lg:p-9">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/about#clinic-tour"
                className="inline-flex items-center gap-4 bg-teal-primary text-white px-6 py-1 rounded-full hover:bg-teal-primary/90 transition-colors"
              >
                <span className="text-14 md:text-base font-bold">
                  병원 둘러보기
                </span>
                <Image
                  src={arrowIcon}
                  alt="Arrow"
                  width={10}
                  height={8}
                  unoptimized
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFinalSection;
