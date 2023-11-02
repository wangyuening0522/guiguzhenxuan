<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">left</el-col>
      <el-col :span="12" :xs="0">
        <el-form class="login_form" :rules="rules">
          <h1>HELLO</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item>
            <el-input
              v-model="loginForm.username"
              :prefix-icon="User"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="loginForm.password"
              :prefix-icon="Lock"
            ></el-input>
          </el-form-item>
          <el-button
            :loading="loading"
            @click="login"
            type="primary"
            size="default"
            class="login_btn"
          >
            登录
          </el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { reactive, ref } from "vue";
//不需要析构出来
import useUserStore from "@/store/modules/user";
//需要创造实例useUserStore相当于类
let useStore = useUserStore();
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
let loading = ref(false);
//获取路由器
let $router = useRouter();
const loginForm = reactive({
  username: "",
  password: "",
});
//不是动态变化的数据，是规则
const rules={
  /* 1.必填  2.最长最短  3.触发时发生校验 */
  username:[
    {
      required:true,
      min:5,
      max:10,
      message:'长度应为6-10位',//报错信息，
      trigger:'change'
    }
  ],
  password:[{

  }]
}


const login = async () => {
  loading.value = true;
  /* 
   //点击登录按钮以后干什么
  //通知仓库发起请求
  //请求成功->路由跳转,使用try catch来捕获请求的成功与否
  //请求失败->弹出登陆失败信息 */
  try {
    await useStore.userLogin(loginForm);
    $router.push("/");
    //使用弹出框验证登录
    ElNotification({
      type: "sucess",
      message: "登陆成功",
    });
    loading.value = false;
  } catch (error) {
    $router.push("/404");
    console.log("error", error);

    ElNotification({
      type: "error",
      message: (error as Error).message,
    });
  }
};
</script>
<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg");
  .login_form {
    background: url("@/assets/images/login_form.png");
    padding: 40px;
    width: 80%;
    position: relative;
    top: 30%;
  }
  h1 {
    color: white;
    font-size: 40px;
  }
  h2 {
    color: white;
    font-size: 20px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
