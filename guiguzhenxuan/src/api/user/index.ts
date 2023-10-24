//统一管理用户接口
import request from "@/utils/request";
import type { loginFormData, loginResponseData } from "./type.ts";
enum API {
  LOGIN_URL = "api/user/login",
  USERINFO_URL = "/user/info",
}
//登录接口
export const reqLogin = (data: loginFormData) => {
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
};

// export const regLogin = data;
