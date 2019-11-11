import Vue from 'vue'
import App from './App.vue'
import VueDatamaps from '@/'
Vue.config.productionTip = false

Vue.use(VueDatamaps)
new Vue({
    render: h => h(App)
}).$mount('#app')
