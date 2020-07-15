
<script>
	import selectChange from 'components/select-lang/select-lang.vue'
	export default {
		components: {
			selectChange
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		
		watch: {
			'$store.state.locale'(newVal) {
				console.log(newVal,"newVal")
				let tabBarKey = ['trace','goods','sellers','more']
				for(let index in tabBarKey) {
					console.log(this.$i18n.messages[this.$i18n.locale].tabBar[tabBarKey[Number(index)]],"this.$i18n.locale")
					uni.setTabBarItem({
					  index: Number(index),
					  text: this.$i18n.messages[this.$i18n.locale].tabBar[tabBarKey[Number(index)]],
					  fail() {
						  console.log('fail')
					  }
					})
				} 
			}
		},
		
		onShow() {
			console.log('onShow')
			let tabBarKey = ['trace','goods','sellers','more']
			for(let index in tabBarKey) {
				uni.setTabBarItem({
				  index: Number(index),
				  text: this.$i18n.messages[this.$i18n.locale].tabBar[tabBarKey[Number(index)]]
				})
			} 
		},

		onHide() {
			console.log('App Hide')
		}
	};
</script>

<style lang="less">
page {
	background: #f5f5f5;
	font-size: 24upx;
	color: #333;
	font-family: PingFangSC;
}
// 隐藏滚动条
::-webkit-scrollbar{
	width: 0;
	height: 0;
	color: transparent;
}
/* 公共样式 */
.btn-item {
	display: flex;
	align-items: center;
	border: 1px solid #536BFF;
	height: 48upx;
	border-radius: 24upx;
	box-sizing: border-box;
	padding: 0 22upx;
	color: #536BFF;
	>image {
		width: 30upx;
		height: 30upx;
		margin-right: 12upx;
		vertical-align: middle;
	}
}
</style>
