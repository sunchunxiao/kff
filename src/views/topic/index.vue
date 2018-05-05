<style lang="less">
  .topicIndex {
    width: 100%;
    position: fixed;
    height: 100%;
    background-color: #f4f4f4;
  }

  .topicContent {
    margin-bottom: 100px;
  }

  .footBtn {
    position: fixed;
    bottom: 60px;
    width: 100%;
  }

  .current {
    .first {
      background-color: #fff;
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
    }
    li {
      /*margin: 5px auto;*/
      border-bottom: 1px solid #ddd;
      background-color: #fff;
      position: relative;
      div {
        width: 90%;
        padding-left: 5%;
      }
    }

  }

  .currentRank {
    width: 90%;
    margin: 0 auto;
    span {
      font-size: 14px;
      color: #000000;
      letter-spacing: 0;
      text-align: left;
    }
    div {
      float: right;
      a {
        font-size: 12px;
        color: #aaa;
        letter-spacing: 0;
        text-align: right;
        padding: 0 5px;
      }
    }
  }

  .rightBorder {
    border-right: 1px solid #dddddd;
  }

  .follow {
    width: 80px;
    display: inline-block;
    padding-left: 3%;
  }

  .spanName {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    text-align: left;
  }

  .spanNum {
    font-size: 12px;
    color: #888888;
    letter-spacing: 0;
    text-align: left;
  }

  .currentP {
    padding: 10px 0;
  }

  .followR {
    display: inline-block;
    border: 1px solid #3b88f6;
    color: #3b88f6;
    border-radius: 2px;
    width: 43px;
    height: 20px;
    position: absolute;
    right: 2%;
    bottom: 31%;
  }

  .followB {
    background: #f4f4f4;
    letter-spacing: 0;
    width: 46px;
    height: 23px;
    border: none;
  }

  .add {

  }

  .footBtn {
    .longBtn {
      background: #ffffff;
      box-shadow: 0 0 4px 0 #dfdfdf;
      border-radius: 100%;
      width: 38px;
      height: 38px;
      position: fixed;
      right: 2%;
      bottom: 15%;
    }
  }

  .mint-button {
    width: 43px;
    height: 20px;
    border: 1px solid #3b88f6;
    background: #3b88f6;
    color: #fff;
  }

  .mint-button-text {
    font-size: 12px;
    padding-bottom: 1px;
  }

  .mint-button--normal {
    padding: 0;

  }
</style>
<template>
  <div class="topicIndex">
    <div class="topicContent">
      <mt-search v-model="searchWord"></mt-search>
      <!--<mt-navbar v-model="selected">-->
      <!--<mt-tab-item id="rank">关注排名</mt-tab-item>-->
      <!--<mt-tab-item id="sort">名称排序</mt-tab-item>-->
      <!--</mt-navbar>-->
      <!--内容-->
      <div class="current">
        <div class="first">
          <div class="currentRank">
            <span>共380个币种</span>
            <div>
              <a @click="changeTab('rank')" class="rightBorder">按关注</a>
              <a @click="changeTab('sort')" >按名称</a>
            </div>
          </div>
        </div>
        <ul>
          <li>
            <div class="currentP">
              <img src="../../assets/image/rose.png" alt="">
              <p class="follow">
                <span class="spanName">EOS</span><span class="spanF"> / 柚子</span>
                <span class="spanNum">11115关注</span>
              </p>
              <mt-button @click.native="handleClick"> +关注</mt-button>
            </div>
          </li>

        </ul>
      </div>

      <!-- tab-container -->
      <keep-alive>
        <component :is="selected" :rankList="rankList" :sortList="sortList" v-on:attentionHandel="attentionHandel"/>
      </keep-alive>
    </div>
    <div class="footBtn">
      <mt-button type="primary" class="longBtn" @click.native="addProject">+</mt-button>
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
        show: "true",
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
      //tab切换
      changeTab(item) {
        this.selected = item;
      },
      //点击关注
      follow() {
        this.show = !this.show;
      },
      //加关注
      handleClick: function () {
        this.$toast('已经添加关注')
      },
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
        if (flag === 'rank') {
          //接口
          this.rankList[index].isAttention = !this.rankList[index].isAttention
        }

        if (flag === 'sort') {
          //接口
          this.sortList[index].isAttention = !this.sortList[index].isAttention
        }
      },
      addProject() {
        this.$router.push('/topic/add')
      }
    }
  }
</script>
