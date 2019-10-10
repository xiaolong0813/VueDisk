import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElemUI from 'element-ui'

// 设置路由权限判断
import '@/router/permission.js'

Vue.config.productionTip = false

Vue.use(ElemUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
