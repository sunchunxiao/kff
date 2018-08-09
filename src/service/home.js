/**
 * Created by sunchunxiao on 2018/8.1.
 */
import request from '../utils/request'

// 文章详情
export const article = (params = {}) => {
  return request(`/kff/home/shareArticleDetail`, {
    body: {
      ...params
    },
  })
}
// 文章
export const article1 = (params = {}) => {
  return request(`/kff/home/shareArticleDetail`, {
    body: {
      ...params
    },
  })
}

//测评
export const articleInfo = (params = {}) => {
  return request(`/kff/home/shareEvaluationDetail`, {
    body: {
      ...params
    },
  })
}

//部分测评
export const evaluation = (params = {}) => {
  return request(`/kff/home/shareEvaluationDetail`, {
    body: {
      ...params
    },
  })
}

//爆料
export const discuss = (params = {}) => {
  return request(`/kff/home/discussCommentListShare`, {
    body: {
      ...params
    },
  })
}

//分享
export const share = (params = {}) => {
  return request(`/kff/wXShare/sign`, {
    body: {
      ...params
    },
  })
}
//首页推荐
export const recommend = (params = {}) => {
  return request(`/kff/home/recommendList`, {
    body: {
      ...params
    },
  })
}

//币种快讯
export const getappnews = (params = {}) => {
  return request(`/kff/newsFlash/getAppNewsFlash`, {
    body: {
      ...params
    },
  })
}

