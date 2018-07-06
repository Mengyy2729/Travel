<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content"></div>
	</div>
</template>

<script>
	import Banner from './components/Banner.vue'
	import Header from './components/Header.vue'
	export default {
		data () {
			return {}
		},
		components: {
			'detail-banner': Banner,
			'detail-header': Header
		}
	}
</script>

<style lang="stylus" scoped>
	.content
		height: 60rem
</style>