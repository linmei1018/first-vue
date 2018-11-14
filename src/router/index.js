import Vue from 'vue'
import Router from 'vue-router'
import Collection from '@/views/CollectionView/CollectionView'
import RecentCalls from '@/views/RecentCallsView/RecentCallsView'
import AddressBook from '@/views/AddressBookView/AddressBookView'
import Dial from '@/views/DialView/DialView'
import ToAddressBook from '@/views/CollectionView/AddressBook/AddressBook'
import ContactsDetails from '@/views/component/ContactsDetails'
import PhoneCall from '@/views/component/PhoneCall'


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
      path: '/to_address_book',
      name: 'ToAddressBook',
      component: ToAddressBook
    },
    {
      path: '/contacts_details/:title/:name',
      name: 'ContactsDetails',
      component: ContactsDetails
    },
    {
      path: '/phone_call/:phoneNumber',
      name: 'PhoneCall',
      component: PhoneCall
    }
  ]
})
