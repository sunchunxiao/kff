<style lang="less">
  .projectHome {
    .baseInfo {
      height: 175px;
      padding: 20px 10px;
      border-bottom:1px solid #ddd ;
      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name {
          font-size: 16px;
          font-weight: 600;
        }
        .img {
          width: 80px;
        }
      }
    }
  }

</style>
<template>
  <div class="projectHome">
    <HeaderBar
      :leftOptions="leftOptions"
      v-on:leftClickHandel="leftClickHandel"
      :title="baseInfo.name"
    />

    <div class="baseInfo">
      <div class="row">
        <div>
          <div class="name">{{baseInfo.name}}</div>
          <div>{{baseInfo.description}}</div>
          <div>发布时间：{{baseInfo.createTime}}</div>
        </div>
        <img class="img" :src="baseInfo.imageUrl"/>
      </div>
      <div class="row">
        <div>
          <div>
            <mt-progress :value="baseInfo.rate" :bar-height="5"  @click.native="goRate">
              <div slot="start" style="margin-right: 5px">{{baseInfo.rate / 10}}</div>
            </mt-progress>
          </div>
          <div>评分用户{{baseInfo.testNum}}人 </div>
        </div>
        <div>
          <div>{{baseInfo.attentionNum}}</div>
          <div>关注</div>
        </div>
      </div>
      <div class="row">
        <div>
          <mt-button type="primary" @click.native="evaluateProject">去测评</mt-button>
        </div>
        <div>
          <mt-button @click="addAttention" :type="baseInfo.isAttention ? 'default' : 'primary'">{{baseInfo.isAttention ? "已关注" : "+ 关注"}} </mt-button>
        </div>
      </div>
    </div>

    <mt-navbar v-model="selected">
      <mt-tab-item id="introduction">简介</mt-tab-item>
      <mt-tab-item id="evaluate">测评</mt-tab-item>
      <mt-tab-item id="discuss">讨论</mt-tab-item>
      <mt-tab-item id="articleList">文章</mt-tab-item>
    </mt-navbar>

    <keep-alive>
      <component :is="selected"/>
    </keep-alive>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import Introduction from '@/components/project/introduction.vue'
  import Evaluate from '@/components/project/evaluate.vue'
  import Discuss from '@/components/project/discuss.vue'
  import ArticleList from '@/components/project/articleList.vue'

  export default {
    name: "projectHome",
    components: {
      HeaderBar,
      Introduction,
      Evaluate,
      Discuss,
      ArticleList,
    },
    data() {
      return {
        selected: "introduction",
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        baseInfo: {},

      }
    },
    created() {
      this.queryBaseInfo()
    },
    methods: {
      leftClickHandel() {
        this.$router.go(-1)
      },

      //查询基本信息
      queryBaseInfo() {
        //接口
        this.baseInfo = {
          id: 1,
          name: 'BTC (比特币)',
          description: "商用分布式应用设计的一款区块链操作系统",
          createTime: "2017-08-10",
          testNum: 12000,
          attentionNum: 12000,
          rate: 86,
          isAttention: false,
          imageUrl: require("../../assets/image/logo.png")
        }
      },
      goRate() {
        let id = this.baseInfo.id
        this.$router.push({
          path: '/project/rate',
          query: {
            id,
          }
        })
      },

      //跳转到 普通测评
      evaluateProject() {
        let id = this.baseInfo.id
        this.$router.push({
          path: '/project/ordinary',
          query: {
            id,
          }
        })
      },

      addAttention() {
        let id = this.baseInfo.id
        //接口
        this.baseInfo.isAttention = !this.baseInfo.isAttention
      }
    }
  }
</script>
