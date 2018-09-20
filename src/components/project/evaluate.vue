<style lang="less">

  .evaluate {
    margin-top: 20px;
    padding: 0 20px;
    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .model {
      .modetItem {
        .flex;
      }
    }

  }
</style>
<template>
  <div>
    <div class="evaluate">
      <div class="average flex">
        <div>总体评分：</div>
        <My-Progress :rate="average"></My-Progress>
        <router-link :to="{path: '/project/allEvaluate', query: {id}}">查看全部</router-link>
      </div>
      <div class="flex">
        <div>完整测评：</div>
        <div>{{3000}}</div>
        <router-link to="/">查看</router-link>
      </div>
      <div class="model">
        <div class="modetItem">
          <div>指标</div>
          <div>分数</div>
          <div>权重</div>
          <div>参与人数</div>
          <div>&nbsp;</div>
        </div>
        <template v-for="(item,index) in modelData">
          <div class="modetItem">
            <div>{{item.name}}</div>
            <div>{{item.score}}</div>
            <div>{{item.rate}}</div>
            <div>{{item.number}}</div>
            <div>
              <router-link to="/">查看</router-link>
            </div>
          </div>
        </template>
      </div>
      <div>
        <h3>精选测评</h3>
        <Evaluate-Item :itemList="evaluateList"></Evaluate-Item>
      </div>
    </div>
  </div>
</template>

<script>
  import MyProgress from '@/components/common/myProgress.vue'
  import EvaluateItem from '@/components/common/evaluateItem.vue'

  export default {
    name: "evaluate",  //测评
    components: {
      MyProgress,
      EvaluateItem
    },
    props: ['id'],
    data() {
      return {
        average: 89,
        modelData: [],
        evaluateList: []
      }
    },
    created() {
      this.queryModelData(this.id)
      this.queryEvaluateList(this.id)
    },
    methods: {
      queryModelData() {
        /*接口*/
        this.modelData = [
          {name: "项目定位", rate: "20%", score: 80, number: 100},
          {name: "技术框架", rate: "10%", score: 80, number: 100},
          {name: "团队实力", rate: "30%", score: 80, number: 100},
          {name: "项目进度", rate: "20%", score: 80, number: 100},
          {name: "投资风险", rate: "20%", score: 80, number: 100},
        ]
      },
      queryEvaluateList() {
        /*接口*/
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
        },
        ]
      }
    }

  }
</script>
