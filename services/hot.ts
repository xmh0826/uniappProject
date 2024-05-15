import { PageParams } from "../types/global"
import { HotResult } from "../types/hot"
import { http } from "../utils/http"

type HotPageParams = PageParams & { subType : string }
/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url : string, data ?: HotPageParams) => {
	return http<HotResult>({
		method: 'GET',
		url,
		data
	})
}