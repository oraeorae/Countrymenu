import {firstData,secondData,thirdData} from "./marketdata.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstData, //初始数据
    secondData, 
    thirdData, 
    swiperData:[],
    goodslistData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let newArray1 = this.data.firstData;
    let newArray2 = this.data.secondData;
    let newArray3 = this.data.thirdData;
    this.setData({
      swiperData:newArray1,
      guideData:newArray2,
      goodslistData: newArray3
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})