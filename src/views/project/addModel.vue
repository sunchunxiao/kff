<style lang="less">
  .addModal {
    padding: 20px 10px;
    .average {
      padding: 10px;
      border-bottom: 1px solid #DDD;
    }
    .detail {
      padding: 10px;
      .flex {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .mt-progress {
      width: 250px;
    }
    .modal {
      width: 75%;
      padding: 10px;
      .title {
        padding: 10px;
        font-size: 18px;
      }
      .content {
      }
      .btnGroup {
        text-align: center;
        margin-top: 10px;
      }

    }

    .nextBtn {
      position: fixed;
      bottom: 20px;
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
    <div class="addModal">
      <div class="average">
        <div>总体评分</div>
        <My-Progress :rate="averageScore"></My-Progress>
      </div>
      <div>
        <div>自定义纬度（最少三个）</div>
        <div>
          <mt-button type="primary" @click.native="addModel">新增</mt-button>
        </div>
        <mt-popup v-model="modalVisible" popup-transition="popup-fade" class="modal">
          <div class="title">自定义纬度</div>
          <div class="content">
            <mt-field label="名称" v-model="name"></mt-field>
            <mt-field label="权重" v-model="rateValue"></mt-field>
            <mt-field label="分数" v-model="score"></mt-field>
          </div>
          <div class="btnGroup">
            <mt-button @click.native="modalVisible = false" type="primary">取消</mt-button>
            <mt-button @click.native="okHandel" type="primary">确定</mt-button>
          </div>
        </mt-popup>
      </div>
      <template v-for="(item,index) in modelInfoList">
        <div class="detail">
          <div class="flex">
            <div>{{item.name}}({{item.rateValue}} %)</div>
            <mt-button @click.native="editHandel(index)" type="primary">编辑</mt-button>
          </div>
          <My-Progress :rate="item.score *10"></My-Progress>
        </div>
      </template>
      <div class="nextBtn">
        <mt-button type="primary" @click.native="nextStep">下一步</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
  import HeaderBar from '@/components/layout/headerBar.vue'
  import MyProgress from '@/components/common/myProgress.vue'
  import {Toast} from 'mint-ui';

  export default {
    name: "addModal",
    components: {
      HeaderBar,
      MyProgress
    },
    data() {
      return {
        leftOptions: {
          hasLeftBtn: true,
          leftBtnText: "返回"
        },
        title: this.$route.meta.title,
        modelInfoList: [],
        modalVisible: false,
        name: "",
        rateValue: "",
        score: "",
        isEdit: false,
        editIndex: 0,
      }
    },
    created() {
      this.queryEvaluteInfo()
    },
    computed: {
      averageScore() {
        let averageScore = this.modelInfoList.reduce((total, item, index) => {
          return total + item.score * item.rateValue / 100
        }, 0).toFixed(1)

        return parseFloat(averageScore) * 10
      }
    },
    methods: {
      leftClickHandel() {
        this.$router.go(-1)
      },

      queryEvaluteInfo() {
        //接口
        this.modelInfoList = [
          {
            name: "技术",
            rateValue: "30",
            score: "8",
          }, {
            name: "架构",
            rateValue: "30",
            score: "8",
          }
        ]
      },

      addModel() {
        this.modalVisible = true
        this.name = "";
        this.rateValue = "";
        this.score = "";
        this.isEdit = false;
      },
      editHandel(index) {
        let currentItem = this.modelInfoList[index];
        let {name, rateValue, score} = currentItem
        this.modalVisible = true
        this.name = name
        this.rateValue = rateValue;
        this.score = score;
        this.isEdit = true;
        this.editIndex = index;
      },

      okHandel() {
        let temp = {
          name: this.name,
          rateValue: parseInt(this.rateValue),
          score: parseInt(this.score),
        }
        //新增
        if (!this.isEdit) {
          this.modelInfoList.push(temp)
        } else {
          let editIndex = this.editIndex
          this.modelInfoList.splice(editIndex, 1, temp)
        }

        this.modalVisible = false
      },

      nextStep() {
        let length = this.modelInfoList.length
        if (length < 3) {
          Toast({
            message: '自定义纬度至少三个',
            position: 'middle',
          });
          return
        }
        this.$router.push('/project/firstEvaluation')
      }
    }
  }
</script>
