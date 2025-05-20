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
import { IoIosAdd } from "react-icons/io";
import UploadButton from "../UploadButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { routes } from "@/router/AppRouter";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addBanner } from "@/api/banner";
import { Checkbox } from "@/components/ui/checkbox";

const AddBanner = () => {
  const [imageUrl, setImageUrl] = useState<File | null>(null);
  const [linkUrl, setLinkUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [isActive, setIsActive] = useState<boolean>(true);

  const { mutate } = useMutation({
    mutationFn: addBanner,
    onSuccess: (data) => {
      alert(`Thêm thành công ${data._id}`);
    },
    onError: (error: any) => {
      alert(`Thêm thất bại: ${error.response.data.error}`);
    },
  });

  const handleSubmit = () => {
    mutate({ image_url: imageUrl, isActive, link_url: linkUrl, title });
  };

  return (
    <Dialog>
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
            <UploadButton handleChangeFile={setImageUrl} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="link_url" className="text-right text-base">
              Đường dẫn
            </Label>
            <div className="col-span-3">
              <Select onValueChange={setLinkUrl}>
                <SelectTrigger className="w-full rounded-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {routes.map((route) => (
                      <SelectItem key={route.path} value={route.path}>
                        {route.path}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right text-base">
              Tiêu đề
            </Label>
            <Input
              id="title"
              className="col-span-3 rounded-sm"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isActive" className="text-right text-base">
              Hiển thị
            </Label>
            <div className="col-span-3">
              <Checkbox id="isActive" checked={isActive} />
            </div>
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

export default AddBanner;
