/**
 * Created by zhengchangshun on 2018/3/31.
 */

/*用户相关 路由*/
export const userRouter = [
  {
    path: "/",
    redirect: "/user/registerSmp"
  },
 //首次登录
  {
    path: "/user/codeLogin",
    meta: {
      title: '登录',
    },
    component: (resolve) => require(['@/views/user/codeLogin.vue'], resolve)
  },
  //首次注册测试
  // {
  //   path: "/user/re",
  //   meta: {
  //     title: '登录',
  //   },
  //   component: (resolve) => require(['@/views/user/re.vue'], resolve)
  // },
  //验证码登录
  {
    path: "/user/codeLogin1",
    meta: {
      title: '验证码登录',
    },
    component: (resolve) => require(['@/views/user/codeLogin1.vue'], resolve)
  },

  //老用户登录
  {
    path: "/user/login",
    meta: {
      title: '登录',
    },
    component: (resolve) => require(['@/views/user/login.vue'], resolve)
  },

  //新用户注册
  {
    path: "/user/registerSmp",
    meta: {
      title: '注册',
    },
    component: (resolve) => require(['@/views/user/registerSmp.vue'], resolve)
  },
  //注册成功
  {
    path: "/user/registerSuccess",
    meta: {
      title: '注册',
    },
    component: (resolve) => require(['@/views/user/registerSuccess.vue'], resolve)
  },
  //个人专属海报
  {
    path: "/user/personalPoster",
    meta: {
      title: '注册',
    },
    component: (resolve) => require(['@/views/user/poster.vue'], resolve)
  },
  //什么是区分
  {
    path: "/user/qf",
    meta: {
      title: '区分',
    },
    component: (resolve) => require(['@/views/user/qf.vue'], resolve)
  },

  //忘记密码
  {
    path: "/user/forgetPwd",
    meta: {
      title: '忘记密码',
    },
    component: (resolve) => require(['@/views/user/forgetPwd.vue'], resolve)
  },
  //注册协议
  {
    path: "/user/agreement",
    meta: {
      title: '忘记密码',
    },
    component: (resolve) => require(['@/views/user/agreement.vue'], resolve)
  },
  //下载
  {
    path: "/user/download",
    meta: {
      title: '下载',
    },
    component: (resolve) => require(['@/views/user/download.vue'], resolve)
  },
  //评测模型
  {
    path: "/user/model",
    meta: {
      title: '忘记密码',
    },
    component: (resolve) => require(['@/views/user/evaluation-model.vue'], resolve)
  }

]
