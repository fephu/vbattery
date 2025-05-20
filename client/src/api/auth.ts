import type { LoginResponseType, User } from "@/types";
import axiosInstance from "./axios";

export const login = async (data: {
  email: string;
  password: string;
}): Promise<LoginResponseType> => {
  return axiosInstance
    .post("/user/login", {
      email: data.email,
      password: data.password,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const fetchCurrentUser = async (): Promise<User> => {
  return axiosInstance
    .get("/user/fetch")
    .then((response) => {
      return response.data.user;
    })
    .catch((error) => {
      throw error;
    });
};
