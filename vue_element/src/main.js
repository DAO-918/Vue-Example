import Vue from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from 'axios'
import router from './router'

//ElmentUI的组件
import ElementUI from 'element-ui'
//ElementUI的样式
import 'element-ui/lib/theme-chalk/index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueAxios, axios);
Vue.use(ElementUI);

// 基础的url地址
axios.defaults.baseURL = 'http://localhost:8088';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
