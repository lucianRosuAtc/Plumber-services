import Image from "next/image";
import { testimonialData } from "./components-data/testimonial-data";

export default function ImageSlider() {
  return (
    <div className="relative ml-6 md:ml-0 mx-auto md:mx-0">

    <div className="w-80 h-28 my-auto">
      {testimonialData.map((item, index) => (
        <div
        key={item.name}
          style={{
            left: `${index * 5}%`,
            zIndex: index + 1,
            position: "absolute",
            }}
            >
          <Image
            src={item.img}
            alt={item.name}
            width={100}
            height={100}
            className="rounded-full w-20 h-20 border-2 dark:border-primary"
            />
          <div></div>
        </div>
      ))}
    </div>
    </div>
  );
}
