import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/Home/HomeView'
import NewsView from '@/components/Home/NewsView'
import FavView from '@/components/Home/FavView'
import MyView from '@/components/Home/MyView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/news',
      name: 'NewsView',
      component: NewsView
    },
    {
      path: '/fav',
      name: 'FavView',
      component: FavView
    },
    {
      path: '/my',
      name: 'MyView',
      component: MyView
    }
  ]
})
