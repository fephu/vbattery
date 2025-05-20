import type { Product } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "ten_san_pham",
    header: "Tên sản phẩm",
  },
  {
    accessorKey: "ma_san_pham",
    header: "Mã sản phẩm",
  },
  {
    accessorKey: "diep_ap",
    header: "Điện áp",
  },
  {
    accessorKey: "dung_luong",
    header: "Dung lượng",
  },
  {
    accessorKey: "kich_thuoc",
    header: "Kích thước",
  },
  {
    accessorKey: "mau_sac",
    header: "Màu sắc",
  },
  {
    accessorKey: "trong_luong",
    header: "Trọng lượng",
  },
  {
    accessorKey: "xuat_xu",
    header: "Xuất xứ",
  },
  {
    accessorKey: "gia_san_pham",
    header: "Giá sản phẩm",
  },
  {
    accessorKey: "hinh_anh",
    header: "Hình ảnh",
  },
  {
    accessorKey: "thiet_bi_su_dung",
    header: "Thiết bị sử dụng",
  },
];
