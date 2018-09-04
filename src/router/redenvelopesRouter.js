/**
 * Created by sunchunxiao  on 2018/3/31.
 */

/*红包*/
export const redenvelopesRouter = [
  //领取红包
  {
    path: "/redenvelopes/envelopes",
//  redirect: '',
    component: (resolve) => require(['@/views/redenvelopes/envelopes.vue'], resolve),
  },
  //立即领取
  {
    path: "/redenvelopes/findcoin",
    component: (resolve) => require(['@/views/redenvelopes/findcoin.vue'], resolve),
  },
  //登录领取
  {
    path: "/redenvelopes/login",
    component: (resolve) => require(['@/views/redenvelopes/login.vue'], resolve),
  },
  //邀请
  {
    path: "/redenvelopes/invitation",
    component: (resolve) => require(['@/views/redenvelopes/invitation.vue'], resolve),
  }
]