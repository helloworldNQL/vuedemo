<template>
    <div style="margin-bottom: 50px">
        <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="getShopList"
        >
        <van-card
            v-for="(item,index) in shopList"
            :key="index"
            :title="item.shopName"       
            :desc="item.address"  
            :thumb="item.picUrl"      
        >
        <van-rate
        v-model="value"
        allow-half
        void-icon="star"
        void-color="#eee"
        readonly 
        />
        <div slot="tag">
            <van-tag plain type="danger" v-for="(im,index) in shopList"
            :key="index" :src="im.poiTypeIcon"></van-tag>
            <!-- <van-tag plain :src="item.poiTypeIcon" type="danger"></van-tag> -->
        </div>
        </van-card>
        </van-list>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [],
            shopList :[],
            loading: false,
            finished: false,
            value: 3.5
        };
    },
    methods: {
        async getShopList(){
            let poilist = await this.$axios.post(
                "https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/shoplist"
                );
                this.shopList = [...this.shopList,...poilist.data.data.shopList];
                // console.log(poilist);
             // 加载状态结束
                this.loading = false;
                // 数据全部加载完成
                if (this.shopList.length >= 40) {
                    this.finished = true;
                }
        },
/*         onLoad() {
            // 异步更新数据
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                // 加载状态结束
                this.loading = false;
                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 500);
        } */
    }
}
</script>

