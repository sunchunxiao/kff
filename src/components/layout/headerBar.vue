
<style lang="less">
  .header {
    height: 44px;
    width: 100%;
    background-color: #f9f9f9;
    /*左侧返回btn*/
    .is-left{
      .mintui-back{
        font-size: 20px;
        color: #3b88f6;;

      }
    }
    /*title*/
    .mint-header-title {
      font-size: 18px;
      color: #333333;
      font-weight: 600;
    }

  }
</style>
<template>
    <mt-button slot="left" icon="back" @click.native="leftClick"></mt-button>
    <mt-button slot="right" v-if='rightOptions.hasRightBtn' @click.native="rightClick">{{rightOptions.rightBtnText}}</mt-button>
  </mt-header>
</template>

<script>
  export default {
    name: 'headBar',

    props: ['title', 'rightOptions',],

    props: {
      'title': {
        type: String,
        default: ""
      },


      'rightOptions': {
        type: Object,
        default: function () {
          return {
            hasRightBtn: false,
            rightBtnText: "",
          }
        }
      }
    },
    methods: {
      leftClick: function () {

        console.log('返回');
        this.$router.go(-1)
      },

      rightClick: function () {
        console.log('右侧按钮事件');
        this.$emit('rightClickHandel')
      }
    }
  }
  ;
</script>
