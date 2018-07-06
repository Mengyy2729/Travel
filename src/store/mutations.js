export default {//缓存城市信息，刷新页面显示当前城市信息
	changeCity (state, city) {
		state.city = city
		//使用localStorage时要使用try-catch
		try {
			localStorage.city = city
		} catch (e) {}
	}
}