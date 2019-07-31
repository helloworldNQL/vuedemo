<template>
  <div>
    <div class="address">广州</div>
    <!-- 搜索框 -->
    <van-search
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
        }
    },
    methods: {
        onSearch() {

        }
    }
}
</script>
<style>
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
</style>