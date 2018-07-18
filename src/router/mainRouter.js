/**
 * Created by zhengchangshun on 2018/3/31.
 */

/*底部菜单栏 路由*/
export const mainRouter = [
  //用户登录
  {
    path: "/main",
    redirect: '/main/home',
    component: (resolve) => require(['@/views/index.vue'], resolve),
    children: [
      {
        path: 'home',
        meta: {
          title: '首页'
        },
        component: (resolve) => require(['@/views/home/index.vue'], resolve)
      },
      {
        path: 'topic',
        meta: {
          title: '话题'
        },
        component: (resolve) => require(['@/views/topic/index.vue'], resolve)
      },
      {
        path: 'message',
        meta: {
          title: '消息'
        },
        component: (resolve) => require(['@/views/message/index.vue'], resolve)
      },
      {
        path: 'mine',
        meta: {
          title: '我的'
        },
        component: (resolve) => require(['@/views/mine/index.vue'], resolve)
      },
//    {
//      path: 'mine',
//      meta: {
//        title: '我的'
//      },
//      component: (resolve) => require(['@/views/home/index1.vue'], resolve)
//    }
    ]
  }
]
