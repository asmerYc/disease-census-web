// api,js
import service from './request'
// import {get, post } from './http'

// 调用医生信息的接口
export const getInfo = data => {
  return service({
    url: '/api/consultation/consultation',
    method: 'get',
    data
  })
}
