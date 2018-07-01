<template>
  <div class="icons">
    <swiper>
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
    data () {
      return {
        lists:[
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '必游榜单'
          },
          {
            id: '0003',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
            desc: '夏日玩水'
          },
          {
            id: '0004',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          },
          {
            id: '0005',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            desc: '动植物园'
          },
          {
            id: '0006',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
            desc: '故宫'
          },
          {
            id: '0007',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
            desc: '主题乐园'
          },
          {
            id: '0008',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
            desc: 'Q+精选'
          },
          {
            id: '0009',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
            desc: '演出'
          }
        ]
      }
    },
    computed: {
      pages () {
        const pages = [];
        this.lists.forEach( (item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages;
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
	      top: 1.35rem
	      bottom: 0
	      height: .44rem
	      line-height: .44rem
	      text-align: center
	      overflow: hidden
	      white-space: nowrap
	      text-overflow: ellipsis
</style>