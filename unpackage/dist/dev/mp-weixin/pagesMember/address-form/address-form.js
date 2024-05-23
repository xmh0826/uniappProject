"use strict";
const common_vendor = require("../../common/vendor.js");
const services_address = require("../../services/address.js");
if (!Array) {
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_forms_item2 + _easycom_uni_forms2)();
}
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_forms_item + _easycom_uni_forms)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address-form",
  props: {
    id: {}
  },
  setup(__props) {
    const form = common_vendor.ref({
      receiver: "",
      // 收货人
      contact: "",
      // 联系方式
      fullLocation: "",
      // 省市区(前端展示)
      provinceCode: "",
      // 省份编码(后端参数)
      cityCode: "",
      // 城市编码(后端参数)
      countyCode: "",
      // 区/县编码(后端参数)
      address: "",
      // 详细地址
      isDefault: 0
      // 默认地址，1为是，0为否
    });
    const query = __props;
    const getMemberAddressByIdData = async () => {
      if (query.id) {
        const res = await services_address.getMemberAddressByIdAPI(query.id);
        Object.assign(form.value, res.result);
      }
    };
    common_vendor.onLoad(() => {
      getMemberAddressByIdData();
    });
    common_vendor.index.setNavigationBarTitle({
      title: query.id ? "修改地址" : "新建地址"
    });
    const onRegionChange = (e) => {
      form.value.fullLocation = e.detail.value.join(" ");
      const [provinceCode, cityCode, countyCode] = e.detail.code;
      Object.assign(form.value, { provinceCode, cityCode, countyCode });
    };
    const onSwitchChange = (e) => {
      form.value.isDefault = e.detail.value ? 1 : 0;
    };
    const rules = {
      receiver: {
        rules: [{
          // require: true   必填项
          required: true,
          errorMessage: "请输入收货人姓名"
        }]
      },
      contact: {
        rules: [
          { required: true, errorMessage: "请输入联系方式" },
          // 正则表达式
          { pattern: /^[1-9]\d{10}$/, errorMessage: "手机号格式错误" }
        ]
      },
      fullLocation: {
        rules: [{ required: true, errorMessage: "请输入省市区" }]
      },
      address: {
        rules: [{ required: true, errorMessage: "请输入详细地址" }]
      }
    };
    const formRef = common_vendor.ref();
    const onSubmit = async () => {
      try {
        await formRef.value.validate();
        if (query.id) {
          await services_address.putMemberAddressByIdAPI(query.id, form.value);
        } else {
          await services_address.postMemberAddressAPI(form.value);
        }
        common_vendor.index.showToast({
          title: "保存成功"
        });
        setTimeout(() => {
          common_vendor.index.navigateBack();
        }, 500);
      } catch (e) {
        common_vendor.index.showToast({
          title: "请填写完整信息"
        });
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: form.value.receiver,
        b: common_vendor.o(($event) => form.value.receiver = $event.detail.value),
        c: common_vendor.p({
          name: "receiver"
        }),
        d: form.value.contact,
        e: common_vendor.o(($event) => form.value.contact = $event.detail.value),
        f: common_vendor.p({
          name: "contact"
        }),
        g: form.value.fullLocation
      }, form.value.fullLocation ? {
        h: common_vendor.t(form.value.fullLocation)
      } : {}, {
        i: form.value.fullLocation.split(" "),
        j: common_vendor.o(onRegionChange),
        k: common_vendor.p({
          name: "fullLocation"
        }),
        l: form.value.address,
        m: common_vendor.o(($event) => form.value.address = $event.detail.value),
        n: common_vendor.p({
          name: "address"
        }),
        o: form.value.isDefault === 1,
        p: common_vendor.o(onSwitchChange),
        q: common_vendor.sr(formRef, "7ad73601-0", {
          "k": "formRef"
        }),
        r: common_vendor.p({
          rules,
          model: form.value
        }),
        s: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/pagesMember/address-form/address-form.vue"]]);
wx.createPage(MiniProgramPage);
