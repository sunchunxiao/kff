<template>
  <div class="suggest">
    <HeaderBar
      :leftOptions="leftOptions"
      :title="title"
      v-on:leftClickHandel="leftClickHandel"
    />
    <div>
      <div class="suggest-title">意见描述</div>
      <div class="suggest-content">
        <textarea label="您的建议:" placeholder="请输入不少于10个字的建议" type="textarea" rows="4" v-model="suggestion"></textarea>
      </div>
      <div class="suggest-title">联系方式</div>
      <div class="suggest-content">
        <input label="联系方式:" placeholder="为了更快的解决问题请提供你的联系方式" type="text" v-model="tel"></input>
      </div>
    </div>
    <mt-button type="primary" class="longBtn" @click.native="submit">提交</mt-button>
  </div>
</template>
<style lang="less">
  .suggest{
    height: 100%;
    background-color:#f4f4f4 ;
  }
  .mint-cell-wrapper{
    margin-top: 20px;
  }
  .suggest-title{
    font-size: 1rem;
    color: #a2a2a2;
    padding: 1rem 0 1rem 1rem;
  }
  .suggest-content{
    width: 100%;
    background-color: #fff;
    textarea{
      width: 96%;
      font-size: 1.2rem;
      outline: none;
      border:none;
      resize: none;
      margin: 0.5rem 1rem;
      word-wrap: break-word;
      /*overflow: hidden;*/
    }
  }
  input{
    width: 100%;
    height: 1.5rem;
    font-size: 1.2rem;
    border: none;
    outline: none;
    margin: 0.8rem 0;
    padding-left: 1rem;
  }
  .longBtn{
    position: absolute;
    left: 0;
    bottom: 0;
  }


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
