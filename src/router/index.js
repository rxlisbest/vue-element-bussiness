import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/admin/login',
      name: 'admin-login',
      component: require('@/pages/admin/login/index').default
    },
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
      path: '/product',
      name: 'product-index',
      component: require('@/pages/index/product/index').default
    },
    {
      path: '/contact-us',
      name: 'contact-us-index',
      component: require('@/pages/index/contact-us/index').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})