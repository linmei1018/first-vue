<template>
  <div id="app">
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
  import FooterView from './views/FooterView'
export default {
  name: 'App',
  components:{
    FooterView
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  li{
    list-style:none;
  }
</style>
