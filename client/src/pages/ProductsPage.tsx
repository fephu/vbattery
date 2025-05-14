import { fetchAllProducts } from "@/api/product";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import EquipmentBar from "@/components/products/EquipmentBar";
import SearchBar from "@/components/SearchBar";
import { Button, buttonVariants } from "@/components/ui/button";
import type { PaginateProductType } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link, useSearchParams } from "react-router";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get("page") ?? "1"));

  const { data, error, isLoading, isError, isPlaceholderData } = useQuery<
    PaginateProductType,
    Error
  >({
    queryKey: ["products", page],
    queryFn: () => fetchAllProducts(page),
    placeholderData: keepPreviousData,
  });

  return (
    <MaxWidthWrapper className="py-10">
      <div className="text-4xl text-center">Tất cả sản phẩm</div>

      <div className="grid grid-cols-5 gap-x-10 w-full py-4">
        <div className="col-span-1">
          <SearchBar />
          <EquipmentBar />
        </div>

        <div className="text-center w-full col-span-4 py-2 h-screen flex flex-col justify-between">
          <div className="grid grid-cols-4 gap-x-4 gap-y-4 pt-8">
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
                      <IoIosAdd className="size-5" /> Thêm giỏ hàng
                    </Button>
                  </div>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-2 justify-center mt-10 w-full">
            <Button variant={"outline"} disabled={page === 1}>
              <Link to={`/san-pham?page=${page - 1}`} reloadDocument>
                Trước
              </Link>
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: (data && data?.total_pages) || 3 }).map(
                (_, index) => (
                  <Button variant={page === index + 1 ? "outline" : "ghost"}>
                    <Link
                      to={`/san-pham?page=${index + 1}`}
                      key={index}
                      onClick={() => setPage(index + 1)}
                      reloadDocument
                    >
                      {index + 1}
                    </Link>
                  </Button>
                )
              )}
            </div>

            <Button variant={"outline"}>
              <Link to={`/san-pham?page=${page + 1}`} reloadDocument>
                Sau
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductsPage;
