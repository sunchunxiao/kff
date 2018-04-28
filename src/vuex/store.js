import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  //userInfo:{
//      userphone:'',
//      password:''
  // }
  useraInfo:localStorage.getItem('user'),
  goodsInfo:localStorage.getItem('goods'),
  gwcInfo:localStorage.getItem('good'),
}

const getters={
  txt:state =>state.userInfo,
  arr1:state =>state.goodsInfo,
  arr2:state =>state.gwcInfo
}


const mutations = {
  changeUserInfo(state,a){
    state.userInfo = a;
  },
  changegoodsInfo(state,a){
    state.goodsInfo = a;
  },
  changegwcInfo(state,a){
    state.gwcInfo = a;
  },

}
const actions={
  changeUserInfo({commit},a){
//	console.log('a',a)
    return commit('changeUserInfo',a)
  },
  changegoodsInfo({commit},a){
//	console.log('a',a)
    return commit('changegoodsInfo',a)
  },
  changegwcInfo({commit},a){
//	console.log('a',a)
    return commit('changegwcInfo',a)
  },

}

//import actions from './actions'
const store = new Vuex.Store({
  state,mutations,actions,getters
})

export default store
