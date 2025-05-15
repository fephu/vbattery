import type { PaginateProductType, Product } from "@/types";
import axiosInstance from "./axios";

export const fetchAllProducts = async (
  page: number,
  equip?: string
): Promise<PaginateProductType> => {
  return axiosInstance
    .get(`/products?page_id=${page}${equip ? `&equip=${equip}` : ""}`)
    .then((response) => response.data.data)
    .catch((error) => {
      throw error;
    });
};

export const getProduct = async (slug: string): Promise<Product> => {
  return axiosInstance
    .get(`/products/${slug}`)
    .then((response) => response.data.product)
    .catch((error) => {
      throw error;
    });
};
