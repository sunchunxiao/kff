import Vue from 'vue'
import Router from 'vue-router'
import {userRouter} from './userRouter'     //用户相关 路由
import {commonRouter} from './commonRouter' //404 等
import {mainRouter} from './mainRouter'   //底部菜单栏 路由
import {homeRouter} from './homeRouter'   //底部菜单栏 - 首页 路由
import {topicRouter} from './topicRouter' //底部菜单栏 - 话题 路由
import {mineRouter} from './mineRouter'   //底部菜单栏 - 我的 路由
import {projectRouter} from './projectRouter'   //底部菜单栏 - 我的 路由

Vue.use(Router)
// 模块路由合并
const routes = [
  ...userRouter,
  ...commonRouter,
  ...mainRouter,
  ...homeRouter,
  ...topicRouter,
  ...mineRouter,
  ...projectRouter,
]
const router = new Router({
  mode:'history',
  routes: routes
})


//路由钩子 -- 进入前： 权限校验
router.beforeEach((to, from, next) => {
  // 鉴权
  if (to.meta.auth) {
    // 跳转到登录页
  } else {
    next()
  }
})

//路由钩子 --- 进入后： 回到顶部
router.afterEach(() => {
  window.scrollTo(0, 0)
})


export default router

