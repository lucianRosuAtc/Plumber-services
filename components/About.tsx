import React from "react";
import ImageSlider from "../components/ImageSlider";
import Image from "next/image";
import { Bath, BookmarkCheck, Handshake, UserCheck } from "lucide-react";

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
          <h2 className="text-center  my-4 md:my-12 text-gray-800 dark:text-primary">
            Why Choose Me?
          </h2>

          <ul className="mb-12">
            <li className="flex">
              <UserCheck className="text-primary mr-2"/>
              Expertise and Experience: With a solid background in both plumbing
              and electrical work, I have handled everything from simple repairs
              to extensive renovations. My experience ensures that I can quickly
              diagnose and fix any issue you may have.
            </li>
            <li className="flex">
              <Handshake className="text-primary mr-2"/> Professional and
              Friendly Service: I believe in maintaining a friendly yet
              professional relationship with my clients. I am committed to
              providing excellent customer service and ensuring that you are
              completely satisfied with my work.
            </li>
            <li className="flex">
              <BookmarkCheck className="text-primary mr-2"/> Quality Workmanship: I take pride in my work and
              strive for perfection in every job. Whether it&apos;s installing
              new fixtures, repairing leaks, or conducting a complete system
              overhaul, I ensure that every project is completed to the highest
              standards.
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




<section className="mx-8">

<h2 className="my-4 md:my-12 text-gray-800 dark:text-primary">My Services Include:</h2>


      <h4 className="mb-4">Plumbing Services:</h4>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <li className="flex"> <Bath className="text-primary mr-2"/>Bathroom & Kitchen Plumbing</li>
           <li className="flex">Blocked Baths</li>
           <li className="flex">Blocked Sinks</li>
           <li className="flex">Blocked Toilets</li>
           <li className="flex">Emergency Plumber Service</li>
           <li className="flex">General Plumbing</li>
           <li className="flex">Pipe Fitter</li>
           <li className="flex">Plumbing Repairs</li>
           <li className="flex">Power Flushing</li>
           <li className="flex">Radiator Installation</li>
           <li className="flex">Radiator Repair</li>
           <li className="flex">Radiator Thermostat Valve Installation</li>
           <li className="flex">Radiator Thermostat Valve Repair</li>
           <li className="flex">Shower Installation</li>
           <li className="flex">Shower Repair</li>
           <li className="flex">Tap Repair</li>
           <li className="flex">Thermal Dynamics</li>
           <li className="flex">Underfloor Heating Installation</li>
           <li className="flex">Underfloor Heating Repair</li>
           <li className="flex">Unvented Hot Water Cylinder Installation</li>
           <li className="flex">Unvented Hot Water Cylinder Servicing / Repair</li>
           <li className="flex">Water Leak Detection</li>
           <li className="flex">
          Water Mains Specialist (Pipe Replacement, Moling, and Lead Pipes)
        </li>
           <li className="flex">Water Pumps Installation</li>
           <li className="flex">Water Pumps Repair</li>
           <li className="flex">Water Supply Pipe Repairs</li>
      </ul>
</section>

      <ImageSlider />

      <section className="">

      <h4>Electrical Services</h4>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li>Electric Boiler Installation</li>
        <li>Electric Boiler Servicing / Repair</li>
        <li>Electric Cookers</li>
        <li>Electric Gate Wiring</li>
        <li>Electric Heating</li>
        <li>Electric Radiators</li>
        <li>Electric Range Cookers</li>
        <li>Electric Showers</li>
        <li>Electric Smart Thermostats</li>
        <li>Electric Sockets</li>
        <li>Electric Stoves</li>
        <li>Electric Vehicle Charger Installation</li>
        <li>Electrical Contractors</li>
        <li>Electrical Heater Repair</li>
        <li>Electrical Installation Condition Report - Safety Checks - EICR</li>
        <li>Electrical Under Floor Heating Installation</li>
        <li>Electrical Under Floor Heating Repair</li>
        <li>Emergency Electrician Service</li>
        <li>Emergency Lighting</li>
        <li>Energy Efficient Lighting</li>
        <li>Extractor Fans</li>
        <li>Fault Finding</li>
        <li>Fuseboard / Consumer Unit Installation</li>
        <li>Fuseboard / Consumer Unit Repair</li>
        <li>Garden Lighting</li>
        <li>Hot Tub Wiring</li>
        <li>House Rewiring</li>
        <li>Immersion Heater Installation</li>
        <li>Immersion Heater Repair</li>
        <li>LED Lighting</li>
        <li>Lighting Design</li>
        <li>Smoke Alarms</li>
        <li>Storage Heating</li>
      </ul>
      </section>

      <h4 className="">Customer Satisfaction:</h4>
      <p className="">
        My goal is to build lasting relationships with my clients based on
        trust, reliability, and excellent service. I am proud to have many
        satisfied customers who regularly recommend my services to their friends
        and family.
      </p>
      <p className="">
        Thank you for considering my plumbing and electrical services. If you
        have any questions or need assistance with an issue, please don&apos;t
        hesitate to contact me. I look forward to working with you and ensuring
        that your needs are met with the utmost care and professionalism.
      </p>
    </div>
  );
}
