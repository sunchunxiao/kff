<style>

</style>
<template>
  <div>
    <mt-field label="白皮书地址" v-model="whitePaper"></mt-field>
    <mt-field label="项目分类" v-model="projectItem"></mt-field>
    <mt-field label="项目描述" v-model="description"  type="textarea" rows="4"></mt-field>
    <mt-button type="primary" @click.native="preStep" >上一步</mt-button>
    <mt-button type="primary" @click.native="nextStep" >下一步</mt-button>
  </div>
</template>
<script>
  export default {
    name: "step2",
    data() {
      return {
        whitePaper: "",
        projectItem: "",
        description: "",
      }
    },
    methods: {
      preStep(){
        this.$emit('btn1Handel')
      },
      nextStep() {
        //接口
        this.$emit('btn2Handel')
      },
    }

  }
</script>
