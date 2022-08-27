// components/numbers/numbers.js

import { storeBindingsBehavior } from 'mobx-miniprogram-bindings';
import { store } from '../../store/store';
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [storeBindingsBehavior],
  storeBindings: {
    store,
    fields: {
      num1: 'num1',
      num2: () => store.num2,
      count: 'count',
    },
    actions: {
      addNum2: 'addNum2'
    }
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    dealNum(e) {
      this.addNum2(e.target.dataset.set)
    }
  }
})
