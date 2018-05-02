<style lang="less" scoped>
  .find{
    background-color: #f9f9f9;
  }
  .mint-navbar{
    width: 45%;
    margin: 0 auto;
    color:#aeaeae;
    background-color:#f9f9f9 ;
    .mint-tab-item-label{
      font-size:17px;
      /*color:#aeaeae;*/
      letter-spacing:0;
    }
  }
  .mint-tab-item{
    width: 20%;
  }
  .mint-navbar .mint-tab-item .is-selected{
    border-bottom:1px solid #26a2ff;
    color:#3b88f6;
  }
  /*.mint-tab-item-label{*/
    /*font-size: 17px;*/
  /*}*/
  /*.mint-navbar .mint-tab-item.is-selected{*/
    /*border: none;*/
  /*}*/
  .mint-button-text{
    background-color: #fff;
  }

</style>
<template>
  <div class="find">
    <HeaderBar
      :rightOptions="rightOptions"
      v-on:rightClickHandel="rightClickHandel"
      :title="title"
    />

    <mt-navbar v-model="selected">
      <mt-tab-item id="recommend">推荐</mt-tab-item>
      <mt-tab-item id="attention">关注</mt-tab-item>
      <mt-tab-item id="rangkList">青天榜</mt-tab-item>
    </mt-navbar>

    <keep-alive>
      <component :is="selected" :recommendList="recommendList" :rankList="rankList" :attentionList="attentionList" v-on:attentionHandel="attentionHandel"/>
    </keep-alive>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import Recommend from '@/components/home/recommend.vue'
  import Attention from '@/components/home/attention.vue'
  import RankList from '@/components/home/rankList.vue'

  export default {
    name: 'home',
    components: {
      HeaderBar,
      recommend: Recommend,
      attention: Attention,
      rangkList: RankList
    },
    data() {
      return {
        rightOptions: {
          hasRightBtn: false,
        },
        title: this.$route.meta.title,
        selected: "recommend",
        recommendList: [],
        attentionList: [],
        rankList: [],
      }
    },
    created() {
      this.queryRecommendList()
      this.queryAttentionList()
      this.queryRankList()
    },
    methods: {
      rightClickHandel() {
        this.$router.push('')
      },

      queryRecommendList() {
        //接口
        this.recommendList = [{
          id: 1,
          action: "zan",
          itemImg: require("../../assets/image/rose.png"),
          itemName: "柚子（EOS）",
          time: '2018-04-07',
          isAttention: true,
          testName: "ALL-整体评测",
          rate: 85,
          descrption: "以太坊系统自身带有一种叫做以太币（Ether）的数字货币。以太币和著名的数字货币比特币（Bitcoin）...",
          descrImg: require("../../assets/image/logo.png"),
          testerImg: require("../../assets/image/rose.png"),
          tester: "老猫",
          zanNum: 200,
          commentNum: 50,
        }, {
          id: 1,
          action: "test",
          itemImg: require("../../assets/image/rose.png"),
          itemName: "柚子（EOS）1111",
          time: '2018-05-07',
          isAttention: false,
          testName: "ALL-整体评测",
          rate: 65,
          descrption: "区块链投资人、创业者",
          descrImg: require("../../assets/image/logo.png"),
          testerImg: require("../../assets/image/rose.png"),
          tester: "老猫11",
          zanNum: 300,
          commentNum: 80,
        }]
      },
      queryAttentionList() {
        //接口
        this.attentionList = [{
          //是否有测评
          operator: "老猫",
          operatorImg: require("../../assets/image/rose.png"),
          action: "zan",
          //
          id: 1,
          itemImg:
            require("../../assets/image/rose.png"),
          itemName:
            "柚子（EOS）",
          time:
            '2018-04-07',
          isAttention:
            true,
          testName:
            "ALL-整体评测",
          rate:
            85,
          descrption:
            "以太坊系统自身带有一种叫做以太币（Ether）的数字货币。以太币和著名的数字货币比特币（Bitcoin）...",
          descrImg:
            require("../../assets/image/logo.png"),
          testerImg:
            require("../../assets/image/rose.png"),
          tester:
            "老猫",
          zanNum:
            200,
          commentNum:
            50,
        },
          {
            //是否有测评
            operator: "老猫",
            operatorImg: require("../../assets/image/rose.png"),
            action: "test",

            id: 1,
            itemImg:
              require("../../assets/image/rose.png"),
            itemName:
              "柚子（EOS）1111",
            time:
              '2018-05-07',
            isAttention:
              false,
            testName:
              "ALL-整体评测",
            rate:
              65,
            descrption:
              "区块链投资人、创业者",
            descrImg:
              require("../../assets/image/logo.png"),
            testerImg:
              require("../../assets/image/rose.png"),
            tester:
              "老猫11",
            zanNum:
              300,
            commentNum:
              80,
          }
        ]
      },
      queryRankList() {
        //接口
        this.rankList=[{
          name:"EOS",
          number:10000,
          description:"商用分布式应用设计的一款区块链操作系统",
          rate:85
        },{
          name:"ETH",
          number:10000,
          description:"商用分布式应用设计的一款区块链操作系统",
          rate:85
        }]
      },

      //flag区别是 rangList 还是sortList
      attentionHandel(flag, item, index) {
        let id = item.id;
        if (flag === 'recommend') {
          //接口
          this.recommendList[index].isAttention = !this.recommendList[index].isAttention
        }

        if (flag === 'attention') {
          //接口
          this.attentionList[index].isAttention = !this.attentionList[index].isAttention
        }
      },
    }
  };
</script>
