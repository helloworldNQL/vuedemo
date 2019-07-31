<template>
  <div>
    <!-- 宫格 -->
    <van-grid :column-num="5">
      <van-grid-item
        v-for="(k,index) in kingkongListComputed"
        :key="index"
        :icon="imgCom[index]"
        :text="k.name"
        @click="navTo(index)"
      />
    </van-grid>
    <!-- 分割线 -->
    <van-divider>推荐商家</van-divider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //   宫格
      kingkongList: []
    };
  },
  methods:{
      navTo(id) {
      this.$router.push({
        name: "detail",
        params: { id }
      });
    }
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
  },
};
</script>

