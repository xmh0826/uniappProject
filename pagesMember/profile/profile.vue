<script setup lang="ts">
	import { getMemberProfileAPI, putMmemberProfileAPI } from '../../services/profile';
	import { onLoad } from '@dcloudio/uni-app'
	import { ref } from 'vue';
	import { ProfileDetail } from '../../types/member';
	import { useMemberStore } from '../../stores';
	// 获取屏幕边界到安全区域距离
	const { safeAreaInsets } = uni.getSystemInfoSync()

	// 获取个人信息                        断言 空对象存放的是 ProfileDetail 里的会员信息
	const profile = ref({} as ProfileDetail)
	const getMemberProfileData = async () => {
		const res = await getMemberProfileAPI()
		profile.value = res.result
	}

	onLoad(() => {
		getMemberProfileData()
	})

	const memberStore = useMemberStore()

	// 修改头像
	const onAvatarChange = () => {
		// 调用拍照 / 选择头像
		uni.chooseMedia({
			// 最多可以选择的文件个数
			count: 1,
			// 选择文件类型
			mediaType: ['image'],
			success: (res) => {
				// tempFiles 是数组，所以选择下标为0的，里面存放的是本地路径
				const { tempFilePath } = res.tempFiles[0]
				// 文件上传
				uni.uploadFile({
					url: '/member/profile/avatar',
					// 请求参数 通过name
					name: 'file',
					// 文件资源路径
					filePath: tempFilePath,
					success(res) {
						if (res.statusCode === 200) {
							// 将data字符串转换为对象
							const avatar = JSON.parse(res.data).result.avatar
							// 此为个人设置页头像更新
							profile.value.avatar = avatar
							// Store 头像更新
							memberStore.profile.avatar = avatar
							// 轻提示
							uni.showToast({
								title: '更新成功'
							})
						}
						else {
							uni.showToast({
								title: '更新失败'
							})
						}
					}
				})
			}
		})

	}
	// 修改性别
	const onGenderChange = (e) => {
		profile.value.gender = e.detail.value
	}
	// 修改生日
	const onBirthdayChange = (e) => {
		console.log(e.detail.value)
		profile.value.birthday = e.detail.value
	}
	// 修改城市
	let fullLocationCode = []
	const onFullLocationChange = (e) => {
		// 修改前端界面                              join() 数组转字符串 (' ')插入空格将数组隔开
		profile.value.fullLocation = e.detail.value.join(' ')
		// 提交后端更新                    因为后端接收的是编码 此data中包含有 value code postcode 三个数组
		fullLocationCode = e.detail.code
	}

	// 点击保存提交表单
	const onSubmit = async () => {
		// 解构
		const { nickname, gender, birthday } = profile.value
		const res = await putMmemberProfileAPI({
			// 更新昵称
			nickname, // nickname: profile.value.nickname,
			// 更新性别
			gender,   //  gender: profile.value.gender,
			// 更新生日
			birthday,  //  birthday: profile.value.birthday
			// 省份编码
			provinceCode: fullLocationCode[0],
			// 城市编码
			cityCode: fullLocationCode[1],
			// 区县编码
			countyCode: fullLocationCode[2]
		})
		// 更新 Store 昵称
		memberStore.profile!.nickname = profile.value.nickname
		// 使用计时器，否则直接返回上一页此提示会被直接销毁
		setTimeout(() => {
			// 轻提示
			uni.showToast({
				icon: 'none',
				title: '保存成功'
			})
		}, 500)
		// 返回上一页
		uni.navigateBack()
	}
</script>

