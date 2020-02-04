import VueDatamaps from './components/Datamaps.vue'

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VueDatamaps)

export {
    VueDatamaps
}

VueDatamaps.install = function (Vue) {
    Vue.component(VueDatamaps.name, VueDatamaps)
}

export default VueDatamaps
