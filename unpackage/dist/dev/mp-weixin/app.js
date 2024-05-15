"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/cart/cart.js";
  "./pages/category/category.js";
  "./pages/login/login.js";
  "./pages/hot/hot.js";
  "./pages/goods/goods.js";
  "./pages/cart/cart2.js";
  "./pagesMember/settings/settings.js";
  "./pagesMember/profile/profile.js";
  "./pagesMember/address/address.js";
  "./pagesMember/address-form/address-form.js";
  "./pagesOrder/create/create.js";
  "./pagesOrder/detail/detail.js";
  "./pagesOrder/payment/payment.js";
  "./pagesOrder/list/list.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("App Launch");
    });
    common_vendor.onShow(() => {
      console.log("App Show");
    });
    common_vendor.onHide(() => {
      console.log("App Hide");
    });
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(common_vendor.createPinia());
  return {
    app,
    Pinia: common_vendor.Pinia
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
