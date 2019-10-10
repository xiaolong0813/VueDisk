import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import ElemUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElemUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
