//自定义插件，注册真个项目全局组件
import SvgIcon from "./SvgIcon/index.vue";
import type { App, Component } from "vue";
// 将组件用一个对象包起来
const components: { [name: string]: Component } = { SvgIcon };
// const allGlobalComponent = { SvgIcon };
//install函数自动调用
/* export default {
  install(app:App) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key]);
    });
  },
}; */
export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key]);
    });
  },
};
