import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { IoIosAdd } from "react-icons/io";
import UploadButton from "../UploadButton";
import { useState, type FormEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBanner } from "@/api/banner";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import FieldForm from "../FieldForm";
import CustomSelect from "../CustomSelect";
import { routes } from "@/router/AppRouter";

const AddBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    link_url: "",
    title: "",
    isActive: true,
    image_url: "",
  });

  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const { mutate, isPending } = useMutation({
    mutationFn: addBanner,
    onSuccess: () => {
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["banners"] });
      toast.success(`Thêm thành công banner`);
    },
    onError: (error: any) => {
      toast.error(`Thêm thất bại: ${error.response.data.error}`);
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("link_url", formData.link_url);
    form.append("title", formData.title);
    form.append("isActive", formData.isActive.toString());
    form.append("image_url", formData.image_url);

    mutate(form);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-sm bg-green-950 cursor-pointer hover:bg-green-900">
          <IoIosAdd className="size-6" />
          Tạo mới banner
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-4xl">
            Tạo mới{" "}
            <span className="text-green-900 text-5xl tracking-tighter">
              Banner
            </span>
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-6 pt-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <UploadButton id="image_url" handleChangeFile={handleChange} />
          </div>

          <div>
            <Label htmlFor="link_url" className="text-right text-base">
              Đường dẫn
            </Label>
            <CustomSelect
              id="link_url"
              data={routes}
              getValue={(item) => item.path}
              getLabel={(item) => item.path}
              onChange={handleChange}
            />
          </div>

          <FieldForm id="title" label="Tiêu đề" handleChange={handleChange} />

          <div className="flex items-center gap-4">
            <Label htmlFor="isActive" className="text-right text-base">
              Hiển thị
            </Label>
            <Checkbox id="isActive" checked={true} />
          </div>

          <div className="flex items-center gap-4 justify-end">
            <Button
              type="submit"
              className="bg-green-900 cursor-pointer hover:bg-green-800"
              size={"lg"}
            >
              {isPending ? (
                <Loader2 className="animate-spin size-5" />
              ) : (
                <IoIosAdd className="size-5" />
              )}
              Tạo mới
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddBanner;
