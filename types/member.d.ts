
/**
 *通用用户信息
 */
type BaseProfile = {
	/**账户名 */
	accout : string
	/**头像 */
	avatar : string
	/**用户ID */
	id : number
	/**手机号 */
	mobile : number
	/**昵称 */
	nickname : string
}

export type LoginResult = BaseProfile & {
	/** 登录凭证 */
	token : string
}

/** 个人信息 用户详情信息 */
export type ProfileDetail = BaseProfile & {
	/** 性别 */
	gender ?: Gender
	/** 生日 */
	birthday ?: string
	/** 省市区 */
	fullLocation ?: string
	/** 职业 */
	profession ?: string
}
/** 性别 */
export type Gender = '女' | '男'

/** 个人信息 修改请求体参数
  @param data 请求体参数
  **/
export type ProfileParams = Pick<
	ProfileDetail,
	'nickname' | 'gender' | 'birthday' | 'profession'> & {
		/** 省份编码 **/
		provinceCode ?: "string",
		/** 城市编码*/
		cityCode ?: "string",
		/** 区/县编码*/
		countyCode ?: "string"
	}