/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import XtxGuess from '../components/XtxGuess/XtxGuess.vue'
declare module 'vue' {
	export interface GlobalComponents {
		//
	}
}

// 组件实例类型
export type XTXGuessInstance = InstanceType<typeof XtxGuess>