<style lang="less">
  .authority {
    margin-top: 20px;
    padding: 0 20px;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .description {
      margin-bottom: 20px;
    }
    .model {
      .modetItem {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 10px;
        font-weight: 600;
        font-size: 16px;
        margin-bottom: 20px;
      }
    }
    .btnGroup {
      text-align: center;
      button {
        margin: 5px 0;
      }
    }
  }
</style>
<template>
  <div>
    <HeaderBar
      :leftOptions="leftOptions"
      v-on:leftClickHandel="leftClickHandel"
      :title="title"
    />
    <div class="authority">
      <div class="title">
        <div>专业测评</div>
        <div>
          <router-link :to="{path: '/project/ordinary', query: {}}">切换至普通测评</router-link>
        </div>
      </div>
      <div class="description">
        经过科学筛选，系统提供以下几个评测纬度，可完整评测，也可部分评测。若不满意，您也可以自己新建模型。
      </div>
      <div class="model">
        <div class="modetItem">
          <div>纬度</div>
          <div>权重</div>
          <div>&nbsp;</div>
        </div>
        <template v-for="(item,index) in usedModel">
          <div class="modetItem">
            <div>{{item.name}}</div>
            <div>{{item.rate}}</div>
            <div>
              <router-link :to="{path: '/project/authorityDetail', query: {origin:item.name}}">写测评</router-link>
            </div>
          </div>
        </template>
      </div>
      <div class="btnGroup">
        <mt-button type="primary" class="longBtn" @click.native="goAllEvaluation">完整测评</mt-button>
        <mt-button type="primary" class="longBtn" @click.native="addModel">新建测评模型</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'

  export default {
    name: "projectAuthority",  //专业测评
    components: {
      HeaderBar
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        title: this.$route.meta.title,
        baseModel: [
          {name: "项目定位", rate: "20%"},
          {name: "技术框架", rate: "10%"},
          {name: "团队实力", rate: "30%"},
          {name: "项目进度", rate: "20%"},
          {name: "投资风险", rate: "20%"},
        ],
        userModel: []
      }
    },
    created() {
      this.queryUserModel()
    },
    computed: {
      usedModel() {
        return this.userModel.length > 0 ? this.userModel : this.baseModel
      }
    },
    methods: {
      leftClickHandel() {
        this.$router.go(-1)
      },
      queryUserModel() {
        /*接口*/
        this.userModel = []
      },

      goAllEvaluation() {
        let {rate, message, fromPosition} = this
        this.$router.push({
          path: '/project/firstEvaluation',
          query: {}
        })
      },

      addModel() {
        this.$router.push('/project/addModel')
      }
    }
  }
</script>
