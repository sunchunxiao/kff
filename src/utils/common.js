/**
 * Created by zhengchangshun on 2018/4/15.
 */

import router from '@/router/index'

//跳转到登录
export const jumpToLogin = (recordRedirect = true) => {
  let path = '/user/login'
  if (recordRedirect) {
    href += '?redirect=' + window.location.pathname
  }
  router.push({path})
}
