<template>
	<view class="agent-application">
		<!-- 上部分 -->
		<box-item>
			<view slot="body">
				<view class="body-main">
					<view class="form-item">
						<view class="item-title">{{$t('more.name')}}</view>
						<input :placeholder="$t('more.please_enter')" />
					</view>
					
					<view class="form-item">
						<view class="item-title">{{$t('more.contact_person')}}</view>
						<input :placeholder="$t('more.please_enter')" />
					</view>
					
					<view class="form-item">
						<view class="item-title">{{$t('more.phone_number')}}</view>
						<input :placeholder="$t('more.please_enter')" />
					</view>
					
					<view class="form-item">
						<view class="item-title">{{$t('more.agency_area')}}</view>
						<input :placeholder="$t('more.please_enter')" />
					</view>
					
					<view class="form-item">
						<view class="item-title">{{$t('more.upload_ID')}}</view>
						<input :placeholder="$t('more.please_enter')" />
					</view>
					
					<view class="form-item upload">
						<view class="item-title">{{$t('more.upload_image')}}<text>{{$t('more.business_license_or_identity_information')}}</text></view>
						<view class="upLoad_warp">
							<view class="uploader__files">
								<block v-for="(image, index) in imageList" :key="index">
									<view class="uploader__file">
										 <icon class="icon_cuo" type="clear" @tap="deleteImage(index)" />
										<image class="uploader__img" :src="image" :data-src="image" @tap="$common.preViewImg(image,imageList)"></image>
									</view>
								</block>
						
								<view class="uploader__input-box">
									<view class="uploader__input" @tap="chooseImages">
										<image
											src="https://zs-1256645015.cos.ap-guangzhou.myqcloud.com/trace/2020/7/12/9a9cad28-4692-4e6b-833f-c8e17092063f.png"
											class="upload_icon"
										></image>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</box-item>
		
		
		<!-- 提交按钮 -->
		<view class="btn">
			<view class="submit-btn">{{$t('more.submit')}}</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			imageList: []
		}
	},
	methods: {
		// 点击上传图片
		chooseImages() {
			uni.chooseImage({
				count: 9,
				sizeType: ['original','compressed'],
				sourceType: ['album','camera'],
				success: res => {
					console.log(res)
					this.imageList = this.imageList.concat(res.tempFilePaths) // 合并
					// this.$common.uploadImage(this.imageList).then(res => {
					// 	for (let item of res) {
					// 		this.imgUrl.push(item.data.imgUrl);
					// 	}
					// 	console.log(this.imgUrl)
					// });
				}
			})
		},
		
		// 点击删除图片
		deleteImage(index) {
			uni.showModal({
				title: '提示',
				content: '是否要删除该图片',
				success: res => {
					if (res.confirm) {
						this.imageList.splice(index ,1)
					} else if (res.cancel) {
						console.log('用户点击取消');
					}
				}
			})
		}
	}
}
</script>

<style lang="less" scoped>
.agent-application {
	padding-bottom: 100upx;
	.body-main {
		padding: 36upx 32upx 40upx;
		.form-item {
			border-bottom: 1px solid #D8D8D8;
			font-size: 26upx;
			padding-bottom: 18upx;
			margin-bottom: 40upx;
			/deep/ .uni-input-placeholder,
			input {
				font-size: 26upx;
				color: #808080;
			}
			.item-title {
				font-weight: bold;
				margin-bottom: 28upx;
			}
		}
		
		.upload {
			border-bottom: none;
			margin-top: 40upx;
			padding-bottom: none;
			.item-title {
				>text {
					font-size: 24upx;
					color: #808080;
					font-weight: normal;
					padding-left: 14upx;
				}
			}
		}
		
		.upLoad_warp {
			width: 100%;
			height: 100%;
			position: relative;
			.uploader__files {
				width: 100%;
				height: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: flex-start;
				align-items: center;
			}
			.uploader__file {
				position: relative;
				width: 200upx;
				margin-bottom: 40upx;
				z-index: 1;
				margin-right: 28upx;
			}
			.uploader__img {
				width: 174upx;
				height: 174upx;
				margin: 10upx 16upx 10upx 0;
				border-radius: 10upx;
			}
			.icon_cuo {
				position: absolute;
				right: -10upx;
				top: -20upx;
				font-size: 26upx;
				color: #fb5b50;
				z-index: 999;
			}
			/deep/.uni-icon-clear {
				color: #fb5b50;
				font-size: 34upx!important;
			}
			.uploader__input {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 174upx;
				height: 174upx;
				background: #F6F6F6;
				margin-bottom: 50upx;
				margin-right: 28upx;
				border-radius: 10upx;
			}
			.upload_icon {
				width: 56upx;
				height: 56upx;
			}
		} 
	
	}
	
	.btn {
		display: flex;
		justify-content: center;
		margin-top: 60upx;
		.submit-btn {
			width: 440upx;
			height: 88upx;
			text-align: center;
			line-height: 88upx;
			border-radius: 44upx;
			background-color: #EF4235;
			color: #fff;
			font-size: 30upx;
		}
	}
}
</style>
