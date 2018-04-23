<style lang="less">
  .category {
    margin: 10px 0;
    .cell {
      width: 30%;
      margin: 0 1%;
      display: inline-block;
    }
  }


</style>
<template>
  <div class="category">
    <template v-for="(item,index) in data">
      <div :key="index" class="cell">
        <div>{{item.num}}</div>
        <div>{{item.text}}</div>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: 'categoryNum',
    props: ['data']
  };
</script>
