import Vue from 'vue'
import Router from 'vue-router'
import Collection from '@/views/CollectionView/CollectionView'
import RecentCalls from '@/views/RecentCallsView/RecentCallsView'
import AddressBook from '@/views/AddressBookView/AddressBookView'
import Dial from '@/views/DialView/DialView'
import NewList from '@/views/NewListView'
import ToAddressBook from '@/views/CollectionView/AddressBook/AddressBook'


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
    },
    {
      path: '/to_address_book'  ,
      name: 'ToAddressBook',
      component: ToAddressBook
    }
  ]
})
