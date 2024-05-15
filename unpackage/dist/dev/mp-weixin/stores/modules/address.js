"use strict";
const common_vendor = require("../../common/vendor.js");
const useAddressStore = common_vendor.defineStore("address", () => {
  const selectedAddress = common_vendor.ref();
  const changeSelectedAddress = (v) => {
    selectedAddress.value = v;
  };
  return {
    selectedAddress,
    changeSelectedAddress
  };
});
exports.useAddressStore = useAddressStore;
