// 为了方便维护 可以key 定义为常量
// 一般key一类的常量定义 建议用大写
const TOKENKEY = 'HEIMAMM_TOKEN'

// 保存
function setToken (token) {
  window.localStorage.setItem(TOKENKEY, token)
}

// 获取
function getToken () {
  return window.localStorage.getItem(TOKENKEY)
}

// 删除
function removeToken () {
  window.localStorage.removeItem(TOKENKEY)
}

export { setToken, getToken, removeToken }
