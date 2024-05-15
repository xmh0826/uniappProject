// 加入购物车
// POST

import { http } from "../utils/http"
import { CartItem } from "../types/cart"

// /member/cart
/**
 * 加入购物车
 * @param data 请求体参数
 */
export const postMemberCartAPI = (data : { skuId : string, count : number }) => {
	return http({
		method: 'POST',
		url: '/member/cart',
		data
	})
}

// 获取购物车列表
// GET
// /member/cart
export const getMemberCartAPI = () => {
	return http<CartItem[]>({
		method: 'GET',
		url: '/member/cart'
	})
}

// 删除/清空购物车单品
// DELETE
// /member/cart

/**
 * 删除/清空购物车单品
 * @param data 请求体参数 ids:SkuId 集合
 */
export const deleteMemberCartAPI = (data : { ids : string[] }) => {
	return http({
		method: 'DELETE',
		url: '/member/cart',
		data
	})
}

// 修改购物车单品
// PUT
// /member/cart/{skuId}

/**
 * 修改购物车单品
 * @param skuId SKUID
 * @param data selected 选中状态 count 商品数量
 */
export const putMemberCartBySkuIdAPI = (skuId : string, data : {
	selected ?: boolean, count ?: number
}) => {
	return http({
		method: "PUT",
		url: `/member/cart/${skuId}`,
		data
	})
}

// 购物车全选/取消全选
// PUT
// /member/cart/selected
export const putMemberCartSelectedAPI = (data : { selected : boolean }) => {
	return http({
		method: "PUT",
		url: "/member/cart/selected",
		data
	})
}