//自定义插件，注册真个项目全局组件
import SvgIcon from "./SvgIcon/index.vue";
// 将组件哪一个对象包起来
const allGlobalComponent = { SvgIcon };
//install函数自动调用
// export default {
//   install(app) {
//     Object.keys(allGlobalComponent).forEach((key) => {
//       app.component(key, allGlobalComponent[key]);
//     });
//   },
// };
