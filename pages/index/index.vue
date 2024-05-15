<script setup lang="ts">
	import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotMutliAPI } from '../../services';
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue';
	import { BannerItem, CategoryItem, HotItem } from '../../types/home';
	import { XTXGuessInstance } from '../../types/component';
	import { PageSkeleton } from './components/PageSkeleton/PageSkeleton.vue'
	import { useGuessList } from '../../composables';
	//
	// 获取轮播图数据
	const bannerList = ref<BannerItem[]>([])
	const getHomeBannerData = async () => {
		const res = await getHomeBannerAPI()
		bannerList.value = res.result
	}

	// 获取前台分类数据
	const categoryList = ref<CategoryItem[]>([])
	const getHomeCategoryData = async () => {
		const res = await getHomeCategoryAPI()
		categoryList.value = res.result
	}

	// 获取热门推荐数据
	const hotMutliList = ref<HotItem[]>()
	const getHomeHotMutliData = async () => {
		const res = await getHomeHotMutliAPI()
		hotMutliList.value = res.result
	}

	// 是否加载中标记
	const isLoading = ref(false)

	// 页面加载
	onLoad(async () => {
		// 加载开始时先显示骨架屏
		isLoading.value = true
		await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotMutliData()])
		// 加载完成后覆盖骨架屏
		isLoading.value = false
	})

	// // 获取猜你喜欢组件实例
	// const guessRef = ref<XTXGuessInstance>()
	// // 滚动触底
	// const onScrolltolower = () => {
	// 	guessRef.value.getMore()
	// }
	// 调用猜你喜欢组合式函数
	const { guessRef, onScrolltolower } = useGuessList()

	const isTriggered = ref(false)
	// 下拉刷新时被触发
	const onRefresherrefresh = async () => {
		// 开始下拉刷新动画
		isTriggered.value = true
		// 重新加载数据 (因为是异步的，需加上await 等待加载完成 否则无效)
		// 此方法因为要等待上一个加载完后才加载第二个 故进行优化
		// await getHomeBannerData()
		// await getHomeCategoryData()
		// await getHomeHotMutliData()
		// 优化后
		// 重置猜你喜欢组件的数据
		guessRef.value.resetData
		await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotMutliData(), guessRef.value.getMore])

		// 关闭下拉刷新动画
		isTriggered.value = false
	}
</script>

<template>

	<!-- 导航栏 -->
	<CustomNavber></CustomNavber>
	<!--         refresher-enabled:开启下拉刷新   @refresherrefresh：下拉刷新时触发事件 -->
	<!-- @scrolltolower:滚动到底部会触发 scrolltolower 事件 -->
	<scroll-view refresher-enabled @refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered"
		@scrolltolower="onScrolltolower" scroll-y="true" class="scroll-view">
		<view>
			<!-- 骨架屏 -->
			<PageSkeleton v-if="isLoading"></PageSkeleton>
			<template v-else>
				<!-- 轮播图 -->
				<XtxSwiper :list="bannerList"></XtxSwiper>
				<!-- 首页分类 -->
				<CategoryPanel :list="categoryList"></CategoryPanel>
				<!-- 热门推荐 -->
				<HotPanel :list="hotMutliList"></HotPanel>
				<!-- 猜你喜欢 -->
				<XtxGuess ref="guessRef"></XtxGuess>
			</template>

		</view>
	</scroll-view>


</template>

<style lang="less">
	//
	page {
		background-color: #f7f7f7;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.scroll-view {
		flex: 1;

	}
</style>