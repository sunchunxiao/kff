<style>
  .header {
    height: 30px;
  }
</style>
<template>
  <mt-header :title='title' class="header">
    <mt-button slot="left" v-if='leftOptions.hasLeftBtn' @click.native="leftClick">{{leftOptions.leftBtnText}}</mt-button>
    <mt-button slot="right" v-if='rightOptions.hasRightBtn' @click.native="rightClick">{{rightOptions.rightBtnText}}</mt-button>
  </mt-header>
</template>

<script>
  export default {
    name: 'headBar',
    props: ['title', 'leftOptions', 'rightOptions',],
    props: {
      'title': {
        type: String,
        default: ""
      },
      'leftOptions': {
        type: Object,
        default: function () {
          return {
            hasLeftBtn: false,
            leftBtnText: "",
          }
        }
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
        console.log('左侧按钮事件');
        this.$emit('leftClickHandel')
      }
      ,
      rightClick: function () {
        console.log('右侧按钮事件');
        this.$emit('rightClickHandel')
      }
    }
  }
  ;
</script>
