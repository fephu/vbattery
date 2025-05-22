import { createEquipment } from "@/api/equipment";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { Equipment } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { toast } from "sonner";

const AddEquipment = () => {
  const queryClient = useQueryClient();
  const [equipment, setEquipment] = useState<string>("");

  const { mutate } = useMutation({
    mutationFn: createEquipment,
    onSuccess: (data: Equipment) => {
      queryClient.invalidateQueries({ queryKey: ["equipments"] });
      toast.success(`Thêm thành công thiết bị sử dụng ${data._id}`);
    },
    onError: (error: any) => {
      toast.error(`Xóa thất bại: ${error.response.data.error}`);
    },
  });

  const handleSubmit = () => {
    mutate(equipment);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-sm bg-green-950 cursor-pointer hover:bg-green-900">
          <IoIosAdd className="size-6" />
          Tạo mới thiết bị sử dụng
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-4xl">
            Tạo mới{" "}
            <span className="text-green-900 text-5xl tracking-tighter">
              Thiết bị sử dụng
            </span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-6 mt-8">
          <div>
            <Label
              htmlFor="ten_thiet_bi"
              className="text-right text-sm md:text-base tracking-tight"
            >
              Tên thiết bị
            </Label>
            <Input
              id="ten_thiet_bi"
              className="col-span-3 rounded-sm"
              onChange={(e) => setEquipment(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4 justify-end">
            <Button
              type="submit"
              className="bg-green-900 cursor-pointer hover:bg-green-800"
              size={"lg"}
            >
              <IoIosAdd className="size-5" />
              Tạo mới
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEquipment;
