import { fetchAllProducts } from "@/api/product";
import AddProduct from "@/components/admin/product/AddProduct";
import { columns } from "@/components/admin/product/Colums";
import DataTable from "@/components/admin/product/DataTable";
import { Button } from "@/components/ui/button";
import PrivateLayout from "@/layouts/PrivateLayout";
import type { PaginateProductType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { IoReloadOutline } from "react-icons/io5";

const ProductManagement = () => {
  const { data, refetch, isLoading } = useQuery<PaginateProductType, Error>({
    queryKey: ["products"],
    queryFn: () => fetchAllProducts(1, undefined),
  });

  return (
    <PrivateLayout>
      <div className="pb-20">
        <div className="flex items-center px-4 md:px-20 gap-10">
          <span className="text-4xl tracking-tighter">
            Quản lý bảng{" "}
            <span className="font-semibold text-5xl text-green-900">
              Sản phẩm
            </span>
          </span>
        </div>

        <div className="px-4 mt-6 flex justify-end gap-2 items-center">
          <Button
            variant={"ghost"}
            className="cursor-pointer"
            onClick={() => refetch()}
          >
            {isLoading ? (
              <Loader2 className="size-5 animate-spin" />
            ) : (
              <IoReloadOutline className="size-5" />
            )}
          </Button>
          <AddProduct />
        </div>

        <div className="px-4 mt-2">
          <DataTable columns={columns} data={data?.products ?? []} />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default ProductManagement;
