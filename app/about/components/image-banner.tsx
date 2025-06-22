import * as motion from "motion/react-client";
import Image from "next/image";

import bannerImage from "@/public/images/about/about-banner.webp";

const ImageBanner = () => {
  return (
    <motion.div
      className="relative w-full h-[31.25rem] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-black/25 z-10" />
      <Image
        src={bannerImage}
        alt="조은이플란트치과 병원 내부"
        fill
        quality={100}
        className="object-cover"
        priority
      />
    </motion.div>
  );
};

export default ImageBanner;
