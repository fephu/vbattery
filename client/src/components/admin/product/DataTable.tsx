import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import type { Product } from "@/types";
import Actions from "./Actions";
import CustomPopover from "../CustomPopover";

interface DataTableProps {
  columns: ColumnDef<Product>[];
  data: Product[];
}

function DataTable({ columns, data }: DataTableProps) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-sm border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => {
                  if (cell.column.id === "hinh_anh") {
                    return (
                      <TableCell key={cell.id}>
                        <img
                          src={cell.getValue() as string}
                          alt="banner img"
                          className="w-[8rem] rounded-sm"
                        />
                      </TableCell>
                    );
                  }

                  if (cell.column.id === "Thao tác") {
                    return (
                      <TableCell key={cell.id}>
                        <Actions product_id={row.original._id} />
                      </TableCell>
                    );
                  }

                  if (cell.column.id === "chi_tiet_san_pham") {
                    return (
                      <TableCell key={cell.id}>
                        <CustomPopover>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center text-sm">
                              Điện áp: {row.original.diep_ap}
                            </div>
                            <div className="flex items-center text-sm">
                              Dung lượng: {row.original.dung_luong}
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                              Giá sản phẩm: {row.original.gia_san_pham}
                            </div>
                            <div className="flex items-center text-sm">
                              Kích thước: {row.original.kich_thuoc}
                            </div>
                            <div className="flex items-center text-sm">
                              Màu sắc: {row.original.mau_sac}
                            </div>
                            <div className="flex items-center text-sm">
                              Trọng lượng: {row.original.trong_luong}
                            </div>
                            <div className="flex items-center text-sm">
                              Xuất xứ: {row.original.xuat_xu}
                            </div>
                          </div>
                        </CustomPopover>
                      </TableCell>
                    );
                  }

                  return (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Không có dữ liệu
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
