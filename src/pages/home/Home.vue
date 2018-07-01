<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Swiper from './components/Swiper.vue';
  import Icons from './components/Icons.vue';
  import Recommend from './components/Recommend.vue';
  import Weekend from './components/Weekend';
  export default {
  	data () {
  	  return {

  	  }
  	},
  	methods: {

  	},
  	components: {
  	  'home-header': Header,
      'home-swiper': Swiper,
      'home-icons': Icons,
      'home-recommend': Recommend,
      'home-weekend': Weekend
  	}
  }
</script>