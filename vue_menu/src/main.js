import Vue from 'vue'
import App from './App.vue'
//如下两个是网络的请求组件
import VueAxios from "vue-axios";
import axios from 'axios'

//ElmentUI的组件
import ElementUI from 'element-ui'
//ElementUI的样式
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueAxios, axios);
Vue.use(ElementUI);

//基础的url地址
axios.defaults.baseURL = 'http://localhost:8088';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
