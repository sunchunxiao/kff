<template>
  <div>
    <HeaderBar
      :rightOptions="rightOptions"
      v-on:rightClickHandel="rightClickHandel"
      :title="title"
    />
    <div class="poster">
      <!--<img src="../../assets/image/logo.png" alt="">-->
      <div>
        <div class="helpInfo">
          <h3>区分</h3>
          <p>全球首家以分布式测评为核心的区块链投资平台</p>
        </div>
        <div class="helpContent">
          <p>区分，全球首家以分布式评测为核心的区块链投资平台，当初针对区块链项目进行分布式评测，构建区块链行业独特的投资内容生态，形成包括项目评测，项目论坛，项目咨询，项目文章等高频率、高质量的UGC内容</p>
          <p>区分致力于成为全球区块链投资者首选的内容平台，打造丰富的区块链投资内容生态，构建用户层，内容层，社区层，投资层到数据层的生态闭环。</p>
          <p>区分旗下：区分大学、The Finder联盟、阳光项目计划。与区分产品相辅相成，共同构建了区分生态。</p>
          <h2>投资区块链，一定要 <span>区分</span> </h2>
          <div>
            <div>联系我们</div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .poster {
    width: 90%;
    margin: 0 auto;
    background-color: #f2f2f2;
    /*width:200px;*/
    /*height: 200px;*/
    /*position: absolute;*/
    /*left:50%;*/
    /*top:50%;*/
    /*margin-left:-100px;*/
    /*margin-top:-100px;*/
  }
  .mint-button-text{
    color:#3b88f6;
  }
  .helpInfo{
    text-align: center;
    padding: 2rem 0;
  }
  .helpContent{
    padding: 2rem 1rem;
  }
  .helpContent p{
    margin: 1rem 0;
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

