import { removeEquipment } from "@/api/equipment";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { IoTrashOutline } from "react-icons/io5";

interface ActionsProps {
  equipment_id: string;
}

const Actions = ({ equipment_id }: ActionsProps) => {
  const { mutate } = useMutation({
    mutationFn: removeEquipment,
    onSuccess: (data: any) => {
      alert(`Xóa thành công ${data._id}`);
    },
    onError: (error: any) => {
      alert(`Đăng nhập thất bại: ${error.response.data.error}`);
    },
  });

  const handleDeleteBanner = () => {
    mutate(equipment_id);
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={"ghost"} className="cursor-pointer">
            <IoTrashOutline className="size-5" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Bạn có chắc chắn xóa {equipment_id}?
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Hủy</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteBanner}>
              Tiếp tục
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default Actions;
