import { fetchAllEquipments } from "@/api/equipment";
import AddEquipment from "@/components/admin/equipment/AddEquipment";
import { columns } from "@/components/admin/equipment/Columns";
import DataTable from "@/components/admin/equipment/DataTable";
import { Button } from "@/components/ui/button";
import PrivateLayout from "@/layouts/PrivateLayout";
import type { Equipment } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { IoReloadOutline } from "react-icons/io5";

const EquipmentManagement = () => {
  const {
    data: equipments,
    refetch,
    isLoading,
  } = useQuery<Equipment[], Error>({
    queryKey: ["equipments"],
    queryFn: fetchAllEquipments,
  });

  return (
    <PrivateLayout>
      <div className="pb-20">
        <div className="flex items-center px-4 md:px-20 gap-10">
          <span className="text-4xl tracking-tighter">
            Quản lý bảng{" "}
            <span className="font-semibold text-5xl text-green-900">
              Thiết bị sử dụng
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
          <AddEquipment />
        </div>

        <div className="px-4 mt-2">
          <DataTable columns={columns} data={equipments ?? []} />
        </div>
      </div>
    </PrivateLayout>
  );
};

export default EquipmentManagement;
