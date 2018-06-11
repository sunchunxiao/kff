<template>
  <div class="helpA" >
    <!--<HeaderBar :title="title" />-->

    <mt-navbar v-model="selected" @touchmove.prevent>
      <mt-tab-item id="evaluate">评测规则
        <div class="lineC"><img class="line" src="../../assets/mine/about/line@2x.png" alt=""></div>
      </mt-tab-item>
      <mt-tab-item id="reward">激励机制
        <div class="lineA"><img class="line" src="../../assets/mine/about/line@2x.png" alt=""></div>
      </mt-tab-item>
      <mt-tab-item id="description">区分指数
        <div class="lineA"><img class="line" src="../../assets/mine/about/line@2x.png" alt=""></div>
      </mt-tab-item>
      <mt-tab-item id="authentication">实名认证
        <div class="lineA"><img class="line" src="../../assets/mine/about/line@2x.png" alt=""></div>
      </mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="evaluate">
        <div class="evaluate-rule">
          <h1 class=" mainB h1">评测规则</h1>
          <p class="margin-bottom mainB">为了让更多的人参与到针对区块链项目的分布式评测中，“区分”内提供了对区块链项目的多种评测方式，包括普通评测、专业评测（单纬度评测、完整评测、自定义评测）等多种模式。您可以根据需要进行选择。 根据不同用户对于一个区块链项目的评分，综合考虑内容贡献者和筛选人的区分指数，计算出当前项目的综合评分。</p>
          <p class="margin-bottom mainB">注：区分的评测模型在不断进化和迭代中，初期版本V1.0经过区分团队的研究和实践，仍会有不足之处，后期迭代将由The Finder发现者联盟共同决定。 </p>
          <div class="help-content">
            <h3 class="help-title">1.评测方法</h3>
            <div >1.简单评测 </div>
            <div class="mainB">当您对区块链项目有一定认知时，可对项目给出自己的评分，以及简单评价。</div>
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
        <h1 class="mainB h1">激励机制</h1>
        <div class="reward">
          <p class="mainB">为了“区分”生态的健康发展，我们设计了FIND的消耗与获取闭环。初期为了区分生态的健康发展，“区分”对于注册用户给予了FIND奖励。同时鼓励优质内容，区分对贡献优质内容、提供有价值信息的用户给予FIND奖励。</p>
          <h3 class="help-title mainB">1.注册奖励</h3>
          <div class="mainB">新用户注册及邀请好友注册都将获得区分的FIND奖励，明细如下：</div>
          <img class="helpEvaluation mainB" src="../../assets/mine/help/register1.png" alt="">
          <div>MO: 用户注册奖励</div>
          <div>M1: 一级好友邀请</div>
          <div class="mainB" >M2: 用户注册奖励</div>
          <p class="mainB" >区分的前5w用户为区分的“创世节点”，将获得区分的创世奖励。</p>
          <p class="mainB" >在注册之后发放注册奖励，不过需要用户实名注册之后，才会开始线性发放。</p>
          <h3 class="help-title">2.内容贡献奖励</h3>
          <div class="mainB" >“区分”对于价值内容的贡献者给予FIND奖励，主要通过点赞来进行筛选。</div>
          <img class="helpEvaluation mainB" src="../../assets/mine/help/content.png" alt="">
          <div class="mainB">当用户在区分上浏览内容时，会给予有价值的内容点赞。“区分”将奖励内容贡献者。为了“区分”生态的健康发展，“区分”引进了“区分指数”，避免机器人和水军对区分平台的内容造成恶劣影响。</div>
          <p class="mainB">用户的内容贡献奖励将直接发放到用户账户中。</p>
          <p>每个用户的点赞次数不限，但是有效赞（平台奖励）的次数有限。</p>
          <ul class="mainB">
            <li>用户的有效赞数量 = 区分指数 * 0.1（向下取整）</li>
            <li>每个赞的收益 = 基础奖励 * 内容贡献者的区分指数 * 0.01（保留小数）</li>
          </ul>
          <div class="mainB"> 区分指数：用户注册时，初始指数为100，最高1000。按照锁仓、内容贡献、活跃度、影响力、健康度、社区共识变量等部分组成。只有实名认证后，区分指数才会生效。 </div>
          <h3 class="mainB">奖励的两种发放方式</h3>
          <div>线性发放：</div>
          <div class="mainB">FIND已经发放到用户账户中，只是需要用户登录领取，每次发放1%，分100次进行发放。只有领取后才能在“区分”生态中流通。 </div>
          <div>直接发放：</div>
          <div class="mainB">FIND奖励直接发放到用户账户中，可以在“区分”生态中流通。</div>
          <div class="mainB">初期的内容奖励将根据区分平台的发展进行适时调整，区分激励池将持续激励优质内容的生产。</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="description">
        <h1 class="mainB h1">区分指数</h1>
        <div class="reward">
          <p class="mainB">“区分指数”相当于用户在“区分”生态中的算力。“区分指数”对用户在区分平台的影响力，内容贡献的排名和收益都与“区分指数”密切相关。没有区分指数，就无法发放“奖励”。</p>
          <p class="mainB">获得“区分指数”的前提是实名认证成功，请好好经营您的“区分指数”。</p>
          <h3 class="help-title">1.区分指数定义</h3>
          <div class="mainB">区分系统把影响用户等级的相关参数写入智能合约，这些参数形成的指数称作:区分指数。 区分指数(Ind)的影响因子如下:</div>
          <img class="helpEvaluation mainB" src="../../assets/mine/help/qfMap.png" alt="">
          <div>——内容贡献(权重40%)</div>
          <div class="mainB">如评测、文章、谈论的数量和点赞量等；</div>
          <div>——锁仓(权重30%)</div>
          <div class="mainB">包括FIND锁仓数量 FIND锁仓时间；</div>
          <div>——活跃度(权重10%)</div>
          <div class="mainB">包括签到、回复、发表评论量等；</div>
          <div>——健康度(权重5%)</div>
          <div class="mainB">如原创违规、灌水等行为</div>
          <div>——社区考核(权重10%)</div>
          <div class="mainB">包括基本资料、实名认证、社区投票等</div>
          <div>——影响力(权重5%)</div>
          <div class="mainB">如被关注量、拉新人数、分享浏览关注量等 ;</div>
          <div class="mainB">注册新用户的区分指数初始值为100，最高分为1000。</div>
          <div class="mainB">不同的区分指数对应不同的等级， 不同用户等级在评测参与上有不同的权限，同时对同一事项的影响权重不同。同时，在区分 系统内的用户，会生成特有的数字身份，其在系统内的浏览和言论会生成特有的数据。</div>
          <div class="mainB">用户等级的设计，主要是规避利益方利用机制作恶，防止僵尸账号制造虚假信息，最大限度地保证系统的评测结果公正真实。同时让真正为生态贡献价值的节点能获得收益。</div>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="authentication">
        <h1 class="mainB h1">实名认证</h1>
       <div class="reward">
         <p class="mainB">根据相关的法律法规，“区分”邀请您进行实名认证，以便开启您的区分之旅。 </p>
         <p>未实名用户的“区分指数”为0，注册奖励和内容奖励将在实名认证之后才会发放。 </p>
       </div>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<style lang="less">
  ::-webkit-scrollbar {/*隐藏滚轮*/
    display: none;
  }
  a{
    color: rgb(105,113,131);
  }
  .lineA{
    display: none;
  }
  .lineB{
    display: block;
  }
  /*.lineC{*/
    /*display: none;*/
  /*}*/
  .line{
    position: absolute;
    top: 45px;
    left:0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
  }
  .h1{
    color: rgb(74,74,74);
    font-weight: 400;
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
  .reward{
    font-size: 1.1rem;
  }
  .mint-tab-item{
    position: relative;
  }
  .mint-navbar .mint-tab-item.is-selected{
    border-bottom: none!important;
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
    mounted(){
      $(".mint-navbar>.mint-tab-item").on("click",function(){
        var index = $(this).index()
        if(index==0){
          $(".lineA").css("display","none")
          $(".lineC").css("display","none")
          $(".mint-tab-item:eq(0) .lineC").css("display","block")
        }
        if(index==1){
          $(".lineC").css("display","none")
          $(".lineA").css("display","none")
          $(".mint-tab-item:eq(1) .lineA").css("display","block")
        }
        if(index==2){
          $(".lineC").css("display","none")
          $(".lineA").css("display","none")
          $(".mint-tab-item:eq(2) .lineA").css("display","block")
        }
        if(index==3){
          $(".lineC").css("display","none")
          $(".lineA").css("display","none")
          $(".mint-tab-item:eq(3) .lineA").css("display","block")
        }
        // console.log($(".mint-tab-item").width())
        // var width = $(".mint-tab-item").width()
        // $(".lineA").css("display","block");
        // $(".line1").css({
        //   // left:index*95+25+"px"
        //   left:index*width+30+"px"
        // })
        // $(".lineA").css("display","block");
        // if($(this).hasClass("is-selected")){
        //   console.log(111)
        //
        //   console.log(index*10+30)
        //
        // }

      })
    },
    methods: {
    }
  }
</script>


