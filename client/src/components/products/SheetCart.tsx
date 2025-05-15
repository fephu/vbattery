import { ShoppingBag, Trash } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";
import { useCart } from "@/hooks/useCart";
import { ScrollArea } from "../ui/scroll-area";

const SheetCart = () => {
  const { items, removeItem } = useCart();

  console.log(items);

  return (
    <Sheet>
      <SheetTrigger
        className={buttonVariants({
          variant: "outline",
          size: "lg",
          className: "tracking-tight cursor-pointer",
        })}
      >
        <ShoppingBag />
        {items.length} Sản phẩm
      </SheetTrigger>
      <SheetContent className="px-0">
        {items.length !== 0 ? (
          <div className="flex flex-col h-full pb-10 pt-4">
            <h1 className="text-center text-xl border-b border-gray-300 h-10">
              Giỏ hàng
            </h1>
            <ScrollArea>
              {items.map((item) => (
                <div
                  key={item.product._id}
                  className="flex justify-between border-b border-gray-200 px-4 "
                >
                  <img
                    src={item.product.hinh_anh[0]}
                    alt="Product image"
                    className="w-1/3 object-cover h-[10rem]"
                  />
                  <div className="flex flex-col gap-2 py-8 px-4 w-full">
                    <span className="line-clamp-1">
                      {item.product.ten_san_pham}
                    </span>
                    <div className="flex items-center justify-between">
                      <span>{item.product.gia_san_pham}</span>
                    </div>
                  </div>

                  <div className="py-8">
                    <Trash
                      className="size-5 cursor-pointer"
                      onClick={() => removeItem(item.product._id)}
                    />
                  </div>
                </div>
              ))}
            </ScrollArea>

            <div className="flex items-center justify-center gap-4 px-4 mt-6">
              <Link
                to={"/giỏ-hàng"}
                className={buttonVariants({
                  variant: "outline",
                  className: "rounded-sm",
                  size: "lg",
                })}
                reloadDocument
              >
                Đến giỏ hàng
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 w-full h-full gap-4">
            <span className="text-2xl">Giỏ hàng trống.</span>

            <div className="flex items-center gap-4">
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
        )}
      </SheetContent>
    </Sheet>
  );
};

export default SheetCart;
