"use strict";
const common_vendor = require("../common/vendor.js");
const useGuessList = () => {
  const guessRef = common_vendor.ref();
  const onScrolltolower = () => {
    guessRef.value.getMore();
  };
  return {
    guessRef,
    onScrolltolower
  };
};
exports.useGuessList = useGuessList;
