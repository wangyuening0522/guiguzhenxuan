export const constantRoute = [
  {
    //登陆路由
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
  },
  {
    //登录成功后展示数据的路由
    path: "/",
    component: () => import("@/views/home/index.vue"),
    name: "layout",
  },
  //报错页面
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
  },
  //重定向,兜底，主要正则匹配
  {
	path:'/:pathMatch(.*)*',
	redirect:'/404',
	name:'Any'
  }
];
