"use client";
import { useState } from "react";
import { GalleryData } from "./components-data/gallery-data";
import Image from "next/image";


export default function ImageGallery() {
    const [bigImage, setBigImage] = useState(GalleryData[0].img); // set initial state to the first image

  const handleSmallImageClick = (img : any)=>{
    setBigImage(img.img) // set bigImage to img.img because img is the object from your GalleryData array
  }

  return (
    <div className="">
<h2 className="mx-auto text-center my-12 md:my-16 text-gray-800 dark:text-primary border-b border-primary w-[270px] xl:w-[350px]">Gallery</h2>
      <div className="grid">
      <div className="order-last grid grid-cols-2 sm:grid-cols-3 gap-4">
        {GalleryData.map((img: any, id: any) => (
          <div className="overflow-hidden rounded-lg bg-gray-100" key={id}>
            <Image
              src={img.img}
              alt="product"
              width={200}
              height={200}
              className="h-28 md:h-40 w-full object-cover object-center cursor-pointer shadow-xl"
              onClick={() => handleSmallImageClick(img)}
              // change the image on click
              />
          </div>
        ))}
      </div>
      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-3 mb-4 mx-auto">
        {bigImage && <Image
          src={bigImage}
          width={500}
          height={500}
          alt="product"
          className="h-60 sm:h-[450px] md:w-[700px] object-cover object-center cursor-pointer shadow-xl"
          />}
        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">Some of my finest work</span>
          </div>
      </div>
    </div>
  );
}