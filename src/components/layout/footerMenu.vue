<style>

</style>
<template>
  <div>
    <!--底部菜单-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon">
        首页
      </mt-tab-item>
      <mt-tab-item id="topic">
        <img slot="icon">
        话题
      </mt-tab-item>
      <mt-tab-item id="message">
        <img slot="icon">
        消息
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon">
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
