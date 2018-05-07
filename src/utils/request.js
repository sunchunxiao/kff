import axios from 'axios'
import {Toast} from 'mint-ui';
import util from '@/utils/common'
// import Md5 from 'js-md5';
// import {Base64} from 'js-base64';
// import {encrypt as aes128Encod} from './aesEncode'


const specialCode = []

let defaultOpts = {
  method: 'get',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
};
// 响应拦截
axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  let message = (error.response.data && error.response.data.msg) || error.msg
  Toast(message);
  return Promise.reject(error)
})

// option = {method,body,header}
const request = (url, options = {}) => {
  //测试地址
  // var url = "http://47.98.197.101/tzg-rest" + url;
  var url = "http://192.168.10.151:803" + url;

  // let originBody = JSON.stringify(options.body)
  // let aesEncode = aes128Encod(originBody)
  // let policy = Base64.encode(aesEncode)
  // policy = encodeURI(policy)
  // let sign = Md5(originBody)
  // let time = new Date().getTime();
  // let encodeBody = {
  //   policy, sign, time
  // }

  // 数据单据处理
  let body = {'params': options.body}
  delete  options.body

  // form表单格式提交
  if (options.isForm) {
    defaultOpts = Object.assign(defaultOpts, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })

    delete options.isForm
  }

  return axios(Object.assign({url}, defaultOpts, body, options))
    .then(res => {
      if (res.data.success) {
        return res.data.data
      } else {
        Toast(res.data.message)
        if (res.data.code === specialCode) {
          util.jumpToLogin()
        }
        return Promise.reject(res.data)
      }
    })
}

export default request
