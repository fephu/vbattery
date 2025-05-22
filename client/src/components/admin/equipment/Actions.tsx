import { removeEquipment } from "@/api/equipment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import AlertDelete from "../AlertDelete";
import { toast } from "sonner";

interface ActionsProps {
  equipment_id: string;
}

const Actions = ({ equipment_id }: ActionsProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: removeEquipment,
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["equipments"] });
      toast.success(`Xóa thành công thiết bị sử dụng ${data._id}`);
    },
    onError: (error: any) => {
      toast.error(`Xóa thất bại: ${error.response.data.error}`);
    },
  });

  const handleDeleteBanner = () => {
    mutate(equipment_id);
  };

  return (
    <>
      <AlertDelete id={equipment_id} handleDeleteBanner={handleDeleteBanner} />
    </>
  );
};

export default Actions;
