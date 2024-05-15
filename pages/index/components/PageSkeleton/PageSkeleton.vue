<template name="skeleton">

	<view is="components/XtxSwiper/XtxSwiper">
		<view class="carousel XtxSwiper--carousel">
			<swiper :autoplay="false" :circular="true" :interval="3000" :current="0"></swiper>
			<view class="indicator XtxSwiper--indicator">
				<text class="dot XtxSwiper--dot"></text>
				<text class="dot XtxSwiper--dot"></text>
				<text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
				<text class="dot XtxSwiper--dot"></text>
				<text class="dot XtxSwiper--dot"></text>
			</view>
		</view>
	</view>
	<view is="components/CategoryPanel/CategoryPanel">
		<view class="category CategoryPanel--category">
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-849 sk-text">居家</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-211 sk-text">锦鲤</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-779 sk-text">服饰</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-931 sk-text">母婴</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-799 sk-text">个护</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-889 sk-text">严选</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-636 sk-text">数码</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-245 sk-text">运动</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-758 sk-text">杂项</text>
			</navigator>
			<navigator class="category-item CategoryPanel--category-item" hover-class="none">
				<image class="icon CategoryPanel--icon sk-image"></image>
				<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-758 sk-text">品牌</text>
			</navigator>
		</view>
	</view>
	<view is="components/HotPanel/HotPanel">
		<view class="panel HotPanel--panel hot HotPanel--hot">
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-455 sk-text">特惠推荐</text>
					<text
						class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-257 sk-text">精选全攻略</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-44 sk-text">爆款推荐</text>
					<text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-684 sk-text">最受欢迎</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-39 sk-text">一站买全</text>
					<text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-374 sk-text">精心优选</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
			<view class="item HotPanel--item">
				<view class="title HotPanel--title">
					<text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-439 sk-text">新鲜好物</text>
					<text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-43 sk-text">生活加分项</text>
				</view>
				<navigator class="cards HotPanel--cards" hover-class="none">
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
					<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
				</navigator>
			</view>
		</view>
	</view>
	<view is="components/XtxGuess/XtxGuess" class="r r">
		<view class="caption XtxGuess--caption">
			<text
				class="text XtxGuess--text sk-transparent sk-text-0-0000-76 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
		</view>
	</view>

</template>

<style>
	.sk-transparent {
		color: transparent !important;
	}

	.sk-text-6-2500-334 {
		background-image: linear-gradient(transparent 6.2500%, #EEEEEE 0%, #EEEEEE 93.7500%, transparent 0%) !important;
		background-size: 100% 27.9070rpx;
		position: relative !important;
	}

	.sk-text {
		background-origin: content-box !important;
		background-clip: content-box !important;
		background-color: transparent !important;
		color: transparent !important;
		background-repeat: repeat-y !important;
	}

	.sk-text-14-2857-901 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 39.0698rpx;
		position: relative !important;
	}

	.sk-text-14-2857-849 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-211 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-779 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-931 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-799 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-889 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-636 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-245 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-758 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-455 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 43.9535rpx;
		position: relative !important;
	}

	.sk-text-14-2857-257 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-44 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 43.9535rpx;
		position: relative !important;
	}

	.sk-text-14-2857-684 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-39 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 43.9535rpx;
		position: relative !important;
	}

	.sk-text-14-2857-374 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-439 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 43.9535rpx;
		position: relative !important;
	}

	.sk-text-14-2857-43 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-0-0000-76 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 31.3953rpx;
		position: relative !important;
	}

	.sk-image {
		background: #EFEFEF !important;
	}

	.sk-pseudo::before,
	.sk-pseudo::after {
		background: #EFEFEF !important;
		background-image: none !important;
		color: transparent !important;
		border-color: transparent !important;
	}

	.sk-pseudo-rect::before,
	.sk-pseudo-rect::after {
		border-radius: 0 !important;
	}

	.sk-pseudo-circle::before,
	.sk-pseudo-circle::after {
		border-radius: 50% !important;
	}

	.sk-container {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		background-color: transparent;
	}
</style>