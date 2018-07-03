<style lang="less" scoped>
  .myTabBar {
    .mint-tabbar {
      box-shadow: 0 -2px 7px 0 #f2f2f2;
      .mint-tab-item.is-selected {
        background-color: #fafafa;
      }
      .mint-tab-item-icon {
        img {
          width: 19px;
          height: 19px;
          margin-left: 2px;
        }
      }
      .mint-tab-item-label {
        font-size: 20px;
        /*-webkit-transform: scale(0.8);*/
      }
    }
  }

</style>
<template>
  <div class="myTabBar">
    <!--底部菜单-->
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" :src="selectedImgArray[0]">
        <span>首页</span>
      </mt-tab-item>
      <mt-tab-item id="topic">
        <img slot="icon" :src="selectedImgArray[1]">
        话题
      </mt-tab-item>
      <mt-tab-item id="message">
        <img slot="icon" :src="selectedImgArray[2]">
        消息
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" :src="selectedImgArray[3]">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  const tabImageArray = ['home', 'topic', 'message', 'mine']
  const tabImageBaseUrl = '../../static/tab';   //图片动态加载，故放在static目录下

  export default {
    name: 'footerMenu',
    data() {
      return {
        selected: 'home',
      };
    },
    created() {
      var subPath = this.$route.path.split('/')[2];
      this.selected = subPath
    },
    computed: {
      //动态加载底部tab 图片
      selectedImgArray() {
        let selected = this.selected
        return tabImageArray.map(item => {
          if (item === selected) {
            return `${tabImageBaseUrl}/${item}_selected.png`
          } else {
            return `${tabImageBaseUrl}/${item}.png`
          }
        })
      }
    },
    watch: {
      selected(val) {
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
