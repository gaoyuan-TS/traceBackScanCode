<template>
	<view class="sellers-info">
		<box-item>
			<view slot="body">
				<view class="body-main">
					<view class="top-wrap">
						<image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2947876270,1875330205&fm=26&gp=0.jpg"></image>
						<view class="right-wrap">
							<view class="company">广东十月芬芳生物科技有限公司</view>
							<view class="company-info">
								<view class="desc">主营业务</view>
								<view class="tag-wrap">
									<text class="tag" v-for="(item,index) in tagList" :key="index">
									{{item}}
									</text>
								</view>
							</view>
						</view>
					</view>
					
					<view class="down-wrap">
						<view class="info-item">
							<view class="title">入库时间：</view>
							<view class="desc">2019/09/09 13:12</view>
						</view>
						<view class="info-item">
							<view class="title">企业法人：</view>
							<view class="desc">陈总</view>
						</view>
						<view class="info-item">
							<view class="title">所在地：</view>
							<view class="desc">中国广东省广州市天河区</view>
						</view>
						<view class="info-item">
							<view class="title">详细地址：</view>
							<view class="desc">天源路401号2栋340房</view>
						</view>
					</view>
					
					<view style="display: flex;padding-right: 14upx;">
						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/images/sellers/lianjie.png"></image>
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
			tagList: ['化妆品','生活用品'],
			tagColorIndex: 0
		}
	}
}
</script>

<style lang="less" scoped>
.sellers-info {
	margin-bottom: 20upx;
	.body-main {
		padding: 36upx 32upx 50upx;
	}
	
	.top-wrap {
		display: flex;
		min-height: 200upx;
		>image {
			width: 200upx;
			height: 200upx;
			border-radius: 14upx;
		}
		.right-wrap {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: space-between;
			padding-left: 45upx;
			.company {
				font-weight: bold;
				font-size: 28upx;
			}
			.company-info {
				.desc {
					font-size: 28upx;
				}
				.tag-wrap {
					margin-top: 12upx;
					.tag {
						display: inline-block;
						padding: 8upx 14upx;
						background: #FFFAF4;
						color: #FFA122;
						margin:0 10upx 10upx 0;
					}
				}
			}
		}
	}

	.down-wrap {
		padding: 44upx 32upx 0 66upx;
		font-size: 26upx;
		margin-bottom: 60upx;
		.info-item {
			display: flex;
			margin-bottom: 30upx;
			.title {
				width: 23%;
				font-weight: bold;
			}
		}
	}

}
</style>

