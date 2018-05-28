<template>
  <div>
    <HeaderBar :title="title" />

    <mt-navbar v-model="selected">
      <mt-tab-item id="evaluate">评测规则</mt-tab-item>
      <mt-tab-item id="reward">激励机制</mt-tab-item>
      <mt-tab-item id="description">项目说明</mt-tab-item>
      <mt-tab-item id="authentication">认证</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="evaluate">
        评测规则写在这里
      </mt-tab-container-item>
      <mt-tab-container-item id="reward">
        激励机制写在这里
      </mt-tab-container-item>
      <mt-tab-container-item id="description">
        项目说明写在这里
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>

<style lang="less">
  .mint-tab-container-item {
   padding: 10px 20px
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
        title: this.$route.meta.title,
        selected: "evaluate"
      }
    },

    methods: {
    }
  }
</script>


