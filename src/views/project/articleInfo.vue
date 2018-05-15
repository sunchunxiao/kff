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
  .storeCommon{
    font-size:14px;
    color:#54c7fc;
    font-weight: bolder;
    /*color:#3b88f6;*/
    letter-spacing:0;
    float: right;
    margin-right: 1rem;
  }
  .evaluation-store{
    font-size:20px;
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
    overflow: hidden;
    position: relative;
    margin: 2rem 0;
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
/*综合评分*/
  h3{
    float: left;
  }
  .store-info-title{
    font-size:14px;
    color:#666666;
    float: left;
  }
.store-info{
  background:#ffffff;
  box-shadow:0 2px 10px 0 #e8e8e8;
  border-radius:5px;
  /*width:345px;*/
  height:244px;
  margin-top: 1rem;
}
  .store-info1{
    padding: 1rem;
  }
  .percent{
    display: inline-block;
    width: 100px;
    margin-left: 5px;
    font-size:12px;
    color:#888888;
  }
  .storeList{
    margin-top: 0.5rem;
  }
  .store-risk{
    width: 100%;
    padding: 1rem 1.5rem;
    background:#f8f3f4;
    border-radius:6px;
    border:1px solid #f4f4f4;
  }
  .p1{
    margin-top: 1rem;
    font-size:13px;
    color:#333333;
    line-height:20px;
    text-align:justify;
  }
  .img{
    width: 100%;
    margin-top: 1rem;
  }

  /*标签*/
  .crack-tag1{

    display: inline-block;
    background-color:#3b88f6;
    border-radius:35px;
    width:61px;
    height:22px;
    text-align: center;
    line-height: 22px;
    /*opacity:0.2;*/
    margin: 0 0.5rem;
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
  .sponsor{
    width: 50%;
    margin: 0 auto;
    margin-top: 3rem;
    text-align: center;
    position: relative;
    height: 6rem;
  }
  .img1{
    display: block;
    width: 27%;
    border-radius: 50%;
  }
  .sponsor1{
    position: absolute;
    left: 130px;
  }

  .sponsor4{
    position: absolute;
    left: -40px;
    right: 0;
    top: 0;
    bottom: 0;
    margin: 0 auto;
  }
  .zan{
    text-align: center;

  }

</style>

<template>
<div>
  <HeaderBar
    :title="title"
  />
  <div class="evaluation">
    <div class="evaluation-title">
      <h2>EOS测评 - ALL</h2>
      <span class="evaluation-store storeCommon">8.1</span>
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
    <div>
      <h3>综合评分</h3>
      <span class="storeCommon">8.1</span>
      <Progress :percent="80" :stroke-width="10"  hide-info></Progress>
      <div class="store-info">
        <div  class="store-info1">
          <div class="storeList" v-for="item in storeList">
            <div class="store-info-title">{{item.title}}<span class="percent">/ {{item.percent}}%</span> </div>
            <span class="storeCommon">{{item.store}}</span>
            <Progress :percent="item.percent" :stroke-width="5"  hide-info> </Progress>
          </div>
        </div>
        <div class="store-risk">
          <p>这个项目非常值得投资，但是涨幅不会超过十倍，还是有很大风险的，打假要注意防范。</p>
        </div>
        <p class="p1">
          自在EOS引力区的知识星球里有一个人，他在知识星球分享了一篇文章《数字会说明，老猫在想什么，写给eos的投资者们》，精明地推测出老猫分批地积累了上百万个EOS，这更能说明老猫看好EOS。道理很简单：因为看好，所以大量持有。
        </p>
          <div>
            <div class="storeList" >
              <div class="store-info-title">项目定位<span class="percent">/ 20%</span> </div>
              <span class="storeCommon">8.2</span>
              <Progress :percent="80" :stroke-width="10"  hide-info> </Progress>
            </div>
          </div>
          <img class="img" src="../../assets/evaluation/Bitmap@1x.png" alt="">
        <p class="p1">
          自在EOS引力区的知识星球里有一个人，他在知识星球分享了一篇文章《数字会说明，老猫在想什么，写给eos的投资者们》，精明地推测出老猫分批地积累了上百万个EOS，这更能说明老猫看好EOS。道理很简单：因为看好，所以大量持有。
        </p>\
        <!--项目定位-->
        <div>
          <div >项目定位</div>
          <p>在EOS引力区的知识星球里有一个人，精明地推测出老猫分批地积累了上百万个EOS，值得投资，注意仓位！</p>
        </div>
        <!--已经赞助-->
        <div class="crack" >
          <div class="crack-tag1" ><span class="span-name">EOS</span></div>
          <span class="crack-tag3">编辑于 2015-07-15</span>
          <div class="sponsor">
            <img class="sponsor4 img1" :src="item" v-for="(item,index) in imgUrls" :style="fun(index)" alt="">

          </div>
          <p class="zan">68人已赞助</p>
        </div>
      </div>
      <!--<FooterInfo></FooterInfo>-->
    </div>
  </div>


</div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import FooterInfo from '@/components/layout/footerInfo.vue'
    export default {
        name: "article-info",
      data(){
        return  {
          title:"",
          storeList:[
          {
            title:"项目定位",
            percent:"50",
            store:"8.2"
          },
          {
            title:"技术框架",
            percent:"60",
            store:"8.1"
          },
          {
            title:"团队实力",
            percent:"80",
            store:"8.6"
          },
          {
            title:"项目进度",
            percent:"20",
            store:"6.7"
          },
          {
            title:"投资风险",
            percent:"35",
            store:"3.6"
          }
        ],
          imgUrls:[
            "http://192.168.10.151:8080/Idcard/10.jpg",
            "http://192.168.10.151:8080/Idcard/10.jpg",
            "http://192.168.10.151:8080/Idcard/10.jpg",
            "http://192.168.10.151:8080/Idcard/10.jpg",
            "http://192.168.10.151:8080/Idcard/10.jpg",
            "http://192.168.10.151:8080/Idcard/10.jpg",
            "http://192.168.10.151:8080/Idcard/10.jpg",

          ]
        }
      },
      methods:{

        fun(index){
          if(index<=6){
            var str = "left:"+(index*25-50)+"px";
            return str;
          }else{
            $(".img1").eq(index).css("display","none");
          }
        }

      },
        components: {
          HeaderBar,FooterInfo
        }
    }
</script>
