<template>
  <div class="recommend">
    <div class="recommend-title">热门推荐</div>
    <ul>
    	<!--<li class="item border-bottom" v-for="recommend in list" :key="recommend.id">
  			<img class="item-img" :src="recommend.imgUrl"/>
    		<div class="item-info">
    			<p class="item-title">{{recommend.title}}</p>
    			<p class="item-desc">{{recommend.desc}}</p>
    			<button class="item-button">查看详情</button>
    		</div>
    	</li>-->

      <router-link tag="li" class="item border-bottom" v-for="recommend in list" :key="recommend.id" :to="'detail/' + recommend.id">
        <img class="item-img" :src="recommend.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{recommend.title}}</p>
          <p class="item-desc">{{recommend.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
  	props: ['list'],
    data () {
      return {
      }
    }
  }
</script>

<style lang='stylus' scoped>
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    display: flex
    overflow: hidden
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .item-info
    	flex: 1
    	padding: .1rem
    	min-width: 0
    	.item-title
        line-height: .54rem
        font-size: .32rem
      .item-desc
        line-height: .4rem
        color: #ccc
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>