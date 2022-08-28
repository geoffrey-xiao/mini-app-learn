// custom-tab-bar/index.js
import { storeBindingsBehavior } from 'mobx-miniprogram-bindings';
import { store } from '../store/store'
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      count: 'count',
      active: 'active'
    },
    actions: {
      changeActive: 'updateActive'
    }
  },
  options: {
    styleIsolation: 'shared'
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    "list": [{
      "pagePath": "pages/list/list",
      "text": "index",
      "iconPath": "/images/tabs/home.png",
      "selectedIconPath": "/images/tabs/home-active.png"
    },
    {
      "pagePath": "pages/index/index",
      "text": "text",
      "iconPath": "/images/tabs/contact.png",
      "selectedIconPath": "/images/tabs/contact-active.png"
    },
    {
      "pagePath": "pages/contact/contact",
      "text": "contact",
      "iconPath": "/images/tabs/contact.png",
      "selectedIconPath": "/images/tabs/contact-active.png"
    },
    {
      "pagePath": "pages/message/message",
      "text": "message",
      "iconPath": "/images/tabs/contact.png",
      "selectedIconPath": "/images/tabs/contact-active.png",
      info: 2
    },
    {
      "pagePath": "pages/store/store",
      "text": "store",
      "iconPath": "/images/tabs/contact.png",
      "selectedIconPath": "/images/tabs/contact-active.png"
    }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.setData({ active: event.detail });
      console.log(event.detail)
      wx.switchTab({
        url: `/${this.data.list[event.detail].pagePath}`,
      })
      this.changeActive(event.detail)
    },
  },
  observers: {
    'count': function (val) {
      this.setData({
        'list[3].info': val
      })
    }
  }
})
