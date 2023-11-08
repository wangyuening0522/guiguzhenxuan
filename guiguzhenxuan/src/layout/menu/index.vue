<!-- 动态菜单子组件 -->
<template>
  <div class="menu">
    <!-- 使用tempalte有效减少for出现 -->
    <template v-for="(item, index) in menuList" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ item.meta.title }}</span>
          </template>
        </el-menu-item>
      </template>
      <!-- <template v-for="person in persons">
        <div>{{ person.id }} - {{ person.name }}</div>
      </template> -->
      <template></template>
      <template></template>
    </template>
  </div>
</template>
<script setup lang="ts">
// import {defineProps} from 'vue';不需要引入
defineProps(["menuList"]);
const persons = [
  { id: 1, name: "11" },
  { id: 2, name: "22" },
];
</script>
<style scoped>
.style {
  color: white;
}
</style>
