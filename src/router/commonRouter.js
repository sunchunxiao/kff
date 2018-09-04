/**
 * Created by sunchunxiao on 2018/3/31.
 */

export const  commonRouter = [
  {
    path: '*',
    meta: {
      title: '页面未找到'
    },
    component: (resolve) => require(['@/views/404.vue'], resolve)
  }
]
