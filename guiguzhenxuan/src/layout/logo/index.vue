<!-- 分装左上角图片组件 -->
<template>
  <div class="logo">
    <img :src="setting.logo" alt="" />
    <span>
      <h2 class="title">{{ setting.title }}</h2>
    </span>
  </div>
</template>
<script lang="ts" setup>
import setting from "@/setting";
</script>
<style scoped lang="scss">
.logo {
  display: flex;
  // flex-direction: row;
  //flex垂直居中(盒子)
  align-items: center;
  //flex水平居中(盒子)
  justify-content: center;
  padding: 10px;
  height: 40px;
  color: #959ea6;
  width: 25%;
  box-sizing: content-box;
  img {
    border-radius: 30%;
    height: 30px;
  }
  .title {
    font-size: 18px;
    margin-left: 10px;
  }
}
</style>
