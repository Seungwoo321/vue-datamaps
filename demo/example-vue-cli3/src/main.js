import Vue from 'vue'
import App from './App.vue'
// import VueDatamaps from 'vue-datamaps'
// import VueDatamaps from '../../../src'

Vue.config.productionTip = false

// Vue.use(VueDatamaps)
// Vue.use(window['vue-datamaps'])

new Vue({
  render: h => h(App)
}).$mount('#app')
