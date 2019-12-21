import Vue from 'vue'
import Router from 'vue-router'

const UserInfo = () => import('../views/UserInfo');
const Company = () => import('../views/Company');

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/userinfo',
            component: UserInfo
        },
        {
            path: '/company',
            component: Company
        }
    ]
})