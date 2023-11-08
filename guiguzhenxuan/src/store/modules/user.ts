//创建用户相关的小仓库
import { defineStore } from "pinia";
import { reqLogin } from "@/api/user";
import type { loginFormData, loginResponseData } from "@/api/user/type";
import { constantRoute } from "@/router/routes";
const useUserStore = defineStore("User", {
  //小仓库存储数据
  state: () => {
    return {
      token: "", //用户唯一表示token
      menuRoutes: constantRoute, //路由菜单列表
    };
  },
  //处理异步的地方(比如发请求)
  actions: {
    //用户登录的地方
    // 1.发请求，获得响应后存token
    /* 为什么使用await无法获取请求结果 */
    userLogin(data: loginFormData) {
      let res: any = reqLogin(data);
      //报错：1.请求正常发出，但是获取不到结果
      console.log(res);
      if (res.code === 200) {
        //持久化存储
        this.token = res.data.token;
        localStorage.setItem("TOKEN", res.data.token);
        return "ok";
      }
    },
  },
  getters: {},
});
export default useUserStore;
// console.log("export",export);
