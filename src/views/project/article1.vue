<style lang="less" scoped>
  .titleB{
    background:#f9f9f9;
  }
  .title{

    padding:1rem;
  }
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
  .comimg{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border:1px solid #dddddd;
  }
  .evaluation-info-img{

    float: left;

  }
  .evaluation-info-title{
    overflow: hidden;
    position: relative;
    margin: 1rem 0;
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
    height: 5rem;
  }
  .img1{
    display: block;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border:1px solid #F4F4F4;
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
    <!--<HeaderBar-->
      <!--:title="title"-->
    <!--/>-->
    <div class="evaluation">
      <div class="evaluation-title">
        <h2>{{articleTitle}}</h2>
      </div>
    </div>
    <div class="evaluation-info">
      <div class="evaluation-info-title">
        <img class="evaluation-info-img comimg" :src="src" alt="">
        <div class="evaluation-info-p">
          <p class="name">{{username}}</p>
          <span class="info">{{userSignature}}</span>
        </div>
        <div class="evaluation-follow">+关注</div>
      </div>
      <div>
        <img class="img" :src="imgsrc" alt="">
        <p class="p1">{{articleContents}}</p>
        <!--已经赞助-->
        <div class="crack" >
          <div class="crack-tag1" ><span class="span-name">{{tag}}</span></div>
          <span class="crack-tag3">编辑于 {{timestr}}</span>
          <div class="sponsor">
            <img class="sponsor4 img1" :src="item" v-for="(item,index) in imgUrls" :style="fun(index)" alt="">

          </div>
          <p class="zan">{{donateNum}}人已赞助</p>
          <router-link :to="{path:'/project/articleInfo',query: {id: 52}}">上一篇</router-link><button>下一篇</button>
        </div>
        <FooterInfo></FooterInfo>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import FooterInfo from '@/components/layout/footerInfo.vue'
  import {article} from '@/service/home';
  export default {
    name: "article-info",
    data(){
      return  {
        title:"",
        articleTitle:"",
        id:"",
        src:"",
        username:"",
        userSignature:"",
        imgsrc:"",
        tag:"",
        timestr:"",
        imgUrls:[],
        articleContents:"",
        donateNum:""
      }
    },
    components: {
      HeaderBar,FooterInfo
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
    mounted () {
      // console.log(this.$route.query.id)
      // this.id = this.$route.query.id;
      //发送请求
      var  params ={
        postId:1
      }

      article(params).then(res=>{
        // console.log(params)
        if(res.code==0){
          // console.log(res.data.articleDetail)
          var data = res.data.articleDetail
          console.log(JSON.parse(data.createUserIcon).fileUrl)
          this.articleTitle = data.postTitle
          //头像
          var icon = "http://192.168.10.151:8080"+JSON.parse(data.createUserIcon).fileUrl
          this.src = icon;
          this.imgsrc = "http://192.168.10.151:8080"+JSON.parse(data.postSmallImages).fileUrl
          this.username = data.createUserName;
          this.userSignature = data.createUserSignature;
          //标签
          this.tag = data.projectCode;
          //时间
          this.timestr = data.createTimeStr;
          //赞助  循环图片
          var result =  data.commendationList
          for (let i = 0; i <result.length; i++) {
            var a ="http://192.168.10.151:8080"+JSON.parse(result[i].sendUserIcon).fileUrl;             this.imgUrls.push(a);
          }
          //赞助人数
          this.donateNum = data.donateNum;
          //文章介绍
          this.articleContents = data.article.articleContents;


        }

      })

    }
  }
</script>
