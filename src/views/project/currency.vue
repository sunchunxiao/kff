<style lang="less">
  @import 'css/project.css';
  .cx-article{
    width: 90%;
    margin: 0 auto;
  }
  .currency{
    padding: 1rem 0;
  }
  .currency h2{
    font-size: 1.6rem;
    font-weight: 700;
  }
  span {
    font-size: 1rem;
  }
  .percent {
    display: inline-block;
    width: 100px;
    margin-left: 5px;
    font-size: 12px;
    color: #888888;
  }

  .storeList {
    margin-top: 0.5rem;
  }

  .store-risk {
    width: 100%;
    padding: 1rem 1.5rem;
    background: #f8f3f4;
    border-radius: 6px;
    border: 1px solid #f4f4f4;
  }

  .p1 {
    margin-top: 1rem;
    font-size: 13px;
    color: #333333;
    line-height: 20px;
    text-align: justify;
  }

  .img {
    width: 100%;
    margin-top: 1rem;
  }
  .currency-wrap{
    font-size: 1.2rem;
  }
  .currenyColor{
    color: rgb(84,93,113);
  }
  .currenyspan{
    position: relative;
    display: inline-block;
    width: 220px;
    height: 20px;
    /*line-height:1.4em;*/
    overflow:hidden;
  }

  .currency-title{
    margin-bottom: 4rem;
    overflow: hidden;

  }
  .currency-title1{
    margin-bottom: 3rem;
    overflow: hidden;
  }
  .currenyFlash{
    color:rgb(62,67,80);
    font-size: 13px;
  }
  .currenyTime{
    font-size: 15px;
    float: right;
  }
  .v{
    color:rgb(62,67,80);
    margin-bottom: 1rem;
  }
  .original{
    float: left;
    margin-right: 1.5rem;
    margin-bottom: 2rem;
  }
</style>

<template>
  <div class="cx-article">
    <div class="currency">
        <h2>{{title}}</h2>
    </div>
    <!--我快讯来源-->
    <div class="currency-title currenyColor"><span class="currenyspan" style="font-size: 15px">{{site}}</span><span class="currenyTime">{{timestr}}</span></div>
    <div class="currency-wrap">
      <!--文章内容-->
      <div class="v" v-html="currentContent">{{currentContent}}</div>
      <!--<div v-html="m" style="width: 100%" class="v">{{m}}</div>-->
    </div>
    <div class="currency-title1"><span class="currenyFlash">为了提高阅读体验，本内容经区分排版优化。</span></div>
    <div><a :href="url" class="currenyTime original">阅读原文</a></div>
  </div>
</template>

<script>
  import { getappnews } from '@/service/home';
  import { wechatShare } from '../../assets/js/wxshare'

  export default {
    name: "article-info",
    data() {
      return {
        id:'',
        currentContent:'',
        title:'',
        timestr:'',
        site:'',
        url:'',
        imgUrl:''
      }
    },
    methods: {

    },
    updated() {
      if($(".v img").attr("src")) {
        console.log($(".v img").attr("src"))
        this.imgUrlwx = $(".v img").attr("src")
      } else {
        this.imgUrlwx = 'https://pic.qufen.top/posts20180628204925934317'
      }
      wechatShare({
        title: this.title,
        content: "投资区块链一定要区分",
        link: window.location.href,
        logo: this.imgUrlwx,
      })
      $('.v').find('img').css({
        width: '100%',
        height: '100%'
      });
      $('.v').find('p').css({
        fontSize: '1.3rem',
        lineHeight:'2rem',
        // width: "100%",
        // margin: "1rem 0"
      });
      $('.v').find('p').css('word-wrap', 'break-word');
      $('.v').find('p span').css({
        fontSize:'1.2rem',
        lineHeight:'2rem',
      });

    },
    mounted() {
      console.log(this.$route.query.id)
      this.id = this.$route.query.id;

      //发送请求
      var params = {
        // postId: this.id
        id:this.id
      }

      getappnews(params).then(res => {
        if(res.code == 0) {
          // console.log(res.data.html)
          this.currentContent = res.data.html
          this.title = res.data.title
          // console.log(this.currentContent )
          var arr = res.data.publishTime.split(" ")
          console.log(arr[0])
          this.timestr = arr[0];
          this.site = res.data.site
          this.url = res.data.url
          // console.log(this.site)
        }

      })

    }
  }
</script>
