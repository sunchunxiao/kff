<style lang="less">
  .topicContent {
    margin-bottom: 100px;
  }

  .footBtn {
    position: fixed;
    bottom: 60px;
    width: 100%;
  }
</style>
<template>
  <div>
    <div class="topicContent">
      <mt-search v-model="searchWord"></mt-search>
      <mt-navbar v-model="selected">
        <mt-tab-item id="rank">关注排名</mt-tab-item>
        <mt-tab-item id="sort">名称排序</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <keep-alive>
        <component :is="selected" :rankList="rankList" :sortList="sortList" v-on:attentionHandel="attentionHandel"/>
      </keep-alive>
    </div>
    <div class="footBtn">
      <mt-button type="primary" class="longBtn" @click.native="addProject">添加项目</mt-button>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import RankList from '@/components/topic/rankList.vue'
  import SortList from '@/components/topic/sortList.vue'

  export default {
    name: "topic",
    components: {
      rank: RankList,
      sort: SortList
    },
    data() {
      return {
        searchWord: "",
        selected: "rank",
        rankList: [],
        sortList: [],
      }
    },
    created() {
      this.queryRankList();
      this.querySortList();
    },
    methods: {
      queryRankList() {
        //接口
        this.rankList = [
          {
            id: 1,
            name: 'BTC (比特币)',
            isAttention: false,
            number: 12000,
            imageUrl: require("../../assets/image/rose.png")
          },
          {
            id: 2,
            name: 'BTC (比特币)',
            isAttention: true,
            number: 12000,
            imageUrl: require("../../assets/image/rose.png")
          }
        ]

      },
      querySortList() {
        //接口
        this.sortList = [
          {
            id: 1,
            name: 'ADA (艾达币）',
            isAttention: false,
            rate: 85,
            imageUrl: require("../../assets/image/rose.png")
          },
          {
            id: 2,
            name: 'ARK ',
            isAttention: true,
            rate: 85,
            imageUrl: require("../../assets/image/rose.png")
          }
        ]
      },
      //flag区别是 rangList 还是sortList
      attentionHandel(flag, item, index) {
        let id = item.id;
        if(flag === 'rank'){
          //接口
          this.rankList[index].isAttention =  !this.rankList[index].isAttention
        }

        if(flag === 'sort'){
          //接口
          this.sortList[index].isAttention =  !this.sortList[index].isAttention
        }
      },
      addProject() {
        this.$router.push('/topic/add')
      }
    }
  }
</script>
