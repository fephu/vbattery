import { fetchAllProducts } from "@/api/product";
import CarouselBanner from "@/components/CarouselBanner";
import ProductCard from "@/components/products/ProductCard";
import PublicLayout from "@/layouts/PublicLayout";
import type { PaginateProductType } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data } = useQuery<PaginateProductType, Error>({
    queryKey: ["products", 1],
    queryFn: () => fetchAllProducts(1),
    placeholderData: keepPreviousData,
  });

  return (
    <PublicLayout>
      <div className="p-6">
        <CarouselBanner />
      </div>

      <div className="w-full text-center col-span-4 py-6">
        <div className="pl-10 text-4xl text-center tracking-tighter">
          Sản phẩm bán chạy
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-8">
          {data &&
            data.products &&
            data.products.map((pro) => (
              <ProductCard key={pro.ten_san_pham} product={pro} />
            ))}
        </div>
      </div>
    </PublicLayout>
  );
};

export default HomePage;
