<style lang="less" scoped>
  h2{
    font-weight: lighter;
    font-size: 20px;
    display: inline-block;
  }
  .evaluation{
    border-top:1px solid #dddddd85;
    border-bottom:1px solid #dddddd85;
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
    width: 35px;
    height: 35px;
    border-radius: 50%;
    float: left;
    border:1px solid #dddddd;
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
    right: 10px;
    top: 0.5rem;
    font-size:12px;
    color:#ffffff;
    text-align: center;
    /*background:#3b88f6;*/
    /*border:1px solid #3b88f6;*/
    border-radius:2px;
    width:17px;
    height:35px;
    line-height: 20px;
  }
  .evaluation-follow1{
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
  .evaluation-follow img{
    float: left;
    width: 16px;

  }
  .evaluation-follow span{
    font-size:10px;
    color:#3b88f6;
    margin-left: -5px;
  }
  .evaluation-content{
    font-size:1.5rem;
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
        <img class="evaluation-info-img" :src="src" alt="">
        <div class="evaluation-info-p">
          <p class="name">{{username}}</p>
          <span class="info">{{userSignature}}</span>
        </div>
        <div class="evaluation-follow1">+关注</div>
      </div>
      <p class="evaluation-content">{{postShortDesc}}</p>
      <img class="content-img" :src="imgUrl" alt="">
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
    <div class="evaluation-info" v-for="(item,index) in commentsehot">
      <div class="evaluation-info-title">
        <img class="evaluation-info-img" :src="commenticon[index]" alt="">
        <div class="evaluation-info-p">
          <p class="name">{{item .commentUserName}}</p>
          <span class="info">116楼 03.15 11:15</span>
        </div>
        <div class="evaluation-follow"><img src="../../assets/footer/zan.png" alt=""><span>{{item.praiseNum}}</span></div>
      </div>
      <p class="p-style">{{item.commentContent}}</p>
      <div class="preview" v-for="a in item.childCommentsList
">
        <!--commentUserName评论人-->
        <span class="preview-peo">{{a.commentUserName}}:@{{a.becommentedUserName}}:</span><span>{{a.commentContent}}</span>
      </div>
      <div class="preview">
        <span class="preview-num">更多10条评论</span>
      </div>
    </div>
    <!--最新评论-->
    <!--<div class="hot evaluation">-->
      <!--<div class="hot-comment">最新评论({{commentseSum}})</div>-->
    <!--</div>-->
    <!--最新评论条数-->
    <div class="evaluation-info" v-for="(item,index) in commentseNew">
      <div class="evaluation-info-title">
        <img class="evaluation-info-img" :src="commenticon[index]" alt="">
        <div class="evaluation-info-p">
          <p class="name">{{item .commentUserName}}</p>
          <span class="info">116楼 03.15 11:15</span>
        </div>
        <div class="evaluation-follow"><img src="../../assets/footer/zan.png" alt=""><span>{{item.praiseNum}}</span></div>
      </div>
      <p class="p-style">{{item.commentContent}}</p>
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
  import {discuss} from '@/service/home';
  export default {
    name: "article-info",
    data(){
      return  {
        title:"",
        tags:"",
        src:"",
        timestr:"",
        articleTitle:"",
        username:"",
        userSignature:"",
        postShortDesc:"",
        imgUrl:"",
        commenticon:[],
        commentsehot:[],
        commentseNew:[],
        commentseSum:""
      }
    },
    components: {
      HeaderBar,
    },
    mounted(){
      let params ={
        postId:12
      }
      //测评
      discuss(params).then(res=>{
        if(res.code==0){
          // console.log(res.data.projectEvaluationDetailResponse)
          var data = res.data.discussShare
          this.articleTitle = data.post.postTitle
          //头像
          var icon = "http://192.168.10.151:8080"+JSON.parse(data.post.createUserIcon).fileUrl
          this.src = icon;

          this.username = data.post.createUserName;
          this.userSignature = data.post.createUserSignature;
          //简介
          this.postShortDesc = data.post.postShortDesc;
          //图片
          var a = JSON.parse(data.post.postSmallImages);
          // console.log(a)
          this.imgUrl ="http://192.168.10.151:8080"+ a.fileUrl

          //热门评论
          this.commentsehot = data.commentsehot;
          var result = data.commentsehot;
          //热门评论头像
          for(let i = 0;i<result.length;i++){
          var b = JSON.parse(data.commentsehot[i].commentUserIcon);
          var c = "http://192.168.10.151:8080"+b.fileUrl
          this.commenticon.push(c)
            console.log(this.commenticon)
          }
          //最新评论数量
          this.commentseSum = data.commentseSum
          //最新评论
          this.commentseNew  = data.commentseNew

          //标签
          // this.tag = data.post.projectCode;

          //时间
          // this.timestr = data.post.createTimeStr;

          //文章
          // this.article = data.evaluation.evauationContent
          // $(".crack").before( this.article)

        }

      })
    }
  }
</script>
