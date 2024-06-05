import React from "react";
import ImageSlider from "../components/ImageSlider";
import Image from "next/image";

export default function About() {
  return (
    <div className="m-4">
      <h1 className="my-4 md:my-8 text-secondary dark:text-primary">About Me</h1>
      <p className="">
        Welcome to my plumbing and electrical services website! My name is Joe
        Doe, and I am a professional with over 15 years of experience in both
        plumbing and electrical work.
         {/* My journey began with a passion for
        solving complex issues and helping people maintain comfortable,
        efficient homes. Over the years, I have honed my skills and expanded my
        knowledge to provide top-notch solutions for a wide range of needs. */}
      </p>
      <Image
        src="/images/plumber/plumber.webp"
        width="600"
        height="500"
        alt="Plumber fixing a pipe"
        className="w-full h-[500px] md:h-[800px] object-cover"

/>





      <p className="">Why Choose Me?</p>

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li>
          Expertise and Experience: With a solid background in both plumbing and
          electrical work, I have handled everything from simple repairs to
          extensive renovations. My experience ensures that I can quickly
          diagnose and fix any issue you may have.
        </li>
        <li>
          Professional and Friendly Service: I believe in maintaining a friendly
          yet professional relationship with my clients. I am committed to
          providing excellent customer service and ensuring that you are
          completely satisfied with my work.
        </li>
        <li>
          Quality Workmanship: I take pride in my work and strive for perfection
          in every job. Whether it&apos;s installing new fixtures, repairing
          leaks, or conducting a complete system overhaul, I ensure that every
          project is completed to the highest standards.
        </li>
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
      </ul>

      <p className="">My Services Include:</p>
      <h4>Plumbing Services</h4>
      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <li>Bathroom & Kitchen Plumbing</li>
        <li>Blocked Baths</li>
        <li>Blocked Sinks</li>
        <li>Blocked Toilets</li>
        <li>Emergency Plumber Service</li>
        <li>General Plumbing</li>
        <li>Pipe Fitter</li>
        <li>Plumbing Repairs</li>
        <li>Power Flushing</li>
        <li>Radiator Installation</li>
        <li>Radiator Repair</li>
        <li>Radiator Thermostat Valve Installation</li>
        <li>Radiator Thermostat Valve Repair</li>
        <li>Shower Installation</li>
        <li>Shower Repair</li>
        <li>Tap Repair</li>
        <li>Thermal Dynamics</li>
        <li>Underfloor Heating Installation</li>
        <li>Underfloor Heating Repair</li>
        <li>Unvented Hot Water Cylinder Installation</li>
        <li>Unvented Hot Water Cylinder Servicing / Repair</li>
        <li>Water Leak Detection</li>
        <li>
          Water Mains Specialist (Pipe Replacement, Moling, and Lead Pipes)
        </li>
        <li>Water Pumps Installation</li>
        <li>Water Pumps Repair</li>
        <li>Water Supply Pipe Repairs</li>
      </ul>
      <ImageSlider />
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
