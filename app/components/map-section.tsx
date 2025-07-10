import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

import { SparklesCore } from "@/app/components/sparkles";
import mapImage from "@/public/7.gif";
import koreaMapIcon from "@/public/icons/korea-map-icon.svg";
import logoSVGTeal from "@/public/icons/logo-svg-teal.svg";
import arrowRightIcon from "@/public/images/about/arrow-right.svg";

const locations = [
  {
    id: "yangju",
    name: "조은이플란트 양주점",
    icon: koreaMapIcon,
    nameElement: (
      <span className="font-semibold">
        조은이플란트 <span className="font-black">양주점</span>
      </span>
    ),
    address: "경기도 양주시 부흥로 2152-4, 2층",
    phone: "031-847-5550",
    isActive: true,
    link: "/",
  },
  {
    id: "gangneung",
    name: "조은이플란트 강릉점",
    icon: logoSVGTeal,
    nameElement: (
      <span className="text-teal-secondary font-semibold">
        조은이플란트 <span className="font-black">강릉점</span>
      </span>
    ),
    address: "강원특별자치도 강릉시 경강로 2100, 3층",
    phone: "033-642-2228",
    isActive: false,
    link: "#",
  },
  {
    id: "sokcho",
    name: "조은이플란트 속초점",
    icon: logoSVGTeal,
    nameElement: (
      <span className="text-teal-secondary font-semibold">
        조은이플란트 <span className="font-black">속초점</span>
      </span>
    ),
    address: "강원특별자치도 속초시 중앙로 8, 1층",
    phone: "033-633-8828",
    isActive: false,
    link: "#",
  },
];

const MapSection = () => {
  return (
    <section className="w-full relative">
      {/* Dark background container */}
      <div className="relative h-auto md:h-[calc(100vh-4rem)] bg-black overflow-hidden">
        {/* Sparkles background effect - Mobile */}
        <SparklesCore
          id="map-sparkles-mobile"
          background="transparent"
          particleColor="#ffffff"
          particleDensity={60}
          className="absolute inset-0 md:hidden"
          minSize={1}
          maxSize={2.5}
          speed={1}
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
          speed={1}
        />
        {/* SVG Map - mobile version for mobile, desktop version for desktop */}
        <div className="relative md:absolute top-0 md:right-24 md:top-0 md:bottom-0 w-full md:w-[45%] lg:w-[50%] xl:w-[45%] h-[400px] md:h-full origin-top">
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
            className="object-contain object-top md:object-contain"
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
          <div className="space-y-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                className={`relative flex items-center gap-3 lg:gap-4 p-6 lg:p-8 rounded-lg border-2 transition-all duration-200 ${
                  location.isActive
                    ? "bg-teal-secondary border-teal-secondary"
                    : "bg-transparent border-[#8EAEB6]"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {/* Logo Icon */}
                <div className="relative w-[72px] h-[44px] lg:w-[120px] lg:h-[72px] flex-shrink-0">
                  <Image
                    src={location.icon}
                    alt="조은이플란트치과 로고"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                {/* Branch Name and Button */}
                <div className="flex flex-col items-end gap-2 flex-1">
                  <h3
                    className={`text-lg lg:text-[1.44rem] ${
                      location.isActive ? "text-white" : "text-white"
                    }`}
                  >
                    {location.nameElement}
                  </h3>
                  <Link
                    href={location.link}
                    className={`flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-sm lg:text-base font-medium transition-all duration-200 ${
                      location.isActive
                        ? "bg-white text-teal-secondary hover:bg-white/90"
                        : "bg-white text-[#8EAEB6] hover:bg-white/90"
                    }`}
                  >
                    바로 가기
                    <div className="relative w-3 h-2.5 lg:w-3.5 lg:h-3">
                      <Image
                        src={arrowRightIcon}
                        alt="화살표 아이콘"
                        fill
                        className="object-contain"
                        style={{
                          filter: location.isActive
                            ? "brightness(0) saturate(100%) invert(49%) sepia(51%) saturate(354%) hue-rotate(146deg) brightness(98%) contrast(87%)"
                            : "brightness(0) saturate(100%) invert(68%) sepia(13%) saturate(718%) hue-rotate(142deg) brightness(93%) contrast(91%)",
                        }}
                        unoptimized
                      />
                    </div>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile content - below the map */}
        <div className="md:hidden px-4 py-8 bg-white">
          {/* Header */}
          <motion.div
            className="mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl font-bold text-teal-secondary mb-2">
              전국 네트워크
            </h2>
            <p className="text-base font-bold text-dark-primary">
              어디서든 만나볼 수 있는{" "}
              <span className="text-teal-secondary">조은이플란트치과</span>
            </p>
          </motion.div>

          {/* Location Cards - Horizontal Row */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex">
              {locations.map((location, index) => (
                <Link
                  key={location.id}
                  href={location.link}
                  className={`relative flex items-center justify-center py-2 px-2 border-2 border-teal-secondary transition-all duration-200 ${
                    location.isActive ? "bg-teal-secondary" : "bg-white"
                  } ${
                    index === 0
                      ? "rounded-l"
                      : index === locations.length - 1
                      ? "rounded-r -ml-[2px]"
                      : "-ml-[2px]"
                  }`}
                >
                  <h3
                    className={`text-14 whitespace-nowrap ${
                      location.isActive ? "text-white" : "text-teal-secondary"
                    }`}
                  >
                    {location.nameElement}
                  </h3>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
