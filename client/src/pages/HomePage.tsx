import { fetchAllProducts } from "@/api/product";
import CarouselBanner from "@/components/CarouselBanner";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

import { Button } from "@/components/ui/button";
import type { PaginateProductType } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { IoIosAdd } from "react-icons/io";

const HomePage = () => {
  const { data } = useQuery<PaginateProductType, Error>({
    queryKey: ["products", 1],
    queryFn: () => fetchAllProducts(1),
    placeholderData: keepPreviousData,
  });

  return (
    <MaxWidthWrapper className="py-20">
      <div className="p-6">
        <CarouselBanner />
      </div>

      <div className="w-full col-span-4 py-6">
        <div className="pl-10 text-4xl text-center tracking-tighter">
          Sản phẩm bán chạy
        </div>
        <div className="grid grid-cols-5 gap-6 p-8">
          {data?.products &&
            data.products.map((pro) => (
              <div key={pro.ten_san_pham} className="h-[24rem] border">
                <img
                  src={pro.hinh_anh[0]}
                  alt="product img"
                  className="h-2/3 w-full bg-cover"
                />
                <div className="flex flex-col gap-1 py-2 px-2">
                  <span>{pro.ten_san_pham}</span>
                  <span className="text-sm">Giá: {pro.gia_san_pham} VND</span>
                  <Button
                    variant={"outline"}
                    className="rounded-none cursor-pointer"
                  >
                    <IoIosAdd className="size-5" />
                    Thêm giỏ hàng
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HomePage;
