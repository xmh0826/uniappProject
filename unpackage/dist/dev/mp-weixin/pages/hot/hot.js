"use strict";
const common_vendor = require("../../common/vendor.js");
const services_hot = require("../../services/hot.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "hot",
  props: {
    type: {}
  },
  setup(__props) {
    const urlMap = [
      { type: "1", title: "特惠推荐", url: "/hot/preference" },
      { type: "2", title: "爆款推荐", url: "/hot/inVogue" },
      { type: "3", title: "一站买全", url: "/hot/oneStop" },
      { type: "4", title: "新鲜好物", url: "/hot/new" }
    ];
    const query = __props;
    const currUrlMap = urlMap.find((v) => v.type === query.type);
    common_vendor.index.setNavigationBarTitle({
      title: currUrlMap.title
    });
    const bannerPicture = common_vendor.ref();
    const subTypes = common_vendor.ref([]);
    const activeIndex = common_vendor.ref(0);
    const getHotRecommendData = async () => {
      const res = await services_hot.getHotRecommendAPI(currUrlMap.url, {
        // 技巧：环境变量，开发环境，修改初始页面方便测试分页结束,爆红也能使用
        page: 30,
        pageSize: 10,
        subType: ""
      });
      bannerPicture.value = res.result.bannerPicture;
      subTypes.value = res.result.subTypes;
    };
    common_vendor.onLoad(() => {
      getHotRecommendData();
    });
    const onScrolltolower = async () => {
      const currSubTypes = subTypes.value[activeIndex.value];
      if (currSubTypes.goodsItems.page < currSubTypes.goodsItems.pages) {
        currSubTypes.goodsItems.page++;
        const res = await services_hot.getHotRecommendAPI(currUrlMap.url, {
          subType: currSubTypes.id,
          page: currSubTypes.goodsItems.page,
          pageSize: currSubTypes.goodsItems.pageSize
        });
        const newsubTypes = res.result.subTypes[activeIndex.value];
        currSubTypes.goodsItems.items.push(...newsubTypes.goodsItems.items);
      } else {
        currSubTypes.finish = true;
        return common_vendor.index.showToast({
          icon: "none",
          title: "没有更多数据啦~"
        });
      }
    };
    return (_ctx, _cache) => {
      return {
        a: bannerPicture.value,
        b: common_vendor.f(subTypes.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index === activeIndex.value ? 1 : "",
            c: item.id,
            d: common_vendor.o(($event) => activeIndex.value = index, item.id)
          };
        }),
        c: common_vendor.f(subTypes.value, (item, index, i0) => {
          return {
            a: common_vendor.f(item.goodsItems.items, (goods, k1, i1) => {
              return {
                a: goods.picture,
                b: common_vendor.t(goods.name),
                c: common_vendor.t(goods.price),
                d: goods,
                e: `/pages/goods/goods?id=${goods.id}`
              };
            }),
            b: common_vendor.t(item.finish ? "已经到底啦~" : "正在加载..."),
            c: item.id,
            d: index === activeIndex.value,
            e: common_vendor.o(onScrolltolower, item.id)
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/pages/hot/hot.vue"]]);
wx.createPage(MiniProgramPage);
