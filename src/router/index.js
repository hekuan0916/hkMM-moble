import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入
import company from '../views/company'
import find from '../views/find'
import my from '../views/my'
import user from '../views/my/user.vue'
import question from '../views/question'
import login from '../views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/company',
    component: company,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/find',
    component: find,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/my',
    component: my,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/question',
    component: question,
    meta: {
      showTabbar: true
    }
  },
  {
    path: '/user',
    component: user
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/',
    redirect: login
  }
]
// 我是注释
const router = new VueRouter({ routes })

export default router
