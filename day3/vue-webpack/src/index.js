//以模块的方式引入vue
import Vue from 'vue/dist/vue.common.js';
// var Vue = require('vue');
require('./styles/index.css')
console.log(Vue);
var vm = new Vue({
    //view
    el: '#box',
    //modol
    data: {
        tabId:0,
        arr: [{
            title: '体育',
            content: '体育新闻'
        },
        {
            title: '娱乐',
            content: '娱乐新闻'
        },
        {
            title: '科技',
            content: '科技新闻'
        }
        ],//palegreen
        activeColor:'',
    },
    //模板
    template: `
            <div>
                <button @click="tabId=index" v-for="(item,index) in arr"  v-text="item.title"></button>
                <ul>
                    <li v-for="(lis,index) in arr" v-text="lis.content"  v-show="tabId===index"></li>
                </ul>
            </div>
    `,
    methods: {
        // cut() {
        //     console.log(this.activeColor);
        // }
    }
})
console.log(vm);