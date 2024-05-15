"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "XtxSwiper",
  props: {
    list: {}
  },
  setup(__props) {
    const activeIndex = common_vendor.ref(0);
    const onChange = (e) => {
      activeIndex.value = e.detail.current;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(_ctx.list, (item, k0, i0) => {
          return {
            a: item.imgUrl,
            b: item.id
          };
        }),
        b: common_vendor.o(onChange),
        c: common_vendor.f(_ctx.list, (item, index, i0) => {
          return {
            a: item.id,
            b: index === activeIndex.value ? 1 : ""
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/components/XtxSwiper/XtxSwiper.vue"]]);
wx.createComponent(Component);
