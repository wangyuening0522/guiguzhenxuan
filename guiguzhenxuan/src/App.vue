<!-- 

<template>
 <div id="app">
  <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
 </div>
</template>
<script setup lang="ts">
import {Plus} from "@element-plus/icons-vue"
import {onMounted} from 'vue'
onMounted(){
    console.log(import.mata.env);
    
}
</script>
<style scoped>
</style> -->
<template>
  <div>
    <h1>svg测试</h1>
    <!--  <svg style="height:200px;width:100px">
      <use xlink:href="#icon-phone" fill="red"></use>
    </svg> -->
    <!-- <svg-icon name="phone" color="'pink'"> </svg-icon>
     -->
    <svg-icon></svg-icon>
  </div>
</template>
<script setup lang="ts">
// import SvgIcon from "./components/SvgIcon/index.vue";
///components/SvgIcon/index.vue
/* import axios from 'axios'
axios.post("/api/user/login",()=>{
  username:"admin",
  password:"111111"
}) */
import { onMounted } from "vue";
import { reqLogin } from "@/api/user/index";
onMounted(() => {
  reqLogin({ username: "system", password: "111111" });
});
</script>
<style scoped></style>
<!-- v3ts -->
