import type { Banner } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Banner>[] = [
  {
    accessorKey: "image_url",
    header: "Hình ảnh",
  },
  {
    accessorKey: "link_url",
    header: "Đường dẫn",
  },
  {
    accessorKey: "title",
    header: "Tiêu đề",
  },
  {
    accessorKey: "isActive",
    header: "Trạng thái hiển thị",
  },
  {
    header: "Thao tác",
  },
];
