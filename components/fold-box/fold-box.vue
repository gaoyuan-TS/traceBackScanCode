<template>
	<view class="fold-box">
		<box-item :title="title">
			<view slot="title-right">
				<view class="title-right-content">
					<!-- <image src="../../static/images/sellers/shipin.png"></image>
					<view style="color:#EF4235;">商家视频</view> -->
					<slot name="title-right-content"></slot>
				</view>
			</view>
			<view slot="body">
				<view class="body-main">
					<view class="desc" ref="desc"> 
						<slot name="desc"></slot>
					</view>				
					<view style="display: flex;justify-content: center;" v-if="showMoreBtn">
						<view class="btn-item" @tap="hadleTap">
							<image src="../../static/images/sellers/xiala.png" v-if="isHeight"></image>
							<image src="../../static/images/sellers/shouqi.png" v-else></image>
							{{isHeight ? putText : dropText}}
						</view>
					</view>
				</view>
			</view>
		</box-item>
	</view>
</template>

<script>
export default {
	props: {
		// 标题
		title: {
			type: String,
			default: ''
		},
		
		// 设置如果超出这个范围 则要显示更多的内容按钮
		limitHeight: {
			type: Number,
			default: 180
		},
		
		// 下拉文字
		dropText: {
			type: String,
			default: '点击查看更多信息'
		},
		
		// 收起文字
		putText: {
			type: String,
			default: '点击收起'
		}
	},
	data() {
		return {
			isHeight: false,
			showMoreBtn: false,
			screenWidth: '',  // 屏幕高度
			per: ''  // 缩放比例
		}
	},
	mounted() {
		// 获取手机型号
		let that = this
		uni.getSystemInfo({
		    success: function (res) { 
				that.screenWidth = res.screenWidth
				that.per = Number((that.screenWidth / 375).toFixed(2));  //计算比例
		    }
		});
		let comp = this.$refs.desc.$el
		let descOffsetHeight = comp.offsetHeight
		this.showMoreBtn = descOffsetHeight / this.per > this.limitHeight / this.per ? true : false
		comp.style.height = this.showMoreBtn ? uni.upx2px(this.limitHeight) / this.per + 'px' : 'auto'
	},
	methods: {
		hadleTap() {
			let comp = this.$refs.desc.$el
			let height = comp.offsetHeight
			if(height === uni.upx2px(this.limitHeight/this.per)) {
				comp.style.height = 'auto'
				console.log(comp.offsetHeight,"comp.offsetHeight")
				height = comp.offsetHeight  // 这里的是px
				comp.style.height = uni.upx2px(this.limitHeight)/this.per + 'px'
				var f = document.body.offsetHeight  // 必加
				comp.style.height = uni.upx2px(height*2)/this.per + 'px'  // 这里要用/ 号才能自适应
				this.isHeight = true
			}else {
				comp.style.height = uni.upx2px(this.limitHeight)/this.per + 'px'
				this.isHeight = false
			}
			
		}
	}
}
</script>

<style lang="less" scoped>
.fold-box {
	.body-main {
		padding: 36upx 32upx 56upx;
		.desc {
			text-indent: 40upx;
			color: #808080;
			line-height: 36upx;
			margin-bottom: 40upx;
			overflow: hidden;
			transition: height .3s ease;
		}
	}
}
</style>
