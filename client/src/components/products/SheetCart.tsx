import { ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";

const SheetCart = () => {
  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          variant: "outline",
          className: "text-sm tracking-tighter rounded-none cursor-pointer",
        })}
      >
        <ShoppingBag />0 Sản phẩm
      </SheetTrigger>
      <SheetContent className="px-0">
        <div className="flex flex-col items-center justify-center py-10 w-full h-full gap-4">
          <span className="text-2xl">Giỏ hàng trống.</span>

          <div className="flex items-center gap-2">
            <Link
              to={"/gio-hang"}
              className={buttonVariants({
                variant: "outline",
                className: "rounded-none text-sm gap-2",
              })}
              reloadDocument
            >
              Đến Giỏ hàng
            </Link>
            <Link
              to={"/san-pham"}
              className={buttonVariants({
                className: "rounded-none text-sm gap-2",
              })}
              reloadDocument
            >
              Tiếp tục mua sắm
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
