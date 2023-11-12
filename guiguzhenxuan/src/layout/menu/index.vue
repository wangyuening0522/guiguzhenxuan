<!-- 动态菜单子组件 -->
<template>
  <div class="menu">
    <!-- 使用tempalte有效减少for出现 -->
    <!-- {{ menuList }} -->
    <!-- 只需要进行filter就可以 -->
    <template v-for="(item, index) in menuList" :key="item.path">
      <!-- 没有孩子 screen -->
      <template v-if="!item.children">
        <el-menu-item
          @click="goRoute"
          v-if="!item.meta.hidden"
          :index="item.path"
        >
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <template v-if="item.children">
        <!-- 有一个子路由 -->
        <el-menu-item
          @click="goRoute"
          v-if="item.children.length === 1"
          :index="item.path"
        >
          <template #title>
            <span>{{ item.children[0].meta.title }}</span>
          </template>
        </el-menu-item>
        <!-- 有大于一个子路由 -->
        <el-sub-menu v-if="item.children.length > 1" :index="item.path">
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
          <!-- <Menu :menuList="item.children"></Menu> -->
          <el-menu-item
            @click="goRoute"
            v-for="(item2, index) in item.children"
            :key="item2.path"
            :index="item2.path"
          >
            <template #title>
              <span>{{ item2.meta.title }}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </template>
  </div>
</template>
<script setup lang="ts">
/* 
<template v-if="item.children && item.children > 1">
          <el-sub-menu>
            <span>{{ item.meta.name }} </span>
            <!-- 递归传给menu组件，然后依次渲染 -->
            <Menu :menuList="item.children" />
          </el-sub-menu>
        </template> */
// import {defineProps} from 'vue';不需要引入
defineProps(["menuList"]);
import { useRouter } from "vue-router";
//编程导航跳转
let $router = useRouter();
const goRoute = (vc: any) => {
  console.log(vc.index);
  $router.push(vc.index);
};
</script>
<style scoped>
.style {
  color: white;
}
</style>
