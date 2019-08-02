import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Tabbar from './components/Tabbar'
import Detail from './views/Detail'
import axios from 'axios'
// 嵌套组件
// 订单页
import Home from './views/Tabbar/Home.vue'
import Order from './views/Tabbar/Order'
// 我的
import Mine from './views/Tabbar/Mine'
// 发现
import Sear from './views/Tabbar/Sear'
import VueRouter from 'vue-router';
//登录
import Login from './views/Login' 
//
import Bar from './components/IndexBar' 
const routes = [
    {
      name: 'tabbar',
      path: '/tabbar',
      component: Tabbar,
      children: [
        {
          name: 'home',
          // 第二层路由的path是没有/
          path: 'home',
              component: Home,
        },
        {
        name: 'sear',
        // 第二层路由的path是没有/
        path: 'sear',
            component: Sear,
        }, {
            name: 'order',
            path: 'order',
            component: Order,
        }, {
            name: 'mine',
            path: 'mine',
            component: Mine,
        }],
    },
    {
      name: 'detail',
      path: '/detail/:id',
      component: Detail,
      // 我往detail组建里面传入了props
      props: {
          default: true,
          sidebar: false
      }
    },
    {
      name:'login',
      path :'/login',
      component :Login
    },
    {
      name:'bar',
      path :'/bar',
      component :Bar
    },
    // 重定向
    {
      path: '/',
      // 别名
      alias: '/index.html',
      redirect: () => {
          // 我要跳进/123获取路由的一些详情信息
          // console.log(to)
          // 方法接收 目标路由 作为参数
          // return 重定向的 字符串路径/路径对象
          return '/tabbar/home'
      
      },
    },
    { path: '/sear', redirect: { name: 'sear' }},
    { path: '/order', redirect: { name: 'order' }},
    { path: '/mine', redirect: { name: 'mine' }},
  ]

const router = new VueRouter({
  //默认哈希模式,改为h5 history模式
  mode : 'history',
  routes
})
//全局前置守卫
// 要进入路由，都要先通过这个守卫
router.beforeEach(async(to,from,next)=>{
  // const data = await axios.post('https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/login',{
    const data = await axios.post('https://www.easy-mock.com/mock/5d3fe0fc738f621651cd1f4a/list/login', {
    params : {
        //存在cookie里面
        //用token代替你的用户名和密码
        token:'hdsjsdoi1132'
        // token: null
      }
    }) 
  // console.log(data);
  let isLogin = data.data.data.status//返回1既验证成功
  //
  // 如果你是首页，详情页，登录页或者你登陆了，都可以进去，否则不给你进去
  if (isLogin || to.path === '/login' || to.path === '/tabbar/home' || to.name === 'detail') {
    next()
} else {
    // 编程式导航
    router.push({
        name: 'login'
    })
}
})
export default router