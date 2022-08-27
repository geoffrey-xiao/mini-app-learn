// pages/store/store.js
import { store } from '../../store/store';
import { createStoreBindings } from 'mobx-miniprogram-bindings'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeBindings: null
  },
  dealNum(e) {
    console.log(e.target.dataset.set)
    this.addNum1(e.target.dataset.set)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.storeBindings = createStoreBindings(this, {
      store,
      fields: ['num1', 'num2', 'count'],
      actions: ['addNum1']
    })
  },

  onUnload() {
    this.storeBindings.destroyStoreBindings()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})