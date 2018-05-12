<style lang="less" scoped>
  h2{
    font-weight: lighter;
    font-size: 20px;
    display: inline-block;
  }
  .evaluation{
    border-top:1px solid #dddddd;
    border-bottom:1px solid #dddddd;
  }
  .evaluation-title{
    width: 90%;
    margin: 1rem auto;
  }
  .evaluation-store{
    font-size:20px;
    font-weight: bolder;
    color:#3b88f6;
    letter-spacing:0;
    float: right;
    margin-right: 1rem;

  }
  .evaluation-info{
    width: 90%;
    margin: 1rem  auto 0;
  }
  .evaluation-info-p{
    float: left;
    padding-left: 1rem;
    width: 220px;
  }
  .evaluation-info-img{
    width: 32px;
    float: left;
  }
  .evaluation-info-title{
    /*width: 90%;*/
    margin: 1rem auto;
    overflow: hidden;
    position: relative;
  }
  .name{
    font-size:14px;
    color:#333333;
    letter-spacing:0;
  }
  .info{
    font-size:10px;
    color:#888888;
    letter-spacing:0;
  }
  .evaluation-follow{
    position: absolute;
    right: 0;
    top: 0.5rem;
    font-size:12px;
    color:#ffffff;
    text-align: center;
    background:#3b88f6;
    border:1px solid #3b88f6;
    border-radius:2px;
    width:43px;
    height:20px;
    line-height: 20px;
  }
  .evaluation-content{
    font-size:15px;
    color:#333333;
    letter-spacing:0;
    line-height:20px;
    margin: 2rem 0;
  }
  .content-img{
    width: 100%;
  }
  .crack-tag1{
    display: inline-block;
    background-color:#3b88f6;
    border-radius:35px;
    width:61px;
    height:22px;
    text-align: center;
    line-height: 22px;
    /*opacity:0.2;*/
  }
  .span-name{
    font-size:14px;
    color:black;
  }
  .crack{
    margin: 2rem 0;
  }
  .crack-tag2{
    font-size:14px;
    color:#3b88f6;
    letter-spacing:0;
    margin-left: 2rem;
  }
  .crack-tag3{
    position: absolute;
    right: 1.5rem;
    font-size:10px;
    color:#c2c2c2;
    letter-spacing:0;

  }
  /*热门评论*/

  .hot-comment{
    width: 90%;
    margin: 1rem auto;
  }
.p-style{
  font-size:15px;
  color:#333333;
  letter-spacing:0;
  line-height:20px;
  text-align:justify;
}
.preview{
  font-size:13px;
  /*color:#3b88f6;*/
  letter-spacing:0;
  line-height:20px;
  text-align:justify;
  padding: 1rem 0;
  /*border-top: 1px dotted  #dddddd;*/
  border-bottom:  1px dotted #dddddd;
}
  .preview-peo{
    color: #3b88f6;
  }



</style>

<template>
  <div>
    <HeaderBar
      :title="title"
    />
    <div class="evaluation">
      <div class="evaluation-title">
        <h2>OKEX还我血汗钱太空链团队跑路了，有图有真相！</h2>
      </div>
    </div>
    <div class="evaluation-info">
      <div class="evaluation-info-title">
        <img class="evaluation-info-img" src="../../assets/image/rose.png" alt="">
        <div class="evaluation-info-p">
          <p class="name">老柚子</p>
          <span class="info">EOS早期投资人，EOS节点发起人</span>
        </div>
        <div class="evaluation-follow">+关注</div>
      </div>
      <p class="evaluation-content">
        真的跑路了，完全联系不上啊！！！还我血汗钱！自在EOS引力区的知识星球里有一个人！
      </p>
      <img class="content-img" src="../../assets/evaluation/Bitmap@1x.png" alt="">
      <div class="crack">
        <div class="crack-tag1"><span class="span-name">EOS</span></div>
        <span class="crack-tag2">#打假#</span>
        <span class="crack-tag3">发表于 2015-07-15 13:15</span>
      </div>
    </div>

    <div class="hot evaluation">
      <div class="hot-comment">热门评论(2)</div>
    </div>
    <!--讨论详情-->
    <div class="evaluation-info">
      <div class="evaluation-info-title">
        <img class="evaluation-info-img" src="../../assets/image/rose.png" alt="">
        <div class="evaluation-info-p">
          <p class="name">老柚子</p>
          <span class="info">116楼 03.15 11:15</span>
        </div>
        <div class="evaluation-follow">点赞</div>
      </div>
      <p class="p-style">
        体自在EOS引力区的知识星球里有一个人，他在知识星球分享了一篇文章《数字会说明，老猫在想什么，写给eos的投资者们》，精明地推测出老猫分批地积累了上百万个EOS，这更能说明老猫看好EOS。道理很简单：因为看好，所以大量持有。
      </p>
      <div class="preview">
        <span class="preview-peo">老柚子:@乌拉圭</span><span>你说的很好可是能不能买呢?</span>
      </div>
      <div class="preview">
        <span class="preview-peo">老柚子:@乌拉圭</span><span>你说的很好可是能不能买呢?</span>
      </div>
      <div class="preview">
        <span class="preview-num">更多10条评论</span>
      </div>
    </div>
    <!--第二条-->
    <div class="evaluation-info">
      <div class="evaluation-info-title">
        <img class="evaluation-info-img" src="../../assets/image/rose.png" alt="">
        <div class="evaluation-info-p">
          <p class="name">老柚子</p>
          <span class="info">116楼 03.15 11:15</span>
        </div>
        <div class="evaluation-follow">点赞</div>
      </div>
      <p class="p-style">
        体自在EOS引力区的知识星球里有一个人，他在知识星球分享了一篇文章《数字会说明，老猫在想什么，写给eos的投资者们》，精明地推测出老猫分批地积累了上百万个EOS，这更能说明老猫看好EOS。道理很简单：因为看好，所以大量持有。
      </p>
      <div class="preview">
        <span class="preview-peo">老柚子:@乌拉圭</span><span>你说的很好可是能不能买呢?</span>
      </div>
      <div class="preview">
        <span class="preview-peo">老柚子:@乌拉圭</span><span>你说的很好可是能不能买呢?</span>
      </div>
      <div class="preview">
        <span class="preview-num">更多10条评论</span>
      </div>
    </div>


  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  export default {
    name: "article-info",
    components: {
      HeaderBar,
    }
  }
</script>
