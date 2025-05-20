import type { Equipment } from "@/types";
import axiosInstance from "./axios";

export const fetchAllEquipments = async (): Promise<Equipment[]> => {
  return axiosInstance
    .get("/equipments")
    .then((response) => response.data.equipments)
    .catch((error) => {
      throw error;
    });
};

export const getEquipment = async (slug: string): Promise<Equipment> => {
  return axiosInstance
    .get(`/equipments/${slug}`)
    .then((response) => response.data.equipment)
    .catch((error) => {
      throw error;
    });
};

export const removeEquipment = async (id: string): Promise<Equipment> => {
  return axiosInstance
    .delete(`/equipments/delete/${id}`)
    .then((response) => response.data.equipment)
    .catch((error) => {
      throw error;
    });
};

export const createEquipment = async (name: string): Promise<Equipment> => {
  return axiosInstance
    .post(`/equipments/create`, {
      ten_thiet_bi: name,
    })
    .then((response) => response.data.equipment)
    .catch((error) => {
      throw error;
    });
};
