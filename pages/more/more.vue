<template>
	<view class="more">
		<view class="swiperHead">
			<swiper-navBar
			:swiper-tab-list="swiperTabList"
			:scroll-into-view="scrollIntoView"
			:swiper-tab-idx="swiperTabIdx"
			:current-swiper-line-animatie="currentSwiperLineAnimatie"
			@change="currentTab">
			</swiper-navBar>
		</view>
		
		<!--内容-->
		<view class="swiperCont">
			<swiper class="swiper" :current="swiperTabIdx" @change="swiperChange">
				<swiper-item class="swiperItem" v-for="(item,index) in componentArr" :key='index'>
					<!-- 动态加载组件 -->
					<component :is="item"></component>
				</swiper-item>
			</swiper>
		</view>
		<!--内容-->
		
	</view>
</template>


<script>
import SwiperNavBar from "../../components/swiperNavBar/swiperNavBar.vue"
import GoodsComplaint from '../../components/more/goods-complaint.vue'
import AgentApplication from '../../components/more/agent-application.vue'

export default {
	components: {
		SwiperNavBar,GoodsComplaint,AgentApplication
	},
	data() {
		return {
			// swiperTabList: ['商品投诉','代理商申请'],
			swiperTabList: [this.$t('more.commodity_complaints'),this.$t('more.agent_application')],
			scrollIntoView: 0,  // 设置哪个方向可滚动，则在哪个方向滚动到该元素
			swiperTabIdx: 0,
			currentSwiperLineAnimatie: 100,//当前选中的导航栏线条过渡效果
			componentArr: [GoodsComplaint,AgentApplication]  // 组件数组
		}
	},
	
	methods: {
		// 切换tab
		currentTab(index,item) {
			this.swiperTabIdx = index
			this.scrollIntoView = Math.max(0, index - 1);
		},
		
		// 切换 swiper
		swiperChange(e) {
			this.swiperTabIdx = e.detail.current;
			this.scrollIntoView = Math.max(0, e.detail.current - 1);
		}
	}
}
</script>

<style lang="less" scoped>
.more {
	.swiperHead {
		font-size: 26upx;
		height: 74upx;
		padding: 0 32upx;
		background-color: #fff;
	}
	
	.swiperCont {
		width: 100%;
		height: calc(100vh - 74upx - 50px - 44px); // 减去顶部导航和底部tab高度
		overflow: auto;
		.swiper{ 
			width: 100%;
			height: 100%; 
			.swiperItem {
				width: 100%;
				height: 100%; 
				-webkit-overflow-scrolling: touch;
				overflow-y: scroll;
			}
		}
	}
}
</style>
