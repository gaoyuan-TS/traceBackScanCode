<template>
	<view class="sellers-certificate">
		<fold-box title="企业证书" :limitHeight="300" dropText="点击查看更多">
			
			<view slot="desc">
				<view class="content-main">
					<view class="img-wrap" v-for="(item,index) in certificateImages" :key="index">
						<image :src="item" mode="aspectFit" @tap="handlePreview(item)"></image>
					</view>
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
	data() {
		return {
			certificateImages:[
				'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=215374286,3140450363&fm=26&gp=0.jpg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594535688774&di=5f0aa24f7c4eb4b848d8a4a9a96ab6c0&imgtype=0&src=http%3A%2F%2Fimg3.jc001.cn%2Fimg%2F688%2F1604688%2F1501%2F1554c073d109be0.jpg',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594535688773&di=9d7b13c7eb99cf1f886bd39bbd39ba4d&imgtype=0&src=http%3A%2F%2Fdocs.ebdoor.com%2FImage%2FCompanyCertificate%2F9%2F93042.JPG',
				'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594535688770&di=d258206294fec6aa1046c8650940fba0&imgtype=0&src=http%3A%2F%2Fxian.sduod.com%2FAttachments%2Flicense%2F201804%2Fc17591d93f3399a065e467693fd03331.jpg'
			]
		}
	},
	
	methods: {
		// 点击预览
		handlePreview(url) {
			console.log(url)
			uni.previewImage({
				current:url,
				urls: this.certificateImages
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
