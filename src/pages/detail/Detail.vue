<template>
	<div>
		<detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :lists="list"></detail-list>
		</div>
	</div>
</template>

<script>
	import Banner from './components/Banner.vue'
	import Header from './components/Header.vue'
	import DetailList from './components/List.vue'
	import axios from 'axios'
	export default {
		data () {
			return {
				list: [],
				sightName: '',
				bannerImg: '',
				gallaryImgs: []
			}
		},
		components: {
			'detail-banner': Banner,
			'detail-header': Header,
			'detail-list': DetailList
		},
		methods: {
			getDetailInfo () {
				axios.get('/api/detail.json', {
					params: {
						id: this.$route.params.id
					}
				}).then(this.handleDetailData)
			},
			handleDetailData (res) {
				res = res.data
				if(res.ret && res.data){
					var data = res.data
					console.log(data);
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.gallaryImgs = data.gallaryImgs
					this.list = data.categoryList
				}
			}
		},
		mounted () {
			this.getDetailInfo()
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height: 60rem
</style>