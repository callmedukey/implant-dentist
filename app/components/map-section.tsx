import { MapPin } from "lucide-react";
import * as motion from "motion/react-client";
import Image from "next/image";

import { SparklesCore } from "@/app/components/sparkles";
import mapImage from "@/public/images/map-slice.svg";

const locations = [
  {
    name: "양주 조은이플란트치과",
    address: "경기도 양주시 부흥로 2152-4, 2층",
    phone: "031-847-5550",
  },
  {
    name: "강릉 조은이플란트치과",
    address: "강원특별자치도 강릉시 경강로 2100, 3층",
    phone: "033-642-2228",
  },
  {
    name: "속초 조은이플란트치과",
    address: "강원특별자치도 속초시 중앙로 8, 1층",
    phone: "033-633-8828",
  },
];

const MapSection = () => {
  return (
    <section className="w-full relative">
      {/* Dark background container */}
      <div className="relative h-auto md:h-[800px] bg-dark-secondary overflow-hidden">
        {/* Sparkles background effect - Mobile */}
        <SparklesCore
          id="map-sparkles-mobile"
          background="transparent"
          particleColor="#ffffff"
          particleDensity={40}
          className="absolute inset-0 md:hidden"
          minSize={1}
          maxSize={2.5}
          speed={2}
        />
        {/* Sparkles background effect - Desktop */}
        <SparklesCore
          id="map-sparkles-desktop"
          background="transparent"
          particleColor="#ffffff"
          particleDensity={60}
          className="absolute inset-0 hidden md:block"
          minSize={1}
          maxSize={2.5}
          speed={2}
        />
        {/* SVG Map - mobile version for mobile, desktop version for desktop */}
        <div className="relative md:absolute top-0 md:right-0 md:top-0 md:bottom-0 w-full md:w-[45%] lg:w-[50%] xl:w-[45%] h-[400px] md:h-full origin-top">
          {/* Mobile map - visible only on mobile */}
          {/* <Image
            src={mapMobileImage}
            alt="전국 네트워크 지도"
            fill
            className="md:hidden object-contain scale-80"
            unoptimized
          /> */}
          {/* Desktop map - visible only on desktop */}
          <Image
            src={mapImage}
            alt="전국 네트워크 지도"
            fill
            className="object-contain object-top md:object-cover md:object-right scale-80 md:scale-100 origin-top"
            unoptimized
          />
        </div>

        {/* Desktop text overlay - aligned to the left */}
        <motion.div
          className="hidden md:block absolute left-[4%] lg:left-[8%] xl:left-[12%] top-1/2 -translate-y-1/2 max-w-[400px] lg:max-w-[480px]"
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
      </div>
    </section>
  );
};

export default MapSection;
