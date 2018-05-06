<template>
  <div>
    <HeaderBar :title="title"/>
    <div class="body">
      <h3 class="title">邀请好友注册得多级奖励</h3>
      <div class="row">
        <div>邀请总收益 :</div>
        <div>{{data.total}} KFF</div>
      </div>
      <div class="row">
        <label>邀请编码 :</label>
        <span>{{data.code}} </span>
      </div>
      <div class="row">
        <label>复制链接 :</label>
        <div class="clipboard">
          <input type="text" v-model="data.url" disabled>
          <button type="button" v-clipboard:copy="data.url">复制</button>
        </div>
      </div>
      <div class="row">邀请不限平台，且不限推广人数，可多级获得奖励，快邀请身边的朋友注册吧！</div>

      <table class="table">
        <thead class="thead">
        <tr>
          <th width="50%">邀请规则</th>
          <th width="25%">邀请人数</th>
          <th width="25%"> 奖励</th>
        </tr>
        </thead>
        <tbody class="tbody">
        <tr>
          <td>M1：30 KFF/人</td>
          <td>4</td>
          <td>120</td>
        </tr>
        <tr>
          <td>M2：30 KFF/人</td>
          <td>24</td>
          <td>480</td>
        </tr>
        <tr>
          <td>M3：10 KFF/人</td>
          <td>4</td>
          <td>40</td>
        </tr>
        </tbody>
      </table>
      <div class="row tip">推广总收益=M1人数*30 + M2人数*20 + M3人数*10</div>
    </div>
  </div>
</template>

<style lang="less">
  .body {
    padding: 0 20px;
    .title {
      text-align: center;
    }
    .row {
      padding:  10px 0;
      display: flex;
      align-items: center;
    }

    .table {
      tr > th, tr > td {
        padding: 10px;
        text-align: center;
      }
    }

    .tip{
      border-top: 1px solid;

    }
  }


</style>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'

  export default {
    name: 'friends',
    components: {
      HeaderBar,
    },
    data() {
      return {
        title: this.$route.meta.title,
        data: {
          total: 500,
          code: "567898",
          url: "https://beta.kffc.io/login/567899"
        }
      }
    },

    created() {
      // queryItemList();
      //接口
    },

    methods: {
    }
  }
</script>
