"use strict";
Page({
  data: {
    year: "2000",
    mouth: "00",
    arr: [],
    mytimes: 0
  },
  chagtime: function (event) {
    var value = event.detail.value;
    this.setData({
      year: value.split("-")[0],
      mouth: value.split("-")[1]
    });
    this.settime();
  },
  clear: function () {
    this.setData({
      year: "",
      mouth: "",
      arr: [],
      mytimes: 0
    });
  },
  onShow: function () {
    this.settime();
  },
  settime: function () {
    console.log;
    var _a = this.data, year = _a.year, mouth = _a.mouth;
    var oldtime = mouth === "00" ? new Date(year).getTime() : new Date(year + "-" + mouth).getTime();
    var newtime = new Date(new Date().getFullYear() + "-" + (new Date().getMonth() + 1)).getTime();
    if (newtime > oldtime) {
      var arr = newtime - oldtime;
      var sums = Math.ceil(arr / (1000 * 60 * 60 * 24 * 31));
      this.setData({
        mytimes: sums
      });
    }
  }
});