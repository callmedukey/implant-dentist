import * as motion from "motion/react-client";
import Image from "next/image";

import educationProcessImage from "@/public/images/chronic-disease/education-process-bg.webp";
import treatmentExpertiseImage from "@/public/images/chronic-disease/treatment-expertise-bg.webp";

const ChronicDiseaseInfo = () => {
  return (
    <section className="flex flex-col gap-6 md:gap-12 lg:gap-[5.8125rem] py-8 md:py-16 lg:py-24 w-full">
      {/* Treatment Expertise Card */}
      <div className="flex flex-col lg:flex-row overflow-hidden w-full">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[30.3125rem] pr-2"
        >
          <div className="relative w-full h-full rounded-r-md overflow-hidden">
            <Image
              src={treatmentExpertiseImage}
              alt="치료 전문성 배경 이미지"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:px-[1.875rem] lg:py-0 justify-center flex-1"
        >
          <h3
            className="text-xl md:text-2xl lg:text-[2.0738rem] leading-[1.6] font-bold text-center lg:text-left"
            style={{ color: "var(--color-dark-primary)" }}
          >
            조은이플란트치과의
            <br />
            만성질환 치료 노하우
          </h3>
          <p
            className="text-14 md:text-base lg:text-[1.44rem] leading-[1.6] text-center lg:text-left"
            style={{ color: "var(--color-dark-primary)" }}
          >
            대학병원에서 만성질환 환자들 치료의{" "}
            <span className="text-teal-secondary">경험이</span>
            <br className="hidden lg:block" />
            <span className="text-teal-secondary">풍부한 전문의</span>가 특화된
            진료 프로세스를 바탕으로
            <br className="hidden lg:block" />
            <span className="text-teal-secondary">안전하게 진료</span>
            합니다.
          </p>
        </motion.div>
      </div>

      {/* Education Process Card */}
      <div className="flex flex-col lg:flex-row overflow-hidden w-full">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:px-[3rem] lg:py-[3rem] justify-center flex-1 order-2 lg:order-1 lg:min-h-[30.3125rem]"
        >
          <div className="mx-auto lg:ml-auto lg:mr-0 space-y-4 md:space-y-6 lg:space-y-8">
            <h3 className="text-xl md:text-2xl lg:text-[2.0738rem] leading-[1.6] font-bold text-dark-primary text-center lg:text-left">
              만성질환 특화 진료
              <br />
              프로세스를 위한 원내 교육
            </h3>
            <p className="text-14 md:text-base lg:text-[1.44rem] leading-[1.6] text-dark-primary text-center lg:text-left">
              조은이플란트치과는 기저질환을 가지고 있는
              <br className="hidden lg:block" />
              환자분들의 안전한 진료 를 위해
              <span className="text-teal-secondary">모든 의료진</span>을
              <br className="hidden lg:block" />
              대상으로
              <span className="text-teal-secondary">정기적인 원내교육</span>을
              실시합니다
            </p>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[30.3125rem] order-1 lg:order-2 pl-2"
        >
          <div className="relative w-full h-full rounded-l-md overflow-hidden">
            <Image
              src={educationProcessImage}
              alt="교육 프로세스 배경 이미지"
              fill
              className="object-cover"
              quality={100}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ChronicDiseaseInfo;
