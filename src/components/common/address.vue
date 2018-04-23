<template>
  <mt-popup v-model="visible" position="bottom" class="bottomPopup">
    <div class="picker-toolbar">
      <span class="mint-datetime-action mint-datetime-cancel" @click="cancelRegionModal">取消</span>
      <span class="mint-datetime-action mint-datetime-confirm" @click="okRegionModal">确定</span>
    </div>
    <mt-picker :slots="addressSlots" @change="getCurrentData" :visible-item-count="5"></mt-picker>
  </mt-popup>
</template>
<script>
  import {address} from '../../utils/provinceCity'

  export default {
    data() {
      return {
        addressSlots: [
          {
            flex: 1,
            values: Object.keys(address),
            className: 'slot1',
            textAlign: 'center'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['北京'],
            className: 'slot3',
            textAlign: 'center'
          }
        ],
        addressProvince: '北京',
        addressCity: '北京',
      }
    },
    props: ['visible'],
    methods: {
      getCurrentData(picker, values) {
        picker.setSlotValues(1, address[values[0]]);
        this.addressProvince = values[0];
        this.addressCity = values[1];
      },

      cancelRegionModal() {
        this.$emit('cancelRegionModal')
      },

      okRegionModal() {
        this.$emit('okRegionModal', [this.addressProvince, this.addressCity])
      }
    }
  }
</script>
