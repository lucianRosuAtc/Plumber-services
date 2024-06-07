"use client";

import TypedComponent from "@/components/TypedComponent";
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
    <div>
      <h1>My Services</h1>
      <div className="">
        <p className="subtitle">
          My journey began with a passion for solving complex issues and helping
          people maintain comfortable, efficient homes. Over the years, I have
          honed my skills and expanded my knowledge to provide top-notch
          solutions for a wide range of needs.
        </p>
        <TypedComponent />
      </div>
      <section className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
        deleniti, asperiores facilis doloribus rerum cumque pariatur ipsam
        debitis alias quod reprehenderit? Quae iste illo, doloribus culpa nam
        odio quas necessitatibus magni fugit aut cupiditate voluptatem officiis
        nemo. Consectetur explicabo amet, deleniti corporis porro assumenda
        nostrum impedit voluptates beatae rerum itaque?
      </section>

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
      </ul>
    </div>
  );
}
