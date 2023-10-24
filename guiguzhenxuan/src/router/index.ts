import {createRouter,createWebHashHistory} from 'vue-router';
//常见路由器
let router=createRouter({
	//路由模式hash
	history:createWebHashHistory(),
	routes:[
		{
			//登录
			path:'/login',
			component:()=>import('@/views/login/login.vue'),
			name:'login'
		},{
			//登录成功后展示数据的路由
			path:'/',
			component:()=>import('@/views/home/home.vue'),
			name:'home'
		},{
			path:'/404',
			component:()=>import('@/views/404/404.vue'),
			name:'404'
		}
	]
})
export default router;