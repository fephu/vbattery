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
    accessorKey: "hinh_anh",
    header: "Hình ảnh",
  },
  {
    accessorKey: "chi_tiet_san_pham",
    header: "Chi tiết sản phẩm",
  },
  {
    header: "Thao tác",
  },
];
