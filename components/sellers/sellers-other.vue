<template>
	<view class="sellers-other">
		<fold-box title="其他图片" :limitHeight="500" dropText="点击查看更多" putText="收起更多">
			
			<view slot="desc">
				<view class="content-main">
					<image v-for="(item,index) in companyList" :key="index" :src="item" @tap="handlePreview(item)"></image>
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
			companyList: [
				'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3362035623,1578942447&fm=26&gp=0.jpg',
				'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=111697858,2987790394&fm=26&gp=0.jpg',
				'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1537095904,496864358&fm=26&gp=0.jpg',
				'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1207080748,3079616033&fm=26&gp=0.jpg',
				'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1828075921,2799096089&fm=26&gp=0.jpg',
				'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2028195123,2228243402&fm=26&gp=0.jpg'
			]
		}
	},
	
	methods: {
		// 点击预览
		handlePreview(url) {
			uni.previewImage({
				current:url,
				urls: this.companyList
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
