import Vue from 'vue'
import App from './App.vue'
// 路由
import router from './router'
// 仓库
import store from './store'
// 导入 normalize.css
import 'normalize.css'
// 导入组件库
import Vant from 'vant'
// 导入组件库的样式
import 'vant/lib/index.css'
// 导入 flexible
import 'amfe-flexible'
// 导入字体Css
import '@/style/iconfont.css'
// 导入初始化样式 先导入别人的 避免冲突
import '@/style/base.less'
// 导入 全局组件
import MMNavBar from './components/MMNavBar.vue'

// 注册组件库
Vue.use(Vant)
Vue.component(MMNavBar.name, MMNavBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
