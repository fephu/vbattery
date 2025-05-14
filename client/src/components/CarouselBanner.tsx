import { useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useQuery } from "@tanstack/react-query";
import type { Banner } from "@/types";
import { fetchAllBanners } from "@/api/banner";
import { Loader2 } from "lucide-react";

const CarouselBanner = () => {
  const plugin = useRef(Autoplay({ delay: 3000 }));

  const { data, isLoading } = useQuery<Banner[], Error>({
    queryKey: ["banners"],
    queryFn: fetchAllBanners,
  });

  if (isLoading) {
    return <Loader2 className="animate-spin" />;
  }

  return (
    <Carousel plugins={[plugin.current]} className="shadow-sm">
      <CarouselContent className="h-[30rem] border">
        {data &&
          data.map((banner) => (
            <CarouselItem key={banner.position}>
              <img
                src={banner.image_url}
                alt="Background home"
                className="object-cover w-full h-full object-center"
              />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious variant={"ghost"} />
      <CarouselNext variant={"ghost"} />
    </Carousel>
  );
};

export default CarouselBanner;
