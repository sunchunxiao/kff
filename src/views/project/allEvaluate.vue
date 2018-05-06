<style lang="less">

</style>
<template>
  <div>
    <HeaderBar :title="title" />
    <div>
      <div>共{{total}}条</div>
      <Evaluate-Item :itemList="evaluateList"></Evaluate-Item>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import EvaluateItem from '@/components/common/evaluateItem.vue'

  export default {
    name: "allEvaluate",
    components: {
      HeaderBar,
      EvaluateItem
    },
    data() {
      return {
        title: this.$route.meta.title,
        evaluateList: [],
        total: 0,
      }
    },
    created() {
      this.id = this.$route.query.id
      this.queryEvaluateList(this.id)
    },
    methods: {
      queryEvaluateList(id) {
        this.total = 10000
        this.evaluateList = [{
          id: 1,
          itemImg: require("../../assets/image/rose.png"),
          name: "Bouny",
          testName: "ALL-整体评测",
          rate: 85,
          descrption: "以太坊系统自身带有一种叫做以太币（Ether）的数字货币。以太币和著名的数字货币比特币（Bitcoin）...",
          descrImg: require("../../assets/image/logo.png"),
          zanNum: 200,
          commentNum: 50,
        }]
      }
    }
  }
</script>
