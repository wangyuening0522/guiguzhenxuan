import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//引入路由，写好的router文件夹下面的index文件
import router from "./router";
//  获取应用实例对象
import globalComponent from "./components/index";
// 配置国际化
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import pinia from "./store/index";
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(pinia);
app.use(globalComponent);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
