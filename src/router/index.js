import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCustomers from '../components/customers/AppCustomers.vue'
import AppProducts from '../components/products/AppProducts.vue'
import LatestPurchases from '../components/customers/LatestPurchases.vue'
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
  {
    path: '/customers/:id',
    name: 'latest-purchases',
    props: true,
    component: LatestPurchases
  },
  
]

const router = new VueRouter({
  routes
})

export default router
