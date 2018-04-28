<template>
  <div>
    <Project-Item :itemList="recommendList" :isActionTop='false' v-on:addAttention="addAttention"></Project-Item>
  </div>
</template>

<script>
  import ProjectItem from '@/components/common/projectItem.vue'

  export default {
    name: "recommmend",
    props: ['recommendList'],
    components: {
      ProjectItem
    },
    data() {
      return {}
    },
    created() {
    },
    methods: {
      addAttention(item, index) {
        console.log("推荐 - 关注 ");
        this.$emit("attentionHandel", 'recommend', item, index)
      }
    }
  };
</script>
