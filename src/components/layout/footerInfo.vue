<style lang="less" scoped>
  .footer{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    padding-top: 5px;
    background-color: #fff;
    margin: 0 auto;
    overflow: hidden;
    z-index: 100;
  }
    .footer li{
      text-align: center;
      width: 25%;
      float: left;
      img{
        width: 1.5rem;
      }
      p{
        color:#aaaaaa;
      }
    }
  .footerS{
    height: 50px;
  }

</style>

<template>
    <div class="footerS">
      <ul class="footer">
        <li @click="download"><img src="../../assets/footer/zan.png" alt=""><p>赞{{message[0]}}</p></li>
        <li @click="download"><img src="../../assets/footer/mine.png" alt=""><p>收藏</p></li>
        <li @click="download"><img src="../../assets/footer/赞助@3x.png" alt=""><p>赞助</p></li>
        <li @click="download"><img src="../../assets/footer/preview.png" alt=""><p>评论{{message[1]}}</p></li>
      </ul>
    </div>
</template>

<script>
    export default {
      props:["message"],
        name: "footer-info",
        mounted () {
        console.log(this.message[0])
        },
      methods:{
        download(){
          this.$router.push('/user/download')
        }
      }
    }
</script>


