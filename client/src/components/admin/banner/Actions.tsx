import { removeBanner } from "@/api/banner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import AlertDelete from "../AlertDelete";

interface ActionsProps {
  banner_id: string;
}

const Actions = ({ banner_id }: ActionsProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: removeBanner,
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["banners"] });
      toast.success(`Xóa thành công banner ${data._id}`);
    },
    onError: (error: any) => {
      toast.error(`Xóa thất bại: ${error.response.data.error}`);
    },
  });

  const handleDeleteBanner = () => {
    mutate(banner_id);
  };

  return <AlertDelete id={banner_id} handleDeleteBanner={handleDeleteBanner} />;
};

export default Actions;
