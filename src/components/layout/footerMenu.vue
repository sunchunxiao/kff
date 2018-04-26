<style lang="less" scoped>
  html{
    -webkit-text-size-adjust:none;
  }
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color: #fafafa;
  }
  .mint-tab-item-icon {
    img{
      width:19px;
      height:19px;
    }
  }
  .mint-tab-item-label{
    font-size: 9px;
    -webkit-transform:scale(0.8);
  }


</style>
<template>
  <div>
    <!--底部菜单-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="../../assets/tab/首页_未选中@2x.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="topic">
        <img slot="icon" src="../../assets/tab/话题@2x.png">
        话题
      </mt-tab-item>
      <mt-tab-item id="message">
        <img slot="icon" src="../../assets/tab/底部_消息@2x.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../../assets/tab/我的@2x.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'footerMenu',
    data() {
      return {
        selected: 'home'
      };
    },
    created() {
      var subPath = this.$route.path.split('/')[2];
      this.selected = subPath
    },
    watch: {
      selected (val) {
        this.$router.push(`/main/${val}`)
      },

      //监测主菜单路由变化
      $route: function () {
        var subPath = this.$route.path.split('/')[2];
        this.selected = subPath
      }
    }
  };
</script>
