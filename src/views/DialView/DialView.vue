<template>
  <div>
    <mt-header fixed title="拨号"></mt-header>
    <div class="dialHeader">
      <Col span="2" style="float:left;"><Icon v-show="number" type="ios-add-circle-outline" class="dialIcon" @click="addContactsBtn" /></Col>
      <Col span="20" style="float:left;"><p class="dialText">{{ number }}</p></Col>
      <Col span="2" style="float:right;"><Icon v-show="number" type="ios-backspace-outline" class="dialIcon" @click="removeBtn" /></Col>
    </div>
    <div class="dialContent">
      <ul>
        <li v-for="(item,index) in dialArr" class="dialList">
          <Row>
            <Col span="8"><div :class="isChecked === item.numberArr[0]?'dialItem-checked':'dialItem'" @click="dialBtn(index,0)"><p class="numberBtn">{{ item.numberArr[0] }}</p><p class="letterBtn">{{ item.letterArr[0] }}</p></div></Col>
            <Col span="8"><div :class="isChecked === item.numberArr[1]?'dialItem-checked':'dialItem'" @click="dialBtn(index,1)"><p class="numberBtn">{{ item.numberArr[1] }}</p><p class="letterBtn">{{ item.letterArr[1] }}</p></div></Col>
            <Col span="8"><div :class="isChecked === item.numberArr[2]?'dialItem-checked':'dialItem'" @click="dialBtn(index,2)"><p class="numberBtn">{{ item.numberArr[2] }}</p><p class="letterBtn">{{ item.letterArr[2] }}</p></div></Col>
          </Row>
        </li>
      </ul>
      <div class="phoneCall" @click="phoneCall(number)"><Icon type="ios-call" size="40" /></div>
    </div>
    <!--新建联系人下侧弹窗-->
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        sheetVisible: false, //下侧弹窗
        actions:[  //下侧弹窗内容
          {
            name:'新建联系人',
          },
          {
            name:'添加到现有联系人'
          }
        ],
        number:"",  //输入的号码
        dialArr:[
          {
            numberArr:[1,2,3],
            letterArr:['','ABC','DEF']
          },
          {
            numberArr:[4,5,6],
            letterArr:['GHI','JKL','MNO']
          },
          {
            numberArr:[7,8,9],
            letterArr:['PQRS','TUV','WXYZ']
          },
          {
            numberArr:["*",0,"#"],
            letterArr:['','+','']
          },
        ],
        isChecked:'', //点击的拨号按钮
      }
    },
    methods:{
      //新建联系人
      addContactsBtn(){
        this.sheetVisible = true;
      },
      //删除
      removeBtn(){
        let arr = this.number.split(''); //字符串转数组
        arr.splice(arr.length-1, 1);      //删除数组的最后一位
        this.number = arr.join('');      //数组转字符串
      },
      //拨号按钮
      dialBtn(index,num){
        this.number += this.dialArr[index].numberArr[num];
        this.isChecked = this.dialArr[index].numberArr[num];
      },
      //打电话
      phoneCall(phoneNumber){  console.log(phoneNumber)
        if(this.number!==''){
          this.$router.push('/phone_call/'+ phoneNumber);
        }
      }
    }
  }
</script>
<style lang="less">
  .dialHeader{
    height:40px;
    line-height:40px;
    font-size:18px;
    padding:0 20px;
    margin-bottom:50px;
    .dialText{
      font-size:36px;
      overflow:auto;
    }
    .dialIcon{
      color: #26a2ff;
    }
  }
  .dialContent{
    margin:0 50px;
    .dialList{
      margin-top:20px;
      list-style:none;
      .dialItem{
        width:70px;
        height:70px;
        border-radius:40px;
        border:1px solid grey;
        margin:0 auto;
        .numberBtn{
          font-size:30px;
          line-height:50px;
        }
        .letterBtn{
          font-size:10px;
          line-height:10px;
        }
      }
      .dialItem-checked{
        width:70px;
        height:70px;
        border-radius:40px;
        border:1px solid grey;
        margin:0 auto;
        background-color:grey;
        .numberBtn{
          font-size:30px;
          line-height:50px;
        }
        .letterBtn{
          font-size:10px;
          line-height:10px;
        }
      }
    }
    .phoneCall{
       height:70px;
       width:70px;
       border-radius: 40px;
       line-height:70px;
       color:#fff;
       background:springgreen;
       margin: 20px auto;
     }
  }
</style>

