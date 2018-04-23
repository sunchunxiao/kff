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

</style>
<template>
  <div>
    <HeaderBar
      :rightOptions="rightOptions"
      v-on:rightClickHandel="rightClickHandel"/>
    <div class="logo" @click="gotoMyHome">
      <img src="../../assets/image/logo.png"/>
    </div>
    <div class="userInfo">
      <div class="name">{{name}}</div>
      <div class="description">{{description}}</div>
    </div>
    <category-Num :data="categoryData1"></category-Num>
    <hr/>
    <category-Num :data="categoryData2"></category-Num>
    <div class="link">
      <mt-cell title="我的关注" is-link to="/mine/attention"></mt-cell>
      <mt-cell title="我的收藏" is-link to="/mine/store"></mt-cell>
      <mt-cell title="推荐好友" is-link to="/mine/friends"></mt-cell>
      <mt-cell title="关于我们" is-link to="/mine/about"></mt-cell>
      <mt-cell title="意见反馈" is-link to="/mine/suggest"></mt-cell>
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
