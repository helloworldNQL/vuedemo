<template>
<div>
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
      ],

    }
  },
  async created(){
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




