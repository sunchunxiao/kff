/**
 * Created by sunchunxiao on 2018/5/7.
 */

/*底部菜单栏 路由*/
export const mainRouter = [
  //用户登录
  {
    path: "/web",
    redirect: '/web/pc',
    component: (resolve) => require(['@/views/pc/index.vue'], resolve),
    children: [
      {
        path: 'pc',
        meta: {
          title: 'web网页'
        },
        component: (resolve) => require(['@/views/pc/index.vue'], resolve)
      },



    ]
  }
]
