import {
  ResponseLogin,
  ResponseSignup,
  User,
  UserLogin,
  UserRegister,
} from "models";
import axiosClient from "./axiosClient";
const authApi = {
  login(params: UserLogin): Promise<ResponseLogin> {
    return axiosClient.post("auth/login", params);
  },
  signup(params: UserRegister): Promise<ResponseSignup> {
    return axiosClient.post("auth/signup", params);
  },
  verifyToken(): Promise<User> {
    return axiosClient.get("auth/user");
  },
  logout: () => axiosClient.get("auth/logout"),
};

export default authApi;
