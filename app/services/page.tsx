"use client";

import TypedComponent from "@/components/TypedComponent";
import { AlarmClockCheck, BadgePoundSterling, SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import AllTheCustomers from "@/components/AllTheCustomers";
import { JobCatData } from "@/components/components-data/myJobCat-data";

import ImageGallery from "@/components/ImageGallery";

let ScrollReveal: any;
if (typeof window !== "undefined") {
  ScrollReveal = require("scrollreveal").default;
}

interface JobData {
  title: string;
  img: string;
  description: string;
  id: number;
}

export default function Page() {
  useEffect(() => {
    if (ScrollReveal) {
      ScrollReveal().reveal("section", {
        delay: 300,
        duration: 800,
        reset: true,
      });
    }
  }, []);
  // MARK:delay for the text to appear on top

  return (
    <div className="mx-auto">
      <div className="px-8 max-w-7xl mx-auto">
        <h1 className="mb-10 md:mb-20 text-center text-gray-800 dark:text-primary">
          My Services
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center mb-16 md:mb-24">
          <div className="md:mr-12 my-9">
            <h2 className="h-28 light:text-gray-800 mb-12">
              <TypedComponent />
            </h2>
            <section className="subtitle">
              My journey began with a passion for solving complex issues and
              helping people maintain comfortable, efficient homes. Over the
              years, I have honed my skills and expanded my knowledge to provide
              top-notch solutions for a wide range of needs.
            </section>
            <p className="subtitle">
            Whether you&apos;re dealing
            with a minor issue or a major repair, you can count on me to deliver
            professional, reliable service every time.
            </p>
          </div>

          <Image
            src="/images/plumber/niceBathroom.jpg"
            width={500}
            height={500}
            alt="bathroom"
            className="w-[280px] lg:w-[500px] h-[320px] lg:h-[500px] object-cover rounded-lg shadow-xl border border-gray-300 dark:border-primary"
          />
        </div>
        
      </div>
      <div className="flex flex-col bg-primary/10 dark:bg-accent items-center justify-center p-8 ">
        <ImageGallery />
      </div>

      <div className="my-16 max-w-7xl px-8 mx-auto">
        <AllTheCustomers />
        <h2 className="text-center xl:text-left mt-5 mb-10 text-gray-800 dark:text-gray-200">
          Why Hire Me?
        </h2>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 subtitle">
            <li className="border text-center p-8 rounded-md shadow-lg dark:shadow-gray-500">
              <BadgePoundSterling className="text-primary mx-auto my-3" />
              Transparent Pricing: I provide clear and competitive quotes, so
              you know exactly what to expect. No hidden fees or surprise
              charges—just honest, straightforward pricing.
            </li>
            <li className="border text-center p-8 rounded-md shadow-lg dark:shadow-gray-500">
              <AlarmClockCheck className="text-primary mx-auto my-3" />
              Timely and Efficient: I understand that plumbing and electrical
              issues can be disruptive, so I work efficiently to complete the
              job as quickly as possible without compromising on quality. Your
              time and convenience are important to me.
            </li>
            <li className="border text-center p-8 rounded-md shadow-lg dark:shadow-gray-500">
              <SmilePlus className="text-primary mx-auto my-3" />
              Customer Satisfaction: I value my customers and strive to provide
              the best service possible. Your satisfaction is my top priority,
              and I won&apos;t rest until you&apos;re completely satisfied with
              the work done.
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-primary/10 dark:bg-accent px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mt-20 md:mt-32 mx-auto py-10 md:py-20">
          {JobCatData.map((jobData: JobData, id) => (
            <div className="mx-auto" key={id}>
              <div className="max-w-[400px] mx-4">
                <h4 className="my-4 text-gray-800 dark:text-gray-200">
                  {jobData.title}
                </h4>
                <Image
                  src={jobData.img}
                  width={500}
                  height={500}
                  alt="tools"
                  className="w-full h-[320px] my-8 object-cover border rounded-md shadow-lg dark:shadow-gray-500"
                />
                <div className="subtitle">{jobData.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
