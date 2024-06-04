
// "use client";

// import React, { useState } from "react";
// import { imageSliderData } from "./imageSlider-data";

// export default function Images() {
//   const [selectedCard, setSelectedCard] = useState(imageSliderData[0].id);

//   const handleCardClick = (id: string) => {
//     setSelectedCard(id);
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center">
//       <div className="h-96 flex flex-nowrap justify-start">
//         {imageSliderData.map((data, index) => (
//           <React.Fragment key={data.id}>
//             <input
//               type="radio"
//               name="slide"
//               id={data.id}
//               checked={selectedCard === data.id}
//               className="hidden"
//             />

//             <label
//               htmlFor={data.id}
//               className={`rounded-2xl ${
//                 selectedCard === data.id ? "w-[600px]" : "w-[70px]"
//               } bg-cover cursor-pointer overflow-hidden flex items-end transition-all duration-600 ease-in-out shadow-lg m-2`}
//               onClick={() => handleCardClick(data.id)}
//               style={{ backgroundImage: `url('${data.image}')` }}
//             >
//               <div className="text-white flex flex-nowrap">
//                 <div className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center m-3">
//                   {index + 1}
//                 </div>

//                 <div
//                   className={`flex items-center justify-center flex-col overflow-hidden h-20 w-[520px] ${
//                     selectedCard === data.id
//                       ? "opacity-100 transform-none delay-300"
//                       : "opacity-0 -translate-y-[30px]"
//                   } transition-all duration-300 ease-in-out delay-300`}
//                 >
//                   <h4 className="uppercase font-bold mr-auto">{data.title}</h4>
//                   <p className="text-gray-200 pt-1">{data.description}</p>
//                 </div>
//               </div>
//             </label>
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }



"use client";

import React, { useState } from "react";
import { imageSliderData } from "./imageSlider-data";

export default function Images() {
  const [selectedCard, setSelectedCard] = useState(imageSliderData[0].id);

  const handleCardClick = (id: string) => {
    setSelectedCard(id);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="h-96 flex flex-nowrap justify-start">
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
                selectedCard === data.id ? "w-[600px]" : "w-[70px]"
              } bg-cover cursor-pointer overflow-hidden flex items-end transition-all duration-600 ease-in-out shadow-lg m-2`}
              onClick={() => handleCardClick(data.id)}
              style={{ backgroundImage: `url('${data.image}')` }}
            >
              <div className="text-white flex flex-nowrap">
                <div className="bg-gray-800 text-white rounded-full w-12 h-12 flex items-center justify-center m-3">
                  {index + 1}
                </div>

                <div
                  className={`flex items-center justify-center flex-col overflow-hidden h-20 w-[520px] ${
                    selectedCard === data.id
                      ? "opacity-100 transform-none delay-300"
                      : "opacity-0 -translate-y-[30px]"
                  } transition-all duration-300 ease-in-out delay-300`}
                >
                  <h4 className="uppercase font-bold mr-auto">{data.title}</h4>
                  <p className="text-gray-200 pt-1">{data.description}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
