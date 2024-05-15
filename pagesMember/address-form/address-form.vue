<script setup lang="ts">
	import { ref } from 'vue'
	import { getMemberAddressByIdAPI, postMemberAddressAPI, putMemberAddressByIdAPI } from '../../services/address';
	import { onLoad } from '@dcloudio/uni-app'

	// 表单数据
	const form = ref({
		receiver: '', // 收货人
		contact: '', // 联系方式
		fullLocation: '', // 省市区(前端展示)
		provinceCode: '', // 省份编码(后端参数)
		cityCode: '', // 城市编码(后端参数)
		countyCode: '', // 区/县编码(后端参数)
		address: '', // 详细地址
		isDefault: 0, // 默认地址，1为是，0为否
	})

	// 获取页面参数
	const query = defineProps<{
		id ?: string
	}>()

	// 获取收货地址详情数据
	const getMemberAddressByIdData = async () => {
		if (query.id) {
			const res = await getMemberAddressByIdAPI(query.id)
			Object.assign(form.value, res.result)
		}
	}

	// 页面加载
	onLoad(() => {
		getMemberAddressByIdData()
	})


	// 动态设置标题
	uni.setNavigationBarTitle({
		title: query.id ? '修改地址' : '新建地址'
	})
	// 收集所在地区
	const onRegionChange = (e) => {
		// 省市区 （前端展示）	
		form.value.fullLocation = e.detail.value.join(' ')
		// 省市区 （后端参数）
		const [provinceCode, cityCode, countyCode] = e.detail.code
		// 数据覆盖到到前面的对象中
		Object.assign(form.value, { provinceCode, cityCode, countyCode })
	}
	// 收集是否默认收货地址
	const onSwitchChange = (e) => {
		form.value.isDefault = e.detail.value ? 1 : 0
	}

	// 定义校验规则
	const rules = {
		receiver: {
			rules: [{
				// require: true   必填项
				required: true, errorMessage: '请输入收货人姓名'
			}]
		},
		contact: {
			rules: [
				{ required: true, errorMessage: '请输入联系方式' },
				// 正则表达式
				{ pattern: /^[1-9]\d{10}$/, errorMessage: '手机号格式错误' },
			]
		},
		fullLocation: {
			rules: [{ required: true, errorMessage: '请输入省市区' }]
		},
		address: {
			rules: [{ required: true, errorMessage: '请输入详细地址' }]
		},
	}
	// 表单组件实例
	const formRef = ref()

	// 提交表单
	const onSubmit = async () => {
		try {
			// 校验整个表单
			await formRef.value.validate()

			if (query.id) {
				// 修改地址请求
				await putMemberAddressByIdAPI(query.id, form.value)
			} else {
				// 新建地址请求
				await postMemberAddressAPI(form.value)
			}

			// 成功提示
			uni.showToast({
				title: '保存成功'
			})
			setTimeout(() => {
				uni.navigateBack()
			}, 500)
		} catch (e) {
			uni.showToast({
				title: '请填写完整信息'
			})
		}

	}
</script>

<template>
	<view class="content">
		<uni-forms :rules="rules" :model="form" ref="formRef">
			<!-- 表单内容 -->
			<uni-forms-item class="form-item" name="receiver">
				<text class="label">收货人</text>
				<input class="input" placeholder="请填写收货人姓名" v-model="form.receiver" />
			</uni-forms-item>
			<uni-forms-item name="contact" class="form-item">
				<text class="label">手机号码</text>
				<input class="input" placeholder="请填写收货人手机号码" v-model="form.contact" />
			</uni-forms-item>
			<uni-forms-item class="form-item" name="fullLocation">
				<text class="label">所在地区</text> <!--                       split 将字符串分割成数组 -->
				<picker class="picker" mode="region" :value="form.fullLocation.split(' ')" @change="onRegionChange">
					<view v-if="form.fullLocation">{{ form.fullLocation}}</view>
					<view v-else class="placeholder">请选择省/市/区(县)</view>
				</picker>
			</uni-forms-item>
			<uni-forms-item name="address" class="form-item">
				<text class="label">详细地址</text>
				<input class="input" placeholder="街道、楼牌号等信息" v-model="form.address" />
			</uni-forms-item>
			<uni-forms-item class="form-item">
				<label class="label">设为默认地址</label>
				<switch class="switch" color="#27ba9b" :checked="form.isDefault === 1" @change="onSwitchChange" />
			</uni-forms-item>
		</uni-forms>
	</view>
	<!-- 提交按钮 -->
	<button class="button" @tap="onSubmit">保存并使用</button>
</template>

<style lang="less">
	page {
		background-color: #f4f4f4;
	}

	.content {
		margin: 20rpx 20rpx 0;
		padding: 0 20rpx;
		border-radius: 10rpx;
		background-color: #fff;

		.form-item,
		.uni-forms-item {
			display: flex;
			align-items: center;
			min-height: 96rpx;
			padding: 25rpx 10rpx 40rpx;
			background-color: #fff;
			font-size: 28rpx;
			border-bottom: 1rpx solid #ddd;
			position: relative;
			margin-bottom: 0;

			// 调整 uni-forms 样式
			.uni-forms-item__content {
				display: flex;
			}

			.uni-forms-item__error {
				margin-left: 200rpx;
			}

			&:last-child {
				border: none;
			}

			.label {
				width: 200rpx;
				color: #333;
			}

			.input {
				flex: 1;
				display: block;
				height: 46rpx;
			}

			.switch {
				position: absolute;
				right: -20rpx;
				transform: scale(0.8);
			}

			.picker {
				flex: 1;
			}

			.placeholder {
				color: #808080;
			}
		}
	}

	.button {
		height: 80rpx;
		margin: 30rpx 20rpx;
		color: #fff;
		border-radius: 80rpx;
		font-size: 30rpx;
		background-color: #27ba9b;
	}
</style>