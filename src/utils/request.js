import axios from 'axios'
import {Toast} from 'mint-ui';
import util from '@/utils/common'
import Md5 from 'js-md5';
import Base64 from 'js-base64';
import aes from 'node-cryptojs-aes';

const Aes128 = aes.randomBytes(128)


const specialCode = []

let defaultOpts = {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
};
// 响应拦截
axios.interceptors.response.use((res) => {
  return res
}, (error) => {
  let message = (error.response.data && error.response.data.message) || error.message
  Toast(message);
  return Promise.reject(error)
})

// option = {method,body,header}
const request = (url, options = {}) => {
  //测试地址
  var url = "http://47.98.197.101/tzg-rest" + url;
  //默认post请求
  let method = options.method || "post"
  let key = ~['delete', 'get', 'head'].indexOf(method) ? 'params' : 'data'
  // 过滤空的筛选条件
  if (['get'].indexOf(method.toLowerCase()) > -1) {
    options.body = Object.assign({}, options.body)
    for (let key in options.body) {
      if (options.body.hasOwnProperty(key)) {
        if (options.body[key] === '') {
          delete  options.body[key]
        }
      }
    }
  }

  let body = options.body
  let policy = Base64(Aes128(JSON.stringify(body)))
  let sign = Md5(JSON.stringify(body))
  let time = new Date();
  let encodeBody = {
    policy, sign, time
  }

  //数据单据处理
  let body = {[key]: encodeBody}
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
        console.error('api error result', res)
        Toast.error(res.data.message)
        if (res.data.code === specialCode) {
          util.jumpToLogin()
        }
        return Promise.reject(res.data)
      }
    })
}

export default request
