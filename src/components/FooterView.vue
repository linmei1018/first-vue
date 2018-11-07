<template>
  <footer>
    <mt-tabbar>
      <router-link to="/home" tag="div">
        <mt-tab-item id="收藏">
          <Icon type="ios-star-outline" size="26" />
          <p>收藏</p>
        </mt-tab-item>
      </router-link>
      <router-link to="/news" tag="div">
        <mt-tab-item id="最近通话">
          <Icon type="ios-time-outline" size="26" />
          <p>最近通话</p>
        </mt-tab-item>
      </router-link>
      <router-link to="/fav" tag="div">
        <mt-tab-item id="通讯录">
          <Icon type="ios-contact" size="26" />
          <p>通讯录</p>
        </mt-tab-item>
      </router-link>
      <router-link to="/my" tag="div">
        <mt-tab-item id="我的">
          <Icon type="ios-keypad-outline" size="26" />
          <p>拨号键盘</p>
        </mt-tab-item>
      </router-link>
    </mt-tabbar>
  </footer>
</template>
<style scoped>
  /*<!-- 给这个元素下面的div都添加：flex:1; -->*/
  .mint-tabbar > div{
    flex:1;
  }
</style>
