"use client";

import { MapPin } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import ActualMapImage from "@/public/images/actual-map.webp";
import BackgroundImage from "@/public/images/re-map.webp";

const locations = [
  {
    name: "양주 조은이플란트치과",
    address: "경기도 양주시 부흥로 2152-4 2층",
    phone: "031-847-5550",
  },
  {
    name: "강릉 조은이플란트치과",
    address: "강원특별자치도 강릉시 경강로 2100, 3층",
    phone: "033-642-2228",
  },
  {
    name: "속초 조은이플란트치과",
    address: "강원특별자치도 속초시 중앙로 8 1층",
    phone: "033-633-8828",
  },
];

const MapSection = () => {
  return (
    <section className="w-full relative">
      {/* Map image - visible on all screens */}
      <div className="relative h-[480px] lg:h-auto">
        {/* Mobile Image */}
        <Image
          src={BackgroundImage}
          alt="조은이플란트치과 전국 네트워크 지도"
          quality={100}
          fill
          className="lg:hidden object-cover object-center"
        />

        {/* Desktop Image */}
        <Image
          src={BackgroundImage}
          alt="조은이플란트치과 전국 네트워크 지도"
          quality={100}
          className="hidden lg:block w-full h-auto"
        />

        {/* Actual map image - only visible on md screens and up */}
        <div className="hidden md:block absolute right-0 top-0 bottom-0 w-auto">
          <Image
            src={ActualMapImage}
            alt="조은이플란트치과 위치 지도"
            quality={100}
            className="h-full w-auto object-contain object-right"
          />
        </div>

        {/* Text overlay - only visible on md screens and up */}
        <motion.div
          className="hidden md:block absolute left-[4%] lg:left-[8%] xl:left-[12%] top-1/2 -translate-y-1/2 max-w-[400px] lg:max-w-[540px]"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="mb-4">
            <h2 className="text-2xl lg:text-[2.5rem] font-bold text-teal-secondary mb-2">
              전국 네트워크
            </h2>
            <p className="text-lg lg:text-[1.7rem] font-bold text-white mb-4 lg:mb-8">
              어디서든 만나볼 수 있는{" "}
              <span className="text-teal-secondary">조은이플란트치과</span>
            </p>
          </div>

          {/* Locations */}
          <div className="space-y-3 lg:space-y-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                className="py-3 lg:py-6 border-b border-white/30 last:border-b-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-start gap-3 lg:gap-4">
                  <MapPin
                    className="w-5 h-5 lg:w-[30px] lg:h-[30px] text-white flex-shrink-0"
                    strokeWidth={1.5}
                  />
                  <div className="space-y-0.5 lg:space-y-1">
                    <h3 className="text-base lg:text-[1.44rem] font-bold text-white">
                      {location.name}
                    </h3>
                    <p className="text-14 lg:text-[1.2rem] text-white">
                      {location.address}
                    </p>
                    <p className="text-14 lg:text-[1.2rem] text-white">
                      {location.phone}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile text overlay - only visible on small screens */}
        <div className="md:hidden absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 max-w-[280px]">
          {/* Header */}
          <div className="mb-3">
            <h2 className="text-xl font-bold text-teal-secondary mb-1">
              전국 네트워크
            </h2>
            <p className="text-14 font-bold text-white mb-3 whitespace-nowrap">
              어디서든 만나볼 수 있는{" "}
              <span className="text-teal-secondary">조은이플란트치과</span>
            </p>
          </div>

          {/* Locations */}
          <div className="space-y-2">
            {locations.map((location) => (
              <div
                key={location.name}
                className="py-2 border-b border-white/30 last:border-b-0"
              >
                <div className="flex items-start gap-2">
                  <MapPin
                    className="w-4 h-4 text-white flex-shrink-0 mt-0.5"
                    strokeWidth={1.5}
                  />
                  <div className="space-y-0.5">
                    <h3 className="text-14 font-bold text-white">
                      {location.name}
                    </h3>
                    <p className="text-14 text-white/90">{location.address}</p>
                    <p className="text-14 text-white/90">{location.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
