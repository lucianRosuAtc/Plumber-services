import Image from "next/image";
import React from "react";

export default function Hero() {
  return (

      <div className="">
        <Image
        src="/images/parallax/theplumber.webp"
        width="600"
        height="500"
        alt="Plumber fixing a pipe"
        className="w-full h-[800px] object-cover"
        />
        <div className="hero-text">PARALLAX</div>
      </div>

  );
}
