//统一管理用户接口
import request from "@/utils/request";
import type { loginFormData, loginResponseData } from "./type.ts";
enum API {
  LOGIN_URL = "api/user/login",
  USERINFO_URL = "/user/info",
}
//登录请求
export const reqLogin = (data: loginFormData) => {
  //分装好的axios:<分别的类型>(地址，数据)
  request.post<any, loginResponseData>(API.LOGIN_URL, data);
  // console.log(111);
  
};

// export const regLogin = data;
