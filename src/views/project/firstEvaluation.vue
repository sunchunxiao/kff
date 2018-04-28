<style lang="less">
  .fristtEvaluation {
    padding: 20px 10px;
    .average {
      padding: 10px;
      border-bottom: 1px solid #DDD;
    }
    .detail {
      padding: 10px;
    }
    .mt-progress {
      width: 250px;
    }
  }
</style>
<template>
  <div>
    <HeaderBar
      :leftOptions="leftOptions"
      v-on:leftClickHandel="leftClickHandel"
      :title="title"
    />
    <div class="fristtEvaluation">
      <div class="average">
        <div>总体评分</div>
        <My-Progress :rate="averageScore"></My-Progress>
      </div>
      <template v-for="item in modelInfoList">
        <div class="detail">
          <div>{{item.name}}({{item.rate}})</div>
          <My-Progress :rate="item.score"></My-Progress>
        </div>
      </template>
      <div class="btnGroup">
        <mt-button type="primary" class="longBtn" @click.native="nextStep">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import MyProgress from '@/components/common/myProgress.vue'

  export default {
    name: "fristtEvaluation",
    components: {
      HeaderBar,
      MyProgress
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        title: this.$route.meta.title,
        modelInfoList: []
      }
    },
    created() {
      this.queryEvaluteInfo()
    },
    computed: {
      averageScore() {
        return this.modelInfoList.reduce((total, item, index) => {
          return total + item.score * item.rateValue
        }, 0).toFixed(1)

      }
    },
    methods: {
      leftClickHandel() {
        this.$router.go(-1)
      },

      queryEvaluteInfo() {
        //接口
        this.modelInfoList = [
          {name: "项目定位", rate: "20%", rateValue: 0.2, score: 85},
          {name: "技术框架", rate: "10%", rateValue: 0.1, score: 85},
          {name: "团队实力", rate: "30%", rateValue: 0.3, score: 85},
          {name: "项目进度", rate: "20%", rateValue: 0.2, score: 80},
          {name: "投资风险", rate: "20%", rateValue: 0.2, score: 85},
        ]
      },

      nextStep() {
        this.$router.push({path: '/project/secondEvaluation', query: {average: this.averageScore}})
      }
    }
  }
</script>
