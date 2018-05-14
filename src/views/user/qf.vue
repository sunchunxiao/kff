<style scoped>
    .qf-title{
      width: 70%;
      margin: 0 auto;
      padding-top: 10%;
    }
    .qf-title img{
      width: 100%;
      padding-top: 2rem;
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

    .qf-index{
      background:#3b88f6;
      border-radius:100px;
      text-align: center;
      width:72px;
      height:22px;
      line-height: 22px;
      font-size:13px;
      color:#ffffff;
      margin: 1rem 0;
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
    position: absolute;
    font-size:1.5rem;
    font-weight: bold;
    color:#333333;
    left: 28%;
    top: 5%;

  }
  .img1{
    width: 85%;
    margin: 1rem auto 0;
  }
    .img1 img{
      width: 100%;
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
        <div class="qf-index">区分指数</div>
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
      <div class="qf-title-map">
        <img src="../../assets/register/other.png" alt="">
        <span class="map">活动细则</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "qf"
    }
</script>

