"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useState, useEffect } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import clinic0 from "@/public/images/clinic-tour/clinic-0.webp";
import clinic1 from "@/public/images/clinic-tour/clinic-1.webp";
import clinic10 from "@/public/images/clinic-tour/clinic-10.webp";
import clinic2 from "@/public/images/clinic-tour/clinic-2.webp";
import clinic3 from "@/public/images/clinic-tour/clinic-3.webp";
import clinic4 from "@/public/images/clinic-tour/clinic-4.webp";
// import clinic5 from "@/public/images/clinic-tour/clinic-5.webp";
// import clinic6 from "@/public/images/clinic-tour/clinic-6.webp";
import clinic7 from "@/public/images/clinic-tour/clinic-7.webp";
import clinic8 from "@/public/images/clinic-tour/clinic-8.webp";
import clinic9 from "@/public/images/clinic-tour/clinic-9.webp";

const carouselImages = [
  { id: 0, src: clinic0, alt: "조은이플란트치과 외관" },
  { id: 2, src: clinic2, alt: "조은이플란트치과 진료실" },
  { id: 1, src: clinic1, alt: "조은이플란트치과 대기실" },
  { id: 3, src: clinic3, alt: "조은이플란트치과 상담실" },
  { id: 4, src: clinic4, alt: "조은이플란트치과 수술실" },
  // { id: 5, src: clinic5, alt: "조은이플란트치과 엑스레이실" },
  // { id: 6, src: clinic6, alt: "조은이플란트치과 소독실" },`
  { id: 7, src: clinic7, alt: "조은이플란트치과 복도" },
  { id: 8, src: clinic8, alt: "조은이플란트치과 안내데스크" },
  { id: 9, src: clinic9, alt: "조은이플란트치과 회복실" },
  { id: 10, src: clinic10, alt: "조은이플란트치과 외관" },
];

export const ClinicCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full max-w-[69.375rem] mt-16 md:mt-24 mb-8"
    >
      <div className="relative w-full">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >
          <CarouselContent>
            {carouselImages.map((image) => (
              <CarouselItem key={image.id}>
                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[680px] rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    placeholder="blur"
                    quality={100}
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Previous Button */}
          <CarouselPrevious
            className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-primary hover:bg-dark-secondary transition-colors border-0 text-white [&>svg]:size-8"
            variant="ghost"
          />

          {/* Custom Next Button */}
          <CarouselNext
            className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-dark-primary hover:bg-dark-secondary transition-colors border-0 text-white [&>svg]:size-8"
            variant="ghost"
          />
        </Carousel>

        {/* Thumbnail Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4"
        >
          <ScrollArea className="w-full whitespace-nowrap rounded-lg">
            <div className="flex gap-3 p-1">
              {carouselImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => {
                    api?.scrollTo(index);
                  }}
                  className={`relative flex-shrink-0 w-[101px] h-[88px] rounded-lg overflow-hidden transition-all ${
                    currentIndex === index
                      ? "ring-2 ring-teal-secondary"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    quality={100}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </motion.div>
      </div>
    </motion.div>
  );
};
