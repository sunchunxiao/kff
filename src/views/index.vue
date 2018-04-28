<style>

</style>
<template>
  <div>
    <router-view/>
    <Footer-Menu/>
  </div>
</template>

<script>
  import FooterMenu from '@/components/layout/footerMenu.vue'

  export default {
    name: 'index',
    components: {
      FooterMenu,
    },
    data() {
      return{

      }
    },

    methods: {}
  };
</script>
