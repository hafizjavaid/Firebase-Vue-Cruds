import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue')
  },
  {
    path: '/product/new',
    name: 'Product',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/product/:id/edit',
    name: 'EditProduct',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "about" */ '../views/firestore/List.vue')
  },
  {
    path: '/list/new',
    name: 'New List',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/firestore/create.vue')
  },
  {
    path: '/list/:id/edit',
    name: 'edit',
    props:true,
    component: () => import(/* webpackChunkName: "about" */ '../views/firestore/create.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
