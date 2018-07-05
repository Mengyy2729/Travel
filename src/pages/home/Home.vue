<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recommendList"></home-recommend>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import Header from './components/Header.vue';
  import Swiper from './components/Swiper.vue';
  import Icons from './components/Icons.vue';
  import Recommend from './components/Recommend.vue';
  import Weekend from './components/Weekend';

  //静态文件放到static目录下才可以被访问

  import axios from 'axios';
  console.log(axios);
  export default {
  	data () {
  	  return {
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []
  	  }
  	},
    mounted () {
      this.getHomeInfo();
    },
  	methods: {
      getHomeInfo () {
        axios.get('/static/mock/home.json').then(this.getHomeInfoSucc);
      },
      getHomeInfoSucc (res) { 
        res = res.data;
        console.log(res);
        if(res.ret && res.data){ //如果后端正确返回了数据，且data存在的话，就可以      
          var data = res.data;
          this.swiperList = data.swiperList;
          this.iconList = data.iconList;
          this.recommendList = data.recommendList;
          this.weekendList = data.weekendList;
        }
      }
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