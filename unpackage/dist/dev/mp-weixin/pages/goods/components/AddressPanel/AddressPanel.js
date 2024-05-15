"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "AddressPanel",
  props: {
    list: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => emit("close")),
        b: common_vendor.f(_ctx.list, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.receiver),
            b: common_vendor.t(item.contact),
            c: common_vendor.t(item.fullLocation),
            d: common_vendor.t(item.address),
            e: item.id
          };
        })
      }, {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/pages/goods/components/AddressPanel/AddressPanel.vue"]]);
wx.createComponent(Component);
