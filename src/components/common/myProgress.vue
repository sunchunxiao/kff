<style lang="less">
  .range {
    width: 150px;
  }
</style>
<template>
  <div class="range">
    <mt-progress :value="rate" :bar-height="5">
      <div slot="end" style="margin-left: 5px">{{rate / 10}}</div>
    </mt-progress>
  </div>
</template>

<script>
  export default {
    name: "myProgress",
    props: ['rate'],
  }
</script>
