// index.js
// 获取应用实例
import {request} from "../../request/request"
const app = getApp()

Page({
  data: {
      // 轮播图数组
      swiperList:[],
      // 导航 数组
      catesList:[],
      // 楼层数据
      floorList:[]
   
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    // canIUseGetUserProfile: false,
    // canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    // 发送异步请求获取数据
    // wx.request({
    //   url: "https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata",
    //   // data: {},
    //   // method: "GET", // OP   TIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    //   // header: {}, // 设置请求的 header
    //   success:  (res) =>{
    //     console.log(res)
    //     this.setData(
    //       {swiperlist:res.data.message
    //       }
    //     )
       
        
    //     // success
    //   },
    //   fail: function () {
    //     // fail
    //   },
    //   complete: function () {
    //     // complete
    //   },
    // });
    this.getFloorList()
    this.getSwiperList()
    this.getCateList()


    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
   // 获取轮播图
   getSwiperList(){
    request({ url: "/home/swiperdata" })
    .then(result => {
      this.setData({
       swiperList: result
      })
    })
  },
  // 获取导航
  async getCateList(){
    const res= await request({ url: "/home/catitems" })
       this.setData({
       catesList: res
     })
   // .then(result => {
   //   this.setData({
   //     catesList: result
   //   })
   // })
 },
   // 获取 楼层数据
   getFloorList(){
    request({ url: "/home/floordata" })
    .then(result => {
      this.setData({
        floorList: result
        
      })
    })
    console.log(this.floorList)
  },
 
  
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
