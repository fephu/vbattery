import { getProduct } from "@/api/product";
import Counter from "@/components/products/Counter";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import PublicLayout from "@/layouts/PublicLayout";
import type { Product } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { IoIosAdd } from "react-icons/io";

import { useParams } from "react-router";

const ProductDetail = () => {
  const params = useParams();
  const { addItem } = useCart();

  const name = params.slug;

  if (!name) {
    return <div>Something went wrong</div>;
  }

  const { data, error, isLoading, isError, isPlaceholderData } = useQuery<
    Product,
    Error
  >({
    queryKey: ["product"],
    queryFn: () => getProduct(name),
  });

  const handleAddToCart = (product: Product) => {
    addItem(product);
    alert("Thêm thành công.");
  };

  return (
    <PublicLayout>
      {data ? (
        <div className="mx-auto flex max-w-screen pt-6 gap-6">
          <div className="w-1/3 border text-center px-10 rounded-sm">
            <img src={data.hinh_anh[0]} alt="" className="rounded-sm" />
          </div>
          <div className="">
            <div className="flex flex-col gap-4 border-b border-zinc-200 py-4">
              <span className="text-4xl font-semibold">
                {data.ten_san_pham}
              </span>
              <span className="text-base">Mã sản phẩm: {data.ma_san_pham}</span>

              <div className="flex items-center gap-4">
                <Counter />
                <Button
                  className="rounded-sm cursor-pointer w-fit"
                  onClick={() => handleAddToCart(data)}
                >
                  <IoIosAdd className="size-5" />
                  Thêm giỏ hàng
                </Button>
              </div>
            </div>

            <div className="py-4 text-sm">
              <span>Thông tin sản phẩm {data.ten_san_pham}:</span>

              <div className="flex flex-col gap-4 my-4">
                <span>- Điện áp: {data.diep_ap}</span>
                <span>- Dung lượng: {data.dung_luong}</span>
                <span>- Kích thước: {data.kich_thuoc}</span>
                <span>- Màu: {data.mau_sac}</span>
                <span>- Trọng lượng: {data.trong_luong}</span>
                <span>- Xuất xứ: {data.xuat_xu}</span>
              </div>

              <span>
                Ắc quy {data.ten_san_pham} Được chúng tôi bảo hành 1 đổi 1 trong
                vòng 12 tháng .
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div>San pham khong ton tai</div>
      )}
    </PublicLayout>
  );
};

export default ProductDetail;
