/**
 * Created by zhengchangshun on 2018/4/15.
 */

import request from '../utils/request'

// login
export const login = (params = {}) => {
  return request(`user/login`, {
    body: {
      ...params
    },
  })
}
