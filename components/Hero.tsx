import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute flex flex-col justify-end pb-4 sm:pb-8 md:pb-20 text-white mx-4 md:mx-8 uppercase h-full">
        <h4 className="text-2xl md:text-5xl lg:text-7xl leading-loose">
          Plumbing & Electric Services
        </h4>
        <p className="text-lg md:text-2xl leading-loose md:pt-10">
          We offer professional services. Our search firm is built on integrity,
          experience, and a will to deliver exceptional talent.
        </p>
      </div>
      <Image
        src="/images/plumbing-logo-rmbg.png"
        width={240}
        height={64}
        alt="Logo"
        className="object-cover object-center absolute flex bg-white/40 border-4 border-white dark:border-primary/80 rounded-full w-40 md:w-60 lg:w-80 h-40 md:h-60 lg:h-80 shadow-white/50 dark:shadow-primary/50 shadow-lg overflow-hidden p-3 transition-all top-1/4 md:top-1/3 3xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        priority={true}
      />

      <Image
        src="/images/plumber/theplumber.webp"
        width="600"
        height="500"
        alt="Plumber fixing a pipe"
        className="w-full h-[500px] md:h-[800px] object-cover"
        priority={true}
      />
    </div>
  );
}
