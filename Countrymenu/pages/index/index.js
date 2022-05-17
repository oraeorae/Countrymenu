// 0 引入 用来发送请求的方法
import{ request } from "../../request/index.js";
import {firstData,secondData,thirdData} from "./indexdata.js"
// pages/search/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstData, //初始数据
    secondData, 
    thirdData, 
    swiperData:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let newArray1 = this.data.firstData;
    let newArray2 = this.data.secondData;
    this.setData({
      swiperData:newArray1,
      guideData:newArray2,
    })
  },

  

  
})