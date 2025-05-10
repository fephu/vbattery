import { fetchAllProducts } from "@/api/product";
import CarouselBanner from "@/components/CarouselBanner";
import EquipmentBar from "@/components/products/EquipmentBar";
import PaginationPage from "@/components/products/PaginationPage";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import type { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { IoIosAdd } from "react-icons/io";

const HomePage = () => {
  const { data, error, isLoading, isError } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });

  console.log(data);

  return (
    <div>
      <div className="p-6">
        <CarouselBanner />
      </div>

      <div className="grid grid-cols-5 gap-x-10 w-full py-4">
        <div className="flex flex-col gap-8">
          <SearchBar />
          <EquipmentBar />
        </div>
        <div className="text-center w-full col-span-4 py-2 h-screen relative">
          <span className="text-3xl tracking-wide font-semibold border-b">
            SẢN PHẨM BÁN CHẠY
          </span>
          <div className="grid grid-cols-3 gap-x-2 pt-8">
            {data &&
              data.map((pro) => (
                <div key={pro.ma_san_pham} className="h-[24rem] border">
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
                      <IoIosAdd className="size-5" /> Thêm giỏ hàng
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          <PaginationPage className="absolute bottom-4" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