<template>
	<view class="viewport">
		<!-- 导航栏 -->
		<view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
			<navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
			<view class="title">个人信息</view>
		</view>
		<!-- 头像 -->
		<view class="avatar">
			<view class="avatar-content" @tap="onAvatarChange">
				<image class="image" :src="profile.avatar" mode="aspectFill" />
				<text class="text">点击修改头像</text>
			</view>
		</view>
		<!-- 表单 -->
		<view class="form">
			<!-- 表单内容 -->
			<view class="form-content">
				<view class="form-item">
					<text class="label">账号</text>
					<text class="account"> {{ profile.accout }}</text>
				</view>
				<view class="form-item">
					<text class="label"> 昵称 </text>
					<input class="input" type="text" placeholder="请填写昵称" v-model="profile.nickname" />
				</view>
				<view class="form-item">
					<text class="label">{{ profile.gender }}</text>
					<radio-group>
						<label class="radio" @change="onGenderChange">
							<radio value="男" color="#27ba9b" :checked="profile.gender === '男'" />
							男
						</label>
						<label class="radio">
							<radio value="女" color="#27ba9b" :checked="profile.gender === '女'" />
							女
						</label>
					</radio-group>
				</view>
				<view class="form-item">
					<text class="label">生日</text>
					<picker class="picker" mode="date" start="1900-01-01" :end="new Date()" :value="profile.birthday"
						@change="onBirthdayChange">
						<view v-if="profile.birthday">{{profile.birthday}}</view>
						<view class="placeholder" v-else>请选择日期</view>
					</picker>
				</view>
				<view class="form-item">
					<text class="label">城市</text>
					<picker class="picker" mode="region" :value="profile.fullLocation.split(' ')"
						@change="onFullLocationChange">
						<view v-if="profile.fullLocation">{{profile.fullLocation}}</view>
						<view class="placeholder" v-else>请选择城市</view>
					</picker>
				</view>
				<view class="form-item">
					<text class="label">职业</text>
					<input class="input" type="text" placeholder="请填写职业" :value="profile.profession" />
				</view>
			</view>
			<!-- 提交按钮 -->
			<button class="form-button" @tap="onSubmit">保 存</button>
		</view>
	</view>
</template>

<style lang="less">
	page {
		background-color: #f4f4f4;
	}

	.viewport {
		display: flex;
		flex-direction: column;
		height: 100%;
		background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
		background-size: auto 420rpx;
		background-repeat: no-repeat;
	}

	// 导航栏
	.navbar {
		position: relative;

		.title {
			height: 40px;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 16px;
			font-weight: 500;
			color: #fff;
		}

		.back {
			position: absolute;
			height: 40px;
			width: 40px;
			left: 0;
			font-size: 20px;
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	// 头像
	.avatar {
		text-align: center;
		width: 100%;
		height: 260rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.image {
			width: 160rpx;
			height: 160rpx;
			border-radius: 50%;
			background-color: #eee;
		}

		.text {
			display: block;
			padding-top: 20rpx;
			line-height: 1;
			font-size: 26rpx;
			color: #fff;
		}
	}

	// 表单
	.form {
		background-color: #f4f4f4;

		&-content {
			margin: 20rpx 20rpx 0;
			padding: 0 20rpx;
			border-radius: 10rpx;
			background-color: #fff;
		}

		&-item {
			display: flex;
			height: 96rpx;
			line-height: 46rpx;
			padding: 25rpx 10rpx;
			background-color: #fff;
			font-size: 28rpx;
			border-bottom: 1rpx solid #ddd;

			&:last-child {
				border: none;
			}

			.label {
				width: 180rpx;
				color: #333;
			}

			.account {
				color: #666;
			}

			.input {
				flex: 1;
				display: block;
				height: 46rpx;
			}

			.radio {
				margin-right: 20rpx;
			}

			.picker {
				flex: 1;
			}

			.placeholder {
				color: #808080;
			}
		}

		&-button {
			height: 80rpx;
			text-align: center;
			line-height: 80rpx;
			margin: 30rpx 20rpx;
			color: #fff;
			border-radius: 80rpx;
			font-size: 30rpx;
			background-color: #27ba9b;
		}
	}
</style>