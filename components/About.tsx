import React from "react";
import ImageSlider from "../components/ImageSlider";
import Image from "next/image";
import {
  ArrowBigDown,
  BookmarkCheck,
  Handshake,
  UserCheck,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { plumbingData, electricData } from "./components-data/about-data";

export default function About() {
  return (
    <div>
      <section className="m-8">
        <h1 className="text-center mb-4 mt-16 md:mb-12 md:mt-24 text-gray-800 dark:text-primary">
          About Me
        </h1>
        <div className="flex flex-col lg:flex-row max-w-7xl items-center justify-center mx-auto">
          <p className="mr-8 lg:text-3xl text-gray-700 dark:text-white my-8">
            Welcome to my plumbing and electrical services website! My name is
            Joe Doe, and I am a professional with over 15 years of experience in
            both plumbing and electrical work.
            {/* My journey began with a passion for
         solving complex issues and helping people maintain comfortable,
         efficient homes. Over the years, I have honed my skills and expanded my
        knowledge to provide top-notch solutions for a wide range of needs. */}
          </p>
          <Image
            src="/images/plumber/plumber.webp"
            width="300"
            height="500"
            alt="Plumber fixing a pipe"
            className="w-[500px] h-[500px] object-cover rounded-lg shadow-xl border border-gray-300 dark:border-primary"
          />
        </div>
      </section>

      <section className=" flex flex-col bg-orange-100 dark:bg-accent w-full items-center justify-center ">
        <div className=" max-w-7xl my-14 md:my-20">
          <h2 className="text-center mb-4 md:mb-12 text-gray-800 dark:text-primary border-b border-primary max-w-[450px] mx-auto">
            Why Choose Me?
          </h2>
          <ul className="mb-12">
            <li className="flex">
              <UserCheck className="text-primary mr-2" />
              Expertise and Experience: With a solid background in both plumbing
              and electrical work, I have handled everything from simple repairs
              to extensive renovations. My experience ensures that I can quickly
              diagnose and fix any issue you may have.
            </li>
            <li className="flex my-3">
              <Handshake className="text-primary mr-2" /> Professional and
              Friendly Service: I believe in maintaining a friendly yet
              professional relationship with my clients. I am committed to
              providing excellent customer service and ensuring that you are
              completely satisfied with my work.
            </li>
            <li className="flex">
              <BookmarkCheck className="text-primary mr-2" /> Quality
              Workmanship: I take pride in my work and strive for perfection in
              every job. Whether it&apos;s installing new fixtures, repairing
              leaks, or conducting a complete system overhaul, I ensure that
              every project is completed to the highest standards.
            </li>
          </ul>
        </div>
      </section>

      {/* 
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li>
          Transparent Pricing: I provide clear and competitive quotes, so you
          know exactly what to expect. No hidden fees or surprise charges—just
          honest, straightforward pricing.
        </li>
        <li>
          Timely and Efficient: I understand that plumbing and electrical issues
          can be disruptive, so I work efficiently to complete the job as
          quickly as possible without compromising on quality. Your time and
          convenience are important to me.
        </li>
      </ul> */}

      <section className=" flex flex-col  w-full items-center justify-center ">
        <div className=" max-w-7xl my-14 md:my-20">
          <h2 className="text-center mb-4 md:mb-12 text-gray-800 dark:text-primary max-w-[550px] mx-auto">
            My Services Include:
          </h2>
          <h4 className="mb-4 text-center my-4 md:my-12 light:text-gray-800 border-b border-primary max-w-[250px]">
            Plumbing Services:
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {plumbingData.map((plumbingService, id) => (
              <li key={id} className="list-disc list-inside">
                {plumbingService.plumbing}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ImageSlider />

      <div className="flex flex-col items-center justify-center">
        <ArrowBigDown className="animate-bounce transition-all text-primary" />
        <Link href="/contact">
          <Button className="gap-2 px-9">Contact Me</Button>
        </Link>
      </div>

      <section className="mx-8 mb-10">
        <div className="max-w-7xl mx-auto">
          <h4 className="mb-4 text-center my-4 md:my-12 light:text-gray-800 border-b border-primary max-w-[250px]">
            Electrical Services
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {electricData.map((electricService, id) => (
              <li key={id} className="list-disc list-inside">
                {electricService.electrics}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className=" flex flex-col bg-orange-100 dark:bg-accent w-full items-center justify-center mb-10">
        <div className=" max-w-7xl my-14 md:my-20">
          <h2 className="text-center mb-4 md:mb-12 text-gray-800 dark:text-primary border-b border-primary max-w-[650px] mx-auto">
            Customer Satisfaction:
          </h2>
          <p className="mb-3">
            My goal is to build lasting relationships with my clients based on
            trust, reliability, and excellent service. I am proud to have many
            satisfied customers who regularly recommend my services to their
            friends and family.
          </p>
          <p className="">
            Thank you for considering my plumbing and electrical services. If
            you have any questions or need assistance with an issue, please
            don&apos;t hesitate to contact me. I look forward to working with
            you and ensuring that your needs are met with the utmost care and
            professionalism.
          </p>
        </div>
      </section>
    </div>
  );
}
