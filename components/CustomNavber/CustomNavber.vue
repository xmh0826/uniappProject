<template>
	<view class="navber" :style="{ paddingTop: safeAreaInsets.top + 'px' }">
		<view class="logo">
			<image class="logo-image" src="@/static/images/logo.png"></image>
			<text class="logo-text"> 新鲜 · 亲民 · 快捷</text>
		</view>
		<view class="search">
			<text class="icon-search">搜索商品</text>
			<text class="icon-scan"></text>
		</view>
	</view>
</template>

<script setup lang="ts">
	// 获取屏幕边界到安全区域范围
	const safeAreaInsets = uni.getSystemInfoSync().safeAreaInsets
	// console.log(safeAreaInsets)
</script>

<style lang="less">
	.navber {
		background-image: url(@/static/images/navigator_bg.png);
		// 背景图片会被裁剪以确保完全覆盖元素，并且不会出现拉伸变形
		background-size: cover;
		// 会相对于其原本的位置进行定位，但是不会影响其他元素的位置
		position: relative;
		display: flex;
		flex-direction: column;
		padding-top: 20px;

		.logo {
			display: flex;
			align-items: center;
			height: 64rpx;
			padding-left: 30rpx;
			padding-top: 20rpx;

			.logo-image {
				width: 166rpx;
				height: 39rpx;
			}

			.logo-text {
				flex: 1;
				line-height: 28rpx;
				color: #fff;
				margin: 2rpx 0 0 20rpx;
				padding-left: 20rpx;
				border-left: 1rpx solid #fff;
				font-size: 26rpx;
			}
		}
	}

	.search {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 10rpx 0 26rpx;
		height: 64rpx;
		margin: 16rpx 20rpx;
		color: #fff;
		font-size: 28rpx;
		border-radius: 32rpx;
		background-color: rgba(255, 255, 255, 0.5);


		.icon-search {
			&::before {
				margin-right: 10rpx;
			}
		}

		.icon-scan {
			font-size: 30rpx;
			padding: 15rpx;
		}
	}
</style>