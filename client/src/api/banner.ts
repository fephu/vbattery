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

export const removeBanner = async (id: string): Promise<Banner> => {
  return axiosInstance
    .delete(`/banners/delete/${id}`)
    .then((response) => response.data.banner)
    .catch((error) => {
      throw error;
    });
};

export const addBanner = async (formData: FormData): Promise<Banner> => {
  return axiosInstance
    .post(`/banners/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data.banner)
    .catch((error) => {
      throw error;
    });
};
