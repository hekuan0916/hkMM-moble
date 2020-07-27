// 导入 axios
import axios from 'axios'

// 创建请求对象 设置基地址
const request = axios.create({
  // 通过环境变量获取基地址
  baseURL: process.env.VUE_APP_URL
})

// 请求拦截器
request.interceptors.request.use(
  function (config) {
    // 发送之前干点事情
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  function (response) {
    // 数据回来之后干点事情
    // 外部少些一个.data
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
// 暴露出去
export default request
