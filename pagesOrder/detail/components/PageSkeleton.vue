<template name="skeleton">
	<view class="sk-container">
		<view class="navbar navbar" style="padding-top:54px">
			<view class="wrap wrap">
				<navigator class="back icon-left sk-pseudo sk-pseudo-circle" open-type="navigateBack"></navigator>
				<view class="title sk-transparent sk-text-14-2857-326 sk-text">订单详情</view>
			</view>
		</view>
		<scroll-view scroll-y="true" class="viewport viewport" id="scroller" enable-back-to-top="true">
			<view class="overview sk-image" style="padding-top:74px">
				<view class="status icon-clock sk-transparent sk-text-0-0000-167 sk-text sk-pseudo sk-pseudo-circle">
					等待付款</view>
				<view class="tips sk-transparent">
					<text class="money sk-transparent sk-text-0-0000-397 sk-text">应付金额: ¥ 99.00</text>
					<text class="time sk-transparent sk-text-0-0000-630 sk-text">支付剩余</text> 00 时 29 分 59 秒
				</view>
				<view class="button sk-transparent sk-text-27-7778-909 sk-text" style="background-position-x: 50%;">去支付
				</view>
			</view>
			<view class="shipment shipment">
				<view class="item sk-image">
					<view class="message sk-transparent sk-text-14-2857-930 sk-text">
						您已在广州市天河区黑马程序员完成取件，感谢使用菜鸟驿站，期待再次为您服务。 </view>
					<view class="date sk-transparent sk-text-14-2857-213 sk-text"> 2023-04-14 13:14:20 </view>
				</view>
				<view class="locate sk-image">
					<view class="user sk-transparent sk-text-14-2857-158 sk-text"> 张三 13333333333 </view>
					<view class="address sk-transparent sk-text-14-2857-57 sk-text"> 广东省 广州市 天河区 黑马程序员 </view>
				</view>
			</view>
			<view class="goods goods">
				<view class="item item">
					<navigator class="navigator navigator" hover-class="none">
						<image class="cover sk-image"></image>
						<view class="meta meta">
							<view class="name ellipsis sk-transparent sk-text-14-2857-771 sk-text">ins风小碎花泡泡袖衬110-160cm
							</view>
							<view class="type sk-transparent sk-text-22-2222-454 sk-text">藏青小花， 130</view>
							<view class="price price">
								<view class="actual actual">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="sk-transparent sk-text-14-2857-889 sk-text">99.00</text>
								</view>
							</view>
							<view class="quantity sk-transparent sk-text-14-2857-712 sk-text">x1</view>
						</view>
					</navigator>
					<navigator class="navigator navigator" hover-class="none">
						<image class="cover sk-image"></image>
						<view class="meta meta">
							<view class="name ellipsis sk-transparent sk-text-14-2857-143 sk-text">ins风小碎花泡泡袖衬110-160cm
							</view>
							<view class="type sk-transparent sk-text-22-2222-534 sk-text">藏青小花， 130</view>
							<view class="price price">
								<view class="actual actual">
									<text class="symbol sk-transparent sk-opacity">¥</text>
									<text class="sk-transparent sk-text-14-2857-477 sk-text">99.00</text>
								</view>
							</view>
							<view class="quantity sk-transparent sk-text-14-2857-435 sk-text">x1</view>
						</view>
					</navigator>
					<view class="action action">
						<view class="button primary sk-transparent sk-text-29-4118-829 sk-text"
							style="background-position-x: 50%;">申请售后</view>
						<navigator class="button sk-transparent sk-text-29-4118-442 sk-text"
							style="background-position-x: 50%;"> 去评价 </navigator>
					</view>
				</view>
				<view class="total total">
					<view class="row row">
						<view class="text sk-transparent sk-text-0-0000-393 sk-text">商品总价: </view>
						<view class="symbol sk-transparent sk-text-0-0000-590 sk-text sk-pseudo sk-pseudo-circle">99.00
						</view>
					</view>
					<view class="row row">
						<view class="text sk-transparent sk-text-0-0000-9 sk-text">运费: </view>
						<view class="symbol sk-transparent sk-text-0-0000-705 sk-text sk-pseudo sk-pseudo-circle">10.00
						</view>
					</view>
					<view class="row row">
						<view class="text sk-transparent sk-text-0-0000-309 sk-text">应付金额: </view>
						<view
							class="symbol primary sk-transparent sk-text-0-0000-115 sk-text sk-pseudo sk-pseudo-circle">
							109.00</view>
					</view>
				</view>
			</view>
			<view class="detail detail">
				<view class="title sk-transparent sk-text-0-0000-550 sk-text">订单信息</view>
				<view class="row row">
					<view class="item sk-transparent"> 订单编号: 1773594897903783937
						<text class="copy sk-transparent sk-text-0-0000-828 sk-text">复制</text>
					</view>
					<view class="item sk-transparent sk-text-0-0000-812 sk-text">下单时间: 2023-04-14 13:14:20</view>
				</view>
			</view>
			<view is="components/XtxGuess/XtxGuess" class="r r">
				<view class="caption XtxGuess--caption">
					<text
						class="text XtxGuess--text sk-transparent sk-text-0-0000-674 sk-text sk-pseudo sk-pseudo-circle">猜你喜欢</text>
				</view>
			</view>
			<view class="toolbar toolbar" style="padding-bottom:34px">
				<view class="button primary sk-transparent sk-text-14-2857-971 sk-text"> 去支付 </view>
				<view class="button sk-transparent sk-text-14-2857-562 sk-text"> 取消订单 </view>
			</view>
		</scroll-view>
	</view>
