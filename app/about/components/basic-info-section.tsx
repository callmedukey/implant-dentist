import * as motion from "motion/react-client";
import Image from "next/image";

import advancedTechImage from "@/public/images/about/advanced-tech.webp";
import customizedCareImage from "@/public/images/about/customized-card.webp";
import logoIcon from "@/public/images/about/logo-icon.svg";
import patientCenteredImage from "@/public/images/about/patient-centered.webp";
import responsibleCareImage from "@/public/images/about/responsible-care.webp";

const BasicInfoSection = () => {
  const values = [
    {
      title: "환자 중심 진료",
      image: patientCenteredImage,
      cornerRadius:
        "rounded-tl-lg md:rounded-tl-lg md:rounded-bl-lg md:rounded-tr-none rounded-tr-none",
    },
    {
      title: "맞춤형 진료",
      image: customizedCareImage,
      cornerRadius: "",
    },
    {
      title: "첨단 기술 진료",
      image: advancedTechImage,
      cornerRadius: "",
    },
    {
      title: "책임 있는 진료",
      image: responsibleCareImage,
      cornerRadius:
        "rounded-br-lg md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-none rounded-bl-none",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 md:gap-12 lg:gap-16 px-4 py-8 md:py-12 lg:py-16 **:break-keep">
      {/* Description Section */}
      <motion.div
        className="flex flex-col gap-2 max-w-full md:max-w-2xl lg:max-w-[61.3125rem] text-center"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.3,
        }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ willChange: "transform, opacity" }}
      >
        <motion.p
          className="text-14 md:text-lg lg:text-xl leading-relaxed text-dark-primary"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            bounce: 0.2,
          }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity, filter" }}
        >
          자연치아는 최대한 보존하고, 불가피한 경우에는 정밀 진단을 바탕으로
          신뢰도 높은 임플란트를 식립합니다.
        </motion.p>
        <motion.p
          className="text-14 md:text-lg lg:text-xl leading-relaxed text-dark-primary"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: 0.35,
            type: "spring",
            bounce: 0.2,
          }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity, filter" }}
        >
          단순한 시술이 아닌, 오랜 시간 건강하게 사용할 수 있는 결과를 위해
          진심을 다합니다.
        </motion.p>
      </motion.div>

      {/* Title and Logo Section */}
      <motion.div
        className="flex flex-col justify-center items-center gap-3 md:gap-4 lg:gap-6 max-w-full md:max-w-xl lg:max-w-[45.625rem]"
        initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{
          duration: 0.9,
          type: "spring",
          bounce: 0.25,
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.5 }}
        style={{ willChange: "transform, opacity", transformPerspective: 1000 }}
      >
        <motion.h2
          className="text-xl md:text-3xl lg:text-4xl font-bold leading-relaxed text-center text-dark-primary"
          initial={{ opacity: 0, y: 30, clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity, clipPath" }}
        >
          치아 하나에도 원칙과 철학이 있는 진료
        </motion.h2>
        <motion.div
          className="w-[212px] md:w-[318px] lg:w-[26.5625rem] h-[38px] md:h-[57px] lg:h-[4.82rem]"
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            type: "spring",
            bounce: 0.4,
          }}
          viewport={{ once: true }}
          style={{ willChange: "transform, opacity" }}
        >
          <Image
            src={logoIcon}
            alt="조은이플란트치과 로고"
            width={425}
            height={77}
            unoptimized
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Values Grid */}
      <motion.div
        className="flex flex-wrap w-full max-w-full md:max-w-3xl lg:max-w-[63.75rem] mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.8,
              rotateY: -45,
              z: -100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateY: 0,
              z: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.12,
              type: "spring",
              bounce: 0.3,
              opacity: {
                duration: 0.4,
                delay: index * 0.12,
              },
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-3 md:gap-6 lg:gap-8 w-1/2 md:w-1/4"
            style={{
              willChange: "transform, opacity",
              transformPerspective: 800,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              className={`relative w-full h-36 md:h-48 lg:h-56 overflow-hidden ${value.cornerRadius} group`}
            >
              <Image
                src={value.image}
                alt={value.title}
                fill
                quality={100}
                className="object-cover transition-transform duration-700 group-hover:scale-125"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.h3
              className="text-base md:text-lg lg:text-xl font-bold text-center text-dark-primary h-8 md:h-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12 + 0.4,
                type: "spring",
                bounce: 0.3,
              }}
              viewport={{ once: true }}
              style={{ willChange: "transform, opacity" }}
            >
              {value.title}
            </motion.h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BasicInfoSection;
