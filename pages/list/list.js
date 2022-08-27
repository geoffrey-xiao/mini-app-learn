// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: 'ddddd',
    imgurl: '/images/企业微信截图_16613056072497.png',
    random: Math.random() * 10,
    count: 0,
    msg: '你好',
    type: 1,
    flag: false,
    arr: ['apple', 'huawei', 'xiaomi']
  },

  clickBtn(e) {
    console.log(e.target.dataset.info)
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },

  inputhandler(e) {
    console.log(e.detail.value)
    this.setData({
      msg: e.detail.value
    })
  },

  async getInfo() {
    const res = await wx.p.request({
      url: 'https://www.escook.cn/api/get',
      method: 'GET',
      data: {
        name: 'summer',
        age: 4
      },
      // success: (res) => {
      //   console.log(res.data)
      // }
    })
    console.log(res)
  },

  postInfo() {
    wx.request({
      url: 'https://www.escook.cn/api/post',
      method: 'post',
      data: {
        name: 'summer',
        age: 4
      },
      success: (res) => {
        console.log(res.data)
      }
    })
  },
  goindex() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },

  goinfo() {
    wx.navigateTo({
      url: '/pages/info/info?name=fengfeng&age=26',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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