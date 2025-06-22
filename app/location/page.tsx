import * as motion from "motion/react-client";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import locationDetailMap from "@/public/images/location/location-detail-map.webp";
import locationInterior from "@/public/images/location/location-interior.webp";
import locationMainMap from "@/public/images/location/location-main-map.webp";
import locationParking from "@/public/images/location/location-parking.webp";

export const metadata: Metadata = {
  title: "오시는 길 | 조은이플란트치과",
  description:
    "조은이플란트치과 오시는 길 안내. 경기도 양주시 부흥로 2152-4 2층, 옥정역 인근 위치",
  keywords:
    "조은이플란트치과 위치, 양주 치과, 옥정역 치과, 부흥로 치과, 양주시 치과, 오시는 길, 주차 안내",
  openGraph: {
    title: "오시는 길 | 조은이플란트치과",
    description:
      "조은이플란트치과 오시는 길 안내. 경기도 양주시 부흥로 2152-4 2층, 옥정역 인근 위치",
    type: "website",
  },
};

const LocationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center py-16 md:py-24 **:break-keep"
    >
      <div className="w-full max-w-[69.375rem] px-4 flex flex-col gap-12 md:gap-16">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-2">
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 0.5, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-base md:text-lg text-dark-primary text-center uppercase leading-[1.6] font-normal"
          >
            CHOONEEPLANT DENTAL CLINIC
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center gap-2"
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary text-center py-4">
              오시는 길
            </h1>
            <p className="text-xl md:text-2xl font-bold text-teal-secondary text-center">
              경기도 양주시 부흥로 2152-4 2층
            </p>
          </motion.div>
        </div>

        {/* Main Map */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="w-full"
        >
          <div className="relative w-full h-[300px] md:h-[400px] lg:h-[460px] rounded-lg overflow-hidden">
            <Image
              src={locationMainMap}
              alt="조은이플란트치과 위치 지도"
              fill
              quality={100}
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Walking Directions Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-primary">
              도보로 오시는 길
            </h2>
            <div className="flex items-center w-full lg:w-1/2">
              <div className="h-[3px] bg-teal-secondary flex-1"></div>
              <Link
                href="#"
                className="inline-flex items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors -mx-1 z-10"
              >
                <span className="text-base">길 찾기</span>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4H9M9 4L6 1M9 4L6 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:grid grid-cols-2 gap-8 lg:gap-0 items-start lg:items-start">
            {/* Detail Map */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full lg:w-full h-[300px] md:h-[400px] lg:h-full rounded-lg overflow-hidden"
            >
              <Image
                src={locationDetailMap}
                alt="조은이플란트치과 상세 위치"
                fill
                quality={100}
                className="object-cover"
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-10 w-full lg:w-full lg:pl-8"
            >
              {/* Phone */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-teal-secondary">
                  전화
                </h3>
                <p className="text-lg md:text-xl text-dark-primary">
                  031-847-5550
                </p>
              </div>

              {/* Entrance Guide */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl md:text-2xl font-bold text-teal-secondary">
                  병원 입구 안내 설명
                </h3>
                <p className="text-lg md:text-xl text-dark-primary">
                  옥정역 대광로제비앙 후문 출입구, 성우아침의미소아파트 정문
                  반대편에 건물 입구가 위치해 있습니다.
                </p>
              </div>

              {/* Interior Image */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative w-full h-[150px] md:h-[200px] lg:h-[208px] rounded-lg overflow-hidden"
              >
                <Image
                  src={locationInterior}
                  alt="조은이플란트치과 내부"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Driving Directions Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold text-dark-primary">
              자차로 오시는 길
            </h2>
            <div className="flex items-center w-full lg:w-1/2">
              <div className="h-[3px] bg-teal-secondary flex-1"></div>
              <Link
                href="#"
                className="inline-flex items-center gap-4 bg-teal-secondary hover:bg-teal-primary text-white px-6 py-1 rounded-full transition-colors -mx-1 z-10"
              >
                <span className="text-base">길 안내 시작</span>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path
                    d="M1 4H9M9 4L6 1M9 4L6 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {/* Parking Info */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-xl md:text-2xl font-bold text-teal-secondary">
                주차 안내
              </h3>
              <p className="text-lg md:text-xl text-dark-primary">
                치과 건물 뒷편의 유료주차장 이용 (데스크에서 주차권
                발급해드립니다)
              </p>
            </motion.div>

            {/* Parking Map */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-full max-w-[631px] mx-auto"
            >
              <Image
                src={locationParking}
                alt="조은이플란트치과 주차장 안내"
                width={631}
                height={480}
                quality={100}
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default LocationPage;
