# Vue.extend( options )
- 参数：`{Object} options`
- 用法：使用基础 Vue 构造器，创建一个“子类”。参数是一个包含组件选项的对象。

    `data` 在` Vue.extend()` 中必须是函数

案例
```html
<div id="mount-point"></div>
<script src="./vue.js"></script>
<script>
    /* Vue.extend( options )*/
    //创建构造器
    var Profile = Vue.extend({
        template:`<p>{{firstName}} {{lastName}} aka {{alias}}</p>`,
        data:function(){
            return{
                firstName:'Walter',
                lastName:'White',
                alias:'Heisenberg'
            }
        }
    })
    //创建Profile实例，并挂载到一个元素上
    new Profile().$mount('#mount-point')
</script>

```