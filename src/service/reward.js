/**
 * Created by sunchunxiao on 2018/9/13.
 */

import request from '../utils/request'

// 悬调
export const rewardDetail = (params = {}) => {
  return request(`/H5/rewardActivity/rewardDetail`, {
    body: {
      ...params
    },
  })
}
