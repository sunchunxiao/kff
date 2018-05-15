<style scoped>
    .qf-title{
      width: 70%;
      margin: 0 auto;
      padding-top: 10%;
    }
    .qf-title img{
      width: 100%;
      padding-top: 6rem;
    }
    .qf-title-info{
      font-size:15px;
      color:#999999;
      letter-spacing:0;
      margin: 2rem 0;
    }
  .qf-title-content{
    width: 90%;
    margin: 0 auto;
  }
  .font{
    font-size:13px;
    color:#333333;
  }
    .qf-article{
      letter-spacing:0;
      line-height:23px;
    }
    .qf-index-com{
      background:#3b88f6;
      border-radius:100px;
      text-align: center;
      height:22px;
      line-height: 22px;
      font-size:13px;
      color:#ffffff;
      margin: 1rem 0;
    }
    .qf-index{
      width:72px;
    }
    .qf-index1{
      width:47px;
    }
  .qf-title-map{
    width: 78%;
    margin: 2rem auto 0;

    position: relative;
  }
    .qf-title-map img{
      width: 100%;

    }
  .map{
    width: 41%;
    position: absolute;
    font-size:1.5rem;
    font-weight: bold;
    color:#333333;
    /*left: 28%;*/
    /*top: 5%;*/
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;

  }
  .img1{
    width: 85%;
    margin: 1rem auto 0;
  }
    .img1 img{
      width: 100%;
    }
    ol{
      padding-left: 5%;
    }
  li {
    font-size:13px;
    color:#333333;
    letter-spacing:0;
    line-height:23px;
    list-style:decimal ;
  }
  /*合作*/
  .cooperation{
    width: 53%;
    margin: 0 auto;
    overflow: hidden;
    font-size:12px;
    color:#999999;
  }
  .left{
    float: left;
    width:50px;
  }
  .right{
    width: 100px;
    float: left;
  }
</style>

<template>
    <div>
     <div class="qf-title">
       <img src="../../assets/register/logo.png" alt="">
     </div>
      <div class="qf-title-content">
        <div class="qf-title-info">全球首家针对区块链项目的分布式评测平台</div>
        <p class="qf-article font">
          区分（Trios），是一个新型的分布式协作平台。用区块链
          分布式协作的理念生产评测内容，真正独立、公平地去评测
          区块链投资标的。构建区块链行业独特的投资内容社区，形
          成由项目方、投资者、评测机构、自媒体、社区成员为互动
          主体的高频率、高质量内容生态。以项目评测为切入口，形
          成用户、内容、社区、投资、数据的投资内容生态。
        </p>
        <div class="qf-index qf-index-com">区分指数</div>
        <p class="font">多维度评测用户影响力，保证区分生态的健康发展。</p>
        <div class="qf-title-map">
          <img src="../../assets/register/other.png" alt="">
          <span class="map">区分生态图</span>

        </div>

     </div>
      <div  class="img1" >
        <img src="../../assets/register/Bitmap@1x.png" alt="">
      </div>
      <div class="qf-title-map">
        <img src="../../assets/register/other.png" alt="">
        <span class="map">FIND流通图</span>
      </div>
      <div  class="img1" >
        <img src="../../assets/register/Bitmap@1x.png" alt="">
      </div>
      <div class="qf-title-content">
        <div class="qf-title-map">
          <img src="../../assets/register/other.png" alt="">
          <span class="map">活动细则</span>
        </div>
        <div class="qf-index1 qf-index-com">说明</div>
        <ol>
          <li>活动开始时间：2018年5月21日10:00;</li>
          <li>本次活动的FIND将在APP内分期领取发放，逾期(2019/5/21) 未领取将会被系统回收;</li>
          <li>在区分贡献有价值的内容（评测、讨论、文章）将赚取更多的FIND；</li>
          <li>未明确事宜，请关注区分官方公告，最终解释权归区分官方所有。</li>
        </ol>
        <div class="qf-title-map">
          <img src="../../assets/register/other.png" alt="">
          <span class="map">联系我们</span>
        </div>
        <div class="cooperation">
          <div class="left">
            <span>微信号</span>
            <span>电报群</span>
            <span>微博</span>
            <span>Twitter</span>
            <span>facebook</span>
            <span>商务合作</span>
          </div>
          <div class="right">
            <p>:qufenfind</p>
            <p>:计算机第几集</p>
            <p>:djdin@weibo.com</p>
            <p>:djdinkosko.com</p>
            <p>:djdinkosko.com</p>
            <p>:business@qufen.top</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "qf"
    }
</script>

