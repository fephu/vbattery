import { fetchAllBanners } from "@/api/banner";
import AddBanner from "@/components/admin/banner/AddBanner";
import { columns } from "@/components/admin/banner/Columns";
import DataTable from "@/components/admin/banner/DataTable";
import { Button } from "@/components/ui/button";
import PrivateLayout from "@/layouts/PrivateLayout";
import type { Banner } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { IoReloadOutline } from "react-icons/io5";

function BannerManagement() {
  const { data, isLoading, refetch } = useQuery<Banner[], Error>({
    queryKey: ["banners"],
    queryFn: fetchAllBanners,
  });

  if (!data) {
    return <div></div>;
  }

  return (
    <PrivateLayout>
      <div className="pb-20">
        <div className="flex items-center px-4 md:px-20 gap-10">
          <span className="text-4xl tracking-tighter">
            Quản lý bảng{" "}
            <span className="font-semibold text-5xl text-green-900">
              Banner
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
          <AddBanner />
        </div>

        <div className="px-4 mt-2">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </PrivateLayout>
  );
}

export default BannerManagement;
