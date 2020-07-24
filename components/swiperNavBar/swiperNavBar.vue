<template>
	<!--组件-->
	<scroll-view scroll-x='false' scroll-with-animation  :scroll-into-view=" 'tab-' + scrollIntoView">
		<view class="swiperTab" v-for="(item,index) in swiperTabList" :key='index' :id=" 'tab-' + index " @tap="CurrentTab(index,item)">
			
			<!--导航标题-->
			<text :style="{ color:swiperTabIdx == index ? '#EF4235': '#333','font-size': swiperTabIdx == index ? '28upx' : '26upx'}">
				{{ item }}
			</text>
			<!--导航标题-->
			
			<!--线条-->
			<view class="swiperLine">
				<view class="swiperLineActive" 
					v-if=" swiperTabIdx == index "
					:class="[ swiperTabIdx == index && currentSwiperLineAnimatie ?'currentLine':'' ]">
				</view>
			</view>
			<!--线条-->
			
		</view>
	</scroll-view>
</template>

<script>
	export default{
		data(){
			return{
			}
		},
		onLoad() { },
		props:{
			scrollIntoView:{ type:Number },//设置哪个方向可滚动，则在哪个方向滚动到该元素
			swiperTabList:{ type:Array },//导航列表
			swiperTabIdx:{ type:Number },//导航对应列表下标
			currentSwiperLineAnimatie:{ type:Number },//当前选中的导航栏线条过渡效果
		},
		methods:{
			
			CurrentTab(index,item){
				this.$emit('change',index,item);
			},
			
		}
	}
</script>

<style>
	.swiperHead scroll-view{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		white-space: nowrap;
	}
	.swiperTab{
		position: relative;
		display: inline-flex;
		flex-direction: column;
		text-align: center;
		position: relative;
		letter-spacing: 1px;
		padding: 10upx;
		margin-right: 74upx;
	}
	.swiperLine{ 
		position: absolute;bottom: 
		0upx;left: 
		0;right: 0;
		z-index: 10; 
	}
	.swiperLineActive{ 
		margin: 0 auto;
		border-radius: 30upx; 
		width:100%;
		height:4upx;
		background-color: #EF4235;
	}
	@keyframes currentLine{ 
		0%{
			transform: scale(0.5);
		} 
		100%{
			transform: scale(1);
		}
	}
	.currentLine{ 
		animation:currentLine 300ms forwards; 
	}
</style>
