"use client";

import { Card, CardDescription } from "./ui/card";
import Image from "next/image";
import { testimonialData } from "./components-data/testimonial-data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from "react";

import AllTheCustomers from "./AllTheCustomers";

export default function RecommendationsCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5500,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative mb-4 md:mb-12 lg:mb-24 max-w-7xl mx-auto">
      <AllTheCustomers />
      <div className="flex flex-col mx-auto">
        <div className="flex flex-col justify-center items-center xl:items-start mb-12 max-w-md text-center mx-auto xl:mx-0 xl:text-left">
          <h2 className="mb-4">Recommendations</h2>
          <p className="subtitle mb-8">
            Here are some recomandations from the people I&apos;ve work with.
          </p>
        </div>

        <div className="">
          <Slider {...settings} className="mx-auto max-w-7xl px-4 md:px-0">
            {testimonialData.map((recommendation, index) => (
              <div key={index} className="mx-auto">
                <Card className="group relative mx-2 md:mx-4 shadow-xl dark:bg-[#0C0A09] dark:shadow-secondary dark:shadow-lg mb-12">
                  <div className="flex items-center">
                    <Image
                      src={recommendation.img}
                      alt="recommendation"
                      width={70}
                      height={70}
                      className="shadow-lg p-1 dark:shadow-lg dark:shadow-secondary object-cover object-center rounded-full mx-4 my-5"
                      priority={true}
                    />
                    <div className="flex flex-col">
                      <p className="text-base md:text-xl xl:text-2xl xl:leading-normal font-semibold px-4 pt-5">
                        {recommendation.name}
                      </p>
                      <p className="px-4 pb-5 text-xs">
                        {recommendation.jobAddress}
                      </p>
                    </div>
                  </div>
                  <CardDescription className="h-64 md:text-base xl:text-lg text-muted-foreground font-light px-5 pb-10 overflow-hidden">
                    {recommendation.description}
                  </CardDescription>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>

    </div>
  );
}
