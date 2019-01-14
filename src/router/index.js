import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/index',
      name: 'admin-index',
      component: require('@/pages/admin/index/index').default
    },
    {
      path: '/admin/product/index',
      name: 'admin-product-index',
      component: require('@/pages/admin/product/index').default
    },
    {
      path: '/admin/product/add',
      name: 'admin-product-add',
      component: require('@/pages/admin/product/add').default
    },
    {
      path: '/',
      name: 'index',
      component: require('@/pages/index/index/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})