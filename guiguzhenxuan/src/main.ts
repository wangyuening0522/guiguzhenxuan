import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//  获取应用实例对象
// import globalComponent from './components/index'
// 配置国际化
//@ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
// app.use(globalComponent);
app.use(ElementPlus);
app.mount("#app");
