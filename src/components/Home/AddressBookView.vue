<template>
  <div>
    <div class="header" :class="isClick?'HeaderHidden':''" >
      <p style="width:95%">通讯录</p>
      <Icon type="md-add" size="20" style="line-height:40px;" @click="addSearch" />
    </div>
    <!--添加通讯录弹窗-->
    <mt-popup
      v-model="popupVisible"
      class="add-search-popup"
      position="bottom">
      13456
    </mt-popup>
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
      <!--<div class="search-key">-->
        <!--<input @on-change="searchChange()" v-model.trim="searchKey" placeholder="搜索"/>取消-->
      <!--</div>-->

    </div>
    <div class="mail_content">
      <h3 style="height:40px;line-height:40px;">本机号码：13879136593</h3>
      <mt-index-list>
        <mt-index-section v-for="item in result" :index="item.value" :key="item.value">
          <mt-cell v-for="(items,index) in item.title" :key="index" :title="items"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>

  </div>
</template>
<script>
  export default {
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
      }
    },
    methods:{
      //点击搜索框事件
      searchName(){
        this.isClick = true;
      },
      //关闭遮罩层
      shadowCancel(){
        this.isClick = false;
      },
      //搜索框Change事件
      searchChange(){
        this.isChange = true;
      },
      //取消搜索
      cancelSearch(){
        this.isClick = false;
        this.isChange = false;
        this.searchKey = '';
      },
      //添加通讯录
      addSearch(){
        this.popupVisible = true;
      }
    }
  }
</script>
<style scoped>
  .header{
    top: 0;
    right: 0;
    left: 0;
    position: fixed;
    z-index: 1;
    display: flex;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
    background-color: #26a2ff;
    color:#fff;
    text-align:center;
  }
  .add-search-popup{
    width:100%;
    height:100%;
  }
  .HeaderHidden{
    display:none;
  }
  .changeSearch{
    display:none;
  }
  .shadowShow{
    height:100%;
    width:100%;
    position:fixed;
    background:#000;
    opacity:0.5;
    z-index: 1;
  }
  .shadowCancel{
    height:100%;
    width:100%;
    position:fixed;
    top:60px;
    background:#fff;
    z-index: 1;
    display:block;
  }
  .mint-search{
    height:100%;
    margin-top:-20px;
  }
  .search_name{
    margin-top:-20px;
    padding: 5px 10px;
    background:#ccc;
    width:100%;
    position:absolute;
  }
  .inputSearch{
    float:left;
    width:90%;
  }
  .cancelSearch{
    display:inline-block;
    color: #5394ec;
    font-weight:bold;
    font-size:14px;
    height:50px;
    line-height:50px;
  }
  .search-key{
    margin:10px 0;
    width:80%;
  }
  .search{
    padding: 5px 10px;
    background:#ccc;
    margin-top:-60px;
    z-index: 10;
  }
  .mint-indexsection{
    text-align:left;
  }

</style>
