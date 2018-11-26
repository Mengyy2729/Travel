<template>
	<div>
		<div class="banner" @click="handleBannerClick">
			<img class="banner-img" :src="bannerImg"/>
			<div class="banner-info">
				<div class="banner-title">{{sightName}}</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe719;</span>
					39
				</div>
			</div>
		</div>
		<fade-ani>
			<detail-gallery v-show="isShow" @close="closeGallery" :imgs="gallaryImgs"></detail-gallery>
		</fade-ani>
	</div>
</template>

<script>
	import Gallery from 'common/gallery/Gallery.vue'
	import FadeAni from 'common/fade/Fade.vue'
	export default {
		props: ['bannerImg', 'sightName', 'gallaryImgs'],
		data () {
			return {
				isShow: false
			}
		},
		components: {
			'detail-gallery': Gallery,
			'fade-ani': FadeAni
		},
		methods: {
			handleBannerClick () {
				this.isShow = true
			},
			closeGallery () {
				this.isShow = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.banner
		overflow: hidden
		position: relative
		z-index: 2
		padding-bottom: 55%
		height: 0
		background: #ddd
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			left: 0
			right: 0
			bottom: 0
			line-height: .6rem
			color: #fff
			background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
			.banner-title
				flex: 1
				font-size: .32rem
				padding: 0 .2rem
			.banner-number
				height: .32rem
				line-height: .32rem
				margin-top: .14rem
				padding: 0 .4rem
				border-radius: .2rem
				background: rgba(0, 0, 0, 0.8)
				font-size: .24rem
				.banner-icon
					font-size: .24rem
</style>