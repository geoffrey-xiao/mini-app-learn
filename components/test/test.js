// components/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    max: Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 0,
    n1: 0,
    n2: 0,
    sum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addCount() {
      if (this.data.count > this.properties.max) return
      this.setData({
        count: this.data.count + 1,
        max: this.properties.max + 1
      })
    },
    showInfo() {
      console.log(this.data)
      console.log(this.properties)
    },
    addN1() {
      this.setData({
        n1: this.data.n1 + 1
      })
    },
    addN2() {
      this.setData({
        n2: this.data.n2 + 1
      })
    }
  },
  observers: {
    'n1,n2': function (n1, n2) {
      this.setData({
        sum: n1 + n2
      })
    }
  }
})