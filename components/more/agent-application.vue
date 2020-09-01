<template>
	<view class="agent-application">
		<!-- 上部分 -->
		<box-item>
			<view slot="body">
				<view class="body-main">
					<view class="form-item">
						<view class="item-title">{{$t('more.name')}}</view>
						<input :placeholder="$t('more.please_enter')" :value="agentName" />
					</view>

					<view class="form-item">
						<view class="item-title">{{$t('more.contact_person')}}</view>
						<input :placeholder="$t('more.please_enter')" :value="agentContact" />
					</view>

					<view class="form-item">
						<view class="item-title">{{$t('more.phone_number')}}</view>
						<input :placeholder="$t('more.please_enter')" :value="agentCpntactNumber" />
					</view>

					<view class="form-item">
						<view class="item-title" @click="handleTap('picker1')">{{$t('more.agency_state')}}</view>
						<input :placeholder="$t('more.please_enter')" @focus="handleTap('picker1')" :value="state" />
						<lb-picker ref="picker1" v-model="stateCode" mode="selector" :list="list1" @confirm="handleConfirm">
						</lb-picker>
					</view>

					<view class="form-item">
						<view class="item-title" @click="handleTap('picker1')">{{$t('more.agency_area')}}</view>
						<input :placeholder="$t('more.please_enter')" @focus="handleTap('picker2')" :value="areaName" />
						<lb-picker ref="picker2" v-model="fourthAdministrationId" mode="multiSelector" :list="list2" :level="3" @confirm="handleConfirm2"
						 >
						</lb-picker>
					</view>
					
					<view class="form-item">
						<view class="item-title">{{$t('more.site')}}</view>
						<input :placeholder="$t('more.please_enter')" :value="agentDetailSite" />
					</view>
					<!-- 
					<view class="form-item">
						<view class="item-title">{{$t('more.upload_ID')}}</view>
						<input :placeholder="$t('more.please_enter')" />
					</view>
 -->
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
										<image src="https://zs-1256645015.cos.ap-guangzhou.myqcloud.com/trace/2020/7/12/9a9cad28-4692-4e6b-833f-c8e17092063f.png"
										 class="upload_icon"></image>
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
			<view class="submit-btn" @tap="upInfo()">{{$t('more.submit')}}</view>
		</view>
	</view>
</template>

<script>
	import LbPicker from '@/components/lb-picker'
	import China from '../../state/china.js'
	import Korea from '../../state/Korea.js'
	import Malaysia from '../../state/Malaysia.js'
	import a from '../../state/a.js'
	export default {
		components: {
			LbPicker
		},
		data() {
			return {
				imageList: [],
				agentName: '',
				agentContact: '',
				areaName:'',
				agentCpntactNumber: '',
				merchantId:'',
				goodsName:'',
				state: '中国', //选中国家
				stateCode: 86, //选中国家COde
				fourthAdministrationId:[],
				list2:China.list2,
				list1: [{
						label: '中国',
						value: 86
					},
					{
						label: '马来西亚',
						value: 60
					},
					{
						label: '韩国',
						value: 82
					}
				],
			}
		},
		methods: {

			// 点击上传图片
			chooseImages() {
				uni.chooseImage({
					count: 9,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
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
							this.imageList.splice(index, 1)
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				})
			},
			handleTap(name) {
				this.$refs[name].show()
			},
			// 选择国家
			handleConfirm(item) {
				console.log('change::', item)
				this.state = item.item.label
				this.stateCode = item.item.value
				if(this.stateCode === 86) {
					this.list2 = China.list2
				}else if (this.stateCode === 82){
					this.list2 = Korea.list2
				}else {
					this.list2 = Malaysia.list2
				}
				this.areaName = ''
				this.fourthAdministrationId = []
			},
			// 选择地区
			handleConfirm2(item) {
				this.areaName = ''
				console.log('change::', item)
				for(let i = 0; i < item.item.length;i++) {
					// console.log(item.item[i].label)
					let name = item.item[i].label
					this.areaName = this.areaName.concat(name)
					// console.log(this.areaName)
				}
			},
			// 提交
			    upInfo () {
			      // const reg = /^1[34578]\d{9}$/
			      // const re = new RegExp(reg)
			      // if (!(/^(\+\d{2,3}-)?(\d{2,3}-)?(\d{2,16})$/.test(this.agentCpntactNumber)) && this.agentCpntactNumber.length > 20) {
			      //   this.$notify('手机号码格式错误')
			      // } else {
			      //   alert('001')
			      // }
			      if (!this.agentName) {
					  uni.showToast({
					      title: '代理商名称不能为空',
					      duration: 2000
					  });
			        
			      } else if (!this.agentContact) {
					  uni.showToast({
					      title: '联系人名称不能为空',
					      duration: 2000
					  });
			        
			      } else if (!this.agentCpntactNumber) {
					  uni.showToast({
					      title: '手机号码不能为空',
					      duration: 2000
					  });
			      } else if (!(/^(\+\d{2,3}-)?(\d{2,3}-)?(\d{2,16})$/.test(this.agentCpntactNumber)) || this.agentCpntactNumber.length > 20) {
					uni.showToast({
					    title: '手机号码格式错误',
					    duration: 2000
					});
			      } else if (this.cityList.length === 1) {
			        
					uni.showToast({
					    title: '地区选择不能为空',
					    duration: 2000
					});
			      } else if (!this.agentDetailSite) {
					  uni.showToast({
					      title: '详细地址择不能为空',
					      duration: 2000
					  });
			        
			      } else if (!this.url) {
					  uni.showToast({
					      title: '营业执照不能为空',
					      duration: 2000
					  });
			      } else {
			        let merchantAgent = {
			          'merchantId': this.merchantId,
			          'agentName': this.agentName,
			          'agentContact': this.agentContact,
			          'agentCpntactNumber': this.agentCpntactNumber,
			          'agentDetailSite': this.agentDetailSite,
			          'agentGoods': this.goodsName,
			          'agentPapersUrl': this.imageList,
			          'fourthAdministrationId': this.fourthAdministrationId
			        }
			        this.$common.post('/agent/merchantAgentCheck/check/save', merchantAgent).then((data) => {
			          // console.log(data)
			          if (Number(data.data.code) === 20005) {
						  uni.showToast({
						      title: '手机号码已经被注册',
						      duration: 2000
						  });
			          } else {
						  uni.showToast({
						      title: '注册成功',
						      duration: 2000
						  });
			            
			          }
			        })
			      }
			    },
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
					font-size: 34upx !important;
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
