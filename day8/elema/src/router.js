import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Tabbar from './components/Tabbar'
import Detail from './views/Detail'

// 嵌套组件
// 订单页
import Home from './views/Tabbar/Home.vue'
import Order from './views/Tabbar/Order'
// 我的
import Mine from './views/Tabbar/Mine'
// 发现
import Sear from './views/Tabbar/Sear'

export default new Router({
  routes: [
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
})
