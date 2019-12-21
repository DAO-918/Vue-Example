import Vue from 'vue'
import Router from 'vue-router'
//import App from "../App";
//在实际工作中，组件不能一次性加载，import是直接加载
import Todos from "../Todos"
import Home from "../views/Home";
import About from "../views/About";
import Info from "../views/about/Info";
//按需加载
//const About = ()

Vue.use(Router);

export default new Router({
    linkActiveClass: 'active',   //选中状态下默认添加的样式
    mode:'history', //默认是hash模式
    routes: [
        {
            path: '/todo',
            name:'Todo',
            component: Todos
        },
        {
            path: '/about',
            name:'About',
            component: About,
            children:[
                {
                    path:'/about/info/:name',
                    component:Info,
                    prop:true
                }
            ]
        },
        {
            path: '/home',
            name:'Home',
            component: Home
        },
        // {
        //     path: '/',
        //     redirect: '/todo'   //根路径默认会重定向到/about路径
        // }
    ]
})