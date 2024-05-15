// 添加收货地址
// POST
// /member/address

import { AddressItem, AddressParams } from "../types/address"
import { http } from "../utils/http"

/**
 * 添加收货地址
 * @param data 请求参数
 */
export const postMemberAddressAPI = (data : AddressParams) => {
	return http({
		method: 'POST',
		url: '/member/address',
		data
	})
}

// 获取收货地址列表
// GET
// /member/address
/**
 * 获取收货地址列表
 */
export const getMemberAddressAPI = () => {
	return http<AddressItem[]>({
		method: 'GET',
		url: '/member/address'
	})
}

// 获取收货地址详情
// GET
// /member/address/{id}

/**
 * 获取收货地址详情
 * @prarm id 地址id（路径详情）
 */
export const getMemberAddressByIdAPI = (id : string) => {
	// 获取一个数据就不用写成数组形式
	return http<AddressItem>({
		method: 'GET',
		url: `/member/address/${id}`
	})
}

// 修改收货地址
// PUT
// /member/address/{id}
/**
 * 修改收货地址
 * @param id 地址id（路径参数）
 * @param data 表单数据(请求体参数)
 */
export const putMemberAddressByIdAPI = (id : string, data : AddressParams) => {
	return http<AddressItem>({
		method: 'PUT',
		url: `/member/address/${id}`,
		data,
	})
}

// 删除收货地址
// DELETE
// /member/address/{id}
export const deleteMemberAddressByIdAPI = (id : string) => {
	return http({
		method: 'DELETE',
		url: `/member/address/${id}`
	})
}