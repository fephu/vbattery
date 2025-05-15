import type { Product } from "@/types";
import { Button } from "../ui/button";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router";
import { useCart } from "@/hooks/useCart";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product);
    alert("Thêm vào giỏ hàng thành công.");
  };

  return (
    <div className="h-[24rem] border relative">
      <Link to={`/san-pham/${product.slug}`} reloadDocument>
        <img
          src={product.hinh_anh[0]}
          alt="product img"
          className="h-2/3 w-full bg-cover"
        />
      </Link>
      <div className="flex flex-col gap-1 py-2 px-2 ">
        <span>{product.ten_san_pham}</span>
        <span className="text-sm">Giá: {product.gia_san_pham} VND</span>
      </div>
      <Button
        variant={"outline"}
        className="rounded-none cursor-pointer absolute bottom-2 inset-x-2"
        onClick={handleAddToCart}
      >
        <IoIosAdd className="size-5" />
        Thêm giỏ hàng
      </Button>
    </div>
  );
};

export default ProductCard;
