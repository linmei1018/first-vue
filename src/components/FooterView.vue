<template>
  <footer>
    <mt-tabbar>
      <router-link to="/home" tag="div">
        <mt-tab-item id="首页">
          首页
        </mt-tab-item>
      </router-link>
      <router-link to="/news" tag="div">
        <mt-tab-item id="新闻">
          新闻
        </mt-tab-item>
      </router-link>
      <router-link to="/fav" tag="div">
        <mt-tab-item id="通讯录">
          通讯录
        </mt-tab-item>
      </router-link>
      <router-link to="/my" tag="div">
        <mt-tab-item id="我的">
          我的
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
