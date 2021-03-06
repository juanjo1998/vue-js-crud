import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    // route level code-splitting
    // this generates a separate chunk (courses.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "courses" */ '../views/courses/IndexView.vue')
  },
  {
    path:'/course/:id',
    name:'course',
    component: () => import('../views/courses/ShowView')
  },
  {
    path:'/courses/create',
    name:'courseCreate',
    component: () => import('../views/courses/CreateView')
  },
  {
    path:'/courses/edit/:id',
    name:'courseEdit',
    component: () => import('../views/courses/EditView')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
