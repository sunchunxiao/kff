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
//测评
export const evaluation = (params = {}) => {
  // return request(`/kff/home/shareArticleDetail`, {
  //   body: {
  //     ...params
  //   },
  // })
}
