<template>
	<view class="sellers-info">
		<box-item>
			<view slot="body">
				<view class="body-main">
					<view class="top-wrap">
						<image :src="merchantInfo.merchantImage.merchantLogoUrl"></image>
						<view class="right-wrap">
							<view class="company">{{merchantInfo.merchantName}}</view>
	<!-- 						<view class="company-info">
								<view class="desc">{{$t('sellers.main_business')}}</view>
								<view class="tag-wrap">
									<text class="tag">
										{{merchantInfo.businessLines}}
									</text>
								</view>
							</view> -->
						</view>
					</view>
					
					<view class="down-wrap">
						<view class="info-item">
							<view class="title">{{$t('sellers.storage_time')}}：</view>
							<view class="desc">{{merchantInfo.enterTime}}</view>
						</view>
						<view class="info-item">
							<view class="title">{{$t('sellers.corporate')}}：</view>
							<view class="desc">{{merchantInfo.businessEntity}}</view>
						</view>
						<view class="info-item">
							<view class="title">{{$t('sellers.location')}}：</view>
							<view class="desc">{{merchantInfo.administrativeAddress}}</view>
						</view>
						<view class="info-item">
							<view class="title">{{$t('sellers.address')}}：</view>
							<view class="desc">{{merchantInfo.siteDetail}}</view>
						</view>
					</view>
					
					<view style="display: flex;padding-right: 14upx;" @click="jumpOne()">
						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/images/sellers/lianjie.png" ></image>
							{{$t('sellers.view_database')}}
						</view>
					</view>
				</view>
			</view>
		</box-item>
	</view>
</template>

<script>
export default {
	props: {
		// 标题
		merchantInfo: {
			type: Object,
			default: ''
		}},
	data() {
		return {
			tagList: ['化妆品','生活用品'],
			tagColorIndex: 0,
			merchantInfo:{}
		}
	},
	
	methods:{
		// 跳转到一带一路数据库
		jumpOne () {
		  // window.location.href = 'http://pdb-beta.cntracechain.com/h5/#/pages/detail/detail?goodsid=' + this.goodid
		  window.location.href = 'https://zhuisu.china.com.cn/h5/#/pages/detail/detail?goodsid=' + this.merchantInfo.goodsId
		},
	}
}
</script>

<style lang="less" scoped>
.sellers-info {
	margin-bottom: 20upx;
	.body-main {
		padding: 36upx 32upx 50upx;
	}
	
	.top-wrap {
		display: flex;
		min-height: 200upx;
		>image {
			width: 200upx;
			height: 200upx;
			border-radius: 14upx;
		}
		.right-wrap {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 45upx;
			.company {
				font-weight: bold;
				font-size: 28upx;
			}
			.company-info {
				.desc {
					font-size: 28upx;
				}
				.tag-wrap {
					margin-top: 12upx;
					.tag {
						display: inline-block;
						padding: 8upx 14upx;
						background: #FFFAF4;
						color: #FFA122;
						margin:0 10upx 10upx 0;
					}
				}
			}
		}
	}

	.down-wrap {
		padding: 44upx 32upx 0 66upx;
		font-size: 26upx;
		margin-bottom: 60upx;
		.info-item {
			display: flex;
			margin-bottom: 30upx;
			.title {
				
				font-weight: bold;
			}
		}
	}

}
</style>

