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
  //测评
  {
    path: '/project/articleInfo',
    meta: {
      title: '测评'
    },
    component: (resolve) => require(['@/views/project/articleInfo.vue'], resolve)
  },
  //讨论
  {
    path: '/project/discuss',
    meta: {
      title: '讨论'
    },
    component: (resolve) => require(['@/views/project/discuss.vue'], resolve)
  },
  //讨论
  {
    path: '/project/currency',
    meta: {
      title: '讨论'
    },
    component: (resolve) => require(['@/views/project/currency.vue'], resolve)
  },
  //文章
  {
    path: '/project/article',
    meta: {
      title: '文章'
    },
    component: (resolve) => require(['@/views/project/article.vue'], resolve)
  },

  //文章
  {
    path: '/project/article1',
    meta: {
      title: '文章'
    },
    component: (resolve) => require(['@/views/project/article1.vue'], resolve)
  },

  //部分评测
  {
    path: '/project/evaluationLitt',
    meta: {
      title: '部分评测'
    },
    component: (resolve) => require(['@/views/project/evaluationLitt.vue'], resolve)
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
