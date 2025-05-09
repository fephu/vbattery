import { Link } from "react-router";
import CategoryBar from "./CategoryBar";
import SheetCart from "./products/SheetCart";
import { buttonVariants } from "./ui/button";

const categories = [
  { name: "Trang chủ", value: "/" },
  { name: "Sản phẩm", value: "/san-pham" },
  { name: "Tin tức", value: "/tin-tuc" },
  { name: "Dịch vụ", value: "/dich-vu" },
  { name: "Giới thiệu", value: "/gioi-thieu" },
  { name: "Liên hệ", value: "/lien-he" },
];

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-2 border-b border-zinc-200">
        <Link to="/" className="flex flex-col items-end">
          <span className="text-5xl tracking-tighter text-red-700">
            VBattery
          </span>
          <span className="text-3xl tracking-tighter">Energry.</span>
        </Link>

        <div className="absolute right-64 flex gap-2 items-center">
          <Link
            to="/dang-nhap"
            className={buttonVariants({
              variant: "ghost",
              className: "rounded-none tracking-tighter",
            })}
          >
            Đăng nhập
          </Link>
          <SheetCart />
        </div>
      </div>
      <CategoryBar categories={categories} />
    </div>
  );
};

export default Navbar;