</template>

<style lang="less">
	.sk-transparent {
		color: transparent !important;
	}

	.sk-text-14-2857-326 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 43.9535rpx;
		position: relative !important;
	}

	.sk-text {
		background-origin: content-box !important;
		background-clip: content-box !important;
		background-color: transparent !important;
		color: transparent !important;
		background-repeat: repeat-y !important;
	}

	.sk-text-0-0000-167 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 34.8837rpx;
		position: relative !important;
	}

	.sk-text-0-0000-397 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.4186rpx;
		position: relative !important;
	}

	.sk-text-0-0000-630 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.4186rpx;
		position: relative !important;
	}

	.sk-text-27-7778-909 {
		background-image: linear-gradient(transparent 27.7778%, #EEEEEE 0%, #EEEEEE 72.2222%, transparent 0%) !important;
		background-size: 100% 62.7907rpx;
		position: relative !important;
	}

	.sk-text-14-2857-930 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-213 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-158 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-57 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-771 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-22-2222-454 {
		background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
		background-size: 100% 40.8140rpx;
		position: relative !important;
	}

	.sk-opacity {
		opacity: 0 !important;
	}

	.sk-text-14-2857-889 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-712 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: absolute !important;
	}

	.sk-text-14-2857-143 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-22-2222-534 {
		background-image: linear-gradient(transparent 22.2222%, #EEEEEE 0%, #EEEEEE 77.7778%, transparent 0%) !important;
		background-size: 100% 40.8140rpx;
		position: relative !important;
	}

	.sk-text-14-2857-477 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: relative !important;
	}

	.sk-text-14-2857-435 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 31.7442rpx;
		position: absolute !important;
	}

	.sk-text-29-4118-829 {
		background-image: linear-gradient(transparent 29.4118%, #EEEEEE 0%, #EEEEEE 70.5882%, transparent 0%) !important;
		background-size: 100% 59.3023rpx;
		position: relative !important;
	}

	.sk-text-29-4118-442 {
		background-image: linear-gradient(transparent 29.4118%, #EEEEEE 0%, #EEEEEE 70.5882%, transparent 0%) !important;
		background-size: 100% 59.3023rpx;
		position: relative !important;
	}

	.sk-text-0-0000-393 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.4186rpx;
		position: relative !important;
	}

	.sk-text-0-0000-590 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.4186rpx;
		position: relative !important;
	}

	.sk-text-0-0000-9 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.4186rpx;
		position: relative !important;
	}

	.sk-text-0-0000-705 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.4186rpx;
		position: relative !important;
	}

	.sk-text-0-0000-309 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.4186rpx;
		position: relative !important;
	}

	.sk-text-0-0000-115 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 34.8837rpx;
		position: relative !important;
	}

	.sk-text-0-0000-550 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 29.6512rpx;
		position: relative !important;
	}

	.sk-text-0-0000-828 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 19.1860rpx;
		position: relative !important;
	}

	.sk-text-0-0000-812 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 24.4186rpx;
		position: relative !important;
	}

	.sk-text-0-0000-674 {
		background-image: linear-gradient(transparent 0.0000%, #EEEEEE 0%, #EEEEEE 100.0000%, transparent 0%) !important;
		background-size: 100% 31.3953rpx;
		position: relative !important;
	}

	.sk-text-14-2857-971 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
		position: relative !important;
	}

	.sk-text-14-2857-562 {
		background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
		background-size: 100% 34.1860rpx;
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