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
      <h1>Page</h1>
      <div className="">
        <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eaque quis libero ratione ea atque a laudantium, nemo minus delectus natus quidem commodi temporibus laboriosam hic dolorem! Dolore nemo eius, quas ex nesciunt illo ullam quae consequatur accusantium molestiae, voluptates eaque ea odit sit soluta laboriosam a vel eligendi saepe.</p>
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
    </div>
  );
}
