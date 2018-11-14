<template>
  <div class="phoneCallView">
    <div class="PhoneHeader">
      <p class="phoneNumber">{{ phoneNumber }}</p>
      <p class="phoneText">正在呼叫中...</p>
      <!--通话即将结束/通话结束-->
    </div>
    <div class="PhoneConter">
      <ul>
        <li v-for="phoneItem in phoneArr">
          <Row>
            <Col span="8">
              <div class="functionBtn"><Icon :type="phoneItem.Icon[0]" size="30" /></div>
              <p class="functionText">{{ phoneItem.text[0] }}</p>
            </Col>
            <Col span="8">
              <div class="functionBtn"><Icon :type="phoneItem.Icon[1]" size="30" /></div>
              <p class="functionText">{{ phoneItem.text[1] }}</p>
            </Col>
            <Col span="8">
              <div class="functionBtn"><Icon :type="phoneItem.Icon[2]" size="30"  /></div>
              <p class="functionText">{{ phoneItem.text[2] }}</p>
            </Col>
          </Row>
        </li>
      </ul>
      <div class="HangUp" @click="HangUp"><img src="../../../src/assets/hang_up.png" /></div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
      return{
        phoneNumber:this.$route.params.phoneNumber,
        phoneArr:[
          {
            Icon:['ios-mic-off','ios-keypad','ios-volume-up'],
            text:['静音','拨号键盘','免提']
          },
          {
            Icon:['md-add','ios-videocam','ios-person'],
            text:['添加通话','FaceTime','通讯录']
          }
        ]
      }
    },
    methods:{
      //挂断
      HangUp(){
        this.$router.go(-1);
      }
    },
    mounted(){
      
    }
}

</script>
<style lang="less">
  .phoneCallView{
    background: #000;
    /*opacity:0.8;*/
    width:100%;
    height:100%;
    color:#fff;
    position:fixed;
    top:0;
    left:0;
    padding-top:60px;
    z-index:1;
    .PhoneHeader{
      margin:0 20px;
      .phoneNumber{
        font-size:36px;
        overflow:auto;
      }
    }
    .PhoneConter{
      margin: 20% 30px;
      li{
        margin-bottom:20px;
        .functionBtn{
          width:70px;
          height:70px;
          line-height:70px;
          border:1px solid #fff;
          border-radius:40px;
          margin: 0 auto;
        }
        .functionText{
          text-decoration:underline;
        }
      }
      .HangUp{
        height:70px;
        width:70px;
        border-radius: 40px;
        line-height:70px;
        color:#fff;
        background:red;
        margin: 20% auto;
        img{
          margin-top:15px;
        }
      }
    }
  }

</style>
