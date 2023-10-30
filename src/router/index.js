import { createRouter, createWebHistory } from '@ionic/vue-router';

import FormComponents from '../views/FormComponents.vue'
import FormData from '../views/FormData.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/form1',
    name: 'FormComponents',
    component: FormComponents
  },
  {
    path: '/form2',
    name: 'FormData',
    component: FormData 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
