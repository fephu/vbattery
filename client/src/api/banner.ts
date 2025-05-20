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

export const addBanner = async (data: {
  image_url: File | null;
  link_url: string;
  title: string;
  isActive: boolean;
}): Promise<Banner> => {
  return axiosInstance
    .post(`/banners/create`, {
      image_url: data.image_url,
      link_url: data.link_url,
      title: data.title,
      isActive: data.isActive,
    })
    .then((response) => response.data.banner)
    .catch((error) => {
      throw error;
    });
};
