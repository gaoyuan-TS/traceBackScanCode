<template>
	<view class="sellers">
		<select-lang></select-lang>
		<!-- 商家信息 -->
		<sellers-info></sellers-info>
		
		<!-- 商家描述 -->
		<sellers-desc></sellers-desc>
		
		<!-- 主营产品 -->
		<sellers-product></sellers-product>
		
		<!-- 企业证书 -->
		<sellers-certificate></sellers-certificate>
		
		<!-- 其他图片 -->
		<sellers-other></sellers-other>
		
		<!-- 右边侧边栏 -->
		<aside-right></aside-right>
	</view>
</template>

<script>
import SellersInfo from '../../components/sellers/sellers-info.vue'
import SellersDesc from '../../components/sellers/sellers-desc.vue'
import SellersProduct from '../../components/sellers/sellers-product.vue'
import sellersCertificate from '../../components/sellers/sellers-certificate.vue'
import sellersOther from '../../components/sellers/sellers-other.vue'
export default {
	components: {
		SellersInfo,SellersDesc,SellersProduct,sellersCertificate,sellersOther
	},
	data() {
		return {
		}
	}
}
</script>

<style lang="less">
.sellers {
	padding-bottom: 40upx;
}	
</style>