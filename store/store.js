import { observable, action } from 'mobx-miniprogram';

export const store = observable({
  num1: 1,
  num2: 2,
  get count() {
    return this.num1 + this.num2
  },
  addNum1: action(function (step) {
    this.num1 += step
  }),
  addNum2: action(function (step) {
    this.num2 += step
  }),
})