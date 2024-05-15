"use strict";
const common_vendor = require("../../common/vendor.js");
const services_index = require("../../services/index.js");
const composables_index = require("../../composables/index.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_CustomNavber2 = common_vendor.resolveComponent("CustomNavber");
  const _easycom_XtxSwiper2 = common_vendor.resolveComponent("XtxSwiper");
  const _easycom_CategoryPanel2 = common_vendor.resolveComponent("CategoryPanel");
  const _easycom_HotPanel2 = common_vendor.resolveComponent("HotPanel");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  (_easycom_CustomNavber2 + _easycom_XtxSwiper2 + _easycom_CategoryPanel2 + _easycom_HotPanel2 + _easycom_XtxGuess2)();
}
const _easycom_CustomNavber = () => "../../components/CustomNavber/CustomNavber.js";
const _easycom_XtxSwiper = () => "../../components/XtxSwiper/XtxSwiper.js";
const _easycom_CategoryPanel = () => "../../components/CategoryPanel/CategoryPanel.js";
const _easycom_HotPanel = () => "../../components/HotPanel/HotPanel.js";
const _easycom_XtxGuess = () => "../../components/XtxGuess/XtxGuess.js";
if (!Math) {
  (_easycom_CustomNavber + common_vendor.unref(PageSkeleton) + _easycom_XtxSwiper + _easycom_CategoryPanel + _easycom_HotPanel + _easycom_XtxGuess)();
}
const PageSkeleton = () => "./components/PageSkeleton/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const getHomeBannerData = async () => {
      const res = await services_index.getHomeBannerAPI();
      bannerList.value = res.result;
    };
    const categoryList = common_vendor.ref([]);
    const getHomeCategoryData = async () => {
      const res = await services_index.getHomeCategoryAPI();
      categoryList.value = res.result;
    };
    const hotMutliList = common_vendor.ref();
    const getHomeHotMutliData = async () => {
      const res = await services_index.getHomeHotMutliAPI();
      hotMutliList.value = res.result;
    };
    const isLoading = common_vendor.ref(false);
    common_vendor.onLoad(async () => {
      isLoading.value = true;
      await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotMutliData()]);
      isLoading.value = false;
    });
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const isTriggered = common_vendor.ref(false);
    const onRefresherrefresh = async () => {
      isTriggered.value = true;
      guessRef.value.resetData;
      await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotMutliData(), guessRef.value.getMore]);
      isTriggered.value = false;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: isLoading.value
      }, isLoading.value ? {} : {
        b: common_vendor.p({
          list: bannerList.value
        }),
        c: common_vendor.p({
          list: categoryList.value
        }),
        d: common_vendor.p({
          list: hotMutliList.value
        }),
        e: common_vendor.sr(guessRef, "542b9ce6-5", {
          "k": "guessRef"
        })
      }, {
        f: common_vendor.o(onRefresherrefresh),
        g: isTriggered.value,
        h: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        )
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
