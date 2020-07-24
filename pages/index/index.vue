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
				<view class="product-zs">
					<view>
						<text class="title-head">恭喜，该商品为正品</text></view>
					<view>
						<text class="title-text">追溯码：【988776676766767676655550987】</text></view>
					<view>
						<text class="title-text">
							<text style="color: red;">警告！</text> 本次为第456次查询 </text>
					</view>
					<view>
						<text class="title-text">同批次产品总数：987766件 </text>
					</view>
					<view class="zhengpin">
						<image src="../../static/picture/zhengpin.png"></image>
					</view>
					<view style="display: flex; margin-top: 20upx;">
						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/picture/chaxun.png"></image>
							查看所有的查询记录
						</view>
					</view>
				</view>
			</view>
		</box-item>
		<!-- 区块信息 -->
		<box-item title="区块信息" style="margin-top: 18upx;">
			<view slot="body">
				<view class="blockchain">
					<view class="Chain">所在链：<text class="Chain-title">CCTC主链</text></view>
					<view class="Chain">所在区块：<text class="Chain-title">12125</text></view>
					<view class="Chain">HashCode：<text class="Chain-title">124hhu8989f89fuf9fff9f99f9ffhffhf
							hff9fjfj</text></view>
				</view>
			</view>
		</box-item>
		<!-- 真伪信息 -->
		<box-item title="真伪信息" style="margin-top: 18upx;">
			<view slot="body">
				<view class="check">
					<view class="Chain">
						<view class="Chain-value">
							首次真伪查询：
						</view>
						<view class="Chain-title">已被查询，可追溯商品，请放心使用</view>
					</view>
					<view class="Chain">
						<view class="Chain-value">
							查询客户端：
						</view>
						<view class="Chain-title">微信</view>
					</view>
					<view class="Chain">
						<view class="Chain-value">
							系统环境：
						</view>
						<view class="Chain-title">Iphone</view>
					</view>
					<view class="Chain">
						<view class="Chain-value">
							首次查询时间：
						</view>
						<view class="Chain-title">2020/09/09 13:12:12</view>
					</view>
					<view class="Chain">
						<view class="Chain-value">
							首次查询地址：
						</view>
						<view class="Chain-title">广东省广州市天河区天源路132号</view>
					</view>
				</view>
			</view>
		</box-item>
		<!-- 流通追溯 -->
		<box-item title="流通追溯" style="margin-top: 20upx;">
			<view slot="body" style="padding: 30upx;">
				<scroll-view scroll-x="true" class="circulate">
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/yuan.png" mode="widthFix"></image>
							<text class="box-title">某某某商户</text>
						</view>
						<view class="divtest"></view>
					</view>
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/yuan.png" mode="widthFix"></image>
							<text class="box-title">某某某农场</text>
						</view>
						<view class="divtest"></view>
					</view>
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/yuan.png" mode="widthFix"></image>
							<text class="box-title">某某某供应商</text>
						</view>
						<view class="divtest"></view>
					</view>
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/zhuisu.png" mode="widthFix"></image>
							<text class="box-text">追溯信息科技股份有限公司</text>
						</view>
						<view class="divtest"></view>
					</view>
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/yuan.png" mode="widthFix"></image>
							<text class="box-title">某某某供应商</text>
						</view>
						<view class="divtest"></view>
					</view>
				</scroll-view>
				<view class="circulate-info">
					<view class="Chain">
						<view class="Chain-value">
							流通时间：
						</view>
						<view class="Chain-title">2019/09/09 13:12</view>
					</view>
					<view class="Chain">
						<view class="Chain-value">
							经营商户：
						</view>
						<view class="Chain-title">追溯信息科技有限公司</view>
					</view>
					<view class="Chain">
						<view class="Chain-value">
							详细地址：
						</view>
						<view class="Chain-title">广州市天河区天源路401号</view>
					</view>
					<view class="Chain">
						<view class="Chain-value">
							负责人：
						</view>
						<view class="Chain-title">罗生</view>
					</view>
					<view class="Chain">
						<view class="Chain-value">
							联系电话：
						</view>
						<view class="Chain-title">134*****345</view>
					</view>
				</view>
			</view>
		</box-item>
		<!-- 生产追溯 -->
		<box-item title="生产追溯" style="margin-top: 20upx;">
			<view slot="title-right" style="color: #EF4235;">生产环节透明直播 8台设备运行中</view>
			<view slot="body" class="manufacture">
				<view class="production">
					<view class="batch" style="background-color: #fffaf4;">
						<view class="title">生产批次号</view>
						<view class="title-value" style="color: #FFA122;">20200909</view>
						<view class="title-ps">批批透明
							每批公开</view>
					</view>
					<view class="batch" style="background-color: #f3fcf8;">
						<view class="title">生产批次号</view>
						<view class="title-value" style="color: #0CC27F;">20200909</view>
						<view class="title-ps" style="color:  #f3fcf8;;">空</view>
					</view>
					<view class="batch" style="background-color: #f5f7ff;">
						<view class="title">生产批次号</view>
						<view class="title-value" style="color: #536BFF;">20200909</view>
						<view class="title-ps" style="color: #f5f7ff;">空</view>
					</view>
				</view>
				<scroll-view scroll-x="true" class="circulate">
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/gong.png" mode="widthFix"></image>
							<text class="box-title">某某某商户</text>
						</view>
						<view class="divtest"></view>
					</view>
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/gong.png" mode="widthFix"></image>
							<text class="box-title">某某某农场</text>
						</view>
						<view class="divtest"></view>
					</view>
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/gong.png" mode="widthFix"></image>
							<text class="box-title">某某某供应商</text>
						</view>
						<view class="divtest"></view>
					</view>
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/yuangong.png" mode="widthFix"></image>
							<text class="box-text">追溯信息科技股份有限公司</text>
						</view>
						<view class="divtest"></view>
					</view>
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/yuangong.png" mode="widthFix"></image>
							<text class="box-text">追溯信息科技股份有限公司</text>
						</view>
						<view class="divtest"></view>
					</view>
					<view class="circulate-item">
						<view class="circulate-box">
							<image src="../../static/picture/gong.png" mode="widthFix"></image>
							<text class="box-title">某某某供应商</text>
						</view>
						<view class="divtest"></view>
					</view>
				</scroll-view>
				<view class="circulate-info">
					<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
					<view class="Chain">负责人：<view class="Chain-name">员工1</view>
						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/picture/jiangkang.png"></image>
							查看健康证
						</view>
					</view>
					<view class="Chain">环节名称：<text class="Chain-title">广州市天河区天源路401号</text></view>
					<view class="Chain">环节描述：<view class="Chain-name">xxx枸杞</view>
						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/picture/raw.png"></image>
							查看原材料信息
						</view>
					</view>
				</view>
				<view class="bottom-picture">
					<view class="bottom-iamge">
						<!-- <image src="../../static/picture/4.png"></image> -->
					</view>
					<view class="bottom-iamge">
						<!-- <image src="../../static/picture/4.png"></image> -->
					</view>
					<view class="bottom-iamge">
						<!-- <image src="../../static/picture/4.png"></image> -->
					</view>
					<view class="bottom-iamge">
						<!-- <image src="../../static/picture/4.png"></image> -->
					</view>
					<view class="bottom-iamge">
						<!-- <image src="../../static/picture/4.png"></image> -->
					</view>

				</view>
			</view>
		</box-item>
		<aside-right></aside-right>
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
		padding-bottom: 30upx;
		.product-content {
			background: #EF4235;
			border-radius: 50upx;
			margin: 32upx;
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

		.blockchain {
			padding: 30upx;
		}

		.check {
			padding: 30upx
		}

		.circulate {
			white-space: nowrap;

			/deep/.uni-scroll-view-content {
				display: flex;
				align-items: flex-start;

				.circulate-item {
					font-szie: 18px;
					margin-left: 10upx;
					display: flex;

					.circulate-box {
						display: flex;
						flex-direction: column;
						justify-content: center;
						width: 84upx;

						image {
							width: 84upx;
							height: 84upx;
						}

						.box-title {
							font-size: 20upx;
							font-weight: 400;
							color: #333333;
							text-align: center;
							white-space: pre-wrap;
						}

						.box-text {
							font-size: 20upx;
							font-weight: 500;
							color: #EF4235;
							text-align: center;
							white-space: pre-wrap;
						}
					}
				}

				.circulate-item:last-child {
					.divtest {
						display: none;
					}
				}
			}

		}

		.manufacture {
			padding: 30upx;

			.production {
				display: flex;
				justify-content: space-between;
				margin-bottom: 40upx;

				.batch {
					box-sizing: border-box;
					width: 220upx;
					height: 140upx;
					padding: 10upx 5upx;
					border-radius: 12upx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}

				.title {
					margin-left: 10upx;
				}

				.title-value {
					font-size: 28upx;
					font-weight: 500;
					text-align: center;
				}

				.title-ps {
					font-size: 24upx;
					font-family: PingFangSC, PingFangSC-Regular;
					color: #808080;
					text-align: center;
				}
			}
		}

		.Chain {
			width: 100%;
			margin-top: 32upx;
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 500;
			display: flex;
			align-items: center;
			margin-left: 20upx;

			.Chain-value {}

			.Chain-title {

				font-weight: 400;
			}

			.Chain-name {

				font-weight: 400;
			}
		}


		.divtest {
			margin-top: 40upx;
			height: 4upx;
			width: 76upx;
			background: #d6d6d6;
			position: relative;
			box-sizing: border-box;
		}

		.divtest:after {
			content: "";
			width: 10upx;
			height: 10upx;
			right: -10upx;
			border: solid #d6d6d6;
			border-width: 0px 2px 2px 0px;
			transform: translate(-50%, -39%) rotate(-45deg);
			position: absolute;
		}

		.pic {
			position: fixed;
			bottom: 294upx;
			right: 32upx;
			width: 68upx;
		}

		.bottom-picture {
			margin-top: 30upx;
			display: flex;
			// justify-content: space-between;
			flex-wrap: wrap;

			.bottom-iamge {
				margin: 10upx;
				width: 210upx;
				height: 210upx;
				background-color: pink;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}

		.icon {
			width: 1em;
			height: 1em;
			vertical-align: -0.15em;
			fill: currentColor;
			overflow: hidden;
		}
	}
</style>
