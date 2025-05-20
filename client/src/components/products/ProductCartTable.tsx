import { useCart, type CartItem } from "@/hooks/use-cart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button, buttonVariants } from "../ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router";

interface ProductCartTableProps {
  products: CartItem[];
}

const ProductCartTable = ({ products }: ProductCartTableProps) => {
  const { decreaseQuantity, addItem, removeItem } = useCart();

  return (
    <Table className="border border-gray-300">
      <TableHeader>
        <TableRow>
          <TableHead className="text-center text-gray-900">Sản phẩm</TableHead>

          <TableHead className="text-gray-900 text-center">Số lượng</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow>
            <TableCell className="flex items-center gap-4">
              <Trash
                className="size-5 cursor-pointer hidden sm:block"
                onClick={() => removeItem(product.product._id)}
              />
              <img
                src={product.product.hinh_anh[0]}
                alt="Product image"
                className="w-1/4"
              />

              <span className="text-sm sm:text-base overflow-hidden">
                {product.product.ten_san_pham}
              </span>
            </TableCell>

            <TableCell>
              <div className="flex items-center gap-2 rounded-sm border border-gray-300">
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="rounded-none h-8 px-2"
                >
                  <Minus className="size-4 cursor-pointer" />
                </Button>
                <span>{product.quantity}</span>
                <Button
                  variant={"ghost"}
                  size={"sm"}
                  className="rounded-none h-8 px-2"
                  onClick={() => addItem(product.product)}
                >
                  <Plus className="size-4 cursor-pointer" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
        <div className="p-4">
          <Link
            to={"/san-pham?page=1"}
            className={buttonVariants({
              variant: "outline",
              className: "text-sm gap-2",
            })}
          >
            <HiArrowLongLeft className="size-4" />
            Tiếp tục mua hàng
          </Link>
        </div>
      </TableBody>
    </Table>
  );
};

export default ProductCartTable;
