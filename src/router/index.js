import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'//@指的是src目录

Vue.use(Router)//router的注册

export default new Router({
  routes: [
    {
      path: '/',//指定跟路径：当目前的路径为根路径的时候，就显示hello world组件的内容
      name: 'home',
      component: Home
    }
  ]
})
