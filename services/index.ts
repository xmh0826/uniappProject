import { http } from '@/utils/http'
import { PageParams } from '../types/global'
import { BannerItem, CategoryItem, GuessItem, HotItem, PageResult } from '../types/home'

/**
 * 首页-广告区域-小程序
 * 
 * @param: distributionSite 广告区域展示位置1 为首页（默认值）2 为商品分类页  示例值:1
 */

export const getHomeBannerAPI = (distributionSite = 1) => {
	return http<BannerItem[]>({
		method: 'GET',
		url: '/home/banner',
		data: {
			distributionSite
		}
	})
}

// 首页-前台分类-小程序
// GET
// /home/category/mutli

export const getHomeCategoryAPI = () => {
	return http<CategoryItem[]>({
		method: 'GET',
		url: '/home/category/mutli',
		data: {

		}
	})
}

// 首页-热门推荐-小程序
// GET
// /home/hot/mutli
export const getHomeHotMutliAPI = () => {
	return http<HotItem[]>({
		method: 'GET',
		url: '/home/hot/mutli',
		data: {

		}
	})
}

// 猜你喜欢-小程序
// GET
// /home/goods/guessLike                      ?:可选data的意思
export const getHomeGoodsGuessLikeAPI = (data ?: PageParams) => {
	return http<PageResult<GuessItem>>({
		method: 'GET',
		url: '/home/goods/guessLike',
		data
	})
}