// 导入请求对象
import request from '../utils/request'

// 根据接口文档抽取请求方法 并暴露出去
function getCode (data) {
  // 暴露请求方法出去
  return request({
    url: '/au/code',
    method: 'post',
    data
  })
}

// 根据接口文档抽取请求方法 并暴露出去
function login (data) {
  // 暴露请求方法出去
  return request({
    url: '/au/login',
    method: 'post',
    data
  })
}

// 暴露出去
export { getCode, login }
