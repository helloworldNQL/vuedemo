<template>
  <div>
    <div class="address"><van-icon name="location" @click="goTo" />广州</div>
    <!-- 搜索框 -->
    <van-search
      v-bind:class="{search:searchFixed}"
      shape="round"
      v-model="value"
      placeholder="搜索饿了么商家、商品名称"
      show-action
      @search="onSearch"
      background="#0af"
    >
      <div slot="action" @click="onSearch"></div>
    </van-search>
  </div>
</template>
<script>
export default {
    data(){
        return {
            value : '',
            searchFixed: false
        }
    },
    methods: {
        onSearch() {

        },
        goTo(){
          this.$router.push({
            name: "bar",
          });
        }
    },
    activated() {
    window.onscroll = () => {
      // 吸顶
      // console.log(window.scrollY);
      if (window.scrollY >= 30) {
        this.searchFixed = true;
      } else {
        this.searchFixed = false;
      }
    };
  },
  deactivated() {
    window.onscroll = null;
  },
  destoryed() {
    // 在home离场的时候销毁全局监听事件
    window.onscroll = null;
  },
}
</script>
<style  scoped>
.address{
  background :#0af;
  color: #fff;
  padding-left: 2.518519rem;
  height: 8.2vw;
  width: 100%;
  font-weight: 700;
  font-size: 1.153333rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.search{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}
</style>