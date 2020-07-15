<template>
	<view class="problem">
		<box-item v-for="item in 3" :key="item" style="margin-bottom: 20upx;">
			<view slot="body">
				<view class="body-main">
					<!-- 问题描述 -->
					<view class="problem-wrap">
						<view class="title" style="font-weight: bold;">问题描述</view>
						<view class="content">
							<view class="desc">
								投诉信（letters of complaint）通常是写给厂家、商店、消费者协会、报界或厂家、商店的上级主管部门，揭发产品质量的低劣、服务态度的糟糕，
								抱怨不应出现的情况或问题等，以求得解决的信件。写投诉信要实事求是地把问题讲清楚，态度要冷静，做到有礼貌，不能恶言伤人。
							</view>
							
							<view class="image-wrap">
								<view class="image-item" v-for="(item,index) in imageList" :key="index" @tap="handlePreview(item)">
									<image :src="item" class="image"></image>
									<!-- 放大镜 -->
									<image class="enlarge" src="https://zs-1256645015.cos.ap-guangzhou.myqcloud.com/trace/2020/7/12/fdfc4cad-4d63-4474-b738-ab888010af8b.png" />
								</view>
							</view>
						</view>
					</view>
					
					
					<!-- 商家回复 -->
					<view class="reply-wrap">
						<view class="title" style="font-weight: bold;">商家回复</view>
						<view class="content">
							<view class="desc">
								投诉信（letters of complaint）通常是写给厂家、商店、消费者协会、报界或厂家、商店的上级主管部门，揭发产品质量的低劣、服务态度的糟糕，
								抱怨不应出现的情况或问题等，以求得解决的信件。写投诉信要实事求是地把问题讲清楚，态度要冷静，做到有礼貌，不能恶言伤人。
							</view>
						</view>
					</view>
				</view>
			</view>
		</box-item>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imageList: [
				'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3362035623,1578942447&fm=26&gp=0.jpg',
				'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=111697858,2987790394&fm=26&gp=0.jpg',
				'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1537095904,496864358&fm=26&gp=0.jpg',
				'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1207080748,3079616033&fm=26&gp=0.jpg',
				'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1828075921,2799096089&fm=26&gp=0.jpg'
			]
		}
	},
	methods: {
		// 点击预览
		handlePreview(url) {
			console.log(url)
			uni.previewImage({
				current:url,
				urls: this.imageList
			})
		}
	}
}
</script>

<style lang="less">
.problem {
	padding-bottom: 50upx;
	.body-main {
		padding: 36upx 32upx 0upx;
		font-size: 26upx;
		.content {
			padding: 27upx 0 40upx 0;
			.desc {
				color: #808080;
				// margin-top: 27upx;
				line-height: 36upx;
			}
			.image-wrap {
				display: flex;
				flex-wrap: wrap;
				margin-top: 42upx;
				.image-item {
					position: relative;
					margin-bottom: 14upx;
					&:not(:nth-child(4n)) {
						margin-right: 14upx;
					}
					.image {
						display: block; /*可以去除图片底部的3px*/ 
						width: 160upx;
						height: 160upx;
						border-radius: 10upx;
					}
					.enlarge {
						position: absolute;
						right: 12upx;
						bottom: 10upx;
						width: 28upx;
						height: 28upx;
					}
				}
			}
		}
		.reply-wrap {
			padding-top: 40upx;
			border-top: 1px solid #D8D8D8;
		}
	}
}
</style>
