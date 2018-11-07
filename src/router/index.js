import Vue from 'vue'
import Router from 'vue-router'
import Collection from '@/components/Home/CollectionView'
import RecentCalls from '@/components/Home/RecentCallsView'
import AddressBook from '@/components/Home/AddressBookView'
import Dial from '@/components/Home/DialView'
import NewList from '@/components/NewListView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calls',
      component: RecentCalls
    },
    {
      path: '/collection',
      name: 'CollectionView',
      component: Collection
    },
    {
      path: '/recent_calls',
      name: 'RecentCalls',
      component: RecentCalls
    },
    {
      path: '/address_book',
      name: 'AddressBook',
      component: AddressBook
    },
    {
      path: '/dial',
      name: 'Dial',
      component: Dial
    },
    {
      path: '/list/:id',   //后面加:id用于分辨是跳转到娱乐还是社会新闻路由
      name: 'NewList',
      component: NewList
    }
  ]
})
