import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import banner1 from "@/assets/carousel-img/1.jpg";
import banner2 from "@/assets/carousel-img/2.jpg";
import banner3 from "@/assets/carousel-img/3.jpg";
import banner4 from "@/assets/carousel-img/4.jpg";

const CarouselBanner = () => {
  const plugin = useRef(Autoplay({ delay: 3000 }));

  return (
    <Carousel plugins={[plugin.current]} className="shadow">
      <CarouselContent className="h-[30rem]">
        <CarouselItem>
          <img
            src={banner1}
            alt="Background home"
            className="object-cover w-full h-full object-center"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src={banner2}
            alt="Background home"
            className="object-cover w-full h-full object-center"
          />
        </CarouselItem>

        <CarouselItem>
          <img
            src={banner3}
            alt="Background home"
            className="object-cover w-full h-full object-center"
          />
        </CarouselItem>

        <CarouselItem>
          <img
            src={banner4}
            alt="Background home"
            className="object-cover w-full h-full object-center"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default CarouselBanner;
