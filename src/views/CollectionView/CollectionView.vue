<style scoped lang="less">
  @import 'CollectionView.css';
</style>
<template>
  <div>
    <div class="home-header">
      <Icon type="md-add" size="20" style="line-height:40px;" @click="addCollection" />
      <p style="width:90%">{{ title }}</p>
      <div v-if='this.collectionArr.length > 0'>
        <i-button class="editBtn" tyle="default" size="small" @click="editCollection">编辑</i-button>
      </div>
    </div>
    <div class="home-content">
      <p v-if='this.collectionArr.length === 0'>无个人收藏</p>
      <div>
        <ul>
          <li class="collectionList" v-for="(item,index) in collectionArr" :key="index">
            <Row>
              <Col span="3"><Icon type="ios-contact" size="32" style="color:#595b5d"/></Col>
              <Col span="18" style="text-align:left;"><span>{{ item.name }}</span></Col>
              <Col span="3"><Icon type="ios-information-circle-outline" size="20" style="color:#26a2ff" @click="details(title,item.name)" /></Col>
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
        collectionArr:[
          {
            name: '张三',
          },
          {
            name: '李四',
          }
        ]
      };
    },
    methods: {
      //添加收藏
      addCollection(){
        this.$router.push({name:'ToAddressBook'});
      },
      //编辑联系人
      editCollection(){

      },
      //联系人详细信息
      details(title,name){
        this.$router.push('/contacts_details/'+ title +'/'+ name);
      }

    },
    mounted(){

    }
  };
</script>

