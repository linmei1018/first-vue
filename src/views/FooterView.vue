<template>
  <footer>
    <mt-tabbar v-model="selected" fixed>
      <router-link to="/collection" tag="div">
        <mt-tab-item id="个人收藏">
          <Icon type="ios-star-outline" size="26" />
          <p>个人收藏</p>
        </mt-tab-item>
      </router-link>
      <router-link to="/recent_calls" tag="div">
        <mt-tab-item id="最近通话">
          <Icon type="ios-time-outline" size="26" />
          <p>最近通话</p>
        </mt-tab-item>
      </router-link>
      <router-link to="/address_book" tag="div">
        <mt-tab-item id="通讯录">
          <Icon type="ios-contact" size="26" />
          <p>通讯录</p>
        </mt-tab-item>
      </router-link>
      <router-link to="/dial" tag="div">
        <mt-tab-item id="拨号键盘">
          <Icon type="ios-keypad-outline" size="26" />
          <p>拨号键盘</p>
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
  </footer>
</template>
<script>
  export default {
    data(){
      return{
        selected:'最近通话'
      }
    }
  }
</script>
<style scoped>
  /*<!-- 给这个元素下面的div都添加：flex:1; -->*/
  .mint-tabbar > div{
    flex:1;
  }
</style>
