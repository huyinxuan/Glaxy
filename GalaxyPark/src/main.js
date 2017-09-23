// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import topbar from './components/top-bar/index.js'
import menubar from './components/menu-bar/index.js'
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
import './styles/style.less'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(topbar)
Vue.use(menubar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
