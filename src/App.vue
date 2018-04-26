<template>
  <div id="app">
    <div class="app-1">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  .app-1{
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    color: #2c3e50;
  }
</style>
