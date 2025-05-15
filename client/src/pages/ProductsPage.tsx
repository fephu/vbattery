import { fetchAllProducts } from "@/api/product";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import EquipmentBar from "@/components/products/EquipmentBar";
import ProductCard from "@/components/products/ProductCard";
import SearchBar from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import type { PaginateProductType } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useSearchParams } from "react-router";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(parseInt(searchParams.get("page") ?? "1"));
  const [equip, setEquip] = useState(searchParams.get("equip"));

  const { data, error, isLoading, isError, isPlaceholderData } = useQuery<
    PaginateProductType,
    Error
  >({
    queryKey: ["products", { page, equip }],
    queryFn: () => fetchAllProducts(page, equip ? equip : undefined),
    placeholderData: keepPreviousData,
  });

  const updatePageInSearch = (number: number) => {
    const params = new URLSearchParams(location.search);
    params.set("page", number.toString());
    return `${location.pathname}?${params.toString()}`;
  };

  return (
    <MaxWidthWrapper className="py-20">
      <div className="text-4xl text-center pt-10">
        {equip ? `Sản phẩm ${equip}` : "Tất cả sản phẩm"}
      </div>

      <div className="grid grid-cols-5 gap-x-10 w-full py-4">
        <div className="col-span-1">
          <SearchBar />
          <EquipmentBar />
        </div>

        <div className="text-center w-full col-span-4 py-2 h-screen flex flex-col justify-between">
          {data?.products.length !== 0 ? (
            <div className="grid grid-cols-4 gap-x-4 gap-y-4 pt-8">
              {data?.products.map((pro) => (
                <ProductCard key={pro.ten_san_pham} product={pro} />
              ))}
            </div>
          ) : (
            <div className="text-2xl flex items-center justify-center pt-20">
              Hiện tại không có sản phẩm nào.
            </div>
          )}

          <div className="flex items-center gap-2 justify-center mt-10 w-full">
            <Button variant={"outline"} disabled={page === 1}>
              <Link to={updatePageInSearch(page - 1)} reloadDocument>
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
                      reloadDocument
                    >
                      {index + 1}
                    </Link>
                  </Button>
                )
              )}
            </div>

            <Button variant={"outline"} disabled={page === data?.total_pages}>
              <Link to={updatePageInSearch(page + 1)} reloadDocument>
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
