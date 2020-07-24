<template>
	<view class="materials">
		<box-item>
			<view slot="body" class="box">
				<view class="header">
					<view class="left">
						<image src="../../static/picture/2.png" mode=""></image>
					</view>
					<view class="right">
						<view class="goods-name">
							大白菜
						</view>
						<view class="batch">
							入库批次号：
							RK2009190987666
						</view>
					</view>
				</view>
				<view class="circulate-info">
					<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
					<view class="Chain">环节名称：<text class="Chain-title">广州市天河区天源路401号</text></view>
					<view class="Chain">环节描述：<view class="Chain-name">
							<view class="btn-item" style="margin-left: auto;">
								<image src="../../static/picture/raw.png"></image>
								下载检测文件
							</view>
						</view>
					</view>
				</view>
			</view>
		</box-item>

		<box-item title="区块信息" style="margin-top: 20upx;">
			<view slot="body" class="box2">
				<view class="circulate-info">
					<view class="Chain">操作时间：<text class="Chain-title">2019/09/09 13:12</text></view>
					<view class="Chain">环节名称：<text class="Chain-title">广州市天河区天源路401号</text></view>
					<view class="Chain">环节描述：<view class="Chain-name">xxx枸杞</view>
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

			};
		}
	}
</script>

<style lang="less">
	.materials {
		.box {
			padding: 50upx;
			box-sizing: border-box;

			.header {
				display: flex;

				.left {
					width: 200upx;
					height: 200upx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.right {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					margin-left: 40upx;

					.goods-name {
						font-size: 32upx;
					}

					.batch {
						font-size: 30upx;
						color: #EF4235;
					}
				}
			}

			.circulate-info {}

		}

		.box2 {
			padding: 0 50upx 50upx 50upx;
		}

		.Chain {
			width: 100%;
			margin-top: 32upx;
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 600;
			display: flex;
			align-items: center;
			margin-left: 20upx;

			.Chain-value {}

			.Chain-title {

				font-weight: 400;
			}

			.Chain-name {

				font-weight: 400;
			}
		}
	}
</style>
