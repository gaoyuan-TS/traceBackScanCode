<template>
	<view class="sellers-other" v-if="merchantElseImage.length > 0">
		<fold-box :title="$t('sellers.other_pictures')" :limitHeight="500" :dropText="$t('all.look_more')" :putText="$t('all.pack_up')">
			
			<view slot="desc">
				<view class="content-main">
					<image v-for="(item,index) in merchantElseImage" :key="index" :src="item" @tap="handlePreview(item)"></image>
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
	props:{
		// 标题
		merchantElseImage: {
			type: Array,
			default: ''
		}
	},
	data() {
		return {
		}
	},
	methods: {
		// 点击预览
		handlePreview(url) {
			uni.previewImage({
				current:url,
				urls: this.merchantElseImage
			})
		}
	}

}
</script>

<style lang="less" scoped>
.sellers-other {
	.content-main {
		display: flex;
		flex-wrap: wrap;
		>image {
			width: 214upx;
			height: 214upx;
			border-radius: 20upx;
			margin-bottom: 20upx;
			&:not(:nth-child(3n)) { // 设置3的倍数的图片不要margin-right
				margin-right: 20upx;
			}
		}
	}
}
</style>
