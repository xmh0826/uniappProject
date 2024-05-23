"use strict";
const common_vendor = require("../../../../common/vendor.js");
const services_order = require("../../../../services/order.js");
const services_constants = require("../../../../services/constants.js");
const services_pay = require("../../../../services/pay.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "OrderList",
  props: {
    orderState: {}
  },
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const props = __props;
    const queryParams = {
      page: 1,
      pageSize: 5,
      orderState: props.orderState
    };
    const orderList = common_vendor.ref([]);
    const getMemberOrderData = async () => {
      const res = await services_order.getMemberOrderAPI(queryParams);
      orderList.value = res.result.items;
    };
    common_vendor.onMounted(() => {
      getMemberOrderData();
    });
    const onOrderPay = async (id) => {
      {
        await services_pay.getPayMockAPI({ orderId: id });
      }
      common_vendor.index.showToast({
        title: "支付成功"
      });
      const order = orderList.value.find((v) => v.id === id);
      order.orderState = services_constants.OrderState.DaiFaHuo;
    };
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.f(orderList.value, (order, k0, i0) => {
          return common_vendor.e({
            a: common_vendor.t(order.createTime),
            b: common_vendor.t(common_vendor.unref(services_constants.orderStateList)[order.orderState].text),
            c: order.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia
          }, order.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia ? {} : {}, {
            d: common_vendor.f(order.skus, (sku, k1, i1) => {
              return {
                a: sku.image,
                b: common_vendor.t(sku.name),
                c: common_vendor.t(sku.attrsText),
                d: sku.id
              };
            }),
            e: `/pagesOrder/detail/detail?id=${order.id}`,
            f: common_vendor.t(order.totalNum),
            g: common_vendor.t(order.payMoney),
            h: order.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan
          }, order.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan ? {
            i: common_vendor.o(($event) => onOrderPay(order.id), order.id)
          } : common_vendor.e({
            j: `/pagesOrder/create/create?orderId=id`,
            k: order.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo
          }, order.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo ? {} : {}), {
            l: order.id
          });
        }),
        b: common_vendor.t("没有更多数据~"),
        c: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.bottom) + "px"
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/pagesOrder/list/components/OrderList/OrderList.vue"]]);
wx.createComponent(Component);
