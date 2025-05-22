import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import AlertDelete from "../AlertDelete";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "@/api/product";
import { toast } from "sonner";

interface ActionsProps {
  product_id: string;
}

const Actions = ({ product_id }: ActionsProps) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data: any) => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success(`Xóa thành công sản phẩm ${data._id}`);
    },
    onError: (error: any) => {
      toast.error(`Xóa thất bại: ${error.response.data.error}`);
    },
  });

  const handleDeleteBanner = () => {
    mutate(product_id);
  };

  return (
    <div className="flex items-center">
      <Button variant={"ghost"}>
        <Pencil />
      </Button>
      <AlertDelete id={product_id} handleDeleteBanner={handleDeleteBanner} />
    </div>
  );
};

export default Actions;
