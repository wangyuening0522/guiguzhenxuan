<!-- 动态菜单子组件 -->
<template>
  <div class="menu">
    <!-- 使用tempalte有效减少for出现 -->
    <template v-for="(item, index) in menuList" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item>
          <!-- <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon> -->
          {{ item.meta.title }}
          <!-- <template #title>
            <span>{{ item.meta.title }}</span>
          </template> -->
        </el-menu-item>
      </template>
      <template v-if="item.children">
        <el-menu-item>
          {{ item.meta.title }}
        </el-menu-item>
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
</script>
<style scoped>
.style {
  color: white;
}
</style>
