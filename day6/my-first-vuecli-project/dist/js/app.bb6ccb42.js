(function(t){function a(a){for(var i,n,l=a[0],r=a[1],d=a[2],_=0,p=[];_<l.length;_++)n=l[_],e[n]&&p.push(e[n][0]),e[n]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);o&&o(a);while(p.length)p.shift()();return c.push.apply(c,d||[]),s()}function s(){for(var t,a=0;a<c.length;a++){for(var s=c[a],i=!0,l=1;l<s.length;l++){var r=s[l];0!==e[r]&&(i=!1)}i&&(c.splice(a--,1),t=n(n.s=s[0]))}return t}var i={},e={app:0},c=[];function n(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)n.d(s,i,function(a){return t[a]}.bind(null,i));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var o=r;c.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"10d9":function(t,a,s){},"154b":function(t,a,s){},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("Header"),s("Main")],1)},c=[],n=(s("10d9"),function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)}),l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"index--toutiaoribao",attrs:{id:"indexHeader"}},[s("div",{staticClass:"top_bar"},[s("div",{staticClass:"abs_m"},[s("a",{staticClass:"refresh_title btn",attrs:{href:"#"}}),s("div",{staticClass:"refreshBtn-container"},[s("i",{staticClass:"refresh_btn"})])]),s("div",{staticClass:"abs_l"},[s("a",{staticClass:"msg-box",attrs:{href:"javascript:;"}},[s("div",{staticClass:"circle"})])]),s("div",{staticClass:"abs_r"},[s("a",{staticClass:"btn search",attrs:{href:"https://m.toutiao.com/search/?need_open_window=1"}})])])])}],r=(s("8baf"),s("2877")),d={},o=Object(r["a"])(d,n,l,!1,null,null,null),_=o.exports,p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("div",{staticClass:"top_menu_bar"},[t._m(0),s("div",{staticClass:"top_menu_list"},[s("a",{staticClass:"btn cur"},[t._v("推荐")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"video","data-query":"channel=video"}},[t._v("视频")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"news_hot","data-query":"channel=news_hot"},on:{click:function(a){return t.tab("selectb")}}},[t._v("热点")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"news_society","data-query":"channel=news_society"},on:{click:function(a){return t.tab("selectc")}}},[t._v("社会")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"news_entertainment","data-query":"channel=news_entertainment"}},[t._v("娱乐")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"news_military","data-query":"channel=news_military"}},[t._v("军事")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"news_tech","data-query":"channel=news_tech"}},[t._v("科技")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"news_car","data-query":"channel=news_car"}},[t._v("汽车")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"news_house","data-query":"channel=news_house"}},[t._v("房产")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"new_furnish","data-query":"channel=new_furnish"}},[t._v("家居")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"news_sports","data-query":"channel=news_sports"}},[t._v("体育")]),s("a",{staticClass:"btn",attrs:{href:"javascript:void(0)","data-channel":"news_finance","data-query":"channel=news_finance"}},[t._v("财经")])])]),t._m(1)])},v=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top_menu_more"},[s("div",{staticClass:"list_shadow"}),s("a",{staticClass:"more_btn",attrs:{href:"javascript:void(0)"}},[s("span",{staticClass:"cross"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("content",{staticClass:"feed-list-container",attrs:{id:"pageletListContent"}},[s("div",{staticClass:"list_content",attrs:{"data-pull-fresh":"1"}},[s("section",{staticClass:"has_action",attrs:{"data-hot-time":"1564393903","data-group-id":"6718665232463430157","data-item-id":"6718665232463430157","data-format":"0"}},[s("a",{staticClass:"article_link clearfix",attrs:{href:"javascript: void(0)","data-action-label":"click_headline","data-tag":"general_positive_video"}},[s("div",{staticClass:"item_detail"},[s("h3",{staticClass:"dotdot line3"},[t._v("原创时政微视频丨峥嵘岁月 永不褪色")]),s("div",{staticClass:"item_info"},[s("div",[s("span",{staticClass:"stick_label space"},[t._v("置顶")]),t._v("\n                  0\n                  "),s("span",{staticClass:"src space"},[t._v("央视新闻")]),s("span",{staticClass:"cmt space"},[t._v("\n                    评论\n                    "),t._v("\n                    586\n                    ")]),s("span",{staticClass:"time",attrs:{title:"2019-07-29 17:51"}},[t._v("9分钟前")]),s("span",{staticClass:"dislike-news fr",attrs:{"data-id":"6718665232463430157"}})])])])])]),s("section",{staticClass:"has_action",attrs:{"data-hot-time":"1564393901","data-group-id":"6718864097653293582","data-item-id":"6718864097653293582","data-format":"0"}},[s("a",{staticClass:"article_link clearfix",attrs:{href:"javascript: void(0)","data-action-label":"click_headline","data-tag":"news_politics"}},[s("div",{staticClass:"item_detail"},[s("h3",{staticClass:"dotdot line3"},[t._v("联播+丨两封贺信背后的绿色故事")]),s("div",{staticClass:"item_info"},[s("div",[s("span",{staticClass:"stick_label space"},[t._v("置顶")]),t._v("\n                  0\n                  "),s("span",{staticClass:"src space"},[t._v("央视网新闻")]),s("span",{staticClass:"cmt space"},[t._v("\n                    评论\n                    "),t._v("\n                    373\n                    ")]),s("span",{staticClass:"time",attrs:{title:"2019-07-29 17:51"}},[t._v("9分钟前")]),s("span",{staticClass:"dislike-news fr",attrs:{"data-id":"6718864097653293582"}})])])])])]),s("section",{staticClass:"has_action",attrs:{"data-hot-time":"1564393900","data-group-id":"6718960134409683463","data-item-id":"6718960134409683463","data-format":"0"}},[s("a",{staticClass:"article_link clearfix",attrs:{href:"javascript: void(0)","data-action-label":"click_headline","data-tag":"news_entertainment"}},[s("div",{staticClass:"item_detail"},[s("h3",{staticClass:"dotdot line3"},[t._v("65岁林青霞素颜参观土楼，穿老年装发福明显")]),s("div",{staticClass:"list_image"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/RXacDn95XUkvrc"}})]),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/RXacDniBjMqhph"}})]),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/RXacDoCBjfHbhB"}})])])]),s("div",{staticClass:"item_info"},[s("div",[t._v("\n                  0\n                  "),s("span",{staticClass:"src space"},[t._v("谈资")]),s("span",{staticClass:"cmt space"},[t._v("\n                    评论\n                    "),t._v("\n                    435\n                    ")]),s("span",{staticClass:"time",attrs:{title:"2019-07-29 17:51"}},[t._v("9分钟前")]),s("span",{staticClass:"dislike-news fr",attrs:{"data-id":"6718960134409683463"}})])])])])]),s("section",{staticClass:"has_action",attrs:{"data-hot-time":"1564393898","data-group-id":"6718902139252376071","data-item-id":"6718902139252376071","data-format":"0"}},[s("a",{staticClass:"article_link clearfix",attrs:{href:"javascript: void(0)","data-action-label":"click_headline","data-tag":"selected"}},[s("div",{staticClass:"item_detail"},[s("h3",{staticClass:"dotdot line3"},[t._v("出身贫寒的香港女特首，将两个儿子送入剑桥，她的教育观值得品味")]),s("div",{staticClass:"list_image"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/40eee0eaaa4c46178a3080d8c636fd9f"}})]),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/dfic-imagehandler/c50f8104-36e4-416a-b7cf-400b45959145"}})]),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/3d285134787246e5808fd122ca3e15f4"}})])])]),s("div",{staticClass:"item_info"},[s("div",[t._v("\n                  0\n                  "),s("span",{staticClass:"src space"},[t._v("mom看世界")]),s("span",{staticClass:"cmt space"},[t._v("\n                    评论\n                    "),t._v("\n                    401\n                    ")]),s("span",{staticClass:"time",attrs:{title:"2019-07-29 17:51"}},[t._v("9分钟前")]),s("span",{staticClass:"dislike-news fr",attrs:{"data-id":"6718902139252376071"}})])])])])]),s("section",{staticClass:"has_action",attrs:{"data-hot-time":"1564393897","data-group-id":"6718585486903869963","data-item-id":"6718585486903869963","data-format":"0"}},[s("a",{staticClass:"article_link clearfix",attrs:{href:"javascript: void(0)","data-action-label":"click_headline","data-tag":"news_history"}},[s("div",{staticClass:"item_detail"},[s("h3",{staticClass:"dotdot line3"},[t._v("娶24位妻子，生育子女180人，历史上的李庆远真的活到了256岁？")]),s("div",{staticClass:"list_image"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/211c6f0bb3d54f6db9f7e984bc2aa97a"}})]),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/726469ff53814088ad0db4d4c09a5081"}})]),s("li",{staticClass:"list_img_holder"},[s("img",{attrs:{src:"https://p3.pstatp.com/list/pgc-image/178223ff820945cc96d522eb94b970bf"}})])])]),s("div",{staticClass:"item_info"},[s("div",[t._v("\n                  0\n                  "),s("span",{staticClass:"src space"},[t._v("汉史钩沉")]),s("span",{staticClass:"cmt space"},[t._v("\n                    评论\n                    "),t._v("\n                    45\n                    ")]),s("span",{staticClass:"time",attrs:{title:"2019-07-29 17:51"}},[t._v("9分钟前")]),s("span",{staticClass:"dislike-news fr",attrs:{"data-id":"6718585486903869963"}})])])])])]),s("section",{staticClass:"has_action",attrs:{"data-hot-time":"1564393895","data-group-id":"6718931502895202830","data-item-id":"6718931502895202830","data-format":"0"}},[s("a",{staticClass:"article_link clearfix",attrs:{href:"javascript: void(0)","data-action-label":"click_headline","data-tag":"news_politics_general"}},[s("div",{staticClass:"item_detail"},[s("h3",{staticClass:"dotdot line3"},[t._v("习近平的自行车载过谁？")]),s("div",{staticClass:"list_image"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"list_img_holder"},[s("img")]),s("li",{staticClass:"list_img_holder"},[s("img")]),s("li",{staticClass:"list_img_holder"},[s("img")])])]),s("div",{staticClass:"item_info"},[s("div",[t._v("\n                  0\n                  "),s("span",{staticClass:"src space"},[t._v("人民日报")]),s("span",{staticClass:"cmt space"},[t._v("\n                    评论\n                    "),t._v("\n                    223\n                    ")]),s("span",{staticClass:"time",attrs:{title:"2019-07-29 17:51"}},[t._v("9分钟前")]),s("span",{staticClass:"dislike-news fr",attrs:{"data-id":"6718931502895202830"}})])])])])]),s("section",{staticClass:"has_action",attrs:{"data-hot-time":"1564393894","data-group-id":"6718531322748338696","data-item-id":"6718531322748338696","data-format":"0"}},[s("a",{staticClass:"article_link clearfix",attrs:{href:"javascript: void(0)","data-action-label":"click_headline","data-tag":"news_entertainment"}},[s("div",{staticClass:"item_detail"},[s("h3",{staticClass:"dotdot line3"},[t._v("姚晨马伊琍宋佳海清晒出合照，果真岁月不饶人啊")]),s("div",{staticClass:"list_image"},[s("ul",{staticClass:"clearfix"},[s("li",{staticClass:"list_img_holder"},[s("img")]),s("li",{staticClass:"list_img_holder"},[s("img")]),s("li",{staticClass:"list_img_holder"},[s("img")])])]),s("div",{staticClass:"item_info"},[s("div",[t._v("\n                  0\n                  "),s("span",{staticClass:"src space"},[t._v("谈资")]),s("span",{staticClass:"cmt space"},[t._v("\n                    评论\n                    "),t._v("\n                    7152\n                    ")]),s("span",{staticClass:"time",attrs:{title:"2019-07-29 17:51"}},[t._v("9分钟前")]),s("span",{staticClass:"dislike-news fr",attrs:{"data-id":"6718531322748338696"}})])])])])]),s("section",{staticClass:"middle_mode has_action",attrs:{"data-hot-time":"1564393892","data-group-id":"6715627033516311054","data-item-id":"6715627033516311054","data-format":"0"}},[s("a",{staticClass:"article_link clearfix",attrs:{href:"javascript: void(0)","data-action-label":"click_headline","data-tag":"news_society"}},[s("div",{staticClass:"item_detail desc"},[s("h3",{staticClass:"dotdot line3 image-margin-right"},[t._v("坐火车时，乘务员为啥要“收走”卧铺票？真相来了")]),s("div",{staticClass:"item_info"},[s("div",[t._v("\n                  0\n                  "),s("span",{staticClass:"src space"},[t._v("中国经济网")]),s("span",{staticClass:"cmt space"},[t._v("\n                    评论\n                    "),t._v("\n                    50\n                    ")]),s("span",{staticClass:"dislike-news fr mid-space",attrs:{"data-id":"6715627033516311054"}})])])]),s("div",{staticClass:"list_img_holder"},[s("img")])])])]),s("div",{staticClass:"list_bottom"},[s("section",{staticClass:"loadmoretip"},[s("a",{attrs:{href:"#"}},[t._v("加载中...")])])])])])}],m={data:{selecta:!0}},h=m,f=(s("d969"),Object(r["a"])(h,p,v,!1,null,null,null)),C=f.exports,u={name:"app",components:{Header:_,Main:C}},g=u,b=Object(r["a"])(g,e,c,!1,null,null,null),w=b.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(w)}}).$mount("#app")},"782e":function(t,a,s){},"8baf":function(t,a,s){"use strict";var i=s("782e"),e=s.n(i);e.a},d969:function(t,a,s){"use strict";var i=s("154b"),e=s.n(i);e.a}});
//# sourceMappingURL=app.bb6ccb42.js.map