import { fetchAllProducts } from "@/api/product";
import CarouselBanner from "@/components/CarouselBanner";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductCard from "@/components/products/ProductCard";
import type { PaginateProductType } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

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

      <div className="w-full text-center col-span-4 py-6">
        <div className="pl-10 text-4xl text-center tracking-tighter">
          Sản phẩm bán chạy
        </div>
        <div className="grid grid-cols-5 gap-6 p-8">
          {data?.products &&
            data.products.map((pro) => (
              <ProductCard key={pro.ten_san_pham} product={pro} />
            ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HomePage;
