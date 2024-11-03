import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/vue-portfolio',
  },
  {
    path: '/vue-portfolio',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/vue-portfolio/articles/:id',
    name: 'Article',
    component: () => import('@/components/articles/ArticleLayout.vue'),
  },
  {
    path: '/vue-portfolio/resume/print',
    name: 'PrintResume',
    component: () => import('@/views/PrintResume.vue'),
  },
]

const router = createRouter({
  history: createWebHistory('/vue-portfolio/'),
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
