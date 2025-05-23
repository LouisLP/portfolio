import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/articles/:id',
    name: 'Article',
    component: () => import('@/components/articles/ArticleLayout.vue'),
  },
  {
    path: '/resume/print',
    name: 'PrintResume',
    component: () => import('@/views/PrintResume.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/portfolio/'),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
