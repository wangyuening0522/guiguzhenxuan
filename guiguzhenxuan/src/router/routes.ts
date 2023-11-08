//constantRoute路由配置
export const constantRoute = [
  {
    //登陆路由
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    //命名路由
    name: "login",
    //路由原信息(包含title和hidden)
    meta: {
      title: "登录",
      hidden: true,
    },
  },
  {
    //登陆成功后-layout布局页面(左边栏，上边栏，main页面)
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "",
      hidden: false,
      icon: "",
    },
    redirect: "/home",
    children: [
      //布局页面的main页面
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        name: "home",
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },

  {
    path: "/screen",
    component: () => import("@/views/screen"),
    name: "screen",
  },
  /*  //报错页面
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
  },
  //重定向,兜底，主要正则匹配
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
  }, */
];
export const asyncRoute = [
  {
    path: "/ac1",
    component: () => import("@/layout/index.vue"),
    name: "Ac1",
    meta: {
      title: "权限管理",
      hidden: false,
      icon: "Lock",
    },
    children: [
      {
        path: "/ac1/user",
        component: "@/views/acl/user/index.vue",
        name: "User",
        meta: {
          title: "用户管理",
          hidden: false,
          icon: "User",
        },
      },
      {
        path: "/ac1/role",
        component: "@/views/acl/role/index.vue",
        name: "Role",
        meta: {
          title: "角色管理",
          hidden: false,
          icon: "Avatar",
        },
      },
      {
        path: "/acl/permission",
        component: () => import("@/views/ac1/permission/index.vue"),
        name: "Permission",
        meta: {
          title: "菜单管理",
          hidden: false,
          icon: "List",
        },
      },
    ],
  },
];
//任意路由
export const anyRoute = {
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  name: "Any",
  meta: {
    title: "任意路由",
    hidden: true,
  },
};
