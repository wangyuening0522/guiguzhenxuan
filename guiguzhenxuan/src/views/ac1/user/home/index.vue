<template>
  <div>我是home首页面</div>
  <el-card>
   <div><img src="" alt=""></div>
   <div> <h3>{{ getTime() }}好~</h3></div>
  </el-card>
</template>
<script lang="ts" setup>
import {getTime} from "@/utils/time";
import { ElNotification } from "element-plus";
ElNotification({
  type: "sucess",
  title: `${getTime()}好`,
});


</script>
