/**

 * Created by sunchunxiao on 2018/4/14.

 */

/*底部菜单-话题 路由*/
export const topicRouter = [
  {
    path: '/topic/add',
    meta: {
      title: '提交项目'
    },
    component: (resolve) => require(['@/views/topic/add.vue'], resolve)
  },
]
