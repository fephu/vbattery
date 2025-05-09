import { fetchAllProducts } from "@/api/product";
import CarouselBanner from "@/components/CarouselBanner";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const { data, error, isLoading, isError } = useQuery<any[], Error>({
    queryKey: ["categories"],
    queryFn: fetchAllProducts,
  });

  console.log(data);

  return (
    <div className="h-screen">
      <div className="p-6">
        <CarouselBanner />
      </div>

      <div className="grid grid-cols-5 gap-y-1 w-full">
        <div>s</div>
        <div className="text-center w-full col-span-4 py-2">
          <span className="text-3xl tracking-wide font-semibold border-b">
            SẢN PHẨM BÁN CHẠY
          </span>
          <div className="grid grid-cols-4 pt-8">
            <div className="h-[10rem]">s</div>
            <div>s</div>
            <div>s</div>
            <div>s</div>
            <div>s</div>
            <div>s</div>
            <div>s</div>
            <div>s</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
