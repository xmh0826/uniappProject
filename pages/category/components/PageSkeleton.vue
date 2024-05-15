<template name="skeleton">
	<view class="sk-container">
		<view is="components/CustomNavber/CustomNavber">
			<view class="navber CustomNavber--navber" style="padding-top:54px">
				<view class="logo CustomNavber--logo">
					<image class="logo-image CustomNavber--logo-image sk-image"></image>
					<text class="logo-text CustomNavber--logo-text sk-transparent sk-text-6-2500-851 sk-text"> 新鲜 · 亲民 ·
						快捷</text>
				</view>
				<view class="search CustomNavber--search">
					<text
						class="icon-search CustomNavber--icon-search sk-transparent sk-text-14-2857-401 sk-text sk-pseudo sk-pseudo-circle">搜索商品</text>
					<text class="icon-scan CustomNavber--icon-scan sk-pseudo sk-pseudo-circle"></text>
				</view>
			</view>
		</view>
		<scroll-view refresher-enabled="true" class="scroll-view scroll-view" scroll-y="true">
			<view>
				<view is="components/XtxSwiper/XtxSwiper">
					<view class="carousel XtxSwiper--carousel">
						<swiper autoplay="false" circular="true" interval="3000" current="0"></swiper>
						<view class="indicator XtxSwiper--indicator">
							<text class="dot XtxSwiper--dot"></text>
							<text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
							<text class="dot XtxSwiper--dot"></text>
							<text class="dot XtxSwiper--dot"></text>
							<text class="dot XtxSwiper--dot"></text>
						</view>
					</view>
				</view>
				<view is="components/CategoryPanel/CategoryPanel">
					<view class="category CategoryPanel--category">
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-502 sk-text">居家</text>
						</navigator>
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-476 sk-text">锦鲤</text>
						</navigator>
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-590 sk-text">服饰</text>
						</navigator>
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-552 sk-text">母婴</text>
						</navigator>
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-217 sk-text">个护</text>
						</navigator>
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-712 sk-text">严选</text>
						</navigator>
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-462 sk-text">数码</text>
						</navigator>
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-701 sk-text">运动</text>
						</navigator>
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-87 sk-text">杂项</text>
						</navigator>
						<navigator class="category-item CategoryPanel--category-item" hover-class="none">
							<image class="icon CategoryPanel--icon sk-image"></image>
							<text class="text CategoryPanel--text sk-transparent sk-text-14-2857-388 sk-text">品牌</text>
						</navigator>
					</view>
				</view>
				<view is="components/HotPanel/HotPanel">
					<view class="panel HotPanel--panel hot HotPanel--hot">
						<view class="item HotPanel--item">
							<view class="title HotPanel--title">
								<text
									class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-218 sk-text">特惠推荐</text>
								<text
									class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-791 sk-text">精选全攻略</text>
							</view>
							<navigator class="cards HotPanel--cards" hover-class="none">
								<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
								<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
							</navigator>
						</view>
						<view class="item HotPanel--item">
							<view class="title HotPanel--title">
								<text
									class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-725 sk-text">爆款推荐</text>
								<text
									class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-893 sk-text">最受欢迎</text>
							</view>
							<navigator class="cards HotPanel--cards" hover-class="none">
								<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
								<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
							</navigator>
						</view>
						<view class="item HotPanel--item">
							<view class="title HotPanel--title">
								<text
									class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-896 sk-text">一站买全</text>
								<text
									class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-41 sk-text">精心优选</text>
							</view>
							<navigator class="cards HotPanel--cards" hover-class="none">
								<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
								<image class="image HotPanel--image sk-image" mode="aspectFit"></image>
							</navigator>
						</view>
						<view class="item HotPanel--item">
							<view class="title HotPanel--title">
								<text
									class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-723 sk-text">新鲜好物</text>
								<text
									class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-348 sk-text">生活加分项</text>
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
							class="text XtxGuess--text sk-transparent sk-text-0-0000-136 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<style>
	.sk-transparent {
		color: transparent !important;
	}

	.sk-text-6-2500-851 {
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

	.sk-text-14-2857-401 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 39.0698rpx;
		position: relative !important;
	}

	.sk-text-14-2857-502 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-476 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-590 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-552 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-217 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-712 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-462 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-701 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-87 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-388 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-218 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 43.9535rpx;
		position: relative !important;
	}

	.sk-text-14-2857-791 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-725 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 43.9535rpx;
		position: relative !important;
	}

	.sk-text-14-2857-893 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-896 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 43.9535rpx;
		position: relative !important;
	}

	.sk-text-14-2857-41 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-723 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 43.9535rpx;
		position: relative !important;
	}

	.sk-text-14-2857-348 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-0-0000-136 {
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