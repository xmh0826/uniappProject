"use strict";
const common_vendor = require("../../common/vendor.js");
const services_goods = require("../../services/goods.js");
const services_cart = require("../../services/cart.js");
const services_address = require("../../services/address.js");
require("../../utils/http.js");
require("../../stores/index.js");
require("../../stores/modules/member.js");
if (!Array) {
  const _easycom_vk_data_goods_sku_popup2 = common_vendor.resolveComponent("vk-data-goods-sku-popup");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_vk_data_goods_sku_popup2 + _easycom_uni_popup2)();
}
const _easycom_vk_data_goods_sku_popup = () => "../../uni_modules/vk-data-goods-sku-popup/components/vk-data-goods-sku-popup/vk-data-goods-sku-popup.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_vk_data_goods_sku_popup + common_vendor.unref(AddressPanel) + common_vendor.unref(ServicePanel) + _easycom_uni_popup)();
}
const AddressPanel = () => "./components/AddressPanel/AddressPanel.js";
const ServicePanel = () => "./components/ServicePanel/ServicePanel.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "goods",
  props: {
    id: {}
  },
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const query = __props;
    const goods = common_vendor.ref();
    const getGoodsData = async () => {
      const res = await services_goods.getGoodsByIdAPI(query.id);
      goods.value = res.result;
      localdata.value = {
        _id: res.result.id,
        name: res.result.name,
        goods_thumb: res.result.mainPictures[0],
        spec_list: res.result.specs.map((v) => {
          return {
            name: v.name,
            list: v.values
          };
        }),
        sku_list: res.result.skus.map((v) => {
          return {
            _id: v.id,
            goods_id: res.result.id,
            goods_name: res.result.name,
            image: v.picture,
            price: v.price * 100,
            stock: v.inventory,
            sku_name_arr: v.specs.map((vv) => vv.valueName)
          };
        })
      };
    };
    const addressList = common_vendor.ref([]);
    const getAddressListData = async () => {
      const res = await services_address.getMemberAddressAPI();
      addressList.value = res.result;
    };
    common_vendor.onLoad(() => {
      getGoodsData();
      getAddressListData();
    });
    const currentIndex = common_vendor.ref(0);
    const onChange = (e) => {
      currentIndex.value = e.detail.current;
    };
    const onTapImage = (url) => {
      common_vendor.index.previewImage({
        current: url,
        urls: goods.value.mainPictures
      });
    };
    const popup = common_vendor.ref();
    const popupName = common_vendor.ref();
    const openPopup = (name) => {
      var _a;
      popupName.value = name;
      (_a = popup.value) == null ? void 0 : _a.open();
    };
    const isShowSku = common_vendor.ref(false);
    const localdata = common_vendor.ref({});
    const mode = common_vendor.ref(
      2
      /* Cart */
    );
    const openSkuPopup = (v) => {
      isShowSku.value = true;
      mode.value = v;
    };
    const skuPopupRef = common_vendor.ref();
    const selectArrText = common_vendor.computed(() => {
      var _a, _b;
      return ((_b = (_a = skuPopupRef.value) == null ? void 0 : _a.selectArr) == null ? void 0 : _b.trim()) || "请选择商品规格";
    });
    const onAddCart = async (e) => {
      await services_cart.postMemberCartAPI({ skuId: e._id, count: e.buy_num });
      common_vendor.index.showToast({
        title: "加入成功"
      });
      isShowSku.value = false;
    };
    const onBuyNow = (e) => {
      common_vendor.index.navigateTo({
        url: `/pagesOrder/create/create?skuId=${e._id}&count=${e.buy_num}`
      });
    };
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g;
      return common_vendor.e({
        a: common_vendor.sr(skuPopupRef, "526a50d6-0", {
          "k": "skuPopupRef"
        }),
        b: common_vendor.o(onAddCart),
        c: common_vendor.o(onBuyNow),
        d: common_vendor.o(($event) => isShowSku.value = $event),
        e: common_vendor.p({
          localdata: localdata.value,
          mode: mode.value,
          ["actived-style"]: {
            color: "#27BA9b",
            borderColor: "#27BA9b",
            backgroundColor: "#E9F8F5"
          },
          modelValue: isShowSku.value
        }),
        f: common_vendor.f((_a = goods.value) == null ? void 0 : _a.mainPictures, (item, k0, i0) => {
          return {
            a: common_vendor.o(($event) => onTapImage(item), item),
            b: item,
            c: item
          };
        }),
        g: common_vendor.o(onChange),
        h: common_vendor.t(currentIndex.value + 1),
        i: common_vendor.t(goods.value.mainPictures.length),
        j: common_vendor.t((_b = goods.value) == null ? void 0 : _b.price),
        k: common_vendor.t((_c = goods.value) == null ? void 0 : _c.name),
        l: common_vendor.t((_d = goods.value) == null ? void 0 : _d.desc),
        m: common_vendor.t(selectArrText.value),
        n: common_vendor.o(($event) => openSkuPopup(1)),
        o: common_vendor.o(($event) => openPopup("address")),
        p: common_vendor.o(($event) => openPopup("service")),
        q: common_vendor.f((_e = goods.value) == null ? void 0 : _e.details.properties, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: item.name
          };
        }),
        r: common_vendor.f((_f = goods.value) == null ? void 0 : _f.details.pictures, (item, k0, i0) => {
          return {
            a: item,
            b: item
          };
        }),
        s: common_vendor.f(goods.value.similarProducts, (item, k0, i0) => {
          return {
            a: item.picture,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.price),
            d: item.id,
            e: `/pages/goods/goods?id=${item.id}`
          };
        }),
        t: common_vendor.o(($event) => openSkuPopup(2)),
        v: common_vendor.o(($event) => openSkuPopup(3)),
        w: ((_g = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _g.bottom) + "px",
        x: popupName.value === "address"
      }, popupName.value === "address" ? {
        y: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        }),
        z: common_vendor.p({
          list: addressList.value
        })
      } : {
        A: common_vendor.o(($event) => {
          var _a2;
          return (_a2 = popup.value) == null ? void 0 : _a2.close();
        })
      }, {
        B: common_vendor.sr(popup, "526a50d6-1", {
          "k": "popup"
        }),
        C: common_vendor.p({
          type: "bottom",
          ["background-color"]: "#fff"
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/pages/goods/goods.vue"]]);
wx.createPage(MiniProgramPage);
