<template>
  <div class="weekend">
    <div class="weekend-title">周末去哪儿</div>
    <ul>
    	<li class="item border-bottom" v-for="weekend in list" :key="weekend.id">
        <div class="item-img-wrapper">
  			 <img class="item-img" :src="weekend.imgUrl"/>
        </div>
    		<div class="item-info">
    			<p class="item-title">{{weekend.title}}</p>
    			<p class="item-desc">{{weekend.desc}}</p>
    		</div>
    	</li>
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
  .weekend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 37.09%
    .item-img
      width: 100%
  .item-info
  	flex: 1
  	padding: .1rem
  	.item-title
      line-height: .54rem
      font-size: .32rem
    .item-desc
      line-height: .4rem
      color: #ccc
</style>