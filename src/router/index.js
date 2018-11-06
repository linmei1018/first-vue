import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/components/Home/HomeView'
import NewsView from '@/components/Home/NewsView'
import FavView from '@/components/Home/FavView'
import MyView from '@/components/Home/MyView'
import NewList from '@/components/NewListView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
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
    },
    {
      path: '/list/:id',   //后面加:id用于分辨是跳转到娱乐还是社会新闻路由
      name: 'NewList',
      component: NewList
    }
  ]
})
