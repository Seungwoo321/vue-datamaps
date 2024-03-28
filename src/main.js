import Vue from 'vue'
import App from './App.vue'

// import VueDatamaps from 'vue-datamaps'
// import VueDatamaps from '../../../src'
// Vue.use(VueDatamaps)
// Vue.use(window['vue-datamaps'])

Vue.config.productionTip = false

new Vue({
    render: h => h(App)
}).$mount('#app')
