// 0 引入 用来发送请求的方法
import{ request } from "../../request/index.js";
// pages/search/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图数组
    swiperList:[],
    //导航 数组
    catesList:[],
    //楼层数组
    floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // 1 发送异步请求获取轮播图数据 优化技术可以通过es6的 promise来解决这个问题
  // wx.request({
  //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
  //   //data: data,//发送信息给后台
  //   success: (result) => {
  //      this.setData({
  //        swiperList:result.data.message
  //      })
       
  //   }
  // })
  },

  

  
})