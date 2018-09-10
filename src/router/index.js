import Vue from 'vue'
import Router from 'vue-router'
import {userRouter} from './userRouter'     //用户相关 路由
import {commonRouter} from './commonRouter' //404 等
import {mainRouter} from './mainRouter'   //路由
import {homeRouter} from './homeRouter'   //首页 路由
import {topicRouter} from './topicRouter' //话题 路由
import {mineRouter} from './mineRouter'   //我的 路由
import {projectRouter} from './projectRouter'   //我的 路由
import {redenvelopesRouter} from './redenvelopesRouter'   //领取红包 路由
import {rewardRouter} from './rewardRouter'   //悬赏 路由

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
  ...redenvelopesRouter,
  ...rewardRouter
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

