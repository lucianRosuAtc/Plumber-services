import Image from "next/image";
import { testimonialData } from "./components-data/testimonial-data";

export default function ImageSlider() {
  return (
    <div className="flex items-center justify-center xl:justify-start">
      <div className="w-72 md:w-80 h-28 flex justify-center ml-7 xl:ml-0">
        <div className="relative w-full h-full">
          {testimonialData.map((item, index) => (
            <div
              key={item.name}
              style={{
                left: `${index * 17}%`,
                zIndex: index + 1,
                position: "absolute",
              }}
            >
              <Image
                src={item.img}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-full w-16 md:w-20 h-16 md:h-20 border-2 border-white dark:border-primary shadow-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
