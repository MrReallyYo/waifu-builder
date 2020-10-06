import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Builder from "@/views/builder/Builder.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Builder',
    component: Builder
  },
  {
    path: '/dev',
    name: 'Dev',
    component: () => import('../views/dev/Dev.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
