<style>

</style>
<template>
  <div>
    <mt-field label="代币名称" v-model="tokenName"></mt-field>
    <mt-field label="英文名称" v-model="englishName"></mt-field>
    <mt-field label="中文名称" v-model="name"></mt-field>
    <mt-field label="官网" type="url" v-model="website"></mt-field>
    <mt-field label="是否上市" v-model="isStock"></mt-field>
    <mt-field label="发行时间" type="date" v-model="time" ></mt-field>
    <mt-field label="发行量" type="number" v-model="number"></mt-field>
    <mt-button type="primary" @click.native="nextStep" class="longBtn">下一步</mt-button>
  </div>
</template>
<script>
  export default {
    name: "step1",
    data() {
      return {
        tokenName: "",
        englishName: "",
        name: "",
        website: "",
        isStock: "",
        time: "",
        number: "",
      }
    },
    methods: {
      nextStep() {
        //接口
        this.$emit('btn1Handel')
      },
    }

  }
</script>
