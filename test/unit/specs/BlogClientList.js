import Vue from 'vue'
import BlogCLientList from '@/components/BlogCLientList'

describe('BlogCLientList.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(BlogCLientList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
