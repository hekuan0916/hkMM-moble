import Vue from 'vue'
import VueRouter from 'vue-router'
// 导入
import company from '../views/company'
import find from '../views/find'
import my from '../views/my'
import question from '../views/question'

Vue.use(VueRouter)

const routes = [
  {
    path: '/company',
    component: company
  },
  {
    path: '/find',
    component: find
  },
  {
    path: '/my',
    component: my
  },
  {
    path: '/question',
    component: question
  }
]
// 我是注释
const router = new VueRouter({ routes })

export default router
