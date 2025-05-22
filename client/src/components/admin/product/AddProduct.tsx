import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, type FormEvent } from "react";
import { IoIosAdd } from "react-icons/io";
import UploadButton from "../UploadButton";
import FieldForm from "../FieldForm";
import CustomSelect from "../CustomSelect";
import type { Equipment } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllEquipments } from "@/api/equipment";
import { Label } from "@/components/ui/label";
import { addProduct } from "@/api/product";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    ten_san_pham: "",
    ma_san_pham: "",
    dien_ap: "",
    dung_luong: "",
    gia_san_pham: "",
    kich_thuoc: "",
    mau_sac: "",
    trong_luong: "",
    xuat_xu: "",
    hinh_anh: "",
  });

  const { data: equipments } = useQuery<Equipment[], Error>({
    queryKey: ["equipments"],
    queryFn: fetchAllEquipments,
  });

  const { mutate, isPending } = useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      setIsOpen(false);
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success(`Thêm thành công banner`);
    },
    onError: (error: any) => {
      toast.error(`Thêm thất bại: ${error.response.data.error}`);
    },
  });

  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();

    form.append("ten_san_pham", formData.ten_san_pham);
    form.append("ma_san_pham", formData.ma_san_pham);
    form.append("dien_ap", formData.dien_ap);
    form.append("dung_luong", formData.dung_luong);
    form.append("gia_san_pham", formData.gia_san_pham);
    form.append("kich_thuoc", formData.kich_thuoc);
    form.append("mau_sac", formData.mau_sac);
    form.append("trong_luong", formData.trong_luong);
    form.append("xuat_xu", formData.xuat_xu);
    form.append("hinh_anh", formData.hinh_anh);

    mutate(form);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-sm bg-green-950 cursor-pointer hover:bg-green-900">
          <IoIosAdd className="size-6" />
          Tạo mới Product
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[1000px]">
        <DialogHeader>
          <DialogTitle className="text-4xl">
            Tạo mới{" "}
            <span className="text-green-900 text-5xl tracking-tighter">
              Product
            </span>
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-x-4 gap-y-8 pt-4"
        >
          <div className="col-span-2 flex flex-col md:flex-row justify-between">
            <UploadButton id="hinh_anh" handleChangeFile={handleChange} />

            <div className="flex flex-row md:flex-col py-0 md:py-10 w-full md:w-1/2 gap-4">
              <FieldForm
                id="ten_san_pham"
                label="Tên sản phẩm"
                handleChange={handleChange}
              />

              <FieldForm
                id="ma_san_pham"
                label="Mã sản phẩm"
                handleChange={handleChange}
              />
            </div>
          </div>

          <FieldForm id="dien_ap" label="Điện áp" handleChange={handleChange} />

          <FieldForm
            id="dung_luong"
            label="Dung lượng"
            handleChange={handleChange}
          />

          <FieldForm
            id="gia_san_pham"
            label="Giá sản phẩm"
            handleChange={handleChange}
          />

          <FieldForm
            id="kich_thuoc"
            label="Kích thước"
            handleChange={handleChange}
          />

          <FieldForm id="mau_sac" label="Màu sắc" handleChange={handleChange} />

          <FieldForm
            id="trong_luong"
            label="Trọng lượng"
            handleChange={handleChange}
          />

          <FieldForm id="xuat_xu" label="Xuất xứ" handleChange={handleChange} />

          <div>
            <Label
              htmlFor="thiet_bi_su_dung"
              className="text-right text-sm md:text-base tracking-tight"
            >
              Thiết bị
            </Label>
            <CustomSelect
              id="thiet_bi_su_dung"
              data={equipments ?? []}
              getValue={(item) => item._id}
              getLabel={(item) => item.ten_thiet_bi}
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2 text-end">
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

export default AddProduct;
