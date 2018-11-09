<template>
  <div>
    <div class="detailsHeader">
      <Icon type="md-arrow-dropleft" size="42" class="backIcon" />
      <Button class="backBtn" size="small" @click="backCollection">{{ title }}</Button>
      <Button class="editBtn" size="small" @click="editContacts">编辑</Button>
      <div>
        <Icon type="ios-contact" size="100" style="color:#ccc;margin-right:35px;" />
        <h3>{{ name }}</h3>
      </div>
      <div class="icon-list">
        <Row>
          <Col span="6"><div class="item-icon blue-icon"><Icon type="ios-chatbubbles" size="20" /></div><p class="information">短信</p></Col>
          <Col span="6"><div class="item-icon blue-icon"><Icon type="ios-call" size="20" /></div><p class="information">手机</p></Col>
          <Col span="6"><div class="item-icon grey-icon"><Icon type="ios-videocam" size="20" /></div><p class="information">视频</p></Col>
          <Col span="6"><div class="item-icon grey-icon"><Icon type="ios-mail" size="20" /></div><p class="information">邮件</p></Col>
        </Row>
      </div>
    </div>
    <div class="detailsContent">
      <ul>
        <li class="phone-contacts">
          <p style="color:#000;">手机</p>
          <a style="text-decoration:underline;">13666666666</a>
        </li>
        <li style="color:grey;height:60px;"><p>备注</p></li>
        <li v-for="item in ContactsArr">{{ item }}</li>
        <li style="margin-top:60px;"><p>阻止此来电号码</p></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        title:this.$route.params.title,
        name:this.$route.params.name,
        ContactsArr:["发送信息","共享联系人","添加到个人收藏","共享我的位置"]
      }
    },
    methods:{
      //返回到个人收藏
      backCollection(){
        this.$router.go(-1);
      },
      //编辑联系人信息
      editContacts(){
        alert(this.title)
      }
    },
    mounted(){
      console.log(this.title)
      // if(this.Title ===  'collection'){
      //   this.Title = '个人收藏'
      // }else{
      //   this.Title = '通讯录'
      // }
    }

  }
</script>
<style scoped lang="less">
  .detailsHeader{
    position:absolute;
    top:0;
    left:0;
    padding: 10px;
    background-color:#fafafa;
    width:100%;
    height:230px;
    .backIcon{
      position:absolute;
      top:1px;
      left:-5px;
      color:#eee;
    }
    .backBtn,.editBtn{
      background-color:#eee;
      color:#26a2ff;
      border:none;
    }
    .backBtn{
      float:left;
      margin-left:10px;
    }
    .editBtn{
      float:right;
    }
    .icon-list{
      margin:10px 50px;
      .item-icon{
        width:40px;
        height:40px;
        border-radius:20px;
        background-color:#3b9aff;
        line-height:36px;
        margin: 10px 0 10px 30%;
        color:#fff;
      }
      .grey-icon{
        border:1px solid #eee;
        background-color:#fafafa;
        color:#ccc;
      }
      .information{
        margin-left:10px;
      }
    }
  }
  .detailsContent{
    width:100%;
    height:100%;
    position:absolute;
    left:0;
    top: 230px;
    padding:10px;
    ul li{
      height:30px;
      width:100%;
      border-bottom:1px solid grey;
      text-align:left;
      line-height:30px;
      color:#26a2ff;
    }
    .phone-contacts {
      height:50px;
      line-height:20px;
    }
  }
</style>
