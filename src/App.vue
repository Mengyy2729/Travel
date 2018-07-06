<template>
  <!--组件的模板-->
  <div id="app">
  	<keep-alive>
    	<router-view />
    </keep-alive>
  </div>
</template>

<script>
//组件的逻辑
/*
** router-view显示的是当前路由地址所对应的内容
keep-alive:优化页面性能--在不使用keep-alive的情况下，每切换一次路由，ajax都会被重新请求一次，增加了http请求，每次切换路由时，需要重新渲染一次页面，这个时候mounted方法就会被调用


keep-alive中的内容，在第一次渲染页面的时候，会将当前页面缓存下来，再次读取页面的时候，只需要从缓存中读取页面信息即可


当城市发生变化的时候，还需要重新调用一次ajax请求	
*/
export default {
  name: 'App'
}
</script>

<style>
</style>
