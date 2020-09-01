<template>
	<view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Sid:0
			}
		},
		onLoad(option) {
			console.log('option',option)
			let Url = window.location
			console.log('Url',Url)
			this.Sid = option.SID
			uni.setStorageSync('Sid', this.Sid);
			this.go()
		},
		methods: {
			go(){
			// console.log(1111111111)
			uni.switchTab({
				url: 'pages/index/index'
			})	
			}
		}
	}
</script>

<style>

</style>
