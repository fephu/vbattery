import type { PaginateProductType, Product } from "@/types";
import axiosInstance from "./axios";

export const fetchAllProducts = async (
  page: number
): Promise<PaginateProductType> => {
  return axiosInstance
    .get(`/products?page_id=${page}`)
    .then((response) => response.data.data)
    .catch((error) => {
      throw error;
    });
};
