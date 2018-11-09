<template>
  <div class="address-book">
    <p style="margin:-50px 0 30px 0;">选择要添加到“个人收藏”的联系人</p>
    <address-book-com :isName = "isName"

    ></address-book-com>
  </div>
</template>
<script>
  import AddressBookCom from '../../component/AddressBookCom.vue'
  export default {
    name: 'address-book',
    components: { AddressBookCom },
    data(){
      return{
        isName:'collection',
      }
    }
  }
</script>
