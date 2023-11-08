//进行axios二次封装，使用请求和相应拦截器
import axios from "axios";
import { ElMessage } from "element-plus";
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});
//  实例添加请求拦截器,
request.interceptors.request.use((config) => {
  //返回配置对象，有一个请求头
  //config配置对象，headers属性请求头，经常给服务器携带公共参数
  return config;
});
//  响应拦截器
request.interceptors.response.use(
  (response) => {
    if(response.status===200){
      return Promise.resolve(response.data);
    }
  },
  (error) => {
    //处理网络错误
    let msg = "";
    let status = error.response.status;
    switch (status) {
      case 401:
        msg = "token过期";
        break;
      case 403:
        msg = "无权访问";
        break;
      case 404:
        msg = "请求地址错误";
        break;
      case 500:
        msg = "服务器出现问题";
        break;
      default:
        msg = "无网络";
    }
    //提示错误信息
    ElMessage({
      type: "error",
      message: "msg",
    });
    //终结promise
    return Promise.reject(error);
  }
);
//对外暴露
export default request;
