"use strict";
const common_vendor = require("../../common/vendor.js");
const services_order = require("../../services/order.js");
const stores_modules_address = require("../../stores/modules/address.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "create",
  props: {
    skuId: {},
    count: {}
  },
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const buyerMessage = common_vendor.ref("");
    const deliveryList = common_vendor.ref([
      { type: 1, text: "时间不限 (周一至周日)" },
      { type: 2, text: "工作日送 (周一至周五)" },
      { type: 3, text: "周末配送 (周六至周日)" }
    ]);
    const activeIndex = common_vendor.ref(0);
    const activeDelivery = common_vendor.computed(() => deliveryList.value[activeIndex.value]);
    const onChangeDelivery = (ev) => {
      activeIndex.value = ev.detail.value;
    };
    const query = __props;
    const orderPre = common_vendor.ref();
    const getMemberOrderPreData = async () => {
      if (query.count && query.skuId) {
        const res = await services_order.getMemberOrderPreNowAPI({
          skuId: query.skuId,
          count: query.count
        });
        orderPre.value = res.result;
      } else {
        const res = await services_order.getMemberOrderPreAPI();
        orderPre.value = res.result;
      }
    };
    const getMemberOrderRepurchaseByidData = async () => {
      if (!query.count) {
        await services_order.getMemberOrderRepurchaseByidAPI(query.skuId);
      }
    };
    common_vendor.onLoad(() => {
      getMemberOrderPreData();
      getMemberOrderRepurchaseByidData();
    });
    const addressStore = stores_modules_address.useAddressStore();
    const selectedAddress = common_vendor.computed(() => {
      return addressStore.selectedAddress || orderPre.value.userAddresses.find((v) => v.isDefault);
    });
    const onOrderSubmit = async () => {
      var _a;
      if (!selectedAddress.value.id) {
        return common_vendor.index.showToast({
          title: "请选择收货地址"
        });
      }
      const res = await services_order.postMemberOrderAPI({
        addressId: (_a = selectedAddress.value) == null ? void 0 : _a.id,
        buyerMessage: buyerMessage.value,
        deliveryTimeType: activeDelivery.value.type,
        //                          map: 重新映射 返回新对象
        goods: orderPre.value.goods.map((v) => ({ count: v.count, skuId: v.skuId })),
        payChannel: 2,
        payType: 1
      });
      common_vendor.index.redirectTo({
        url: `/pagesOrder/detail/detail?id=${res.result.id}`
      });
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: selectedAddress.value
      }, selectedAddress.value ? {
        b: common_vendor.t(selectedAddress.value.receiver),
        c: common_vendor.t(selectedAddress.value.contact),
        d: common_vendor.t(selectedAddress.value.fullLocation),
        e: common_vendor.t(selectedAddress.value.address)
      } : {}, {
        f: common_vendor.f(orderPre.value.goods, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.payPrice),
            e: common_vendor.t(item.price),
            f: common_vendor.t(item.count),
            g: item.skuId,
            h: `/pages/goods/goods?id=${item.id}`
          };
        }),
        g: common_vendor.t(activeDelivery.value.text),
        h: deliveryList.value,
        i: common_vendor.o(onChangeDelivery),
        j: buyerMessage.value,
        k: common_vendor.o(($event) => buyerMessage.value = $event.detail.value),
        l: common_vendor.t(orderPre.value.summary.totalPrice.toFixed(2)),
        m: common_vendor.t(orderPre.value.summary.postFee.toFixed(2)),
        n: common_vendor.t(orderPre.value.summary.totalPayPrice.toFixed(2)),
        o: ((_a = selectedAddress.value) == null ? void 0 : _a.id) ? 1 : "",
        p: common_vendor.o(onOrderSubmit),
        q: ((_b = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _b.bottom) + "px"
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/pagesOrder/create/create.vue"]]);
wx.createPage(MiniProgramPage);
