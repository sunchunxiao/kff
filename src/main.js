// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import VueClipboard from 'vue-clipboard2'
import 'mint-ui/lib/style.css'
import './css/reset.css'
import './css/global.css'
import CryptoJS from 'crypto-js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import $ from 'jquery'

// 复制到剪切板
Vue.use(VueClipboard)
Vue.use(iView)
Vue.config.productionTip = false

// 加载插件
Vue.use(MintUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
