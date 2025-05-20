import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  LoginValidator,
  type TLoginValidator,
} from "@/lib/validator/login-validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { login } from "@/api/auth";
import { useNavigate } from "react-router";
import PublicLayout from "@/layouts/PublicLayout";
import { useDispatch } from "react-redux";
import { loginRequest } from "@/features/auth/authSlice";

const LoginPage = () => {
  const navigate = useNavigate();

  // const { mutate } = useMutation({
  //   mutationFn: login,
  //   onSuccess: (data: any) => {
  //     localStorage.setItem("accessToken", data.accessToken);
  //     navigate("/ban-dieu-khien");
  //     alert("Đăng nhập thành công");
  //   },
  //   onError: (error: any) => {
  //     alert(`Đăng nhập thất bại: ${error.response.data.error}`);
  //   },
  // });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginValidator>({
    resolver: zodResolver(LoginValidator),
  });

  const onSubmit = (data: { email: string; password: string }) => {
    dispatch(loginRequest(data));
    reset();
  };

  return (
    <PublicLayout>
      <div className="h-screen max-w-md mx-auto flex flex-col items-center">
        <div className="text-4xl mt-10">
          <span>Đăng nhập vào</span>
          <span className="text-green-900 font-bold tracking-tighter ml-1 text-5xl">
            VBattery
          </span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col mt-8 gap-4 px-10"
        >
          <div className="flex flex-col gap-1">
            <Label htmlFor="email">Email</Label>
            <Input type="email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="password">Mật khẩu</Label>
            <Input type="password" {...register("password")} />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
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
    </PublicLayout>
  );
};

export default LoginPage;
