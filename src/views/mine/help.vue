<template>
  <div>
    <HeaderBar :title="title" />

    <mt-navbar v-model="selected">
      <mt-tab-item id="evaluate">评测规则</mt-tab-item>
      <mt-tab-item id="reward">激励机制</mt-tab-item>
      <mt-tab-item id="description">项目说明</mt-tab-item>
      <mt-tab-item id="authentication">认证</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="evaluate">
        <div class="evaluate-rule">
          <h1>评测规则</h1>
          <p class="margin-bottom mainB">为了让更多的人参与到针对区块链项目的分布式评测中，“区分”内提供了对区块链项目的多种评测方式，包括普通评测、专业评测（单纬度评测、完整评测、自定义评测）等多种模式。您可以根据需要进行选择。 根据不同用户对于一个区块链项目的评分，综合考虑内容贡献者和筛选人的区分指数，计算出当前项目的综合评分。</p>
          <p class=" margin-bottom">注：区分的评测模型在不断进化和迭代中，初期版本V1.0经过区分团队的研究和实践，仍会有不足之处，后期迭代将由The Finder发现者联盟共同决定。 </p>
          <div class="help-content">
            <h3 class="help-title">1.评测方法</h3>
            <div >1.简单评测 </div>
            <div class=" mainB">当您对区块链项目有一定认知时，可对项目给出自己的评分，以及简单评价。</div>
            <div>2.专业评测 </div>
            <div  class=" mainB">如果您对区块链项目有深度的认知，你可以选择专业评测，贡献深度内容，并进行打分。</div>
            <div>2.1 单纬度评测 </div>
            <div  class=" mainB">“区分”提供了区块链项目的多个评测纬度，如果您对某一方面（例如项目团队）有深入研究，选择“单纬度评测”，可以给出自己相应的专业分析及评分。</div>
            <div>2.2 完整评测 </div>
            <div  class=" mainB">如果您对当前区块链项目有着完整的认知和观点时，可以选择“完整评测”，对“区分”提供的几个纬度给出自己的评分和每个纬度的详细分析。“区分”会根据您对各纬度的评分和权重，计算出综合评分。综合评分 = SUM（纬度评分*当前纬度权重）</div>
            <div>2.3 自定义评测</div>
            <div  class=" mainB">如果您或您的团队，有着专业的区块链项目评测模型，可以在“区分”上新建自己的评测模型（包括纬度名称、权重、分数，权重之和为1）。对当前项目进行评分，给出客观公正的评测报告。</div>
            <p  class=" mainB">“区分”会根据您对各纬度的评分和权重，计算出综合评分。 综合评分 = SUM（纬度评分*当前纬度权重）</p>
            <h3 class="help-title">2.项目评分</h3>
            <p class=" mainB">对于某个区块链项目，除了单份评测报告给予区块链项目的评分，“区分”还将综合考虑当前区块链项目评测的所有参与者，对区块链项目给予一个综合评分。当参与项目评测的人数到达一定数量时，系统会自动对区块链项目进行整体评分，计算公式</p>
            <div>如下:</div>
            <img class="helpEvaluation" src="../../assets/mine/help/computed.png" alt="">
            <div class="summary">
              对项目进行整体评分时综合考虑内容贡献者和筛选者的区分指数，最大限度地保证评测的专业性和公正性。项目整体评分可以直观的反映出项目等级，给予投资者相应的投资参考。
            </div>
          </div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="reward">
        <h1>激励机制</h1>
        <p>为了“区分”生态的健康发展，我们设计了FIND的消耗与获取闭环。初期为了区分生态的健康发展，“区分”对于注册用户给予了FIND奖励。同时鼓励优质内容，区分对贡献优质内容、提供有价值信息的用户给予FIND奖励。</p>
      </mt-tab-container-item>
      <mt-tab-container-item id="description">
        项目说明写在这里
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<style lang="less">
  .evaluate-rule h1{
    font-size: 15px;
    margin: 1rem 0;
  }
  .mint-tab-container-item {
   padding: 10px 20px
  }
  .helpEvaluation{
    width: 100%;
  }
  .margin-bottom{
    font-size: 1.1rem;
    color: rgb(74,74,74);
  }
  .help-title{
    color: mediumvioletred;
  }
  .help-content{
    font-size: 1rem;
  }
  .mainB{
    margin-bottom: 1rem;
  }
  .summary{
    font-size: 1.2rem;
  }
</style>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'

  export default {
    name: 'message',
    components: {
      HeaderBar,
    },
    data() {
      return {
        title: this.$route.meta.title,
        selected: "evaluate"
      }
    },

    methods: {
    }
  }
</script>


