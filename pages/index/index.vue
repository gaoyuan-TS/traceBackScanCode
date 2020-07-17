<template>
	<view class="content" >
		<!-- 使用无标题 -->
		<box-item>
			<view slot="body">

				<!-- <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
							<swiper-item>
								<view class="swiper-item uni-bg-green"></view>
							</swiper-item>
							<swiper-item>
								<view class="swiper-item uni-bg-blue"></view>
							</swiper-item>
						</swiper>
						<view class="swiper-box">
							<view class="swiper-item-uni-bg-green">视频</view>
							<view>图片</<view>
							</view>>
							<view class="dots" v-if="background">
								<view>
							<video id="myVideo" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"
							@error="videoErrorCallback" :danmu-list="danmuList" enable-danmu danmu-btn controls></video>
						</view>
							</view>
						</view> -->



				<!-- 轮播图 -->
				<view class="swiper-main">
					<video v-if="!is_flag" id="myVideo" style="width: 100%;height: 100%;" src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126-lite.m4v"
					 @error="videoErrorCallback" controls></video>
					<view class="uni-padding-wrap" v-if="is_flag">
						<view class="page-section swiper">
							<view class="page-section-spacing">
								<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
									<swiper-item>
										<view class="swiper-bgc"><image src="../../static/picture/3.png" mode="widthFix" class="swiper-pic"></image></view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-bgc"><image src="../../static/picture/4.png" mode="widthFix" class="swiper-pic"></image></view>
									</swiper-item>
									<swiper-item>
										<view class="swiper-bgc"><image src="../../static/picture/5.png" mode="widthFix" class="swiper-pic"></image></view>
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
					<text class="text-title">十月芬芳口腔护理套装套装四件套组合/盒 洁齿护龈抑菌</text>
				</view>
				<view class="product-zs">
					<view>
						<text class="title-head">恭喜，该商品为正品</text></view>
					<view>
						<text class="title-text">追溯码：【988776676766767676655550987】</text></view>
					<view>
						<text class="title-text">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-jinggao"></use>
							</svg>
							<text style="color: red;">警告！</text> 本次为第456次查询 </text></view>
					<view>
						<text class="title-text">同批次产品总数：987766件 </text>
						<image src="../../static/picture/zhengpin.png" mode="widthFix" class="zhengpin"></image>
					</view>
				
				<view style="display: flex;">
					<view class="btn-item" style="margin-left: auto;">
						<image src="../../static/images/trace/chaxun.png"></image>
						查看所有的查询记录
					</view>
				</view>
			</view>
			</view>
		</box-item>
		<!-- 区块信息 -->
		<box-item title="区块信息" style="margin-top: 18upx;">
			<view slot="body">
				<view style="padding: 32upx 32upx 45upx 66upx;">
					<view class="Chain">所在链：<text class="Chain-title">CCTC主链</text></view>
					<view class="Chain" style="padding-top: 32upx;">所在区块：<text class="Chain-title">12125</text></view>
					<view class="Chain" style="padding-top: 32upx;padding-bottom: 55upx;">HashCode：<text class="Chain-title">124hhu8989f89fuf9fff9f99f9ffhffhf
							hff9fjfj</text></view>
				</view>
			</view>
		</box-item>
		<!-- 真伪信息 -->
		<box-item title="真伪信息" style="margin-top: 18upx;">
			<view slot="body">
				<view style="padding:37upx 75upx 57upx 66upx">
					<view class="Chain">首次真伪查询：<text class="Chain-title">已被查询，可追溯商品，请放心使用</text></view>
					<view class="Chain" style="padding-top: 32upx;">查询客户端：<text class="Chain-title">微信</text></view>
					<view class="Chain" style="padding-top: 32upx;">系统环境：<text class="Chain-title">Iphone</text></view>
					<view class="Chain" style="padding-top: 32upx;">首次查询时间：<text class="Chain-title">2020/09/09 13:12:12</text></view>
					<view class="Chain" style="padding-top: 32upx;padding-bottom: 55upx;">首次查询地址：<text class="Chain-title">广东省广州市天河区天源路132号</text></view>
				</view>
			</view>
		</box-item>
		<!-- 流通追溯 -->
		<box-item title="流通追溯" style="margin-top: 20upx;">
			<view slot="body">
				<view class="box">
					<view style="width:84upx; text-align:center; font-szie:18px;">
						<image src="../../static/picture/huoliutongzhi copy 2@2x.png" mode="widthFix" style="width: 84upx;height: 84upx;"></image>
						<text class="box-title">某某某商户</text>
					</view>
					<view class="divtest"></view>
					<view style="width:84upx; text-align:center; font-szie:18px;">
						<image src="../../static/picture/huoliutongzhi copy 2@2x.png" mode="widthFix" style="width: 84upx;height: 84upx;"></image>
						<text class="box-title">某某某农场</text>
					</view>
					<view class="divtest"></view>
					<view style="width:84upx; text-align:center; font-szie:18px;">
						<image src="../../static/picture/huoliutongzhi copy 2@2x.png" mode="widthFix" style="width: 84upx;height: 84upx;"></image>
						<text class="box-title">某某某供应商</text>
					</view>
					<view class="divtest"></view>
					<view style="width:84upx; text-align:center; font-szie:18px;">
						<image src="../../static/picture/huoliutongzhi copy 3@2x.png" mode="widthFix" style="width: 84upx;height: 84upx;"></image>
						<text class="box-text">追溯信息科技股份有限公司</text>
					</view>
					<view class="divtest"></view>
				</view>
				<view style="padding: 54upx 202upx 0 66upx;">
					<view class="Chain">流通时间：<text class="Chain-title">2019/09/09 13:12</text></view>
					<view class="Chain" style="padding-top: 32upx;">经营商户：<text class="Chain-title">追溯信息科技有限公司</text></view>
					<view class="Chain" style="padding-top: 32upx;">详细地址：<text class="Chain-title">广州市天河区天源路401号</text></view>
					<view class="Chain" style="padding-top: 32upx;">负责人：<text class="Chain-title">罗生</text></view>
					<view class="Chain" style="padding-top: 32upx;padding-bottom: 43upx;">联系电话：<text class="Chain-title">134*****345</text></view>
				</view>
			</view>
		</box-item>
		<!-- 生产追溯 -->
		<box-item title="生产追溯" style="margin-top: 20upx;">
			<view slot="title-right" style="color: #007AFF;">生产环节透明直播 8台设备运行中</view>
			<view slot="body">
				<view style="padding:32upx 0 32upx 32upx;display: flex;">
					<view style="width: 218upx;height: 140upx;background: rgba(255,161,34,0.05);border-radius: 12upx;">
						<view style="padding: 19upx 0 0 17upx;">生产批次号</view>
						<view style="font-size: 28upx;font-family: PingFangSC, PingFangSC-Medium;font-weight: 500;text-align: center;color: #ffa122;padding-top: 9upx;">20200909</view>
						<view style="font-size: 20upx;font-family: PingFangSC, PingFangSC-Regular;font-weight: 400;color: #808080;text-align: center;">批批透明
							每批公开</view>
					</view>
					<view style="width: 218upx;height: 140upx;background: rgba(12,194,127,0.05);border-radius: 12upx;margin-left: 16upx;">
						<view style="padding: 19upx 0 0 17upx;">工作人员</view>
						<view style="color: #0cc27f;padding-top: 9upx;text-align: center;font-size: 20upx;">9</view>
					</view>
					<view style="width: 218upx;height: 140upx;background: #F5F7FF;border-radius: 12upx;margin-left: 16upx;">
						<view style="padding: 19upx 0 0 17upx;">生产工序</view>
						<view style="color: #536bff;padding-top: 9upx;text-align: center;font-size: 20upx;">9</view>
					</view>
				</view>
				<view class="box">
					<view style="width:84upx; text-align:center; font-szie:18px;">
						<img src="../../static/picture/huoliutongzhi copy 2_1@2x.png" mode="widthFix" style="width: 84upx;height: 84upx;">
						<text class="box-title">员工1</text></view>
					<view class="divtest"></view>
					<view style="width:84upx; text-align:center; font-szie:18px;">
						<img src="../../static/picture/huoliutongzhi copy 2_1@2x.png" mode="widthFix" style="width: 84upx;height: 84upx;">
						<text class="box-title">员工2</text></view>
					<view class="divtest"></view>
					<view style="width:84upx; text-align:center; font-szie:18px;">
						<img src="../../static/picture/huoliutongzhi copy 2_1@2x.png" mode="widthFix" style="width: 84upx;height: 84upx;">
						<text class="box-title">员工3</text></view>
					<view class="divtest"></view>
					<view style="width:84upx; text-align:center; font-szie:18px;">
						<img src="../../static/picture/huoliutongzhi copy 3_1@2x.png" mode="widthFix" style="width: 84upx;height: 84upx;">
						<text class="box-text">员工4</text></view>
						<view class="divtest"></view>
				</view>
				<view style="padding: 54upx 32upx 0 66upx;">
					<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
					<view class="Chain" style="padding-top: 32upx;display: flex;">负责人：<text class="Chain-title">员工4</text>

						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/picture/zhengjian@2x.png"></image>
							查看健康证
						</view>

					</view>
					<view class="Chain" style="padding-top: 32upx;">环节名称：
						<text class="Chain-title">配制</text></view>
					<view class="Chain" style="padding-top: 32upx;">环节描述：
						<text class="Chain-title">原料加工，投放至生产机器</text></view>
					<view class="Chain" style="padding-top: 32upx;display: flex;">原材料：
						<text class="Chain-title">xxxxxxx枸杞</text>

						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/picture/icon-test@2x.png"></image>
							查看原材料信息
						</view>

					</view>
				</view>
				<view class="bottom-picture">
					<image src="../../static/picture/4.png" mode="widthFix" style="width: 218upx;"></image>
					<image src="../../static/picture/5.png" mode="widthFix" class="pict"></image>
					<image src="../../static/picture/4.png" mode="widthFix" class="pict"></image>
				</view>
			</view>
		</box-item>
		<image src="../../static/picture/Group 3@2x.png" mode="widthFix" class="pic"></image>
		<image src="../../static/picture/jingdongicon-@2x.png" mode="widthFix" class="pic" style="bottom: 198upx;"></image>
		<image src="../../static/picture/tianmao--2@2x.png" mode="widthFix" class="pic" style="bottom: 107upx;"></image>



		<!-- 使用标题 -->
		<!-- <box-item title="流通追溯" style="padding-top: 10px;">
			<view slot="body">
				<view class="body-main">
					<view>1</view>
					<view>2</view>
					<view>1</view>
					<view>1</view>
					<view>1</view>
					<view>1</view>
					<view style="display: flex;">
						<view class="btn-item" style="padding-left: auto;">
							<image src="../../static/images/trace/chaxun.png" mode=""></image>
							查看所有的查询记录
						</view>
					</view>
				</view>
			</view>
		</box-item> -->
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
				this.is_flag =true
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
		text-align: center;
		color: #ffffff;
		line-height: 40upx;
		}
	}
	.product-zs {
		text-align: center;
		padding: 19upx 32upx;
}
	

	.zhengpin {
		width: 170upx;
		position: absolute;
		top: 715upx;
		right: 80upx;
	}
	.box {
		padding:41upx 0upx 0 40upx;
		display: flex;
	}

	 .swiper {
		height: 500upx;	
	 	background-size: cover;
 }


	.swiper-box {
		width: 163upx;
		height: 52upx;
		background: #e6e6e6;
		border-radius: 26upx;
		display: block;
		margin-left: 320upx;
	}

	.swiper-bgc {
		width: 750upx;
	.swiper-pic {
		width: 750upx;
		height: 500upx;
		}
	}

	// .swiper-item-uni-bg-green:before {
	// 	content: '';
	// 	position: absolute;
	// 	top: 650upx;
	// 	right: 400upx;
	// 	width: 7upx;
	// 	height: 7upx;
	// 	border-top: 3upx solid #d6d6d6;
	// 	border-right: 3upx solid #d6d6d6;
	// 	transform: rotate(45deg);
	// }
	// .swiper-item-uni-bg-blue {
	// 	display: inline-block;
	// 	width: 89upx;
	// 	height: 52upx;
	// 	line-height: 52upx;
	// 	font-size: 20upx;
	// 	text-align: center;
	// 	background: rgba(0, 0, 0, .3);
	// 	border-radius: 25upx;
	// }
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

	.box-title {
		font-size: 20upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: center;
		color: #333333;

	}

	.box-text {
		font-size: 20upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		text-align: center;
		color: #536bff;
	}

	.title-head {
		font-size: 32upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		text-align: left;
		color: #536bff;
	}

	.title-text {
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: center;
		color: #333333;
		line-height: 60upx;
	}

	.Chain {
		width: 100%;
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		display: flex;

	.Chain-title {
		font-weight: 400;
		position: absolute;
		left: 33%;
		}
	}

	.divtest {
		position: relative;
		margin: 44upx 10upx 0 9upx;
		height: 3upx;
		width: 76upx;
		padding-left: 30upx;
		background: #d6d6d6;
		line-height: 40upx;
	}

	.divtest:before {
		content: '';
		position: absolute;
		top: -3upx;
		right: -1upx;
		width: 7upx;
		height: 7upx;
		border-top: 3upx solid #d6d6d6;
		border-right: 3upx solid #d6d6d6;
		transform: rotate(45deg);
	}

	.pic {
		position: fixed;
		bottom: 294upx;
		right: 32upx;
		width: 68upx;
	}

	.bottom-picture {
		padding: 60upx 0 50upx 32upx;

	.pict {
		width: 218upx;
		padding-left: 16upx;
		}
	}

	.icon {
		width: 1em;
		height: 1em;
		vertical-align: -0.15em;
		fill: currentColor;
		overflow: hidden;
	}
</style>
