<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-show="!isShowFixed">
			<div class="iconfont detail-back">&#xe624;</div>
		</router-link>
		<div class="header-fixed" v-show="isShowFixed" :style="opacityStyle">
			<router-link to="/">
				<div class="iconfont detail-fixed-back">&#xe624;</div>
			</router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				isShowFixed: false,
				opacityStyle: {
					opacity: 1
				}
			}
		},
		methods: {
			handleScroll () {
				const top = document.documentElement.scrollTop
				if(top > 60){
					let opacity = top / 140
					opacity = opacity > 1 ? 1 : opacity
					this.isShowFixed = true
					this.opacityStyle.opacity = opacity
				}else{										
					this.isShowFixed = false
				}
			}
		},
		//mounted () {
		activated () {
			window.addEventListener('scroll', this.handleScroll)
		},
		deactivated () {
			window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style lang="stylus" scoped>
	@import "~styles/varibles.styl"
	.header-abs
		position: absolute
		z-index: 3
		left: .2rem
		top: .2rem
		width: .8rem
		height: .8rem
		border-radius: .4rem
		background: rgba(0, 0, 0, 0.8)
		line-height: .8rem
		text-align: center
		.detail-back
			color: #fff
			font-size: .4rem
	.header-fixed
		position: fixed
		z-index: 10
		left: 0
		top: 0
		right: 0
		height: .86rem
		line-height: .86rem
		overflow: hidden
		text-align: center
		color: #fff
		background: $bgColor
		font-size: .32rem
		.detail-fixed-back
			position: absolute
			left: 0
			top: 0
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff    
</style>