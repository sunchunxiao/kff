<style lang="less" scoped>
  .footer{
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
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
</style>

<template>
    <div>
      <ul class="footer">
        <li><img src="../../assets/footer/zan.png" alt=""><p>赞 125</p></li>
        <li><img src="../../assets/footer/mine.png" alt=""><p>收藏</p></li>
        <li><img src="../../assets/footer/赞助@3x.png" alt=""><p>赞助</p></li>
        <li><img src="../../assets/footer/preview.png" alt=""><p>评论1225</p></li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "footer-info"
    }
</script>


