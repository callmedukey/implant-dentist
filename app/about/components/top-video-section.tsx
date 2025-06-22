import React from "react";

const TopVideoSection = () => {
  return (
    <section className="relative w-full h-[min(400px,40vh)] sm:h-[calc(100vh-6.25rem-4rem)]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover will-change-transform "
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/video-poster.jpg"
      >
        <source src="/videos/main-optimized.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default TopVideoSection;
