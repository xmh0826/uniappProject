import {
	defineStore
} from 'pinia';
import {
	ref
} from 'vue'
import { LoginResult } from '../../types/member';

// 定义 Store 成员仓库
export const useMemberStore = defineStore(
	'member',
	() => {
		// 会员信息
		const profile = ref<LoginResult>()

		// 保存会员信息，登录时使用
		const setProfile = (val : LoginResult) => {
			profile.value = val
		}

		// 清理会员信息，退出时使用
		const clearProfile = () => {
			profile.value = undefined
		}

		// 记得 return
		return {
			profile,
			setProfile,
			clearProfile,
		}
	},
	// TODO: 持久化存储
	{
		// 网页端配置
		// persist: true,
		persist: {
			storage: {
				getItem(key) {
					return uni.getStorageSync(key)
				},
				setItem(key, value) {
					uni.setStorageSync(key, value)
				}
			}
		}
	},
)