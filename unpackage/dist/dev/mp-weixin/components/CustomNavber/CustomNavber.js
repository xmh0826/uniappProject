"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "CustomNavber",
  setup(__props) {
    const safeAreaInsets = common_vendor.index.getSystemInfoSync().safeAreaInsets;
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0,
        b: common_vendor.unref(safeAreaInsets).top + "px"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/components/CustomNavber/CustomNavber.vue"]]);
wx.createComponent(Component);
