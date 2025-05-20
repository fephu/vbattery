import ProductCartTable from "@/components/products/ProductCartTable";
import { useCart } from "@/hooks/use-cart";
import PublicLayout from "@/layouts/PublicLayout";

const CartPage = () => {
  const { items } = useCart();

  return (
    <PublicLayout>
      <div className="pt-10 text-3xl md:text-5xl text-center">Giỏ hàng</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 mt-8">
        <div className="col-span-1 sm:col-span-2">
          <ProductCartTable products={items} />
        </div>

        <div className="">
          <div className="text-lg uppercase font-semibold">Thông tin</div>
          <div className="border border-gray-300 rounded-sm p-4 mt-4">
            <span className="text-lg">
              Quý khách đặt hàng vui lòng liên hệ Zalo <br /> hoặc hotline: {""}
              <span className="font-semibold tracking-tighter">0852520536</span>
            </span>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default CartPage;
