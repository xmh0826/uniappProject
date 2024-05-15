"use strict";
const common_vendor = require("../common/vendor.js");
require("../stores/index.js");
const stores_modules_member = require("../stores/modules/member.js");
const baseURL = "https://pcapi-xiaotuxian-front-devtest.itheima.net";
const httpInterceptor = {
  // 拦截前触发 request 触发前拼接 url
  invoke(options) {
    var _a;
    if (!options.url.startsWith("http")) {
      options.url = baseURL + options.url;
    }
    options.timeout = 1e4;
    console.log(options);
    options.header = {
      // ... 将一个数组（或类数组对象）展开为单独的值。
      ...options.header,
      "source-client": "miniapp"
    };
    const memberStore = stores_modules_member.useMemberStore();
    const token = (_a = memberStore.profile) == null ? void 0 : _a["token"];
    if (token) {
      options.header.Authorization = token;
    }
    console.log(options);
  }
};
common_vendor.index.addInterceptor("request", httpInterceptor);
common_vendor.index.addInterceptor("uploadFile", httpInterceptor);
const http = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      ...options,
      // 响应成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data);
        } else if (res.statusCode === 401) {
          const memberStore = stores_modules_member.useMemberStore();
          memberStore.clearProfile();
          common_vendor.index.navigateTo({ url: "/pages/login/login" });
          reject(res);
        } else {
          common_vendor.index.showToast({
            icon: "none",
            title: res.data.msg || "请求错误"
          });
          reject(res);
        }
      },
      // 响应失败（无网络情况）
      fail(err) {
        common_vendor.index.showToast({
          icon: "none",
          title: "网络错误，换个网络试试"
        });
        reject(err);
      }
    });
  });
};
exports.http = http;
