<template>
  <div>
    <HeaderBar
      :leftOptions="leftOptions"
      :rightOptions="rightOptions"
      v-on:leftClickHandel="leftClickHandel"
      v-on:rightClickHandel="rightClickHandel"
      :title="title"
    />
    <div class="poster">
      <img src="../../assets/image/logo.png" alt="">
    </div>
  </div>
</template>

<style>
  .poster {
    width:200px;
    height: 200px;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-100px;
    margin-top:-100px;
  }
</style>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'

  export default {
    name: 'message',
    components: {
      HeaderBar,
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        rightOptions: {
          hasRightBtn: true,
          rightBtnText: '帮助中心',
        },
        title: this.$route.meta.title,
        List: []
      }
    },

    methods: {
      leftClickHandel() {
        this.$router.push('/main/mine')
      },

      rightClickHandel() {
        this.$router.push('/mine/help')
      }
    }
  }
</script>

