<template>
  <div>
    <HeaderBar
      :leftOptions="leftOptions"
      :title="title"
      v-on:leftClickHandel="leftClickHandel"
    />
    <div>
      <mt-field label="您的建议" placeholder="您的建议" type="textarea" rows="4" v-modal="suggestion"></mt-field>
      <mt-field label="联系方式" placeholder="请输入联系方式" type="number" v-model="tel"></mt-field>
    </div>
    <mt-button type="primary" class="longBtn" @click.native="submit">提交</mt-button>
  </div>
</template>

<style>

</style>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'

  export default {
    name: 'suggest',
    components: {
      HeaderBar,
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回",
        },
        title: this.$route.meta.title,
        suggestion: '',
        tel: ''
      }
    },

    methods: {
      // 返回
      leftClickHandel() {
        this.$router.push('/main/mine')
      },

      //提交
      submit() {
        let {suggestion, tel} = this
        let param = {
          suggestion,
          tel
        }
        console.log(param);

      }
    }
  }
</script>
