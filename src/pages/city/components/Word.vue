<template>
	<ul class="list">
		<li class="item" 
				v-for="key of words" 
				:key="key"
				:ref="key"
				@click="handleClick"
				@touchstart="handleTouchStart"
				@touchmove="handleTouchMove"
				@touchend="handleTouchEnd"
				>{{key}}</li>
	</ul>
</template>

<script>
	export default {
		props: ['cities'],
		data () {
			return {
				touchStatus: false,
				startY: 0,
				timer: null//数据截流：减少touchMove的执行频率，提升代码性能
			}
		},
		updated () {
			this.startY = this.$refs['A'][0].offsetTop;
		},
		computed: {
			words () {
				const words = [];
				for(var key in this.cities){
					words.push(key);
				}
				return words;
			}
		},
		methods: {
			handleClick (e) {
				//通过emit方法将数据暴露给父组件
				this.$emit('change', e.target.innerText);//第一个参数表示暴露出去的事件名，第二个表示暴露出去的数据
			},
			handleTouchStart () {
				this.touchStatus = true;
			},
			handleTouchMove (e) {
				if(this.touchStatus){
					//var startY = this.$refs['A'][0].offsetTop;//获取元素距离顶部的高度
					if(this.timer){
						clearTimeout(this.timer);
					}
					this.timer = setTimeout( () => {
						var touchY = e.touches[0].clientY - 79;//e.touches表示手指信息
						var index = Math.floor((touchY - this.startY) / 20);
						if(index >= 0 && index < this.words.length) {
							this.$emit('change', this.words[index]);
						}	
					}, 16)				
				}
			},
			handleTouchEnd () {
				this.touchStatus = false
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		.item
			line-height: .4rem
			text-align: center
			color: $bgColor
</style>