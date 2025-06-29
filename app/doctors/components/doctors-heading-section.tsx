import * as motion from "motion/react-client";
import Image from "next/image";

import improvedResImage from "@/public/images/doctors/improved-res-2.webp";

const DoctorsHeadingSection = () => {
  return (
    <section className="flex w-full max-w-[69.375rem] flex-col items-end gap-6 md:gap-8 lg:gap-[2.313rem] px-4 md:px-0 mx-auto py-8 md:py-12 lg:py-16">
      {/* Heading */}
      <div className="flex w-full flex-col items-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex w-full flex-col items-center gap-2">
          <p className="text-center text-14 md:text-base lg:text-lg font-normal leading-[1.6] text-dark-primary opacity-50">
            CHOONEEPLANT DENTAL CLINIC
          </p>
          <h1 className="text-center text-xl md:text-3xl lg:text-4xl font-bold leading-[1.6] text-dark-primary">
            전문의 소개
          </h1>
        </div>
      </div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex w-full flex-col items-center gap-4 md:gap-5 lg:gap-6 rounded-lg bg-black/5 p-4 md:p-6 lg:p-8 **:break-keep"
      >
        <Image
          src={improvedResImage}
          alt="보건복지부 인증 전문의 로고"
          quality={100}
          width={500}
          height={129}
          className="h-auto w-full max-w-[31.25rem]"
        />
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-center text-base md:text-xl lg:text-2xl font-bold leading-[1.6] text-black">
            양주 조은이플란트치과는 <br className="md:hidden" />
            <span className="text-teal-secondary">전원 보건복지부</span> 인증
            전문의로 <br className="md:hidden" /> 구성된 치과입니다.
          </h2>
          <p className="text-center text-14 md:text-base lg:text-lg font-normal leading-[1.6] text-dark-primary">
            저희 양주 조은이플란트치과는 풍부한 경험과{" "}
            <br className="md:hidden" /> 철저한 전문 지식을 바탕으로,
            <br />
            환자 개개인에게 맞춤형 치료를 제공하며, <br className="md:hidden" />
            신뢰를 기반으로 한 안전한 진료를 약속드립니다
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default DoctorsHeadingSection;
