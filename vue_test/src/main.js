import Vue from 'vue'
import App from './App.vue'
import router from './router'
//这是标准的使用bootstrap样式
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;

new Vue({
  router,//将router添加到核心组件
  render: h => h(App),
}).$mount('#app')
