import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCustomers from '../components/customers/AppCustomers.vue'
import AppProducts from '../components/products/AppProducts.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/customers'
  },
  {
    path: '/customers',
    name: 'AppCustomers',
    component: AppCustomers
  },
  {
    path: '/products',
    name: 'AppProducts',
    component: AppProducts
  },
  
]

const router = new VueRouter({
  routes
})

export default router
