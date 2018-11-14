<template>
  <div>
    <div class="recent-calls-header">
      <Button size="small" v-show="editRecentCall" class="cleanBtn" @click="cleanRecentCall">清除</Button>
      <ButtonGroup size="small">
        <Button @click="allCall" :class="isChecked?'btnGroup':'primary'">所有通话</Button>
        <Button @click="missedCall" :class="isChecked?'primary':'btnGroup'">未接来电</Button>
      </ButtonGroup>
      <Button size="small" v-if="editRecentCall" class="editBtn" @click="finishEdit">完成</Button>
      <Button size="small" v-show="!isClean"  v-else="!editRecentCall" class="editBtn" @click="editContact">编辑</Button>
    </div>
    <div class="container">
        <div v-show="isClean" class="noCall">无最近通话</div>
        <div>
          <ul>
            <li class="recentCallsList" v-for="(item,index) in recentCallsArr" v-if="isAllCall? isAllCall: isChecked === item.isMissedCall">
              <Icon type="md-remove-circle" size="26" class="removeBtn" v-show="editRecentCall"  @click="removeContact(index)" />
              <div class="outbound-call-icon">
                <img v-show="item.outboundCall" src="../../../src/assets/outbound_call.png" />
              </div>
              <div class="outbound-call-name">
                <p :class="item.isMissedCall?'phone-name-missed':'phone-name'">{{ item.phoneName }} <span>(2)</span></p>
                <p>{{ item.phoneState }}</p>
              </div>
              <div class="outbound-call-btn">
                <span>{{ item.phoneTime }}</span>&nbsp&nbsp
                <Icon type="ios-information-circle-outline" size="22" style="color:#26a2ff" @click="" />
              </div>
            </li>
          </ul>
        </div>
    </div>
    <!--清除最近通话弹窗-->
    <mt-actionsheet
      :actions="actions"
      v-model="cleanModel">
    </mt-actionsheet>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        isChecked: false, //所有通话和未接来电按钮切换
        recentCallsArr:[],  //所有最近通话列表
        isAllCall:true,   //显示未接来电列表
        editRecentCall:false,  //隐藏清除和完成按钮
        //清除下侧弹窗
        cleanModel:false,
        actions:[
          {
            name:'清除所有最近通话',
            method: this.cleanAll
          }

        ],
        //清空列表时隐藏编辑按钮
        isClean: false,
      }
    },
    methods:{
      //所有电话
      allCall (){
        this.isChecked = false;
        this.isAllCall = true;
      },
      //未接来电
      missedCall(){
        this.isChecked = true;
        this.isAllCall = false;
      },
      //编辑
      editContact(){
        this.editRecentCall = true;
      },
      //删除通话
      removeContact(index){
        this.recentCallsArr.splice(index,1);
      },
      //编辑完成
      finishEdit(){
        this.editRecentCall = false;
      },
      //清除最近通话
      cleanRecentCall(){
        this.cleanModel = true;
      },
      //清除所以最近通话
      cleanAll(){
        this.recentCallsArr = [];
        this.editRecentCall = false;
        this.isClean = true;
      }
    },
    mounted(){
      this.$http({
        method:'get',
        url:'/recentCallsList'
      }).then(res => {
        this.recentCallsArr = res.data.recentCalls;
      });
    }
  }
</script>
<style lang="less">
  .recent-calls-header{
    margin-top:-60px;
    height:40px;
    line-height:40px;
    background:#fafafa;
    border-bottom:1px solid #eee;
    .btnGroup{
      color:#26a2ff;
    }
    .primary{
      color:#fff;
      background:#26a2ff;
    }
    .cleanBtn,.editBtn{
      position:absolute;
      top:9px;
      background:#e6e6e6;
      color:#26a2ff;
      border:none;
    }
    .cleanBtn{
      left:10px;
    }
    .editBtn{
      right:10px;
    }
  }
  .noCall{
    margin:50% auto;
    color:grey;
    font-size:18px;
  }
  .recentCallsList{
    height:50px;
    line-height:50px;
    border-bottom:1px solid #eee;
    padding:0 10px;
    .removeBtn{
      color:red;
      float:left;
      line-height:50px;
      margin-right:5px;
    }
    .outbound-call-icon{
      float:left;
      padding-right:10px;
      width:26px;
      height:50px;
      img{
        width:16px;
        height:16px;
      }
    }
    .outbound-call-name{
      float:left;
      line-height:25px;
      text-align:left;
      .phone-name{
        font-size:16px;
      }
      .phone-name-missed{
        color:red;
        font-size:16px;
      }
    }
    .outbound-call-btn{
      float:right;
    }
  }
</style>
