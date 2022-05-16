// pages/marketcategory/marketcategory.js
import {firstData,secondData,thirdData} from "./mcatedata.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstData, //初始数据
    secondData, //初始数据
    thirdData, //初始数据
    catesData:[],
    catesData2:[],
    goodsData: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let newArray1 = this.data.firstData;
    let newArray2 = this.data.secondData;
    let newArray3 = this.data.thirdData;
    this.setData({
      catesData:newArray1,
      catesData2:newArray2,
      goodsData:newArray3
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