<template>
  <div class="layout-container">
    <!--  <el-container>
      <el-header>header</el-header>
      <el-container>
		
        <el-aside>aside</el-aside>
        <el-main>MAIN</el-main>
      </el-container>
    </el-container> -->
    <el-container>
      <el-aside>
        <el-scrollbar class="scroller">
          <Logo />
          <!-- 注意：使用路由生成侧边栏,包裹一个滚动条 -->
          <el-menu background-color="pink" text-color="white">
            <!-- 使用v-model父传子 -->
            <Menu :menuList="userStore.menuRoutes" />
          </el-menu>
        </el-scrollbar>
      </el-aside>
    </el-container>
    <!-- 左侧菜单 -->
    <div class="layout_slider"></div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar"></div>
    <!-- 内容展示 -->
    <div class="layout_main"></div>
  </div>
</template>
<script setup lang="ts">
import Logo from "./logo/index.vue";
/* 使用父传子 */
import Menu from "./menu/index.vue";
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
</script>
<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100vh;
  // background-color: pink;
  /*  .layout_slider {
    background-color: #001529 !important;
    transition: all 0.3s;
    height: 100px;
  }
  .layout_tabbar {
    background-color: #fff !important;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    z-index: 999;
    height: 100px;
  }
  .layout_main {
    position: absolute;
    padding: 20px;
    left: 200px;
    top: 60px;
    transition: all 0.3s;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - 60px);
    background-color: red;
  } */
}
</style>
