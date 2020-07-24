<template>
	<view class="box-item" :style="{'border-top-left-radius':borderRadius,'border-top-right-radius':borderRadius}">
		<!-- 标题 -->
		<view class="header-wrap" v-if="title">
			<view class="title">{{title}}</view>
			<slot name="title-right"></slot>
		</view>
		
		<!-- 主体 -->
		<slot name="body"></slot>
	</view>
</template>

<script>
export default {
	props: {
		// 标题
		title: {
			type: String,
			default: ''
		}
	},
	computed: {
		borderRadius() {
			return this.title ? uni.upx2px(20) + 'px' : 0
		}
	}
}
</script>

<style lang="less">
.box-item {
	background: #fff;
	width: 100vw;
	border-bottom-left-radius: 20upx;
	border-bottom-right-radius: 20upx;
	.header-wrap {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 30upx 32upx 22upx;
		border-bottom: 1px solid #D8D8D8;
		.title {
			font-size: 30upx;
			font-weight: bold;
			padding-left: 20upx;
			border-left: 4upx solid #EF4235;
			letter-spacing: 1px;
		}	
	}
}	
</style>
