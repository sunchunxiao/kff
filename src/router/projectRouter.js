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
  /*测评详细部分（start）*/
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
  },
  {
    path: '/project/authority',
    meta: {
      title: '专业测评'
    },
    component: (resolve) => require(['@/views/project/authority.vue'], resolve)
  },
  {
    path: '/project/authorityDetail',
    meta: {
      title: '专业测评'
    },
    component: (resolve) => require(['@/views/project/authorityDetail.vue'], resolve)
  },
  {
    path: '/project/firstEvaluation',
    meta: {
      title: '发表测评'
    },
    component: (resolve) => require(['@/views/project/firstEvaluation.vue'], resolve)
  },
  {
    path: '/project/secondEvaluation',
    meta: {
      title: '发表测评'
    },
    component: (resolve) => require(['@/views/project/secondEvaluation.vue'], resolve)
  },
  {
    path: '/project/addModel',
    meta: {
      title: '新建测评'
    },
    component: (resolve) => require(['@/views/project/addModel.vue'], resolve)
  },
  /*测评详细部分（end）*/
  {
    path: '/project/allEvaluate',
    meta: {
      title: '全部测评'
    },
    component: (resolve) => require(['@/views/project/allEvaluate.vue'], resolve)
  },
]
