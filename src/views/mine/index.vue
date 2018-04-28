<style lang="less">
  .logo {
    text-align: center;
    margin: 10px 0;
    img {
      height: 75px;
    }
  }
  .userInfo, .category {
    text-align: center;
  }
  .set{
    width: 100%;
    height: 160px;
    background: url("../../assets/mine/邀请 bg@3x.png");

    .mine-title{
      padding: 1.5rem;
      font-size: 18px;
      text-align: right;
      color: #fff;
    }
    .mine-info{
      width: 90%;
      margin: 0 auto;
      overflow: hidden;
      position: relative;
      .mine-img{
        background:#ffffff;
        border:1px solid #ffffff;
        width:64px;
        height:64px;
        border-radius:100%;
        float: left;
      }
      .mine-author{
        width: 65%;
        padding-left: 5%;
        float: left;
        .little-name{
          font-size:15px;
          color:#ffffff;
          letter-spacing:0.13px;
          text-align:left;
        }
        .mine-fans{
          font-size:12px;
          color:#d3e4fc;
          letter-spacing:0.11px;
          text-align:left;
        }
        .evaluation-institution{
          background:#3279d8;
          border-radius:8.5px;
          width:50px;
          height:15px;
          font-size: 10px;
          color: #e4edf9;
        }

      }

    }

  }
  .category{
    .cell{
      font-size: 18px;
    }
  }
p{
  margin-bottom: 5px;
}
  .invitation{
    width: 10px;
    position: absolute;
    right: 1%;
    top: 23%;
  }
  .font{
    font-size: 12px;
  }
  .balance{
    height:35px;
    line-height: 35px;
    background:#f4f4f4;
    .balance-money{
      color:#888888;
      letter-spacing:0.11px;
      padding-left: 4%;
    }
    .corn{
      color:#888787;
      font-weight: bold;
      letter-spacing:0.11px;
    }
    .look-detail{
      float: right;
      margin-right:5%;
      margin-right:5%;
      color:#3b88f6;
      letter-spacing:0.11px;
    }
  }
  .mint-cell-wrapper{
      /*border-bottom: 1px solid #ddd;*/
    .mint-cell-text{
      padding-left: 10%;
      font-family:HiraginoSansGB-W3;
      font-size:15px;
      color:#333333;
      letter-spacing:0.13px;
    }
  }
  .mint-cell-value.is-link img{
    position: absolute;
    left: 4%;
    width: 5%;
  }
</style>
<template>
  <div>
    <!--<HeaderBar-->
      <!--:rightOptions="rightOptions"-->
      <!--v-on:rightClickHandel="rightClickHandel"/>-->
    <!--<div class="logo" @click="gotoMyHome">-->
      <!--<img src="../../assets/image/logo.png"/>-->
    <!--</div>-->
    <div class="set">
        <div class="mine-title" >
          <span @click="rightClickHandel">设置</span>
        </div>
        <div class="mine-info">
          <div class="mine-img"></div>
          <div class="mine-author">
            <p><span class="little-name">小霸王 </span><span class="evaluation-institution">测评机构</span></p>
            <p class="mine-fans"><span>3000 粉丝</span><span>10000 赞</span></p>
            <p class="mine-fans">区块链创业者，早期投资人</p>
          </div>
          <img class="invitation" src="../../assets/mine/jt.png" alt="">
        </div>
      <div>

      </div>
    </div>
    <!--<div class="userInfo">-->
      <!--<div class="name">{{name}}</div>-->
      <!--<div class="description">{{description}}</div>-->
    <!--</div>-->
    <!--<category-Num :data="categoryData1"></category-Num>-->
    <!--<hr/>-->
    <category-Num :data="categoryData2"></category-Num>
    <div class="balance">
      <span class="balance-money font">KFF余额</span>
      <span class="corn font">106.05</span>
      <span class="look-detail font">查看明细</span>
    </div>
    <div class="link">
      <mt-cell title="我的关注" is-link to="/mine/attention"><img src="../../assets/mine/mfollow.png" alt=""></mt-cell>
      <mt-cell title="我的收藏" is-link to="/mine/store"><img src="../../assets/mine/sc.png" alt=""></mt-cell>
      <mt-cell title="推荐好友" is-link to="/mine/friends"><img src="../../assets/mine/tuij.png" alt=""></mt-cell>
      <mt-cell title="关于我们" is-link to="/mine/about"><img src="../../assets/mine/about.png" alt=""></mt-cell>
      <mt-cell title="意见反馈" is-link to="/mine/suggest"><img src="../../assets/mine/yjfk.png" alt=""></mt-cell>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import categoryNum from '@/components/common/categoryNum.vue'

  export default {
    name: 'mine',
    components: {
      HeaderBar,
      categoryNum
    },
    data() {
      return {
        rightOptions: {
          hasRightBtn: true,
          rightBtnText: "设置",
        },
        name: "Boone",
        description: "区块链创业者，早期投资人",
        categoryData1: [{
          num: 0,
          text: "粉丝"
        }, {
          num: 0,
          text: "赞"
        }, {
          num: 0,
          text: "QTC"
        }],

        categoryData2: [{
          num: 0,
          text: "测评"
        }, {
          num: 0,
          text: "讨论"
        }, {
          num: 0,
          text: "文章"
        }],
      }
    },

    created() {
//      queryUserInfo
    },

    methods: {
      rightClickHandel() {
        this.$router.push('/mine/setting')
      },
      gotoMyHome() {
        this.$router.push('/mine/myHome')
      }

    }
  }
</script>
