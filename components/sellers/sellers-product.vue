<template>
	<view class="sellers-product">
		<box-item title="主营产品">
			<view slot="body">
				<view class="body-main">
					<view class="product-wrap">
						<view class="product-item" v-for="(item,index) in productList" :key="index">
							<view class="product-content">
								<image :src="item.image"></image>
								<view class="product-name-wrap">
									<view class="product-name">
										{{item.product}}
									</view>
								</view>
							</view>
						</view>
					</view>
					
					<view style="display: flex;padding-right: 30upx;">
						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/images/sellers/lianjie.png" mode=""></image>
							前往“一带一路”数据库查看
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
			productList: [
				{
					image: 'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1207080748,3079616033&fm=26&gp=0.jpg',
					product: '植萃清香'
				},
				{
					image: 'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1828075921,2799096089&fm=26&gp=0.jpg',
					product: '口腔护理套装四件套组合'
				},
				{
					image: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1537095904,496864358&fm=26&gp=0.jpg',
					product: '植萃清香牙膏清火去异味120/支'
				},
				{
					image: 'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2028195123,2228243402&fm=26&gp=0.jpg',
					product: '德国进口螺旋软毛刷成人护龈牙刷'
				}
			]
		}
	}
}
</script>

<style lang="less" scoped>
.sellers-product {
	margin-bottom: 20upx;
	.body-main {
		padding: 25upx 14upx 45upx 14upx;
		.product-wrap {
			white-space: nowrap;
			margin-bottom: 60upx;
			-webkit-overflow-scrolling: touch;
			overflow-x: scroll;
			.product-item {
				display: inline-block;
				position: relative;
				margin:0 14upx;
				width: 200upx;	
				padding-top: 0;
				.product-content {
					display: flex;
					flex-direction: column;
					>image {
						width: 200upx;
						height: 200upx;
					}
					.product-name {
						white-space : normal;
						overflow: hidden;
						margin-top: 20upx;
						 display: -webkit-box;
						-webkit-line-clamp: 2;  /*设置文本显示行数*/
						-webkit-box-orient: vertical;
						height: 64upx;
					}
				}
			}
		}
	}
}
</style>
