// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'//vue会自动根据某些后缀去查找对应的文件
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'//引入css文件
import 'styles/border.css'//1px边框问题
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({//vue根实例
  el: '#app',//挂载到ID=app的元素上
  router,
  store,
  components: { App },//注册局部组件App
  template: '<App/>'//指定模板为app：将app局部组件渲染在页面中
})

/*
** 路由：根据网址的不同，返回不同的内容给用户
*/
