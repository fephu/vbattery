import axiosInstance from "./axios";

export const fetchAllProducts = async (): Promise<any[]> => {
  return axiosInstance
    .get("/products", {})
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
