// pages/goods-list/goods-list.js
import { request } from "../../request/request";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tabs: [
      { value: "综合", id: 1, isActive: true },
      { value: "销量", id: 2, isActive: false },
      { value: "价格", id: 3, isActive: false },
    ],
    goodsList: [],
  },
  // 接口要的参数
  QueryParams: {
    query: "",
    cid: "",
    pagenum: 1,
    pagesize: 10,
  },
  // 总页数
  totalPages: 1,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    const { cid } = options;
    console.log(cid);
    this.QueryParams.cid = options.cid || "";
    this.QueryParams.query = options.query || "";
    console.log(options);
    this.getSeachGood();
  },
  tabsChange(e) {
    console.log(e.detail);
    const { index } = e.detail;
    let { tabs } = this.data;
    tabs.forEach((v, i) =>
      i === index ? (v.isActive = true) : (v.isActive = false)
    );
    this.setData({
      tabs,
    });
  },
  async getSeachGood() {
    console.log("chuafal");
    const res = await request({ url: "/goods/search", data: this.QueryParams });
    console.log(res);
    this.totalPages = Math.ceil(res.total / this.QueryParams.pagesize);
    console.log(this.totalPages);
    this.setData({
      // 拼接了数组
      goodsList: [...this.data.goodsList, ...res.goods],
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (e) {
    console.log(e);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
});
