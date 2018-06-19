<template>
  <div class="about">
    <!--<HeaderBar
      :rightOptions="rightOptions"
      v-on:rightClickHandel="rightClickHandel"
      :title="title"
    />-->
    <div class="poster">
      <!--<img src="../../assets/image/logo.png" alt="">-->
      <div>
        <div class="helpInfo">
          <div><img class="helpImg" src="../../assets/mine/about/aboutLogo.png" alt=""></div>
          <!--<h1>区分</h1>-->
          <!--<p>全球首家以分布式测评为核心的区块链投资平台</p>-->
        </div>
        <div class="helpContent">
          <p>区分，全球首家以分布式评测为核心的区块链投资平台，初期针对区块链项目进行分布式评测，构建区块链行业独特的投资内容生态，形成包括项目评测，项目论坛，项目咨询，项目文章等高频率、高质量的UGC内容</p>
          <p>区分致力于成为全球区块链投资者首选的内容平台，打造丰富的区块链投资内容生态，构建用户层，内容层，社区层，投资层到数据层的生态闭环。</p>
          <p>区分旗下：区分大学、The Finder联盟、阳光项目计划。与区分产品相辅相成，共同构建了区分生态。</p>
          <h2>投资区块链，一定要 <span>区分</span> </h2>

        </div>
      </div>
      <div class="aboutFooter">
        <div class="contact">联系我们</div>
        <div class="contactIcon">
          <a href=" https://t.me/qufenfind"><img src="../../assets/mine/about/telegram@2x.png" alt=""></a>
          <!--微信 qufenfind-->
          <a href="###"><img src="../../assets/mine/about/weixin@2x.png" alt=""></a>
          <!--微博-->
          <a href="https://weibo.com/qufenfind"><img src="../../assets/mine/about/weibo@2x.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
  .about{
    height: 100%;
    background-color: #f6f6f6;
    .mint-header{
    	background-color:#fff!important;
    }
    .mint-button{
    	overflow: inherit!important;
    }
  }
  .poster {
    /*width: 90%;*/
    margin: 0 auto;
  }
  .about .mint-button-text{
    color:#3b88f6;
  }
  .helpInfo{
  	background-image: url(../../assets/mine/about/bac.png);
  	background-size: 100% 100%;
    text-align: center;
    padding: 3rem 0;
  }
  .helpContent{
    background-color: #fff;
    padding: 1rem;
  }
  .helpContent p{
    color: rgb(74,74,74);
    font-size: 1rem;
    margin: 1rem 0;
  }
  .about h2{
    font-family: PingFang-SC-bold;
    text-align: center;
    color: #28292d;
    font-weight: bold;
    font-size: 1.5rem;
  }
  .contact{
    color: #4a4a4a;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 1rem;
  }
  .helpImg{
  	width: 34%;
  }
  .contactIcon{
    /*float: left;*/
    width: 50%;
    margin:  0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .contactIcon a{
  	width: 31px;
  }
  .contactIcon img{
    width: 100%;
  }
  .aboutFooter{
  	background-color: #f6f6f6;
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
        rightOptions: {
          hasRightBtn: true,
          rightBtnText: '帮助中心',
        },
        title: this.$route.meta.title,
        List: []
      }
    },

    methods: {
      rightClickHandel() {
        this.$router.push('/mine/help')
      }
    }
  }
</script>

