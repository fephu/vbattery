import { z } from "zod";

export const LoginValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Mật khẩu lớn hơn 6 kí tự" })
    .max(20, { message: "Mật khẩu nhỏ hơn 20 kí tự" }),
});

export type TLoginValidator = z.infer<typeof LoginValidator>;
