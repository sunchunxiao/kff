<style lang="less">
  .discuss {
    margin-top: 20px;
    padding: 0 20px;
  }
</style>
<template>
  <div>
    <div class="discuss">
      <div>
        <h3>热门贴</h3>
        <Discuss-Item :itemList="topicList"></Discuss-Item>
      </div>
      <div>
        <h3>最新帖</h3>
        <Discuss-Item :itemList="newList"></Discuss-Item>
      </div>
    </div>
  </div>
</template>

<script>
  import DiscussItem from '@/components/common/discussItem.vue'

  export default {
    name: "discuss",  //讨论
    components: {
      DiscussItem
    },
    props: ['id'],
    data() {
      return {
        topicList: [], //热门贴
        newList: [], //最新帖
      }
    },
    created() {
      this.queryList(this.id)
    },
    methods: {
      queryList() {
        /*接口*/
        this.topicList = [{
          id: 1,
          itemImg: require("../../assets/image/rose.png"),
          itemName: "柚子（EOS）",
          time: '2018-04-07',
          discussItem: "太空链的团队是不是跑路了，都没人更新代码了！",
          descrption: "以太坊系统自身带有一种叫做以太币（Ether）的数字货币。以太币和著名的数字货币比特币（Bitcoin）...",
          descrImg: require("../../assets/image/logo.png"),
          zanNum: 200,
          commentNum: 50,
        }]
        this.newList = [
          {
            id: 1,
            itemImg: require("../../assets/image/rose.png"),
            itemName: "柚子（EOS）",
            time: '2018-04-07',
            discussItem: "太空链的团队是不是跑路了，都没人更新代码了！",
            descrption: "以太坊系统自身带有一种叫做以太币（Ether）的数字货币。以太币和著名的数字货币比特币（Bitcoin）...",
            descrImg: require("../../assets/image/logo.png"),
            zanNum: 200,
            commentNum: 50,
          }
        ]
      },
    }
  }
</script>
