<template>
  <div>
    <HeaderBar
      :rightOptions="rightOptions"
      v-on:rightClickHandel="rightClickHandel"
      :title="title"
    />
    <div><router-link>帮助中心</router-link></div>
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
        rightOptions: {
          hasRightBtn: true,
          rightBtnText: '帮助中心',
        },
        title: this.$route.meta.title,
        List: []
      }
    },

    methods: {
      rightClickHandel() {
        this.$router.push('/mine/help')
      }
    }
  }
</script>

