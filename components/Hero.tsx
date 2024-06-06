import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="relative">
      <div className="absolute flex flex-col justify-end pb-10 md:pb-20 text-white mx-4 md:mx-8 uppercase h-full">
        <h4 className="text-2xl lg:text-7xl leading-loose">
          Plumming & electric services
        </h4>
        <p className="text-lg md:text-2xl leading-loose">
          We offer professional services search firm built on integrity,
          experience and a will to deliver exceptional talent.
        </p>
      </div>
      <Image
        src="/images/plumbing-logo-rmbg.png"
        width={240}
        height={64}
        alt="Logo"
        className="object-cover object-center absolute flex items-center justify-center rounded-full w-80 h-80 overflow-hidden cursor-pointer p-2 transition-all top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
 
        priority
      />


      <Image
        src="/images/plumber/theplumber.webp"
        width="600"
        height="500"
        alt="Plumber fixing a pipe"
        className="w-full h-[500px] md:h-[800px] object-cover"
      />
    </div>
  );
}
