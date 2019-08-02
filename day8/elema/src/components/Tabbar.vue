<template>
  <div>
    <!-- 把路由组件缓存到内存里面 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
      <!-- <van-tabbar :route="true" v-model="active">-->
      <!-- 声明式导航 :url="t.url" -->
      <!--<van-tabbar-item
        @click="navTo(t.url)"
        v-for="(t,index) in tabbarsItems"
        :key="index"
        :icon="t.icon"
        v-text="t.title"
      ></van-tabbar-item>
    </van-tabbar> -->
       <van-tabbar route>
        <van-tabbar-item
          replace
          to="/"
          icon="home-o"
        >
          首页
        </van-tabbar-item>
        <van-tabbar-item
          replace
          to="/sear"
          icon="search"
        >
          发现
        </van-tabbar-item>
        <van-tabbar-item
          replace
          to="/order"
          icon="description"
        >
          订单
        </van-tabbar-item>
        <van-tabbar-item
          replace
          to="/mine"
          icon="user-o"
        >
          我的
        </van-tabbar-item>
      </van-tabbar>
  </div>
</template>
<script>
/* export default {
  data() {
    return {
      // 记录你所在第几项
      active: 0,
      tabbarsItems: [
        {
          title: "首页",
          // 路由名字
          url: "home",
          // 图标
          icon: "home-o"
        },
        {
          title: "订单页",
          url: "order",
          icon: "search"
        },
        {
          title: "我的",
          url: "mine",
          icon: "friends-o"
        }
      ]
    }
  },
  methods: {
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    }
  }
} */
</script>

