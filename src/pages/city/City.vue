<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list :lists="list" :word="letter"></city-list>
		<city-word :cities="cities" @change="handleChange"></city-word>
	</div>
</template>

<script>
	import axios from 'axios';
	import Header from './components/Header';
	import Search from './components/Search';
	import List from './components/List';
	import Word from './components/Word';

	export default {
		data () {
			return {
				list: {},
				cities: {},
				letter: ''
			}
		},
		components: {
			'city-header': Header,
			'city-search': Search,
			'city-list': List,
			'city-word': Word
		},
		mounted () {
			this.getCityInfo();
		},
		methods: {
			getCityInfo () {
				axios.get('/static/mock/city.json').then(this.handleCityInfo);
			},
			handleCityInfo (res) {
				res = res.data;
				if(res.ret && res.data){
					var data = res.data;
					this.list = data;
					this.cities = data.cities;
				}
			},
			handleChange (val) {
				this.letter = val;
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>