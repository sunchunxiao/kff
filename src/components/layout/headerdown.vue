<style lang="less" scoped>
  .footer{
    width: 100%;
    /*height: 4rem;*/
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    background-image: url("../../assets/project/bgc.png");
    background-size: 100% 100%;
    opacity: 0.9;
    margin: 0 auto;
    overflow: hidden;
    .footerContent{
      width: 90%;
      margin:1rem 0 0.7rem 2rem;
      img{
        width: 10%;

      }
      .footerImg2{
        margin-left: 0.5rem;
      }
      .open{
        display: inline-block;
        background-color: #fff;
        padding: 0.5rem 1.5rem;
        position: absolute;
        right: 1.7rem;
        top: 1.2rem;
        border-radius: 2px;
        font-size: 1rem;
        color: rgb(59,136,246);
      }
    }
  }

</style>

<template>
  <div class="footer">
    <div class="footerContent">
      <img src="../../assets/project/LOGO@2x.png" alt="">
      <img class="footerImg2" src="../../assets/project/nav.png" alt="">
      <sapn class="open" @click="next">下载APP</sapn>
    </div>
  </div>
</template>

<script>
    export default {
        name: "headerdown",
        methods:{
        	next(){
        	this.$router.push('/user/download')
        	}
        }

    }
</script>

<style scoped>

</style>
