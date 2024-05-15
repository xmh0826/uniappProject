"use strict";
const utils_http = require("../utils/http.js");
const getMemberProfileAPI = () => {
  return utils_http.http({
    method: "GET",
    url: "/member/profile"
  });
};
const putMmemberProfileAPI = (data) => {
  return utils_http.http({
    method: "PUT",
    url: "/member/profile",
    data
  });
};
exports.getMemberProfileAPI = getMemberProfileAPI;
exports.putMmemberProfileAPI = putMmemberProfileAPI;
