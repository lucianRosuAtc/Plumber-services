import React from "react";
import ImageSlider from "../components/ImageSlider";
import Image from "next/image";
import {
  ArrowBigDown,
  BadgeCheck,
  BookUser,
  BookmarkCheck,
  Handshake,
  Trophy,
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
          <p className="mr-8 lg:text-3xl text-gray-700 dark:text-white my-8 subtitle">
            Welcome to my plumbing and electrical services website! My name is
            Joe Doe, and I am a professional with over 15 years of experience in
            both plumbing and electrical work.
         
          </p>
          <Image
            src="/images/plumber/plumber.webp"
            width="300"
            height="500"
            alt="Plumber fixing a pipe"
            className="w-[500px] h-[500px] object-cover rounded-lg shadow-xl border border-gray-300 dark:border-primary"
            priority={true}
          />
        </div>
      </section>

      <section className="flex flex-col bg-primary/10 dark:bg-accent w-full items-center justify-center p-8">
        <div className="max-w-7xl my-2 md:my-16">
          <h2 className="text-center mb-4 md:mb-12 text-gray-800 dark:text-primary border-b border-primary w-[270px] xl:w-[450px] mx-auto">
            Why Choose Me?
          </h2>
          <ul className="mb-6 subtitle">
            <li className="flex">
              <UserCheck className="text-primary mr-2 hidden md:flex" />
              Expertise and Experience: With a solid background in both plumbing
              and electrical work, I have handled everything from simple repairs
              to extensive renovations. My experience ensures that I can quickly
              diagnose and fix any issue you may have.
            </li>
            <li className="flex my-3">
              <Handshake className="text-primary mr-2 hidden md:flex" /> Professional and
              Friendly Service: I believe in maintaining a friendly yet
              professional relationship with my clients. I am committed to
              providing excellent customer service and ensuring that you are
              completely satisfied with my work.
            </li>
            <li className="flex">
              <BookmarkCheck className="text-primary mr-2 hidden md:flex" /> Quality
              Workmanship: I take pride in my work and strive for perfection in
              every job. Whether it&apos;s installing new fixtures, repairing
              leaks, or conducting a complete system overhaul, I ensure that
              every project is completed to the highest standards.
            </li>
          </ul>
        </div>
      </section>

    

      <section className="mx-8">
        <div className="max-w-7xl my-14 md:my-20 mx-auto">
          <h2 className="text-center mb-8 md:mb-12 text-gray-800 dark:text-primary max-w-[550px] mx-auto">
            My Services:
          </h2>
          <h4 className="md:mb-4 text-center my-4 md:my-12 light:text-gray-800 border-b border-primary max-w-[250px] mx-auto md:mx-0">
            Plumbing Services:
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto text-center md:text-left">
            {plumbingData.map((plumbingService, id) => (
              <li
                key={id}
                className="list-disc list-inside text-wrap text-sm md:text-base m-0 p-0"
              >
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

      <section className="mx-8 my-10">
        <div className="max-w-7xl mx-auto">
          <h4 className="md:mb-4 text-center my-4 md:my-12 light:text-gray-800 border-b border-primary max-w-[250px] mx-auto md:mx-0">
            Electrical Services
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
            {electricData.map((electricService, id) => (
              <li
                key={id}
                className="list-disc list-inside text-wrap text-sm md:text-base text-center md:text-left"
              >
                {electricService.electrics}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center">
        <ArrowBigDown className="animate-bounce transition-all text-primary" />
        <Link href="/services">
          <Button className="gap-2 px-9">Our Services</Button>
        </Link>
      </div>

      <section className=" flex flex-col bg-primary/10 dark:bg-accent w-full items-center justify-center my-14 text-sm md:text-base px-4">
        <div className=" max-w-7xl my-14 md:my-20">
          <h2 className="text-center mb-4 md:mb-12 text-gray-800 dark:text-primary border-b border-primary max-w-[650px] mx-auto">
            Customer Satisfaction:
          </h2>

          <p className="flex subtitle">
            <BookUser className="text-primary mr-2 hidden md:flex" />
            My goal is to build lasting relationships with my clients based on
            trust, reliability, and excellent service. I am proud to have many
            satisfied customers who regularly recommend my services to their
            friends and family.
          </p>
          <p className="flex my-3 subtitle">
            <Trophy className="text-primary mr-2 hidden md:flex" />
            Thank you for considering my plumbing and electrical services. If
            you have any questions or need assistance with an issue, please
            don&apos;t hesitate to contact me. I look forward to working with
            you and ensuring that your needs are met with the utmost care and
            professionalism.
          </p>

          <p className="flex subtitle">
            <BadgeCheck className="text-primary mr-2 hidden md:flex " />
            Your satisfaction is my top priority, and I am committed to
            delivering top-notch solutions tailored to your specific
            requirements. Whether it&apos;s a small repair or a major installation,
            you can count on me to provide efficient, high-quality workmanship.
            I continually strive to improve my skills and stay updated with the
            latest industry standards to offer you the best possible service.
          </p>
        </div>
      </section>
    </div>
  );
}
