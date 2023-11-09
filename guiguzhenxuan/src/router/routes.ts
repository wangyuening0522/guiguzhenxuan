/* //constantRoute路由配置
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
      hidden: false,
    },
  },
  //主页面
  {
    //登陆成功后-layout布局页面(左边栏，上边栏，main页面)
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "layout",
      hidden: false,
      icon: "layout",
    },
    // redirect: "/home",
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
      {
        path: "/screen",
        component: () => import("@/views/screen"),
        name: "screen",
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  //二级标题1
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
//export const asyncRoute = [];
//任意路由
export const anyRoute = [
  //报错页面
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: false,
    },
  },
  //重定向,兜底，主要正则匹配
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "Any",
      hidden: false,
    },
  },
]; */
/*
 * @Description: Stay hungry，Stay foolish
 * @Author: Huccct
 * @Date: 2023-05-19 17:46:49
 * @LastEditors: Huccct
 * @LastEditTime: 2023-06-02 10:33:35
 */
export const constantRoute = [
  //登录
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "login",
      hidden: true,
    },
  },
  //有子组件
  {
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
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  //大屏
  {
    path: "/screen",
    component: () => import("@/views/screen/index.vue"),
    name: "Screen",
    meta: {
      title: "Screen",
      hidden: false,
      icon: "Platform",
    },
  },
  //404
  {
    path: "/404",
    component: () => import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: true,
    },
  },
];

export const asyncRoute = [
  {
    path: "/acl",
    component: () => import("@/layout/index.vue"),
    name: "Acl",
    meta: {
      title: "权限管理",
      hidden: false,
      icon: "Lock",
    },
    redirect: "/acl/user",
    children: [
      {
        path: "/acl/user",
        component: () => import("@/views/acl/user/index.vue"),
        name: "User",
        meta: {
          title: "用户管理",
          hidden: false,
          icon: "User",
        },
      },
      {
        path: "/acl/role",
        component: () => import("@/views/acl/role/index.vue"),
        name: "Role",
        meta: {
          title: "角色管理",
          hidden: false,
          icon: "Avatar",
        },
      },
      {
        path: "/acl/permission",
        component: () => import("@/views/acl/permission/index.vue"),
        name: "Permission",
        meta: {
          title: "菜单管理",
          hidden: false,
          icon: "List",
        },
      },
    ],
  },
  {
    path: "/product",
    component: () => import("@/layout/index.vue"),
    name: "Product",
    meta: {
      title: "商品管理",
      hidden: false,
      icon: "Goods",
    },
    redirect: "/product/trademark",
    children: [
      {
        path: "/product/trademark",
        component: () => import("@/views/product/trademark/index.vue"),
        name: "Trademark",
        meta: {
          title: "品牌管理",
          icon: "ShoppingCart",
          hidden: false,
        },
      },
      {
        path: "/product/attr",
        component: () => import("@/views/product/attr/index.vue"),
        name: "Attr",
        meta: {
          title: "属性管理",
          icon: "Management",
          hidden: false,
        },
      },
      {
        path: "/product/spu",
        component: () => import("@/views/product/spu/index.vue"),
        name: "Spu",
        meta: {
          title: "Spu",
          icon: "SetUp",
          hidden: false,
        },
      },
      {
        path: "/product/sku",
        component: () => import("@/views/product/sku/index.vue"),
        name: "Sku",
        meta: {
          title: "Sku",
          icon: "ScaleToOriginal",
          hidden: false,
        },
      },
    ],
  },
];

export const anyRoute = {
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  name: "Any",
  meta: {
    title: "任意路由",
    hidden: true,
  },
};
