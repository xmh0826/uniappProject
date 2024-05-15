"use strict";
const common_vendor = require("../../common/vendor.js");
const services_profile = require("../../services/profile.js");
require("../../stores/index.js");
const stores_modules_member = require("../../stores/modules/member.js");
require("../../utils/http.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "profile",
  setup(__props) {
    const { safeAreaInsets } = common_vendor.index.getSystemInfoSync();
    const profile = common_vendor.ref({});
    const getMemberProfileData = async () => {
      const res = await services_profile.getMemberProfileAPI();
      profile.value = res.result;
    };
    common_vendor.onLoad(() => {
      getMemberProfileData();
    });
    const memberStore = stores_modules_member.useMemberStore();
    const onAvatarChange = () => {
      common_vendor.index.chooseMedia({
        // 最多可以选择的文件个数
        count: 1,
        // 选择文件类型
        mediaType: ["image"],
        success: (res) => {
          const { tempFilePath } = res.tempFiles[0];
          common_vendor.index.uploadFile({
            url: "/member/profile/avatar",
            // 请求参数 通过name
            name: "file",
            // 文件资源路径
            filePath: tempFilePath,
            success(res2) {
              if (res2.statusCode === 200) {
                const avatar = JSON.parse(res2.data).result.avatar;
                profile.value.avatar = avatar;
                memberStore.profile.avatar = avatar;
                common_vendor.index.showToast({
                  title: "更新成功"
                });
              } else {
                common_vendor.index.showToast({
                  title: "更新失败"
                });
              }
            }
          });
        }
      });
    };
    const onGenderChange = (e) => {
      profile.value.gender = e.detail.value;
    };
    const onBirthdayChange = (e) => {
      console.log(e.detail.value);
      profile.value.birthday = e.detail.value;
    };
    let fullLocationCode = [];
    const onFullLocationChange = (e) => {
      profile.value.fullLocation = e.detail.value.join(" ");
      fullLocationCode = e.detail.code;
    };
    const onSubmit = async () => {
      const { nickname, gender, birthday } = profile.value;
      await services_profile.putMmemberProfileAPI({
        // 更新昵称
        nickname,
        // nickname: profile.value.nickname,
        // 更新性别
        gender,
        //  gender: profile.value.gender,
        // 更新生日
        birthday,
        //  birthday: profile.value.birthday
        // 省份编码
        provinceCode: fullLocationCode[0],
        // 城市编码
        cityCode: fullLocationCode[1],
        // 区县编码
        countyCode: fullLocationCode[2]
      });
      memberStore.profile.nickname = profile.value.nickname;
      setTimeout(() => {
        common_vendor.index.showToast({
          icon: "none",
          title: "保存成功"
        });
      }, 500);
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      var _a;
      return common_vendor.e({
        a: ((_a = common_vendor.unref(safeAreaInsets)) == null ? void 0 : _a.top) + "px",
        b: profile.value.avatar,
        c: common_vendor.o(onAvatarChange),
        d: common_vendor.t(profile.value.accout),
        e: profile.value.nickname,
        f: common_vendor.o(($event) => profile.value.nickname = $event.detail.value),
        g: common_vendor.t(profile.value.gender),
        h: profile.value.gender === "男",
        i: common_vendor.o(onGenderChange),
        j: profile.value.gender === "女",
        k: profile.value.birthday
      }, profile.value.birthday ? {
        l: common_vendor.t(profile.value.birthday)
      } : {}, {
        m: /* @__PURE__ */ new Date(),
        n: profile.value.birthday,
        o: common_vendor.o(onBirthdayChange),
        p: profile.value.fullLocation
      }, profile.value.fullLocation ? {
        q: common_vendor.t(profile.value.fullLocation)
      } : {}, {
        r: profile.value.fullLocation.split(" "),
        s: common_vendor.o(onFullLocationChange),
        t: profile.value.profession,
        v: common_vendor.o(onSubmit)
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "E:/work-demo/demo1/pagesMember/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
