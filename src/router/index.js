import Vue from 'vue'
import Router from 'vue-router'
import BlogClientList from '@/components/BlogClientList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogClientList',
      component: BlogClientList
    }
  ]
})
