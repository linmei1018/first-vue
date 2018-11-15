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
      <add-to-address-book @cancelAddPhone="cancelAddPhoneBtn"></add-to-address-book>
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
          <mt-cell v-for="(items,index) in item.title" :key="index" :title="items" @click.native="phoneItem(index)" ></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>
<script>
  import AddToAddressBook from './AddToAddressBook'
  export default {
    components: {AddToAddressBook},
    props: {
      isName: { //个人收藏
        type: String,
      },
    },
    data(){
      return{
        popupVisible:false, //添加通讯录弹窗
        value:'',
        isClick: false, //是否点击搜索框
        isChange:false, //
        searchKey:'',
        result:[],
        searchDataCopy:'',  //副本
        searchData:'', //搜索数据
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
      //
      phoneItem(index){
        alert(index)
      },
      //取消添加
      cancelAddPhoneBtn(){
        this.popupVisible = false;
      }
    },
    mounted(){
      this.$http({
        method:'get',
        url:'/addressBookList'
      }).then(res => {
        this.result = res.data.addressBook
      });
    }
  }

</script>
<style scoped>
  @import '../AddressBookView/AddressBookView.css';
</style>
