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
  <!-- 宫格 -->
  <van-grid :column-num="5">
    <van-grid-item
      v-for="(k,index) in kingkongListComputed"
      :key="index"
      :icon="imgCom[index]"
      :text="k.name"
    />
  </van-grid>
      <!-- 分割线 -->
    <van-divider>推荐商家</van-divider>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="menu|handleMenu" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
      <van-dropdown-item v-model="value4" :options="option4" />
    </van-dropdown-menu>
</div>
</template>
<script>
export default {
  data(){
    return {
      value : '',
      //   宫格
      kingkongList: [],
      //   下拉菜单
      value1: 0,
      menu: [],
      value2: 'i',
      value3: 'a',
      value4:1,
      option2: [
        { text: '距离最近', value: 'i' },
      ],
      option3: [
        { text: '品质联盟', value: 'a' },
      ],
      option4: [
        { text: '全部商品', value: 1 },
        { text: '新款商品', value: 2 },
        { text: '活动商品', value: 3 }
      ]
    }
  },
   methods: {
    onSearch() {

    },
     

  },
  computed: {
    kingkongListComputed() {
      // 切割成八个宫格
      return this.kingkongList.slice(0, 10);
    },
    imgCom(){
      let newimgs=[];
      for(var i=0;i<this.kingkongList.length;i++){
        // console.log(this.kingkongList[i].image_hash.slice(0,1));
        var j="https://fuss10.elemecdn.com/"+this.kingkongList[i].image_hash.slice(0,1)+'/'+this.kingkongList[i].image_hash.slice(1,3)+'/'+this.kingkongList[i].image_hash.slice(3)+".jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/";
        newimgs.push(j);
      }
      return newimgs;
      console.log(newimgs)
    },
  },
  async created(){
    //   获取宫格数据
    let kingkongList = await this.$axios(
      "https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/list"
    );
    this.kingkongList = kingkongList.data[0].entries;
    // console.log(kingkongList.data[0].entries);
    // console.log(kingkongList.data[0].entries);
    // 获取下拉菜单
    let menu = await this.$axios(
      "https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/top"
    );
    this.menu = menu.data.outside.inside_sort_filter;
    // console.log(menu.data);
    // console.log(menu.data.outside.inside_sort_filter);
  },
  //   过滤器
  filters: {
    handleMenu(menu) {
      let newMenu = [];
      menu.forEach((element, index) => {
        //   往对象里面新增一个text属性值
        element.text = element.name;
        element.value = index;
        // 构造一个新的数组
        newMenu.push(element);
      });
      return newMenu;
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



