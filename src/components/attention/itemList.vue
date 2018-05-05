<template>
  <div>
    <mt-cell :title="item.name" :label="item.descrption" icon="more"
             :value="item.point" v-for="(item,index) in itemList"
             :key="index"
             :to="{path: '/project/home', query: {id:item.id}}"></mt-cell>
  </div>
</template>
<script>
  export default {
    props: ['itemList'],
    methods: {
      gotoProject(id) {
        this.router.push({path: '/project/home', query: {id}})
      }
    }
  }
</script>
