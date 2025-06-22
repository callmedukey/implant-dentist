import * as motion from "motion/react-client";
import Image from "next/image";

import biopsyBg from "@/public/images/services/biopsy-bg.webp";
import boneGraftBg from "@/public/images/services/bone-graft-bg.webp";
import cavityTreatmentBg from "@/public/images/services/cavity-treatment-bg.webp";
import digitalImplantBg from "@/public/images/services/digital-implant-bg.webp";
import implantBg from "@/public/images/services/implant-bg.webp";
import jawTreatmentBg from "@/public/images/services/jaw-treatment-bg.webp";
import naturalToothBg from "@/public/images/services/natural-tooth-bg.webp";
import wisdomToothBg from "@/public/images/services/wisdom-tooth-bg.webp";

const services = [
  {
    id: 1,
    title: "임플란트",
    subtitle1: "풍부한 임상경험 바탕",
    subtitle2: "고난이도, 재수술까지 문제 없이",
    bgImage: implantBg,
  },
  {
    id: 2,
    title: "턱관절치료",
    subtitle1: "턱관절 전문가",
    subtitle2: "정확한 진단 최소 침습적 치료",
    bgImage: jawTreatmentBg,
  },
  {
    id: 3,
    title: "사랑니 발치",
    subtitle1: "구강외과 전문의",
    subtitle2: "신경 손상을 최소화한 발치",
    bgImage: wisdomToothBg,
  },
  {
    id: 4,
    title: "충치치료",
    subtitle1: "필요한 치료만을",
    subtitle2: "필요한 만큼만",
    bgImage: cavityTreatmentBg,
  },
  {
    id: 5,
    title: "자연치아 살리기",
    subtitle1: "단계별로 접근하는",
    subtitle2: "자연치아 보존",
    bgImage: naturalToothBg,
  },
  {
    id: 6,
    title: "명품 뼈이식",
    subtitle1: "대학병원에서만 볼 수 있는",
    subtitle2: "차별화된 뼈이식재",
    bgImage: boneGraftBg,
  },
  {
    id: 7,
    title: "조직검사",
    subtitle1: "구강 연조직 질환을",
    subtitle2: "멀리 가지 않고도 검사",
    bgImage: biopsyBg,
  },
  {
    id: 8,
    title: "디지털 임플란트",
    subtitle1: "디지털 기술로",
    subtitle2: "임플란트의 패러다임을 바꾸다",
    bgImage: digitalImplantBg,
  },
];

const ServiceList = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-12 lg:gap-[3.5rem] w-full max-w-[69.375rem] mx-auto px-4 md:px-6 lg:px-8 my-16">
      <div className="flex flex-col gap-2 w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-dark-primary leading-[1.6]">
          진료과목 및 서비스 안내
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl font-bold text-center text-teal-secondary leading-[1.6]">
          건강한 치아를 위한 맞춤 치료
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="relative w-full aspect-square rounded-lg overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ willChange: "opacity" }}
          >
            <Image
              src={service.bgImage}
              alt={service.title}
              fill
              className="object-cover group-hover:scale-125 transition-transform duration-500"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent/0" />
            <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6 flex flex-col gap-2 lg:gap-3">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-[1.6]">
                {service.title}
              </h3>
              <div className="flex flex-col gap-0.5 lg:gap-1">
                <p className="text-xs md:text-sm font-normal text-white leading-[1.6]">
                  {service.subtitle1}
                </p>
                <p className="text-xs md:text-sm font-normal text-white leading-[1.6]">
                  {service.subtitle2}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
