import Vue from 'vue'
// 第三方组件
// 搜索
import {
    Search,
    Grid, 
    GridItem, 
// 分割线
    Divider,
// 下拉菜单
    DropdownMenu,
    DropdownItem,
    // 底部菜单
    Tabbar,
    TabbarItem,
    Field,
    List,
    Card,
    //评分
    Rate,
    //IndexBar 索引栏
    IndexBar, IndexAnchor,
    //图标
    Icon,
    Cell
    //Sticky 粘性布局 吸顶
    // Sticky
} from 'vant';

export default () => {
    Vue.use(Search).use(Icon);
    Vue.use(Grid).use(GridItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Tabbar).use(TabbarItem);
    Vue.use(Field);
    Vue.use(List);
    Vue.use(Card).use(Rate).use(Cell)
    .use(IndexBar).use(IndexAnchor);
    // Vue.use(Sticky);
}