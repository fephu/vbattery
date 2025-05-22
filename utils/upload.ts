import { v2 as cloudinary } from "cloudinary";

export const upload = async (file: any) => {
  const uploadResult = await cloudinary.uploader
    .upload(file, {
      public_id: "banner",
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(upload);
};
