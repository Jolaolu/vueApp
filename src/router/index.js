import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import about from '@/components/about'
import services from '@/components/services'
import faq from '@/components/faq'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/faq',
      name: 'faq',
      component: faq
    }
  ]

})
