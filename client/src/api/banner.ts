import type { Banner } from "@/types";
import axiosInstance from "./axios";

export const fetchAllBanners = async (): Promise<Banner[]> => {
  return axiosInstance
    .get("/banners")
    .then((response) => response.data.banners)
    .catch((error) => {
      throw error;
    });
};
