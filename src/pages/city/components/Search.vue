<template>
	<div>
		<div class="search">
			<input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="inputValue"/>
		</div>
		<div class="search-content" ref="search" v-show="inputValue">
			<ul>
				<li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
				<li class="search-item border-bottom" v-show="isShow">没有找到匹配的数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	import { mapMutations } from 'vuex'
	export default {
		props: ['cities'],
		data () {
			return {
				inputValue: '',
				list: [],
				timer: null
			}
		},
		computed: {
			isShow () {
				return !this.list.length
			}
		},
		methods: {
			handleCityClick (city) {
				console.log(city)
				//this.$store.commit('changeCity', city)
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		},
		watch: {
			inputValue () {
				if(this.timer) {
					clearTimeout(this.timer)
				}
				if(!this.inputValue){
					this.list = []
					return
				}
				this.timer = setTimeout ( () => {
					const result = []
					for(var key in this.cities){
						this.cities[key].forEach( (city) => {
							if(city.spell.indexOf(this.inputValue) > -1 || city.name.indexOf(this.inputValue) > -1){
								result.push(city)
							}
						})
					}
					this.list = result
				}, 100) 
			}
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.search)
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.search-input
			box-sizing: border-box
			width: 100%
			height: .62rem
			line-height: .62rem
			padding: 0 .1rem
			text-align: center
			border-radius: .06rem
			color: #666
	.search-content
		overflow: hidden
		position: absolute
		left: 0
		right: 0
		top: 1.58rem
		bottom: 0
		z-index: 10
		background: #eee
		.search-item
			line-height: .62rem
			padding-left: .2rem
			background: #fff
			color: #666
</style>