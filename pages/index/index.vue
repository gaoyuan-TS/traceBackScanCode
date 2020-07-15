<template>
	<view class="content">
		<!-- 使用无标题 -->
		<box-item>
			<view slot="body">
				<view class="body-main">
					<view>1</view>
					<view>2</view>
					<view>1</view>
					<view>1</view>
					<view>1</view>
					<view>1</view>
					<view style="display: flex;">
						<view class="btn-item">
							<image src="../../static/images/trace/chaxun.png" mode=""></image>
							查看所有的查询记录
						</view>
					</view>
				</view>
			</view>
		</box-item>
		
		<!-- 使用标题 -->
		<box-item title="流通追溯" style="margin-top: 10px;">
			<view slot="body">
				<view class="body-main">
					<view>1</view>
					<view>2</view>
					<view>1</view>
					<view>1</view>
					<view>1</view>
					<view>1</view>
					<view style="display: flex;">
						<view class="btn-item" style="margin-left: auto;">
							<image src="../../static/images/trace/chaxun.png" mode=""></image>
							查看所有的查询记录
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
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}



</style>
