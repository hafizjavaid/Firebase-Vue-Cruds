import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import(/* webpackChunkName: "about" */ '../views/Vuexcrud/Products.vue')
  },
  {
    path: '/product/new',
    name: 'Product',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Vuexcrud/Product.vue')
  },
  {
    path: '/product/:id/edit',
    name: 'EditProduct',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Vuexcrud/Product.vue')
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
  {
    path: '/realList',
    name: 'Firebase List',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/RealTimeCrud/Products.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
