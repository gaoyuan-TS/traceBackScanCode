<template>
	<view class="materials">
		<box-item>
			<view slot="body" class="box">
				<view class="header">
					<view class="left">
						<image :src="material.imageUrl" mode=""></image>
					</view>
					<view class="right">
						<view class="goods-name">
							{{material.materialName}}
						</view>
						<view class="batch">
							入库批次号：
							{{material.batchNumber}}
						</view>
					</view>
				</view>
				<view class="circulate-info">
					<view class="Chain">入库时间：<text class="Chain-title">{{material.createTime}}</text></view>
					<view class="Chain">使用重量：<text class="Chain-title">{{material.quantity}}</text></view>
					<view class="Chain">入库单号：<text class="Chain-title">{{material.warehouseOrder}}</text></view>
					<view class="Chain">库房编号：<text class="Chain-title">{{material.warehouseNumber}}</text></view>
					<view class="Chain">库房名称：<text class="Chain-title">{{material.warehouseName}}</text></view>
					<view class="Chain" v-for="(item,index) in material.attributesList" :key="index">{{item.attributeName}}：<text class="Chain-title">{{item.attributeValue}}</text></view>
					<view class="Chain">抽样报告：<view class="Chain-name">
							<view class="btn-item" style="margin-left: auto;" @click="lookImg(material.reportUrl)">
								<image src="../../static/picture/raw.png" ></image>
								下载检测文件
							</view>
						</view>
					</view>
				</view>
			</view>
		</box-item>

		<box-item title="原材料来源信息" style="margin-top: 20upx;">
			<view slot="body" class="box2">
				<view class="circulate-info">
					<view class="Chain">原材料来源：<text class="Chain-title">{{materialSource.materialSource}}</text></view>
					<view class="Chain">负责人：<text class="Chain-title">{{materialSource.principal}}</text></view>
					<view class="Chain">负责人电话：<text class="Chain-title">{{materialSource.mobile}}</text></view>
					<view class="Chain">地址：<text class="Chain-title">{{materialSource.address}}</text></view>
					</view>
				</view>
		</box-item>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				material:{},
				materialSource:{}
			};
		},
		onLoad(option) {
			this.getMaterial(option.id)
		},
		methods:{
			getMaterial(id){
				this.$common.get('/material-admin/material/trace/info?materialOutId=' + id).then((data) => {
					console.log(data)
					if(data.data.statusCode){
						this.material = data.data.data
						this.materialSource = this.material.materialSource
					}else {
						this.material = {}
					}
				})
			},
			lookImg(e) {
				uni.previewImage({
					urls: [e],
				})
			}
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
