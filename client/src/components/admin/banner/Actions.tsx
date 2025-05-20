import { removeBanner } from "@/api/banner";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { IoTrashOutline } from "react-icons/io5";

interface ActionsProps {
  banner_id: string;
}

const Actions = ({ banner_id }: ActionsProps) => {
  const { mutate } = useMutation({
    mutationFn: removeBanner,
    onSuccess: (data: any) => {
      console.log(data);

      alert(`Xóa thành công ${data._id}`);
    },
    onError: (error: any) => {
      alert(`Đăng nhập thất bại: ${error.response.data.error}`);
    },
  });

  const handleDeleteBanner = () => {
    mutate(banner_id);
  };

  return (
    <Button
      variant={"ghost"}
      className="cursor-pointer"
      onClick={handleDeleteBanner}
    >
      <IoTrashOutline className="size-5" />
    </Button>
  );
};

export default Actions;
