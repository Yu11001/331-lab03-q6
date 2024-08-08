import { createRouter, createWebHistory } from 'vue-router'
import PassengerView from '@/views/PassengerListView.vue'
import AboutView from '@/views/AboutView.vue'
import PassengerDetailView from '@/views/PassengerDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'passenger-list-view',
      component: PassengerView
    },
    {
      path: '/passenger/:id',
      name: 'passenger-detail-view',
      component: PassengerDetailView,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
