<template>
	<view class="sellers-desc">
		<fold-box :title="$t('sellers.merchant_video')">
			<view slot="title-right-content">
<!-- 				<view class="title-right-content">
					<image src="../../static/images/sellers/shipin.png"></image>
					<view style="color:#EF4235;">商家视频</view>
				</view> -->
			</view>
			
			<view slot="desc">
				<view class="content-main">
					<video v-if="!is_flag" id="myVideo" class="videoBox" :src="merchantVideo" controls></video>
				</view>
			</view>
		</fold-box>
	</view>
</template>

<script>
import FoldBox from '../fold-box/fold-box.vue'
export default {
	components: {
		FoldBox
	},
	props: {
		// 详情
		merchantDsec: {
			type: String,
			default: ''
		},
		merchantVideo: {
			type: String,
			default: ''
		}},
	data() {
		return {
		}
	},

}
</script>

<style lang="less" scoped>
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
	.videoBox {
		width: 100%;
	}
}
</style>
