"use strict";
const common_vendor = require("../../common/vendor.js");
const composables_index = require("../../composables/index.js");
const services_order = require("../../services/order.js");
const services_constants = require("../../services/constants.js");
const services_pay = require("../../services/pay.js");
if (!Array) {
  const _easycom_uni_countdown2 = common_vendor.resolveComponent("uni-countdown");
  const _easycom_XtxGuess2 = common_vendor.resolveComponent("XtxGuess");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_countdown2 + _easycom_XtxGuess2 + _easycom_uni_popup2)();
}
const _easycom_uni_countdown = () => "../../uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
const _easycom_XtxGuess = () => "../../components/XtxGuess/XtxGuess.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_countdown + _easycom_XtxGuess + common_vendor.unref(PageSkeleton) + _easycom_uni_popup)();
}
const PageSkeleton = () => "./components/PageSkeleton.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "detail",
  props: {
    id: {}
  },
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const { guessRef, onScrolltolower } = composables_index.useGuessList();
    const popup = common_vendor.ref();
    const reasonList = common_vendor.ref([
      "商品无货",
      "不想要了",
      "商品信息填错了",
      "地址信息填写错误",
      "商品降价",
      "其它"
    ]);
    const reason = common_vendor.ref("");
    const onCopy = (id) => {
      common_vendor.index.setClipboardData({ data: id });
    };
    const query = __props;
    const pages = getCurrentPages();
    const pageInstance = pages.at(-1);
    common_vendor.onReady(() => {
      pageInstance.animate(".navbar", [{
        backgroundColor: "transparent"
        // 第一个动画
      }, {
        backgroundColor: "#f8f8f8"
        // 第二个动画
      }], 1e3, {
        scrollSource: "#scroller",
        // id名称必须与scroll-view 对应
        timeRange: 2e3,
        startScrollOffset: 0,
        // 进入到此距离开始执行第二个动画
        endScrollOffset: 100
        // 进入到第二个距离后执行完毕第二个动画
      });
    });
    const order = common_vendor.ref();
    const getMemberOrderByIdData = async () => {
      const res = await services_order.getMemberOrderByIdAPI(query.id);
      order.value = res.result;
      if ([services_constants.OrderState.DaiShouHuo, services_constants.OrderState.DaiPingJia, services_constants.OrderState.YiWanCheng].includes(order.value.orderState)) {
        getMemberOrderLogisticsByIdData();
      }
    };
    const logisticList = common_vendor.ref([]);
    const getMemberOrderLogisticsByIdData = async () => {
      const res = await services_order.getMemberOrderLogisticsByIdAPI(query.id);
      logisticList.value = res.result.list;
    };
    common_vendor.onLoad(() => {
      getMemberOrderByIdData();
    });
    const onTimeup = () => {
      order.value.orderState = services_constants.OrderState.YiQuXiao;
    };
    const onOrderPay = async () => {
      {
        await services_pay.getPayMockAPI({ orderId: query.id });
      }
      common_vendor.index.redirectTo({
        url: `/pagesOrder/payment/payment?id=${query.id}`
      });
    };
    const isDev = true;
    const onOrderSend = async () => {
      {
        await services_order.getMemberOrderConsignmentByIdAPI(query.id);
        common_vendor.index.showToast({
          title: "模拟发货完成"
        });
        order.value.orderState = services_constants.OrderState.DaiShouHuo;
      }
    };
    const onOrderConfirm = () => {
      common_vendor.index.showModal({
        content: "为保障您的权益，请收到货并确认无误后，再确认收货",
        success: async (success) => {
          if (success.confirm) {
            const res = await services_order.putMemberOrderReceiptByIdAPI(query.id);
            order.value = res.result;
          }
        }
      });
    };
    const onOrderDelete = () => {
      common_vendor.index.showModal({
        content: "是否删除订单",
        success: async (success) => {
          if (success.confirm) {
            await services_order.deleteMemberOrderAPI({ ids: [query.id] });
            common_vendor.index.redirectTo({
              url: "/pagesOrder/list/list"
            });
          }
        }
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c;
      return common_vendor.e({
        a: common_vendor.unref(pages).length > 1
      }, common_vendor.unref(pages).length > 1 ? {} : {}, {
        b: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        c: order.value
      }, order.value ? common_vendor.e({
        d: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan ? {
        e: common_vendor.o(onTimeup),
        f: common_vendor.p({
          second: order.value.countdown,
          color: "#fff",
          ["splitor-color"]: "#fff",
          ["show-day"]: false,
          ["show-colon"]: false
        }),
        g: common_vendor.o(onOrderPay)
      } : common_vendor.e({
        h: common_vendor.t(common_vendor.unref(services_constants.orderStateList)[order.value.orderState].text),
        i: `/pagesOrder/create/create?orderId=${query.id}`,
        j: common_vendor.unref(isDev) && order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFaHuo
      }, common_vendor.unref(isDev) && order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFaHuo ? {
        k: common_vendor.o(onOrderSend)
      } : {}, {
        l: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo ? {
        m: common_vendor.o(onOrderConfirm)
      } : {}), {
        n: common_vendor.unref(safeAreaInsets).top + 20 + "px",
        o: common_vendor.f(logisticList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.text),
            b: common_vendor.t(item.time),
            c: item.id
          };
        }),
        p: common_vendor.t(order.value.receiverContact),
        q: common_vendor.t(order.value.receiverMobile),
        r: common_vendor.t(order.value.receiverAddress),
        s: common_vendor.f(order.value.skus, (item, k0, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.attrsText),
            d: common_vendor.t(item.curPrice),
            e: common_vendor.t(item.quantity),
            f: item.id,
            g: `/pages/goods/goods?id=${item.spuId}`
          };
        }),
        t: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia ? {} : {}, {
        v: common_vendor.t(order.value.totalMoney),
        w: common_vendor.t(order.value.postFee),
        x: common_vendor.t(order.value.payMoney),
        y: common_vendor.t(query.id),
        z: common_vendor.o(($event) => onCopy(query.id)),
        A: common_vendor.t(order.value.createTime),
        B: common_vendor.sr(guessRef, "a765a992-1", {
          "k": "guessRef"
        }),
        C: ((_b = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _b.bottom) + "px",
        D: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiFuKuan ? {
        E: common_vendor.o(onOrderPay),
        F: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.open) == null ? void 0 : _b2.call(_a2);
        })
      } : common_vendor.e({
        G: `/pagesOrder/create/create?orderId=${query.id}`,
        H: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiShouHuo ? {} : {}, {
        I: order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia
      }, order.value.orderState === common_vendor.unref(services_constants.OrderState).DaiPingJia ? {} : {}, {
        J: order.value.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia
      }, order.value.orderState >= common_vendor.unref(services_constants.OrderState).DaiPingJia ? {
        K: common_vendor.o(onOrderDelete)
      } : {}), {
        L: ((_c = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _c.bottom) + "px"
      }) : {}, {
        M: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onScrolltolower) && common_vendor.unref(onScrolltolower)(...args)
        ),
        N: common_vendor.f(reasonList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item === reason.value ? 1 : "",
            c: item,
            d: common_vendor.o(($event) => reason.value = item, item)
          };
        }),
        O: common_vendor.o(($event) => {
          var _a2, _b2;
          return (_b2 = (_a2 = popup.value) == null ? void 0 : _a2.close) == null ? void 0 : _b2.call(_a2);
        }),
        P: common_vendor.sr(popup, "a765a992-3", {
          "k": "popup"
        }),
        Q: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/pagesOrder/detail/detail.vue"]]);
wx.createPage(MiniProgramPage);
