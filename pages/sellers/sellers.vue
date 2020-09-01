<template>
	<view class="sellers">
		<select-lang></select-lang>
		<!-- 商家信息 -->
		<sellers-info :merchantInfo="merchantInfo"></sellers-info>

		<!-- 主营业务 -->
		<view class="sellers-desc">
			<fold-box :title="$t('sellers.main_business')">
				<view slot="title-right-content">
				</view>
				<view slot="desc">
					<view class="content-main">
						{{merchantInfo.businessLines}}
					</view>
				</view>
			</fold-box>
		</view>
		<!-- 商家描述 -->
		<sellers-desc :merchantDsec="merchantInfo.presentation"></sellers-desc>

		<!-- 商家视频 -->
		<sellers-video :merchantVideo="merchantInfo.shortVideoUrl" v-if="merchantInfo.shortVideoUrl"></sellers-video>
		
		<!-- 主营产品 -->
		<!-- 		<sellers-product></sellers-product>
		 -->
		<!-- 企业证书 -->
		<sellers-certificate :merchantImage="merchantInfo.merchantImage"></sellers-certificate>

		<!-- 其他图片 -->
		<sellers-other :merchantElseImage="merchantInfo.merchantElseImage"></sellers-other>

		<!-- 右边侧边栏 -->
		<aside-right></aside-right>
	</view>
</template>

<script>
	import SellersInfo from '../../components/sellers/sellers-info.vue'
	import SellersDesc from '../../components/sellers/sellers-desc.vue'
	import SellersProduct from '../../components/sellers/sellers-product.vue'
	import sellersCertificate from '../../components/sellers/sellers-certificate.vue'
	import sellersOther from '../../components/sellers/sellers-other.vue'
	import sellersVideo from '../../components/sellers/sellers-video.vue'
	export default {
		components: {
			SellersInfo,
			SellersDesc,
			SellersProduct,
			sellersCertificate,
			sellersOther,
			sellersVideo
		},
		onLoad(option) {
			this.Sid = uni.getStorageSync('Sid')
			this.getmerchantInfo()
		},
		data() {
			return {
				Sid: 791396201,
				merchantInfo: {}
			}
		},
		methods: {
			// 商家接口
			getmerchantInfo() {
				this.$common.get('/back-end/ewm/getMerchantInfo?code=' + this.Sid).then((data) => {
					if (data.data.code === 200) {
						this.merchantInfo = data.data.data || {}
						console.log(this.merchantInfo)
					} else {
						this.merchantInfo = {}
					}
				})
			},
		}
	}
</script>

<style lang="less">
	.sellers {
		padding-bottom: 40upx;

		.sellers-desc {
			margin-bottom: 20upx;

			.title-right-content {
				display: flex;
				align-items: center;

				>image {
					width: 30upx;
					height: 30upx;
					margin-right: 10upx;
				}
			}
		}
	}
</style>
