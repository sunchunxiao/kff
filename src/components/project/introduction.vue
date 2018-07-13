<style lang="less">
  .introduction {
    padding: 10px;
    .mainInfo{
      border-bottom: 1px solid #ddd;
      padding: 10px;
      .description {
        white-space: normal;
        height: 50px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .listItem{
      .item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 5px;
        border-bottom: 1px solid #ddd;

      }
    }

  }
</style>
<template>
  <div class="introduction">
    <div class="mainInfo">
      <h3>项目简介</h3>
      <div class='description'>
        NEO，原名小蚁，2014年正式立项，2015年6月于Github实时开源。成立以来，NEO团队亲历了区块链行业的高潮与低谷，数字货币市场的狂热与冷却，各国监管...
        成立以来，NEO团队亲历了区块链行业的高潮与低谷，数字货币市场的狂热与冷却，各管的高潮与低谷
      </div>
      <div>
        <label>英文名：</label>
        <span></span>
      </div>
      <div>
        <label>中文名：</label>
        <span></span>
      </div>
      <div>
        <label>发行时间：</label>
        <span></span>
      </div>
      <div>
        <label>官网：</label>
        <span></span>
      </div>
      <div>
        <label>相关概念：</label>
        <span></span>
      </div>
      <div>
        <label>白皮书：</label>
        <span></span>
      </div>
    </div>
    <div class="listItem">
      <div>站长</div>
      <div class="item">
        <img class="img" :src="hoster.imageUrl"/>
        <div class="message">
          <div>{{hoster.name}}</div>
          <div>{{hoster.description}}</div>
        </div>
        <div class="btn">
          <mt-button @click="addHostAttention(hoster.id)" :type="hoster.isAttention ? 'default' : 'primary'">{{hoster.isAttention ? "已关注" : "+ 关注"}} </mt-button>
        </div>
      </div>
    </div>
    <div class="listItem">
      <div>活跃用户</div>
      <template v-for="(item,index) in activeUserList ">
        <div :key="index" class="item">
          <img class="img" :src="item.imageUrl"/>
          <div class="message">
            <div>{{item.name}}</div>
            <div>{{item.description}}</div>
          </div>
          <div class="btn">
            <mt-button @click="addAttention(item,index)" :type="item.isAttention ? 'default' : 'primary'">{{item.isAttention ? "已关注" : "+ 关注"}} </mt-button>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "introduction",
    props: ['id'],
    data() {
      return {
        hoster: {
          id: "",
          imageUrl: "",
          name: "",
          description: "",
          isAttention: false,
        },
        activeUserList: []
      }
    },
    created() {
      //接口
      this.queryIntroductinoInfo(this.id);

    },
    methods: {
      //查询简介信息
      queryIntroductinoInfo(id) {
        console.log(id);
        this.hoster = {
          id: "1",
          imageUrl: require("../../assets/image/rose.png"),
          name: "1",
          description: "111",
          isAttention: true,
        }
        this.activeUserList = [{
          id: "1",
          imageUrl: require("../../assets/image/rose.png"),
          name: "1111",
          description: "111",
          isAttention: true,
        }]
      },

      addHostAttention(id) {
        /*接口*/
        this.hoster.isAttention = !this.hoster.isAttention
      },
      addAttention(item, index) {
        let {id} = item
        //接口
        this.activeUserList[index].isAttention = !this.activeUserList[index].isAttention
      }
    }
  }
</script>
