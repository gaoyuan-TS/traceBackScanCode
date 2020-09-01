<template>
	<view class="content">
		<uni-popup ref="popup" :type="type" :animation="false" :maskClick="false">
			<view class="popup-content">{{message}}</view>
		</uni-popup>
		<select-lang></select-lang>
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
						<view class="left" v-if="merchantInfo.goodsVideo" :class="{'active': active}" @click="changeTypeVideo">{{$t('trace.video')}}</view>
						<view class="right" :class="{'active': !active}" @click="changeTypeVideo">{{$t('trace.image')}}</view>
					</view>
				</view>
				<!-- 轮播图 -->
				<view class="product-content">
					<view class="text-title">{{merchantInfo.goodsName}}</view>
				</view>
				<view class="product-zs">
					<view>
						<text class="title-head">{{$t('trace.quality')}}</text></view>
					<view>
						<text class="title-text">{{$t('trace.trace_code')}}：【{{ZsInfo.traceCode}}】</text></view>
					<view>
						<text class="title-text">
							<text style="color: red;">{{$t('trace.total_warning')}}！</text> {{$t('trace.trace_frequency1')}}{{ZsInfo.scanCount}}{{$t('trace.trace_frequency2')}}
						</text>
					</view>
					<view>
						<text class="title-text">{{$t('trace.total_products')}}：{{ZsInfo.TotalCount}}件 </text>
					</view>
					<view class="zhengpin">
						<image src="../../static/picture/zhengpin.png"></image>
					</view>
					<view style="display: flex; margin-top: 20upx;">
						<view class="btn-item" style="margin-left: auto;" @click="goRord()">
							<image src="../../static/picture/chaxun.png"></image>
							{{$t('trace.aiew_all_query_records')}}
						</view>
					</view>
				</view>
			</view>
		</box-item>
		<!-- 区块信息 -->
		<box-item :title="$t('trace.block_information')" style="margin-top: 18upx;">
			<view slot="body">
				<view class="blockchain">
					<view class="Chain">{{$t('trace.chain')}}：<text class="Chain-title">CCTC主链</text></view>
					<view class="Chain">{{$t('trace.block')}}：<text class="Chain-title">{{ZsInfo.block || '暂无数据'}}</text></view>
					<view class="Chain">HashCode：<text class="Chain-title" style="width: 440upx;overflow-wrap: break-word;">{{ZsInfo.hashcode || '暂无数据'}}</text></view>
				</view>
			</view>
		</box-item>
		<!-- 真伪信息 -->
		<box-item :title="$t('trace.authenticity_information')" style="margin-top: 18upx;">
			<view slot="body">
				<view class="check">
					<view class="Chain">
						<!-- 	<view class="Chain-value"> -->
						{{$t('trace.first_query')}}：{{$t('trace.first_info')}}
						<!-- </view> -->
						<!-- <view class="Chain-title"></view> -->
					</view>
					<view class="Chain">
						<!-- <view class="Chain-value"> -->
						{{$t('trace.query_client')}}：
						<!-- </view> -->
						{{iswin || '暂无数据'}}
					</view>
					<view class="Chain">
						<!-- <view class="Chain-value"> -->
						{{$t('trace.system_environment')}}：
						<!-- </view> -->
						{{clientInfo.osName || '暂无数据'}}
					</view>
					<view class="Chain">
						<!-- <view class="Chain-value"> -->
						{{$t('trace.First_time')}}：
						<!-- </view> -->
						{{JSON.stringify(firstScan) == "{}"? this.dateT:firstScan.scanTime}}
					</view>
					<view class="Chain">
						<!-- <view class="Chain-value"> -->
						{{$t('trace.First_address')}}：
						<!-- </view> -->
						{{JSON.stringify(firstScan) == "{}"? this.scanAddress:firstScan.scanAddress}}
					</view>
				</view>
			</view>
		</box-item>
		<!-- 流通追溯 -->
		<box-item :title="$t('trace.circulate_trace')" style="margin-top: 20upx;">
			<view slot="body" style="padding: 30upx;">
				<scroll-view scroll-x="true" class="circulate">
					<view class="circulate-item" v-for="(trace,point) in tracePointNodes" :key="point" @click="getTrace(trace,point)">
						<view class="circulate-box">
							<image src="../../static/picture/zhuisu.png" mode="widthFix" v-show="point === currentIndex"></image>
							<image src="../../static/picture/yuan.png" mode="widthFix" v-show="point != currentIndex"></image>
							<text class="box-title" :class="{ativetext:point === currentIndex}">{{trace.tracePointName}}</text>
						</view>
						<view class="divtest"></view>
					</view>

				</scroll-view>
				<view class="circulate-info">
					<view class="Chain">
						<!-- <view class="Chain-value"> -->
						{{$t('trace.circulate_time')}}：
						<!-- </view> -->
						<view class="Chain-title">{{traceInfo.tracePointTime}}</view>
					</view>
					<view class="Chain">
						<!-- <view class="Chain-value"> -->
						{{$t('trace.operate_merchant')}}：
						<!-- </view> -->
						<view class="Chain-title">{{traceInfo.tracePointName}}</view>
					</view>
					<view class="Chain">
						<!-- <view class="Chain-value"> -->
						{{$t('trace.address')}}：
						<!-- </view> -->
						<view class="Chain-title">{{traceInfo.detailAddress}}</view>
					</view>
					<view class="Chain">
						<!-- <view class="Chain-value"> -->
						{{$t('trace.principal')}}：
						<!-- </view> -->
						<view class="Chain-title">{{traceInfo.personInCharge}}</view>
					</view>
					<view class="Chain">
						<!-- <view class="Chain-value"> -->
						{{$t('trace.contact_number')}}：
						<!-- </view> -->
						<view class="Chain-title">{{traceInfo.contactNumber}}</view>
					</view>
				</view>
			</view>
		</box-item>
		<!-- 生产追溯 -->
		<box-item :title="$t('trace.production_trace')" style="margin-top: 20upx;" v-if="tsvList.length > 0">
			<!-- <view slot="title-right" style="color: #EF4235;">生产环节透明直播 8台设备运行中</view> -->
			<view slot="body" class="manufacture">
				<view class="production">
					<view class="batch" style="background-color: #fffaf4;">
						<view class="title">{{$t('trace.production_batch_no')}}</view>
						<view class="title-value" style="font-size: 22upx;color: #FFA122;overflow-wrap: break-word;">{{traceScene.batchNo}}</view>
						<view class="title-ps">{{$t('trace.batch_transparent')}}</view>
					</view>
					<view class="batch" style="background-color: #f3fcf8;">
						<view class="title">{{$t('trace.staff_member')}}</view>
						<view class="title-value" style="color: #0CC27F;">{{traceScene.employeCount}}</view>
						<view class="title-ps" style="color:  #f3fcf8;;">空</view>
					</view>
					<view class="batch" style="background-color: #f5f7ff;">
						<view class="title">{{$t('trace.production_processes')}}</view>
						<view class="title-value" style="color: #536BFF;">{{traceScene.sceneCount}}</view>
						<view class="title-ps" style="color: #f5f7ff;">空</view>
					</view>
				</view>
				<scroll-view scroll-x="true" class="circulate">
					<view class="circulate-item" v-for="(item,batch) in traceScene.tsvList" :key="batch" @click="getBatch(item,batch)">
						<view class="circulate-box">
							<image src="../../static/picture/yuangong.png" mode="widthFix" v-show="batch === batchIndex"></image>
							<image src="../../static/picture/gong.png" mode="widthFix" v-show="batch != batchIndex"></image>
							<text class="box-title" :class="{ativetext:batch === batchIndex}">{{item.sceneName}}</text>
						</view>
						<view class="divtest"></view>
					</view>
				</scroll-view>
				<view class="circulate-info">
					<view class="Chain">{{$t('trace.operate_time')}}：{{batchInfo.sceneTimeScope}}</view>
					<view class="Chain">{{$t('trace.production_principal')}}：<view class="Chain-name">{{batchInfo.employeName}}</view>
						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/picture/jiangkang.png"></image>
							{{$t('trace.view_health_certificate')}}
						</view>
					</view>
					<view class="Chain">{{$t('trace.link_name')}}：{{batchInfo.sceneName}}</view>
					<view class="Chain">{{$t('trace.link_description')}}：{{batchInfo.description}}</view>
					<view class="Chain2" v-for="(item,index) in batchInfo.materialList" :key="index">{{$t('trace.raw_materials')}}{{index + 1}}：{{item.materialName}}
						<view class="btn-item" style="margin-left: auto;" @click="goMaterials(item.materialOutId)">
							<image src="../../static/picture/raw.png"></image>
							{{$t('trace.View_raw_material_information')}}
						</view>
					</view>
				</view>
				<view class="bottom-picture">
					<view class="bottom-iamge" v-for="(bImg,Imgs) in batchInfo.sceneImageList" :key="Imgs" @click="lookImg(bImg)">
						<image :src="bImg"></image>
					</view>
				</view>
			</view>
		</box-item>
		<aside-right></aside-right>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import uniPopupMessage from '@/components/uni-popup/uni-popup-message.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	export default {
		components: {
			uniPopup,
			uniPopupMessage,
			uniPopupDialog
		},
		data() {
			return {
				indicatorDots: false,
				autoplay: true,
				interval: 2000,
				duration: 500,
				is_flag: true, //显示隐藏图片跟视频
				active: false,
				// Sid: 18051514, //追溯码
				Sid: 0, //追溯码
				ZsInfo: {}, // 追溯信息
				merchantInfo: {}, //商品信息
				real: '',
				iswin: '',
				dateT: '',
				nowTime: '',
				tsvList: [], //生产追溯
				clientInfo: {},
				netAndAddressInfo: {},
				firstScan: {},
				scanAddress: '', //地址
				tracePointNodes: [], //流通追溯,
				traceInfo: {}, //流通追溯
				traceScene: {}, //生产信息
				batchInfo: {},
				batchIndex: 0,
				currentIndex: 0,
				productionInfo: '', //生产追溯
				message: '',
			}
		},
		onLoad(option) {
			this.Sid = uni.getStorageSync('Sid')
			this.getLocation2()
			this.getmerchantInfo()
		},
		onReady() {
			uni.setNavigationBarTitle({
				title: this.$t('all.traceability_informa')
			});
		},
		methods: {
			goMaterials(item) {
				console.log(item)
				uni.navigateTo({
					url: `../materials/materials?id=${item}`
				})
			},
			changeTypeVideo() {
				this.active = !this.active
				this.is_flag = !this.is_flag
			},
			// 获取地址信息
			getLocation2() {
				var that = this
				uni.getLocation({
					type: 'wgs84',
					success(res) {
						// console.log("你当前经纬度是：")
						// console.log(res)
						let latitude, longitude;
						latitude = res.latitude.toString();
						longitude = res.longitude.toString();
						// latitude = 23.17999135691706;
						// longitude = 113.3486509232483;
						uni.request({
							header: {
								"Content-Type": "application/text"
							},
							url: 'http://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude +
								'&key=7OFBZ-YVLW3-CSF3Q-YXLDZ-CSEDH-PVFEA',
							success: (res) => {
								// console.log("中文位置");
								// console.log(res);
								// console.log(res.data.result.address);
								that.scanAddress = res.data.result.address;
								if (res.statusCode === 200) {
									// console.log("获取中文街道地理位置成功")
									that.handlelocation()
								} else {
									// console.log("获取信息失败，请重试！")
								}
							}
						});
					},
					fail(res) {
						// console.log(RES);
					},
					complete() {
						that.getZsInfo()
					}
				});
			},
			// 追溯信息
			getZsInfo() {
				this.$common.get('/trace-api/trace/getTraceGoodInfo?sid=' + this.Sid).then((data) => {
					// console.log('aaaaa', data)
					if (data.data.code === 200) {
						this.ZsInfo = data.data.data || {}
						this.clientInfo = this.ZsInfo.clientInfo || {}
						this.netAndAddressInfo = this.ZsInfo.netAndAddressInfo || {}
						this.productionInfo = this.ZsInfo.productionInfo || ''
						if (this.ZsInfo.firstScan) {
							this.firstScan = this.ZsInfo.firstScan
						} else {
							this.firstScan = {}
						}
						this.judgeIsWin()
						this.phoneNumber()
						if (Number(this.ZsInfo.scanCount) === 1) {
							this.real = '真品'
						} else {
							this.real = '已被查询，可追溯商品，请放心使用！'
						}
					} else {
						this.$refs.popup.open()
						this.ZsInfo = {}
						this.message = data.data.message
					}
					console.log('this.ZsInfo', this.ZsInfo)
				})
			},
			// 查找生产追溯
			getTraceScene(e,k) {
				this.$common.get('/trace-api/p_scene/traceScene/' + e + '?goodsId=' + k).then((data) => {
					if (data.data.code === 200) {
						this.traceScene = data.data.data
						this.tsvList = this.traceScene.tsvList
						if (this.tsvList.length === 0) {
							return
						} else {
							this.getBatch(this.traceScene.tsvList[0], 0)
						}
					} else {
						this.traceScene = {}
					}
				})
			},
			// 商家接口
			getmerchantInfo() {
				this.$common.get('/back-end/ewm/getMerchantInfo?code=' + this.Sid).then((data) => {
					if (data.data.code === 200) {
						this.merchantInfo = data.data.data || {}
						uni.setStorageSync('merchantId', this.merchantInfo.merchantId);
						uni.setStorageSync('goodsName', this.merchantInfo.goodsName);
						this.getTraceScene(this.productionInfo,this.merchantInfo.goodsId)
					} else {
						this.merchantInfo = {}
					}
				})
			},
			// 判断是查询客户端
			judgeIsWin() {
				let ua = navigator.userAgent.toLowerCase()
				let isWeixin = ua.indexOf('micromessenger') !== -1
				if (isWeixin) {
					this.iswin = '微信'
				} else {
					this.iswin = 'H5'
				}
			},
			// 插入当前地理位置和时间
			handlelocation() {
				// console.log('插入')
				this.nowTime = (new Date()).valueOf()
				this.dateT = this.$common.formatTime(this.nowTime, 1)
				// console.log('插入', this.nowTime)
				// console.log('插入',this.dateT)
				let params = {
					'scanAddress': this.scanAddress,
					'scanTime': this.nowTime,
					'sid': this.Sid
				}
				this.$common.post('/trace-api/trace/insertScanRecord', params).then((data) => {
					// console.log('插入',data)
				})
			},
			// 电话号码中间4位变*
			phoneNumber() {
				this.tracePointNodes = this.ZsInfo.tracePointNodes
				for (var j = 0; j < this.tracePointNodes.length; j++) {
					let tel = this.tracePointNodes[j].contactNumber
					tel = '' + tel
					let tel1 = tel.replace(tel.substring(3, 7), '****')
					this.tracePointNodes[j].contactNumber = tel1
				}
				this.traceInfo = this.tracePointNodes[0]
			},
			// 流通追溯选择
			getTrace(e, index) {
				this.traceInfo = e
				this.currentIndex = index
			},
			getBatch(e, index) {
				this.batchInfo = e
				this.batchIndex = index
			},
			// 跳转记录
			goRord() {
				console.log(111111111111)
				uni.navigateTo({
					url: `../record/record?id=${this.Sid}`
				})
			},
			lookImg(e) {
				uni.previewImage({
					urls: [e],
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

			.videoBox {}

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
							// font-weight: 400;
							color: #333333;
							text-align: center;
							white-space: pre-wrap;
						}

						.ativetext {
							color: #EF4235;
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
			align-items: flex-start;
			overflow-wrap: break-word;
			font-weight: 400;
			margin-left: 20upx;
		}

		.Chain2 {
			width: 100%;
			margin-top: 32upx;
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 500;
			display: flex;
			flex-direction: column;
			// align-items: flex-start;
			overflow-wrap: break-word;
			font-weight: 400;
			margin-left: 20upx;
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
		.popup-content {
			background-color: #fff;
			padding: 15px;
			font-size: 32upx;
		}
	}
</style>
