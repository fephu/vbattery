import { Link } from "react-router";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { LuCircleChevronRight } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <MaxWidthWrapper className="py-10 w-full bg-[#0D1117] text-white">
      <div className="grid grid-cols-3 gap-4 border-b border-zinc-600 pb-10">
        <div>
          <span className="text-lg tracking-tighter">Về chúng tôi</span>
          <div className="flex items-center gap-1 mt-2">
            <CiFacebook className="size-6" />
            <CiInstagram className="size-6" />
          </div>
        </div>
        <div>
          <span className="text-lg tracking-tighter">Thông tin</span>
          <div className="mt-2 flex flex-col gap-1">
            <Link
              to={"/san-pham"}
              className="flex items-center gap-1"
              reloadDocument
            >
              <LuCircleChevronRight />
              Sản phẩm
            </Link>
            <Link
              to={"/dich-vu"}
              className="flex items-center gap-1"
              reloadDocument
            >
              <LuCircleChevronRight />
              Dịch vụ
            </Link>
            <Link
              to={"/gioi-thieu"}
              className="flex items-center gap-1"
              reloadDocument
            >
              <LuCircleChevronRight />
              Giới thiệu
            </Link>
            <Link
              to={"/lien-he"}
              className="flex items-center gap-1"
              reloadDocument
            >
              <LuCircleChevronRight />
              Liên hệ
            </Link>
          </div>
        </div>
        <div>
          <span className="text-lg tracking-tighter">Địa chỉ</span>

          <div className="mt-2 flex flex-col gap-2">
            <button className="flex items-center gap-1">
              <HiOutlineLocationMarker className="size-5" />
              B2/26F Ấp 2 - Vĩnh Lộc B - Bình Chánh - Tp HCM
            </button>

            <button className="flex items-center gap-1">
              <HiOutlineLocationMarker className="size-5" />
              Số 13 Ấp Long Trị - Bàn Long - Châu Thành - Tiền Giang
            </button>
          </div>
        </div>
      </div>

      <div className="pt-10 text-sm">Bản quyền 2025 VBattery Energry.</div>
    </MaxWidthWrapper>
  );
};

export default Footer;
