import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="h-screen max-w-md mx-auto flex flex-col items-center py-20">
      <div className="text-4xl mt-10">
        <span>Đăng nhập vào</span>
        <span className="text-green-900 font-bold tracking-tighter ml-1 text-5xl">
          VBattery
        </span>
      </div>

      <form className="w-full flex flex-col mt-8 gap-4 px-10">
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
