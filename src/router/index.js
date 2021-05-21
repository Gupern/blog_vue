import Vue from 'vue'
import Router from 'vue-router'
import BlogClientList from '@/components/BlogClientList'
import BlogClientDetail from '@/components/BlogClientDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BlogClientList',
      component: BlogClientList
    },
    {
      path: '/list',
      name: 'BlogClientList',
      component: BlogClientList
    },
    {
      path: '/detail',
      name: 'BlogClientDetail',
      component: BlogClientDetail
    }

  ]
})
