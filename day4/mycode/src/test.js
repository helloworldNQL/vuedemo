const Vue = require('vue/dist/vue');
//import Vue from 'vue';
//require('./style/index.css');
const template = require('./template/test.html');

let vm = new Vue({
    el: '#demo',
    data:{
        val:''
    },
    methods: {
        specifiName(e) {
        // var that = this;
        vm.val = e.target.value;
        },
        
    },
    //上面data有的值才可以监听
    watch: {
        // 监听num的变化
        val() {
            // 每次num改变，该函数就会触发
            computedHtml()
            console.log(vm.val)
        }
    },
    computed:{
         computedHtml(){
        //     var val =this.val;
        //     console.log(val);
        }
    },
    template
})
// console.log(this.val)