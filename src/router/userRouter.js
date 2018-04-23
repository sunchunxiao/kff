/**
 * Created by zhengchangshun on 2018/3/31.
 */

/*用户相关 路由*/
export const userRouter = [
  {
    path: "/",
    redirect: "/user/login"
  },

  //用户登录
  {
    path: "/user/login",
    meta: {
      title: '登录',
    },
    component: (resolve) => require(['@/views/user/login.vue'], resolve)
  },

  //用户注册
  {
    path: "/user/register",
    meta: {
      title: '注册',
    },
    component: (resolve) => require(['@/views/user/register.vue'], resolve)
  },

  //忘记密码
  {
    path: "/user/forgetPwd",
    meta: {
      title: '注册',
    },
    component: (resolve) => require(['@/views/user/forgetPwd.vue'], resolve)
  }
]
