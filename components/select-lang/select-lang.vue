<template>
	<view class="select-lang">
		<view class="select-btn" @tap="isSelect=true">
			<image src="https://zs-1256645015.cos.ap-guangzhou.myqcloud.com/trace/2020/7/14/51d1b559-fd5d-4a05-be6a-16b3e9712ea5.jpg"></image>
			<text>language</text>
		</view>
		<!-- <view class="select-btn" @tap="isSelect=true">
			<image src="https://zs-1256645015.cos.ap-guangzhou.myqcloud.com/trace/2020/7/14/51d1b559-fd5d-4a05-be6a-16b3e9712ea5.jpg" mode="widthFix"></image>
			<image src="../../static/images/business.png" mode="widthFix"></image>
			<text>切换语言</text>
		</view> -->
	<!-- 	<button type="primary" @tap="handove('zh-CN')">{{$t('simplified')}}</button>
		<button type="primary" @tap="handove('en-US')">{{$t('english')}}</button> -->
		
		
		<!-- 选择弹窗 -->
		 <view class="select-popup" v-if="isSelect" :class="{showFade: isSelect}" @touchmove.stop.prevent>
		 	<view class="pop-main">
		 		<view class="title">{{$t('all.current_language')}}</view>
		 		<view class="lang">
		 			<view class="lang-item">
		 				<image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=625669185,4000536547&fm=26&gp=0.jpg" mode="widthFix"></image>
		 				<text>简体中文</text>
		 
		 				<radio style="margin-left: auto;" value="zh-CN" :checked="locale === 'zh-CN'" @tap="handleCheck('zh-CN')" />
		 			</view>
		 			
		 			<view class="lang-item">
		 				<image src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1683801059,488041342&fm=26&gp=0.jpg" mode="widthFix"></image>
		 				<text>English</text>
		 			
		 				<radio style="margin-left: auto;" value="zh-CN" :checked="locale === 'en-US'" @tap="handleCheck('en-US')" />
		 			</view>
		 		</view>
		 		
		 		<view class="confirm-btn">
		 			<view class="btn" @tap="confirm">{{$t('all.confirm')}}</view>
		 		</view>
		 	</view>
		 </view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isSelect: false,
			locale: 'zh-CN'
		}
	},

	methods: {
		handleCheck(locale) {
			this.locale = locale
		},
		
		// 点击确定
		confirm() {
			this.$store.commit('setLocale',this.locale)
			this.$i18n.locale = this.locale
			this.isSelect = false
		}
	}
}
</script>

<style lang="less" scoped>
.select-lang {
	
	.select-btn {
		position: fixed;
		z-index: 100;
		right: 30upx;
		top: 90upx;
		display: flex;
		align-items: center;
		z-index: 10;
		>image {
			width: 40upx;
			height: 40upx;
			display: block;
			margin-right: 10upx;
		}
	}

	.select-popup {
		z-index: 999;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.4);
		// opacity: 0;
		transition: display .4s;
		
		.pop-main {
			width: 540upx;
			height: 460upx;
			background-color: #fff;
			border-radius: 20upx;
			
			.title {
				font-size: 30upx;
				text-align: center;
				font-weight: bold;
				padding: 22upx;
				border-bottom: 1px solid #eee;
			}
			.lang {
				padding: 32upx;
				>image {
					width: 68upx;
					height: 68upx;
					display: block;
				}
				.lang-item {
					display: flex;
					align-items: center;
					font-size: 27upx;
					color: #333;
					>image {
						width: 65upx;
						border-radius: 50%;
						margin-right: 20upx;
					}
					margin-bottom: 40upx;
				}
			}
			
			.confirm-btn {
				display: flex;
				justify-content: center;
				margin-top: 20upx;
				.btn {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 80%;
					height: 80upx;
					border-radius: 40upx;
					background: #2f7bff;
					color: #fff;
					font-size: 30upx;
					font-weight: bold;
				}
			}
		}
	}
	
	@keyframes go_in{
		0% {opacity: 0; }
		100%{opacity: 1; }
	}
	.showFade {
		animation: go_in .5s;
	}
}
</style>
