import type { Equipment } from "@/types";
import axiosInstance from "./axios";

export const fetchAllEquipments = async (): Promise<Equipment[]> => {
  return axiosInstance
    .get("/equipments")
    .then((response) => response.data.data)
    .catch((error) => {
      throw error;
    });
};
