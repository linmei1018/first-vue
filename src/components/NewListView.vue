<template>
  <div>
    <mt-header fixed title="新闻列表"></mt-header>
    <ul>
      <li v-for="item in arr">{{ item.title }} -- {{ item.content }}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        arr:[]
      }
    },
    mounted(){
      let id = this.$route.params.id;
      this.$http({
        method:'get',
        url: '/list'
      }).then(res => {
         this.arr = res.data[id];
      })
    }
  }
</script>
