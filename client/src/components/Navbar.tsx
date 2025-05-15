import { Link } from "react-router";
import CategoryBar from "./CategoryBar";
import SheetCart from "./products/SheetCart";
import logoImg from "@/assets/logo.jpg";
import MaxWidthWrapper from "./MaxWidthWrapper";

const categories = [
  { name: "Sản phẩm", value: "/san-pham?page=1" },
  // { name: "Dịch vụ", value: "/dich-vu" },
  { name: "Giới thiệu", value: "/gioi-thieu" },
  { name: "Liên hệ", value: "/lien-he" },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 bg-white border-b border-zinc-200 transition-all z-50">
      <MaxWidthWrapper className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex flex-col items-end">
            <img src={logoImg} alt="logo img" className="w-[5rem] z-auto" />
          </Link>
          <CategoryBar categories={categories} />
        </div>

        <SheetCart />
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
