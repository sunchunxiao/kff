/**
 * Created by zhengchangshun on 2018/4/1.
 */

/*底部菜单-我的 路由*/
export const mineRouter = [
  {
    path: '/mine/suggest',
    meta: {
      title: '意见反馈'
    },
    component: (resolve) => require(['@/views/mine/suggest.vue'], resolve)
  },
  {
    path: '/mine/setting',
    meta: {
      title: '设置'
    },
    component: (resolve) => require(['@/views/mine/setting.vue'], resolve)
  },
  {
    path: '/mine/myHome',
    meta: {
      title: '个人主页'
    },
    component: (resolve) => require(['@/views/mine/myHome.vue'], resolve)
  },
  {
    path: '/mine/attention',
    meta: {
      title: '我的关注'
    },
    component: (resolve) => require(['@/views/mine/attention.vue'], resolve)
  },
  {
    path: '/mine/store',
    meta: {
      title: '我的收藏'
    },
    component: (resolve) => require(['@/views/mine/store.vue'], resolve)
  },
  {
    path: '/mine/friends',
    meta: {
      title: '推荐好友'
    },
    component: (resolve) => require(['@/views/mine/friends.vue'], resolve)
  },
  {
    path: '/mine/about',
    meta: {
      title: '关于我们'
    },
    component: (resolve) => require(['@/views/mine/about.vue'], resolve)
  },
  {
    path: '/mine/help',
    meta: {
      title: '帮助中心'
    },
    component: (resolve) => require(['@/views/mine/help.vue'], resolve)
  },

]
