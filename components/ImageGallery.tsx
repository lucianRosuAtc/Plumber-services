

"use client";
import { useState } from "react";
import { JobCatData } from "./components-data/JobCat-data";
import Image from "next/image";

export default function ImageGallery() {
    const [bigImage, setBigImage] = useState(JobCatData[0].img); // set initial state to the first image

  const handleSmallImageClick = (img : any)=>{
    setBigImage(img.img) // set bigImage to img.img because img is the object from your JobCatData array
  }

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {JobCatData.map((img: any, idx: any) => (
          <div className="overflow-hidden rounded-lg bg-gray-100" key={idx}>
            <Image
              src={img.img}
              alt="product"
              width={200}
              height={200}
              className="h-full w-full object-cover object-center cursor-pointer"
              onClick={() => handleSmallImageClick(img)}
              // change the image on click
            />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4 ">
        {bigImage && <Image
          src={bigImage}
          width={500}
          height={500}
          alt="product"
          className="h-full w-full object-cover object-center"
        />}
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
      </div>
    </div>
  );
}