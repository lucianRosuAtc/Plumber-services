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
        src="/images/parallax/theplumber.webp"
        width="600"
        height="500"
        alt="Plumber fixing a pipe"
        className="w-full h-[500px] md:h-[800px] object-cover"
      />
    </div>
  );
}
