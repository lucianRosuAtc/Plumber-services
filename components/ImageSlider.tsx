
"use client";

import React, { useState } from "react";
import { imageSliderData } from "./components-data/imageSlider-data";

export default function Images() {
  const [selectedCard, setSelectedCard] = useState(imageSliderData[0].id);

  const handleCardClick = (id: string) => {
    setSelectedCard(id);
  };

  return (
    <div className="w-full h-[550px] flex items-center justify-center bg-orange-200 dark:bg-accent my-6 md:my-12">
      <div className="h-[500px] md:h-96 flex md:flex-row flex-col flex-nowrap justify-start">
        {imageSliderData.map((data, index) => (
          <React.Fragment key={data.id}>
            <input
              type="radio"
              name="slide"
              id={data.id}
              checked={selectedCard === data.id}
              className="hidden"
            />

            <label
              htmlFor={data.id}
              className={`rounded-2xl ${
                selectedCard === data.id
                  ? "max-w-[300px] md:max-w-[400px] lg:max-w-[600px] h-96"
                  : "max-w-[300px] md:max-w-[70px] h-[70px] md:h-96"
              } bg-cover cursor-pointer overflow-hidden flex md:items-end items-start transition-all duration-600 ease-in-out shadow-xl m-2`}
              onClick={() => handleCardClick(data.id)}
              style={{ backgroundImage: `url('${data.image}')`}}
            >
              <div className="text-white flex flex-nowrap">
                <div className="border border-orange-500 bg-gray-800 text-white rounded-full w-12 h-9 md:h-8 flex items-center justify-center m-1.5 md:my-auto md:m-5 ">
                  {index + 1}
                </div>

                <div
                  className={`flex items-center justify-center flex-col overflow-hidden h-28 w-full ${
                    selectedCard === data.id
                      ? "opacity-100 transform-none delay-300"
                      : "opacity-0 -translate-y-[30px]"
                  } transition-all duration-300 ease-in-out delay-300`}
                >
                  <h4 className="uppercase font-bold mr-auto">{data.title}</h4>
                  <p className="text-gray-200 pt-1 font-medium">{data.description}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}









