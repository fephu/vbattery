import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="h-screen max-w-md mx-auto flex flex-col items-center py-10">
      <div className="text-4xl">
        <span>Đăng nhập vào</span>
        <span className="text-green-900 font-bold tracking-tighter ml-1">
          VBattery
        </span>
      </div>

      <div className="flex items-center justify-center gap-1 mt-4">
        <span className="text-sm">Bạn chưa có tài khoản?</span>
        <Link to={"/dang-ky"} className="underline text-sm">
          Đăng ký
        </Link>
      </div>

      <form className="w-full flex flex-col mt-4 gap-4 px-10">
        <div className="flex flex-col gap-1">
          <Label htmlFor="">Email</Label>
          <Input type="email" />
        </div>

        <div className="flex flex-col gap-1">
          <Label htmlFor="">Mật khẩu</Label>
          <Input type="password" />
        </div>

        <Button
          className="bg-green-900 hover:bg-green-800 cursor-pointer text-base"
          size={"lg"}
          type="submit"
        >
          Đăng nhập
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
