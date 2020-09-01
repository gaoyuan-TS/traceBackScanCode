<template>
	<view class="sellers-certificate">
		<fold-box :title="$t('sellers.enterprise_certificate')" :limitHeight="300" :dropText="$t('all.look_more')">
			<view slot="desc">
				<view class="content-main">
					<view class="img-wrap" v-if="merchantImage.businessCertificateUrl">
						<image :src="merchantImage.businessCertificateUrl" mode="aspectFit" @tap="handlePreview(merchantImage.businessCertificateUrl)"></image>
					</view>
					<view class="img-wrap"  v-if="merchantImage.hygienicLicenseUrl">
						<image :src="merchantImage.hygienicLicenseUrl" mode="aspectFit" @tap="handlePreview(merchantImage.hygienicLicenseUrl)"></image>
					</view>
<!-- 					<view class="img-wrap"  v-if="merchantImage.merchantLogoUrl">
						<image :src="merchantImage.merchantLogoUrl" mode="aspectFit" @tap="handlePreview(merchantImage.merchantLogoUrl)"></image>
					</view> -->
					<view class="img-wrap"  v-if="merchantImage.papersUrl">
						<image :src="merchantImage.papersUrl" mode="aspectFit" @tap="handlePreview(merchantImage.papersUrl)"></image>
					</view>
					<view class="img-wrap"  v-if="merchantImage.productCertificationUrl">
						<image :src="merchantImage.productCertificationUrl" mode="aspectFit" @tap="handlePreview(merchantImage.productCertificationUrl)"></image>
					</view>
					<view class="img-wrap"  v-if="merchantImage.productTestReportUrl">
						<image :src="merchantImage.productTestReportUrl" mode="aspectFit" @tap="handlePreview(merchantImage.productTestReportUrl)"></image>
					</view>
					<view class="img-wrap"  v-if="merchantImage.productionLicenceUrl">
						<image :src="merchantImage.productionLicenceUrl" mode="aspectFit" @tap="handlePreview(merchantImage.productionLicenceUrl)"></image>
					</view>
					<view class="img-wrap"  v-if="merchantImage.warenzeichenlizenzUrl">
						<image :src="merchantImage.warenzeichenlizenzUrl" mode="aspectFit" @tap="handlePreview(merchantImage.warenzeichenlizenzUrl)"></image>
					</view>
				</view>
			</view>
		</fold-box>
	</view>
</template>

<script>
import FoldBox from '../fold-box/fold-box.vue'
export default {
	props: {
		// 标题
		merchantImage: {
			type: Object,
			default: ''
		}
		},
	data() {
		return {
		}
	},
	methods:{
		handlePreview(e){
				uni.previewImage({
					urls: [e],
				})
		}
	}
}
</script>

<style lang="less" scoped>
.sellers-certificate {
	margin-bottom: 20upx;
	.content-main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		.img-wrap {
			position: relative;
			width: 320upx;
			height: 320upx;
			background-color: #F6F6F6;
			margin-bottom: 40upx;
			>image {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%,-50%);
				width: 90%;
				height: 90%;
			}
		}
	}
}
</style>
