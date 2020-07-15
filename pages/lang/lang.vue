<template>
	<view class="lang">
		<view class="lang-item">
			<view class="left">
				<image src="https://zs-1256645015.cos.ap-guangzhou.myqcloud.com/trace/2020/7/14/51d1b559-fd5d-4a05-be6a-16b3e9712ea5.jpg" mode="widthFix"></image>
				<text>简体中文</text>
			</view>
			<radio value="zh-CN" :checked="$i18n.locale === 'zh-CN'" @tap="handleCheck('zh-CN')" />
		</view>
		
		<view class="lang-item">
			<view class="left">
				<image src="https://zs-1256645015.cos.ap-guangzhou.myqcloud.com/trace/2020/7/14/5d406993-984b-4e28-b120-ae71c3b10477.jpg" mode="widthFix"></image>
				<text>English</text>
			</view>
			
			<radio value="en-US" :checked="$i18n.locale === 'en-US'" @tap="handleCheck('en-US')" />
		</view>
	</view>
</template>

<script>
export default {
	methods: {
		handleCheck(locale) {
			this.$store.commit('setLocale',locale)
			this.$i18n.locale = locale
			let tabBarKey = ['trace','goods','sellers','more']
			uni.setTabBarItem({
			  index: 0,
			  text: 'trace'
			})
			for(let index in tabBarKey) {
				console.log(this.$i18n.messages[this.$i18n.locale].tabBar[tabBarKey[Number(index)]],"this.$i18n.locale")
				uni.setTabBarItem({
				  index: Number(index),
				  text: this.$i18n.messages[this.$i18n.locale].tabBar[tabBarKey[Number(index)]]
				})
			} 
		}
	}
}
</script>

<style lang="less" scoped>
.lang {
	height: 100vh;
	background-color: #fff;
	padding: 32upx 50upx;
	.lang-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 40upx;
		font-size: 28upx;
		color: #333;
		.left {
			display: flex;
			align-items: center;
			>image {
				width: 55upx;
				border-radius: 100%;
				margin-right: 20upx;
			}
		}
	}
}
</style>
