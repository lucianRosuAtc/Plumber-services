"use client";

import TypedComponent from "@/components/TypedComponent";
import { AlarmClockCheck, BadgePoundSterling, SmilePlus } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";

let ScrollReveal: any;
if (typeof window !== "undefined") {
  ScrollReveal = require("scrollreveal").default;
}

export default function Page() {
  useEffect(() => {
    if (ScrollReveal) {
      ScrollReveal().reveal("section", {
        delay: 500,
        duration: 1000,
        reset: true,
      });
    }
  }, []);

  return (
    <div className="mx-8">
      <h2>My Services</h2>

      <div className="flex flex-col md:flex-row max-w-7xl items-center justify-center mx-auto mb-16">
        <div className="md:mr-12 my-9">
          <h3 className="h-20">
            <TypedComponent />
          </h3>
          <p className="subtitle">
            My journey began with a passion for solving complex issues and
            helping people maintain comfortable, efficient homes. Over the
            years, I have honed my skills and expanded my knowledge to provide
            top-notch solutions for a wide range of needs.
          </p>
        </div>

        <Image
          src="/images/plumber/niceBathroom.jpg"
          width={500}
          height={500}
          alt="bathroom"
          className="w-[280px] md:w-[500px] h-[320px] md:h-[500px] object-cover rounded-lg shadow-xl border border-gray-300 dark:border-primary"
        />
      </div>

      <section className="flex flex-col md:flex-row max-w-7xl items-center justify-center mx-auto mb-16 subtitle">
        <p className="">
          With years of experience in the field, I have developed a deep
          understanding of the unique challenges that homeowners face. I am
          committed to providing high-quality, personalized solutions that meet
          your specific needs and budget. Whether you&apos;re dealing with a
          minor issue or a major repair, you can count on me to deliver
          professional, reliable service every time.
        </p>
      </section>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 subtitle">
        <li>
          <BadgePoundSterling />
          Transparent Pricing: I provide clear and competitive quotes, so you
          know exactly what to expect. No hidden fees or surprise charges—just
          honest, straightforward pricing.
        </li>
        <li>
          <AlarmClockCheck />
          Timely and Efficient: I understand that plumbing and electrical issues
          can be disruptive, so I work efficiently to complete the job as
          quickly as possible without compromising on quality. Your time and
          convenience are important to me.
        </li>
        <li>
          <SmilePlus />
          Customer Satisfaction: I value my customers and strive to provide the
          best service possible. Your satisfaction is my top priority, and I
          won&apos;t rest until you&apos;re completely satisfied with the work
          done.
        </li>
      </ul>
    </div>
  );
}
