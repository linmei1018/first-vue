<template>
  <div class="address-book">
    <p style="margin-top:-50px;">选择要添加到“个人收藏”的联系人</p>
    <address-book-com :isCollection = "isCollection"></address-book-com>
  </div>
</template>
<script>
  import AddressBookCom from '../../component/AddressBookCom.vue'
  export default {
    name: 'address-book',
    comments: { AddressBookCom },
    data(){
      return{
        isCollection:false,
      }
    }
  }
</script>
