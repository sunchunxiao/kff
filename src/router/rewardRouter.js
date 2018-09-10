/**
 * Created by sunchunxiao  on 2018/3/31.
 */

/*悬赏*/
export const rewardRouter = [
  //悬赏尽调
  {
    path: "/reward",
//  redirect: '',
    component: (resolve) => require(['@/views/reward/index.vue'], resolve),
  },
  //悬赏回答
  {
    path: "/reward/answer",
    component: (resolve) => require(['@/views/reward/answer.vue'], resolve),
  },

]