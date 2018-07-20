<style>

</style>
<template>
  <div>
    
<keep-alive>
    <router-view v-if="$route.meta.keepAlive"></router-view>
</keep-alive>
<router-view v-if="!$route.meta.keepAlive"></router-view>
    <!--<Footer-Menu/>-->
  </div>
</template>

<script>
//import FooterMenu from '@/components/layout/footerMenu.vue'

  export default {
    name: 'index',
//  components: {
//    FooterMenu,
//  },
    data() {
      return{

      }
    },

    methods: {}
  };
</script>
