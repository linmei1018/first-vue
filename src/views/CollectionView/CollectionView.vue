<style scoped lang="less">
  @import 'CollectionView.css';
</style>
<template>
  <div>
    <div class="home-header">
      <Icon type="md-add" size="20" style="line-height:40px;" @click="addCollection" />
      <p style="width:90%">收藏</p>
      <div style="display: none;">
        <i-button class="editBtn" tyle="default" size="small" @click="editCollection">编辑</i-button>
      </div>
    </div>
    <div class="home-content">
      <!--<p>无个人收藏</p>-->
      <div>
        <ul>
          <li class="collectionList">
            <Row>
              <Col span="3"><Icon type="ios-contact" size="32" style="color:#595b5d"/></Col>
              <Col span="18" style="text-align:left;"><span>姓名</span></Col>
              <Col span="3"><Icon type="ios-information-circle-outline" size="20" style="color:#26a2ff"/></Col>
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

      };
    },
    methods: {
      //添加收藏
      addCollection(){
        this.$router.push({name:'ToAddressBook'});
      },
      //编辑联系人
      editCollection(){

      }

    },
    // ...
  };
</script>

