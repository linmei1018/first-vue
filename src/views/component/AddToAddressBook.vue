<!--模块公用组件-新建联系人
      /**
      * AddToAddressBook
      * @desc 主要是新建联系人或添加到联系人，可编辑
      * @author linmei
      * @date 2018年11月15日10:17
      * @param {String} [phoneNumber] - 已选电话号码
       -->
<template>
  <div>
      <div class="addHeader">
        <Row>
          <Col span="4"><Button class="cancelBtn" size="small" @click="cancelAddPhone">取消</Button></Col>
          <Col span="16"><p class="addText">新建联系人</p></Col>
          <Col span="4"><Button :class="this.username || this.companyname || this.mobilephone? 'complete-active':'okBtn'" size="small" @click="complete">完成</Button></Col>
        </Row>
      </div>
      <mt-field label="联系人" placeholder="姓名" v-model="username"></mt-field>
      <mt-field label="单位" placeholder="公司" v-model="companyname"></mt-field>
      <mt-field label="手机" placeholder="电话" v-model="mobilephone"></mt-field>
      <div v-for="(item,index) in addPhoneArr" :key="index">
        <mt-field :label="item.label" :placeholder="item.phone"  v-model="item.count">
          <Icon type="ios-close-circle" size="20" style="color:red;margin:0 5px;" @click="removeAddPhone(index)" />
        </mt-field>
      </div>
      <div class="add-phone" @click="addPhone(addPhoneArr)">
        <Icon type="ios-add-circle" size="20" style="color:green;margin:0 5px;" />
        <span>添加电话</span>
      </div>
  </div>
</template>
<script>
  export default {
    props: {
      phoneNumber:{
        type: String,
        default: ''
      },
    },
    data(){
      return{
        //添加联系人参数
        username: '',
        companyname: '',
        mobilephone: '',
        //添加电话数组
        addPhoneArr:[],
      }
    },
    methods:{
      //取消新建联系人
      cancelAddPhone() {
        this.addPhoneArr = [];
        this.username = '';
        this.companyname = '';
        this.mobilephone = '';
        this.$emit('cancelAddPhone')
      },
      //添加联系人完成
      complete() {
        if (this.username || this.companyname || this.mobilephone) {
          alert(1)
        }
      },
      //删除新建电话
      removeAddPhone(index) {
        this.addPhoneArr.splice(index, 1)
      },
      //添加电话
      addPhone(a) {
        let label = ['住宅', '工作', '主要'];
        if (this.addPhoneArr.length < 3) {
          this.addPhoneArr.push({
            tel: '',
            label: label[this.addPhoneArr.length],
            phone: '电话'
          });
        } else {
          this.addPhoneArr.push({
            num: a[a.length - 1].num + 1,
            tel: '',
            label: '住宅',
            phone: '电话'
          })
        }
      },
    },
    watch: {
      phoneNumber(val) {
        this.mobilephone = val;
      },
    },

  }
</script>
<style lang="less">
  /*添加联系人*/

  .cancelBtn{
    color:#5394ec;
    background-color:#e8eaed;
  }
  .addText{
    font-weight: bold;
  }
  .okBtn{
    background-color:#e8eaed;
    color:#595959;
  }
  .complete-active{
    background-color:#e8eaed;
    color:#5394ec;
  }

  /*end*/
</style>
