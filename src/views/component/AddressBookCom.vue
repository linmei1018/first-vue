<template>
  <div>
    <div class="header" v-if="isClick"  >
      <p style="width:95%">通讯录</p>
      <Icon type="md-add" size="20" style="line-height:40px;" @click="addSearch" />
    </div>
    <!--添加通讯录弹窗 begin-->
    <mt-popup
      v-model="popupVisible"
      class="add-search-popup"
      position="bottom">
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

    </mt-popup>
    <!--添加通讯录弹窗end-->
    <div :class="isClick?'shadowShow':''" @click="shadowCancel" ></div>
    <div :class="isChange?'shadowCancel':'changeSearch'">
      <p>123</p>
    </div>
    <div class="search_name" :class="isClick?'search':''" >
      <div class="inputSearch" @click="searchName">
        <Input class="search-key"
               v-model.trim="searchKey"
               @on-change="searchChange()"
               placeholder="搜索"
               icon="ios-search"/>
      </div>
      <span class="cancelSearch" @click="cancelSearch">取消</span>
    </div>
    <div class="mail_content">
      <h3 style="height:40px;line-height:40px;">本机号码：13879136593</h3>
      <mt-index-list>
        <mt-index-section v-for="item in result" :index="item.value" :key="item.value">
          <mt-cell v-for="(items,index) in item.title" :key="index" :title="items" @click="phoneItem(index)"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      isName: { //个人收藏
        type: String,
      },
    },
    data(){
      return{
        value:'',
        isClick: false, //是否点击搜索框
        isChange:false, //
        searchKey:'',
        result:[
          { value:'A',title:['Aaron','Alden','Austin']},
          { value:'B',title:['Baby']},
          { value:'C',title:['Colly']},
          { value:'D',title:['Diar']},
          { value:'E',title:['Ender']},
          { value:'F',title:['Function']},
          { value:'G',title:['Green']},
          { value:'H',title:['Heigth']},
          { value:'I',title:['Index']},
          { value:'J',title:['Join']},
          { value:'K',title:['Koll']},
          { value:'L',title:['Light']},
          { value:'M',title:['Menney']},
          { value:'N',title:['Nothing']},
          { value:'O',title:['Orige']},
          { value:'P',title:['Patty']},
          { value:'Q',title:['Query']},
          { value:'R',title:['Road']},
          { value:'S',title:['Son']},
          { value:'T',title:['Title']},
          { value:'U',title:['Unkown']},
          { value:'V',title:['Vobbly']},
          { value:'W',title:['Wellcome']},
          { value:'X',title:['Xinxin']},
          { value:'Y',title:['Yang']},
          { value:'Z',title:['Zone']}
        ],
        searchDataCopy:'',  //副本
        searchData:'', //搜索数据
        popupVisible:false, //添加通讯录弹窗
        //添加联系人参数
        username:'',
        companyname:'',
        mobilephone:'',
        //添加电话数组
        addPhoneArr:[],
      }
    },
    methods: {
      //点击搜索框事件
      searchName() {
        this.isClick = true;
      },
      //关闭遮罩层
      shadowCancel() {
        this.isClick = false;
      },
      //搜索框Change事件
      searchChange() {
        this.isChange = true;
      },
      //取消搜索
      cancelSearch() {
        this.isClick = false;
        this.isChange = false;
        this.searchKey = '';
      },
      //添加通讯录
      addSearch() {
        this.popupVisible = true;
      },
      //添加联系人完成
      complete() {
        if (this.username || this.companyname || this.mobilephone) {
          alert(1)
        }
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
      //删除新建电话
      removeAddPhone(index) {
        this.addPhoneArr.splice(index, 1)
      },
      //取消新建联系人
      cancelAddPhone() {
        this.popupVisible = false;
        this.addPhoneArr = [];
        this.username = '';
        this.companyname = '';
        this.mobilephone = '';
      },
      //
      phoneItem(index){
        alert(index)
      }
    }
  }

</script>
<style scoped>
  @import '../AddressBookView/AddressBookView.css';
</style>
