(function(e){function t(t){for(var a,i,u=t[0],c=t[1],l=t[2],d=0,f=[];d<u.length;d++)i=u[d],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);s&&s(t);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0782":function(e,t,n){"use strict";var a=n("c366"),r=n.n(a);r.a},"0794":function(e,t){},"199c":function(e,t){},"23be":function(e,t,n){"use strict";var a=n("199c"),r=n.n(a);t["default"]=r.a},"3d39":function(e,t,n){"use strict";var a=n("c986"),r=n("b35f"),o=n("2877"),i=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},"3dfd":function(e,t,n){"use strict";var a=n("bbee"),r=n("23be"),o=n("2877"),i=Object(o["a"])(r["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=n("3dfd"),o=n("bc3a"),i=n.n(o),u=(n("537a"),n("ac28")),c=(n("a52c"),n("2ed4")),l=(n("09d3"),n("2d6d")),s=(n("61ae"),n("d314")),d=(n("2b28"),n("9ed2")),f=(n("3df5"),n("2830")),p=(n("0ec5"),n("21ab")),v=(n("5852"),n("d961")),m=function(){a["a"].use(v["a"]),a["a"].use(f["a"]).use(p["a"]),a["a"].use(d["a"]),a["a"].use(l["a"]).use(s["a"]),a["a"].use(u["a"]).use(c["a"])},h=n("8c4f"),b=n("3d39"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("详情页")])},_=[],x={props:["default","sidebar"]},k=x,w=n("2877"),O=Object(w["a"])(k,g,_,!1,null,null,null),y=O.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("Search"),n("Grid"),n("Option"),n("Tabbar")],1)},$=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"address"},[e._v("广州")]),n("van-search",{attrs:{shape:"round",placeholder:"搜索饿了么商家、商品名称","show-action":"",background:"#0af"},on:{search:e.onSearch},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("div",{attrs:{slot:"action"},on:{click:e.onSearch},slot:"action"})])],1)},S=[],L={data:function(){return{value:""}},methods:{onSearch:function(){}}},C=L,M=(n("0782"),Object(w["a"])(C,E,S,!1,null,null,null)),T=M.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-grid",{attrs:{"column-num":5}},e._l(e.kingkongListComputed,function(t,a){return n("van-grid-item",{key:a,attrs:{icon:e.imgCom[a],text:t.name},on:{click:function(t){return e.navTo(a)}}})}),1),n("van-divider",[e._v("推荐商家")])],1)},R=[],G=(n("ac6a"),n("96cf"),n("3b8d")),J={data:function(){return{kingkongList:[]}},methods:{navTo:function(e){this.$router.push({name:"detail",params:{id:e}})}},computed:{kingkongListComputed:function(){return this.kingkongList.slice(0,10)},imgCom:function(){for(var e=[],t=0;t<this.kingkongList.length;t++){var n="https://fuss10.elemecdn.com/"+this.kingkongList[t].image_hash.slice(0,1)+"/"+this.kingkongList[t].image_hash.slice(1,3)+"/"+this.kingkongList[t].image_hash.slice(3)+".jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/";e.push(n)}return e}},created:function(){var e=Object(G["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios("https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/list");case 2:t=e.sent,this.kingkongList=t.data[0].entries;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},q=J,z=Object(w["a"])(q,P,R,!1,null,null,null),A=z.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("van-dropdown-menu",[n("van-dropdown-item",{attrs:{options:e._f("handleMenu")(e.menu)},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),n("van-dropdown-item",{attrs:{options:e.option2},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),n("van-dropdown-item",{attrs:{options:e.option3},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),n("van-dropdown-item",{attrs:{options:e.option4},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}})],1)],1)},D=[],F=(n("7f7f"),{data:function(){return{value1:0,menu:[],value2:"i",value3:"a",value4:1,option2:[{text:"距离最近",value:"i"}],option3:[{text:"品质联盟",value:"a"}],option4:[{text:"全部商品",value:1},{text:"新款商品",value:2},{text:"活动商品",value:3}]}},created:function(){var e=Object(G["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$axios("https://www.easy-mock.com/mock/5d402dbd99acfe0359e018a1/elema/top");case 2:t=e.sent,this.menu=t.data.outside.inside_sort_filter;case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),filters:{handleMenu:function(e){var t=[];return e.forEach(function(e,n){e.text=e.name,e.value=n,t.push(e)}),t}}}),H=F,I=Object(w["a"])(H,B,D,!1,null,null,null),K=I.exports,N={name:"home",components:{Search:T,Grid:A,Option:K,Tabbar:b["default"]}},Q=N,U=Object(w["a"])(Q,j,$,!1,null,null,null),V=U.exports,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("订单")])},X=[],Y={},Z=Object(w["a"])(Y,W,X,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("我的")])},ne=[],ae={},re=Object(w["a"])(ae,te,ne,!1,null,null,null),oe=re.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("发现")])},ue=[],ce={},le=Object(w["a"])(ce,ie,ue,!1,null,null,null),se=le.exports;a["a"].use(h["a"]);var de=new h["a"]({routes:[{name:"tabbar",path:"/tabbar",component:b["default"],children:[{name:"home",path:"home",component:V},{name:"sear",path:"sear",component:se},{name:"order",path:"order",component:ee},{name:"mine",path:"mine",component:oe}]},{name:"detail",path:"/detail/:id",component:y,props:{default:!0,sidebar:!1}},{path:"/",alias:"/index.html",redirect:function(){return"/tabbar/home"}},{path:"/sear",redirect:{name:"sear"}},{path:"/order",redirect:{name:"order"}},{path:"/mine",redirect:{name:"mine"}}]});a["a"].config.productionTip=!1,a["a"].prototype.$axios=i.a,m(),new a["a"]({router:de,render:function(e){return e(r["default"])}}).$mount("#app")},b35f:function(e,t,n){"use strict";var a=n("0794"),r=n.n(a);t["default"]=r.a},bbee:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}})],1),n("router-view")],1)},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})},c366:function(e,t,n){},c986:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view"),n("van-tabbar",{attrs:{route:""}},[n("van-tabbar-item",{attrs:{replace:"",to:"/",icon:"home-o"}},[e._v("\n        首页\n      ")]),n("van-tabbar-item",{attrs:{replace:"",to:"/sear",icon:"search"}},[e._v("\n        发现\n      ")]),n("van-tabbar-item",{attrs:{replace:"",to:"/order",icon:"description"}},[e._v("\n        订单\n      ")]),n("van-tabbar-item",{attrs:{replace:"",to:"/mine",icon:"user-o"}},[e._v("\n        我的\n      ")])],1)],1)},r=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r})}});
//# sourceMappingURL=app.150c6f73.js.map