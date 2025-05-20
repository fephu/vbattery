import { z } from "zod";

export const AddBannerValidator = z.object({
  link_url: z.string(),
  title: z.string(),
  position: z.number(),
  file: z.instanceof(File, { message: "Chọn một hình ảnh" }),
});

export type TAddBannerValidator = z.infer<typeof AddBannerValidator>;
