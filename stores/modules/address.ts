import { defineStore } from 'pinia';
import { ref } from 'vue';
import { AddressItem } from '../../types/address';

export const useAddressStore = defineStore('address', () => {
	const selectedAddress = ref<AddressItem>()

	const changeSelectedAddress = (v : AddressItem) => {
		selectedAddress.value = v
	}

	return {
		selectedAddress,
		changeSelectedAddress
	}
})