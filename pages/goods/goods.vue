<template>
	<view class="content">
		<!-- 使用无标题 -->
		<box-item>
			<view slot="body">
				<!-- 轮播图 -->
				<view class="swiper-main">
					<video v-if="!is_flag" id="myVideo" class="videoBox" :src="merchantInfo.goodsVideo" controls></video>
					<view class="uni-padding-wrap" v-if="is_flag">
						<view class="page-section ">
							<view class="page-section-spacing">
								<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
									<swiper-item v-for="(Gimg,imge) in merchantInfo.goodsImages" :key="imge">
										<view class="swiper-pic">
											<image :src="Gimg" mode=""></image>
										</view>
									</swiper-item>
								</swiper>
							</view>
						</view>
					</view>

					<view class="btnBox">
						<view class="left" v-if="merchantInfo.goodsVideo" :class="{'active': active}" @click="changeTypePic">{{$t('goods.video')}}</view>
						<view class="right" :class="{'active': !active}" @click="changeTypePic">{{$t('goods.image')}}</view>
					</view>
				</view>
				<!-- 轮播图 -->
				<view class="product-content">
					<view class="text-title">{{merchantInfo.goodsName}}</view>
				</view>

				<!-- 商品信息 -->
				<view class="goods-info">
					<fold-box title="">
						<view slot="desc">
							<view class="content-main">
								<view class="Chain" v-for="(item,index) in goodInfo" :key="index">
									<view class="Chain-name">
										{{item.name}}:
									</view>
									<view class="Chain-title">{{item.value}}</view>
								</view>
							</view>
						</view>
					</fold-box>
				</view>

			</view>
		</box-item>

		<view style="margin-top: 20upx;">
			<box-item :title="$t('goods.product_information')">
				<view slot="body">
					<view class="goods-image">
						<view class="goods-item" v-html="merchantInfo.goodsInfo">
							<!-- <image src="../../static/picture/5.png" mode="widthFix"></image> -->
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
				is_flag: true, //显示隐藏图片跟视频
				active: false,
				goodInfo: [],
				merchantInfo: {},
				trade: false,
				Sid: 791396201, //追溯码
			}
		},
		onLoad(option) {
			this.Sid = uni.getStorageSync('Sid')
			this.getgoodInfo()
			this.getmerchantInfo()
		},
		methods: {
			changeTypePic() {
				this.active = !this.active
				this.is_flag = !this.is_flag
			},
			// 商家接口
			getmerchantInfo() {
				this.$common.get('/back-end/ewm/getMerchantInfo?code=' + this.Sid).then((data) => {
					if (data.data.code === 200) {
						this.merchantInfo = data.data.data || {}
					} else {
						this.merchantInfo = {}
					}
				})
			},
			// 商品接口
			getgoodInfo() {
				this.$common.get('/back-end/ewm/getGoodsInfo?code=' + this.Sid).then((data) => {
					if (data.data.code === 200) {
						// console.log(data)
						this.goodInfo = data.data.data
					} else {
						this.goodInfo = {}
					}
					// console.log(this.goodInfo)
				})
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
			align-items: flex-start;
			margin-left: 20upx;

			.Chain-title {
				flex: 1;
				overflow-wrap: break-word;
				font-weight: 400;
			}

			.Chain-name {
				width: 200upx;
				text-align: right;
			}
		}

		.goods-image {
			width: 100%;

			.goods-item {
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				width: 100%;
				justify-content: center;
				align-items: center;
				padding: 10px 15px;

				/deep/ p {
					color: #ae1e24;
					text-align: center;

					img {
						max-width: 100%;
					}
				}
			}
		}
	}
</style>
