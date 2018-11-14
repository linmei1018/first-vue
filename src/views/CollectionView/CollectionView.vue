<style scoped lang="less">
  @import 'CollectionView.css';
</style>
<template>
  <div>
    <div class="home-header">
      <Icon type="md-add" size="20" style="line-height:40px;" @click="addCollection" v-if="!removeBtn" />
      <p style="width:90%">{{ title }}</p>
      <div v-if='this.collectionArr.length > 0'>
        <i-button v-if="removeBtn" class="editBtn" tyle="default" size="small" @click="completeEdit">完成</i-button>
        <i-button v-else="removeBtn" class="editBtn" tyle="default" size="small" @click="editCollection">编辑</i-button>
      </div>
    </div>
    <div class="home-content">
      <p class="no-collection" v-if='this.collectionArr.length === 0'>无个人收藏</p>
      <div>
        <ul>
          <li class="collectionList" v-for="(item,index) in collectionArr" :key="index">
            <Row>
              <Col span="2" v-show="removeBtn"><Icon type="md-remove-circle" size="24" style="color:red" @click="removeContacts(index)" /></Col>
              <Col span="3"><Icon type="ios-contact" size="40" style="color:#595b5d"/></Col>
              <Col span="16" style="text-align:left;"><span>{{ item.name }}</span></Col>
              <Col span="2" v-if="removeBtn" >
                <Icon type="ios-reorder" size="20" />
              </Col>
              <Col span="5" v-else="removeBtn" >
                <Icon type="ios-information-circle-outline" size="20" style="color:#26a2ff" @click="details(title,item.name)" />
              </Col>
            </Row>
          </li>
        </ul>
      </div>
    </div>
    <!-- 添加联系人 -->

  </div>
</template>
<script>
  export default {
    components: {

    },
    data() {
      return {
        title: '个人收藏',
        removeBtn: false, //是否显示删除按钮
        collectionArr:[]
      };
    },
    methods: {
      //添加收藏
      addCollection(){
        this.$router.push({name:'ToAddressBook'});
      },
      //编辑联系人
      editCollection(){
        this.removeBtn = true;
      },
      //完成编辑
      completeEdit(){
        this.removeBtn = false;
      },
      //联系人详细信息
      details(title,name){
        this.$router.push('/contacts_details/'+ title +'/'+ name);
      },
      //删除联系人
      removeContacts(index){
        this.collectionArr.splice(index, 1);
      }
    },
    mounted(){
      this.$http({
        method:'get',
        url:'/collectionList'
      }).then( res => {
        this.collectionArr = res.data.collection;
      })
    }
  };
</script>

