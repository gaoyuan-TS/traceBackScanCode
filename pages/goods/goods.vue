<template>
	<view class="content">
		<!-- 使用无标题 -->
		<box-item>
			<view slot="body">
				<!-- 轮播图 -->
				<view class="swiper-main">
					<video v-if="!is_flag" id="myVideo" class="videoBox" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
					 @error="videoErrorCallback" controls></video>

					<view class="uni-padding-wrap" v-if="is_flag">
						<view class="page-section ">
							<view class="page-section-spacing">
								<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
									<swiper-item>
										<view class="swiper-pic">
											<image src="../../static/picture/3.png" mode=""></image>
										</view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-pic">
											<image src="../../static/picture/4.png" mode=""></image>
										</view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-pic">
											<image src="../../static/picture/5.png" mode=""></image>
										</view>
									</swiper-item>
								</swiper>
							</view>
						</view>
					</view>

					<view class="btnBox">
						<view class="left" :class="{'active': !active}" @click="changeTypeVideo">视频</view>
						<view class="right" :class="{'active': active}" @click="changeTypePic">图片</view>
					</view>
				</view>
				<!-- 轮播图 -->
				<view class="product-content">
					<view class="text-title">十月芬芳口腔护理套装套装四件套组合/盒 洁齿护龈抑菌</view>
				</view>

				<!-- 商品信息 -->
				<view class="goods-info">
					<fold-box title="" :limitHeight="220">
						<view slot="desc">
							<view class="content-main">
								<view class="Chain">商品条形码：<text class="Chain-title">2019/09/09 13:12</text></view>
								<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
								<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
								<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
								<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
								<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
								<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
							</view>
						</view>
					</fold-box>
				</view>

			</view>
		</box-item>
		
		<view style="margin-top: 20upx;">
			<box-item title="商品详情">
				<view slot="body">
				<view class="goods-image">
					<view class="goods-item">
						<image src="../../static/picture/5.png" mode="widthFix"></image>
					</view>
				</view>
				</view>
			</box-item>
		</view>
		<aside-right></aside-right>
	</view>
</template>

<script>
	import FoldBox from '../../components/fold-box/fold-box.vue'
	export default {
		components: {
			FoldBox
		},
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				is_flag: false, //显示隐藏图片跟视频
				active: false
			}
		},
		methods: {
			changeTypeVideo() {
				this.active = false
				this.is_flag = false
			},
			changeTypePic() {
				this.active = true
				this.is_flag = true
			},
		}
	}
</script>

<style lang="less" scoped>
	.content {
		padding-bottom: 30upx;

		.product-content {
			background: #EF4235;
			border-radius: 50upx;
			margin: 32upx 32upx 0 32upx;
			padding: 10upx;
			display: flex;
			justify-content: center;

			.text-title {
				width: 90%;
				font-size: 28upx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				color: #ffffff;
				line-height: 40upx;
			}
		}

		.product-zs {
			text-align: center;
			padding: 19upx 32upx;
			position: relative;

			.title-head {
				font-size: 32upx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				text-align: left;
				color: #EF4235;
			}

			.title-text {
				font-size: 28upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: center;
				color: #333333;
				line-height: 60upx;
			}
		}


		.zhengpin {
			width: 170upx;
			height: 170upx;
			position: absolute;
			top: 0upx;
			right: 20upx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.swiper-main {
			position: relative;
			width: 100%;
			height: 820upx;

			.videoBox {
				width: 100%;
				height: 750upx;
			}

			.uni-padding-wrap {
				height: 750upx;
				height: 750upx;

				.page-section {
					height: 750upx;
					height: 750upx;

					.page-section-spacing {
						height: 750upx;
						height: 750upx;

						.swiper {
							height: 750upx;
							height: 750upx;

							.swiper-pic {
								width: 750upx;
								height: 750upx;

								image {
									width: 100%;
									height: 100%;
								}
							}
						}
					}
				}
			}

			.btnBox {
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translateX(-50%);
				display: flex;
				background: #E6E6E6;
				border-radius: 35upx;
				z-index: 2;

				view {
					width: 89upx;
					text-align: center;
					color: #fff;
					border-radius: 35upx;
					color: #8B8B8B;
					padding: 15upx 0;
				}

				.active {
					background: #EF4235;
					color: #fff;
				}
			}
		}

		.goods-info {
			// margin: 20upx 40upx;
		}
			
			
		.Chain {
			width: 100%;
			margin-top: 32upx;
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 600;
			display: flex;
			align-items: center;
			margin-left: 20upx;

			.Chain-title {

				font-weight: 400;
			}

			.Chain-name {

				font-weight: 400;
			}
		}

		.goods-image {
			width: 100%;
			.goods-item {
				width: 100%;
				image {
					width: 100%;
				}
			}
		}
	}
</style>
