<template>
  <div class="icons">
    <swiper :options="swiperOption" v-if="showIcons">
      <swiper-slide v-for="(page, idx) in pages" :key="idx">
	  	  <div class="icon" v-for="item in page" :key="item.id">
	  	    <div class="icon-img">
	  	  	  <img class="icon-img-content" :src="item.imgUrl"/>
	  	  	  <p class="icon-desc">{{item.desc}}</p>
	  	    </div>
	  	  </div>
  	  </swiper-slide>
  	</swiper>
  </div>
</template>

<script>
  export default {
  	props: ['list'],
    data () {
      return {
      	swiperOption: {
      		autoplay: false
      	}
      }
    },
    computed: {
      pages () {
        const pages = [];
        this.list.forEach( (item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages;
      },
      showIcons () {
      	return this.list.length;
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .icons >>> .swiper-container
    overflow: hidden
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
	.icon
	  position: relative
	  float: left
	  width: 25%
	  height: 0
	  padding-bottom: 25%
	  .icon-img
	    position: absolute
	    left: 0
	    top: 0
	    right: 0
	    bottom: .44rem
	    box-sizing: border-box
	    padding: .1rem
	    .icon-img-content
	      display: block
	      margin: 0 auto
	      height: 100%
	    .icon-desc
	      position: absolute
	      left: 0
	      right: 0
	      top: 1.55rem
	      bottom: 0
	      height: .44rem
	      line-height: .44rem
	      text-align: center
	      overflow: hidden
	      white-space: nowrap
	      text-overflow: ellipsis
</style>