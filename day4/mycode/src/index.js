const Vue = require('vue/dist/vue');
//import Vue from 'vue';
require('./style/index.css');
//const template = require('./template/index.html');
Vue.component('my-header', {
    // 从标签的属性值上面获取父组件给我的值
    props: ['stycss', 'title', 'tip'],
    template: `
    <div id="box">
        <p class="address" :style="{'text-align': stycss}" v-html="title"></p>
        <input class="search" type="text" v-bind:placeholder="tip" placeholder="搜索饿了么商家、商品名称">
    </div>
    `
})
new Vue({
    el: '#demo',
    data: {
        title: '未能获取地址',
        stycss:'left',
        tip:'搜索饿了么商家、商品名称'
    },
    template:`<div>
    <my-header :title="title" :placeholder="tip" @click="test()"></my-header>
    <my-header stycss="center" title="选择收货地址" placeholder="xxx"></my-header>
    </div>
    `,
})