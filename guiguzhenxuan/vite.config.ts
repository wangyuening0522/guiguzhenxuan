import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { viteMockServe } from "vite-plugin-mock";
import { UserConfigExport, ConfigEnv } from "vite";
//引入svg需要用的插件
// https://vitejs.dev/config/
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
//defineConfig传入一个箭头函数()=>{return {配置对象}}
export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      viteMockServe({
        // localEnabled: command === "serve",
        // 注意啊：修改
        enable: command === "serve",
      }),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        // Specify symbolId format
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"), // 相对路径别名配置，使用 @ 代替 src
      },
    },
    //scss全局变量一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});
