/**
 * Created by zhengchangshun on 2018/4/22.
 */
/**
 * Created by zhengchangshun on 2018/3/31.
 */

/*项目主页相关 路由*/
export const projectRouter = [
  {
    path: '/project/home',
    meta: {
      title: '项目主页'
    },
    component: (resolve) => require(['@/views/project/home.vue'], resolve)
  },
  {
    path: '/project/rate',
    meta: {
      title: '用户评分'
    },
    component: (resolve) => require(['@/views/project/rate.vue'], resolve)
  },
  {
    path: '/project/ordinary',
    meta: {
      title: '普通测评'
    },
    component: (resolve) => require(['@/views/project/ordinary.vue'], resolve)
  },{
    path: '/project/authority',
    meta: {
      title: '专业测评'
    },
    component: (resolve) => require(['@/views/project/authority.vue'], resolve)
  },
]
