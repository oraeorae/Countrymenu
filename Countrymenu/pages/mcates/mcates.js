import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';
import {firstData,secondData,thirdData,forthData} from "./mcatesdata.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    forthData,
    goodsData: [],
    activeKey: 0,
    mainActiveIndex: 0,
    activeId: null,
    

  },
  onChange(event) {
    this.setData({
      activeKey:event.detail
    })
    this.initialData(event.detail);
  },

  initialData(firstIndex){
    let allData = this.data.goodsData
    let firstCategory = []
    allData.forEach((value, index, array) => {
      firstCategory.push(value)
    })
    let targetedFirstData = allData[firstIndex]
    let secondCategory = []
    targetedFirstData.children.forEach((value, index, array) => {
      secondCategory.push(value)
    })
    this.setData({
      firstCategory,
      secondCategory
    })
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let newArray4 = this.data.forthData;
    this.setData({
      goodsData:newArray4
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
    this.initialData(0,0)
  },

  
})

