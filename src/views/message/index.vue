<template>
  <div>
    <HeaderBar
      :leftOptions="leftOptions"
      v-on:leftClickHandel="leftClickHandel"
      :title="title"
    />
    <mt-cell :title="item.title" v-for="(item,index) in List"  :key="index">
      <img slot="icon" src="../../assets/image/rose.png" width="24" height="24">
    </mt-cell>
  </div>
</template>

<style>

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
          hasRightBtn: false,
        },
        title: this.$route.meta.title,
        List: []
      }
    },

    created() {
      // queryList();
      this.List = [{
        title: "1"
      }, {
        title: "2"
      }, {
        title: "3"
      }, {
        title: "4"
      }, {
        title: "5"
      }, {
        title: "6"
      }]
    },

    methods: {
      leftClickHandel() {
        this.$router.push('/main/home')
      }
    }
  }
</script>
