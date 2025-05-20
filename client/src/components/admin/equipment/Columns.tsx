import type { Equipment } from "@/types";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Equipment>[] = [
  {
    accessorKey: "ten_thiet_bi",
    header: "Tên thiết bị",
  },
  {
    header: "Thao tác",
  },
];
