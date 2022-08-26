// components/test2/test2.js
Component({
  /**
   * 组件的属性列表
   */
  lifetimes: {
    created() {
      console.log('created')
    },
    attached() {
      console.log('attached')
    },
    detached() {
      console.log('detached')
    }
  },
  pageLifetimes: {
    show() {
      console.log('show')
      this.randomColor()
    },
    hide: () => {
      console.log('hide')
    }
  },
  properties: {

  },


  /**
   * 组件的初始数据
   */
  data: {
    fillColor: '0,0,0',
    rgb: {
      r: 0,
      g: 0,
      b: 0
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addR() {
      this.setData({
        'rgb.r': this.data.rgb.r + 5 > 255 ? 255 : this.data.rgb.r + 5
      })
    },
    addG() {
      this.setData({
        'rgb.g': this.data.rgb.g + 5 > 255 ? 255 : this.data.rgb.g + 5
      })
    },
    addB() {
      this.setData({
        'rgb.b': this.data.rgb.b + 5 > 255 ? 255 : this.data.rgb.b + 5
      })
    },
    randomColor() {
      this.setData({
        rgb: {
          r: Math.floor(Math.random() * 256),
          g: Math.floor(Math.random() * 256),
          b: Math.floor(Math.random() * 256)
        }
      })
    }
  },
  observers: {
    'rgb.**': function (obj) {
      this.setData({
        fillColor: obj.r + ',' + obj.g + ',' + obj.b
      })
    }
  },
  options: {
    multipleSlots: true
  }
})