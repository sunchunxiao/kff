/**
 * Created by zhengchangshun on 2018/4/15.
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

//讨论
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
