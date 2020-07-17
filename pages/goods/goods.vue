<template>
	<view class="content" style="position: absolute;">
		<box-item>
			<view slot="body">
				
					<!-- 轮播图 -->
					<view class="swiper-main">
						<video v-if="!is_flag" id="myVideo" style="width: 100%;height: 100%;" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
						 @error="videoErrorCallback" controls></video>
						<view class="uni-padding-wrap" v-if="is_flag">
							<view class="page-section swiper">
								<view class="page-section-spacing">
									<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
										<swiper-item>
											<view class="swiper-bgc">
												<image src="../../static/picture/3.png" mode="widthFix" class="swiper-pic"></image>
											</view>
										</swiper-item>
										<swiper-item>
											<view class="swiper-bgc">
												<image src="../../static/picture/4.png" mode="widthFix" class="swiper-pic"></image>
											</view>
										</swiper-item>
										<swiper-item>
											<view class="swiper-bgc">
												<image src="../../static/picture/5.png" mode="widthFix" class="swiper-pic"></image>
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
						<text class="text-title"> 十月芬芳口腔护理套装套装四件套组合/盒 洁齿护龈抑菌</text>
					</view>
					<view class="product-text">
						<view class="Chain">商品条形码?：<text class="Chain-title">2019/09/09 13:12</text></view>
						<view class="Chain">产品功效：<text class="Chain-title">清洁口腔 除口臭</text></view>
						<view class="Chain">产品成分：<text class="Chain-title">碳酸钙 水 二氧化硅 香精</text></view>
						<view class="Chain">产品执行标准：<text class="Chain-title">GB/T 34556 合格</text></view>
						<view class="Chain">产品执行标准：<text class="Chain-title">GB201978878</text></view>
					</view>
					<view class="Chain-box">
						<view class="btn-item" style="margin:0 auto;">
							<image src="../../static/picture/1.png"></image>
							点击查看更多信息
						</view>
					</view>
				
			</view>
		</box-item>

		<!-- 区块信息 -->
		<box-item title="区块信息" style="margin-top: 18upx;">
			<view slot="body">
				<view class="body-bot">
					<image class="bot-picture" src="../../static/images/trace.png" mode="widthFix"></image>
				</view>
			</view>
		</box-item>
		<image src="../../static/picture/Group 3@2x.png" mode="widthFix" class="pic"></image>
		<image src="../../static/picture/jingdongicon-@2x.png" mode="widthFix" class="pic" style="bottom: 198upx;"></image>
		<image src="../../static/picture/tianmao--2@2x.png" mode="widthFix" class="pic" style="bottom: 107upx;"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				background: ['color1', 'color2'],
				indicatorDots: false,
				autoplay: false,
				interval: 2000,
				duration: 500,
				is_flag: false,
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
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			}
		}
	}
</script>

<style lang="less" scoped>
	.content {
		position: absolute;
	}

	.product-content {
		background: #536bff;
		border-radius: 50upx;
		text-align: center;
		margin: 32upx;
		padding: 10upx;

		.text-title {
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 500;
			text-align: leftr;
			color: #ffffff;
			line-height: 40upx;
		}
	}
	.product-text {
		padding: 0 32upx 0 66upx;
	}

	.swiper-main {
		position: relative;
		height: 500upx;
		width: 100vw;

	.btnBox {
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		background: #E6E6E6;
		border-radius: 26upx;
		z-index: 2;

	view {
		width: 89upx;
		text-align: center;
		color: #fff;
		border-radius: 26upx;
		color: #8B8B8B;
		padding: 15upx 0;
			}

	.active {
		background: #536BFF;
		color: #fff;
			}
		}
	}

	.swiper {
		height: 500upx;
		background-size: cover;
	}
	
	.swiper-bgc {
		width: 750upx;
		.swiper-pic {
			width: 750upx;
			height: 500upx;
		}
	}

	.Chain {
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		padding-top: 32upx;

	.Chain-title {
		font-weight: 400;
		position: absolute;
		left: 35%;
		}
	}
	.Chain-box {
		display: flex;
		padding:54upx 0 53upx;
	}

	.bot-picture {
		width: 100%;
		height: 1258upx;
	}

	.pic {
		position: fixed;
		bottom: 294upx;
		right: 32upx;
		width: 68upx;
	}
</style>
