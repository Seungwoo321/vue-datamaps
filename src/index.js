import VueDatamaps from './components/Datamaps.vue'

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VueDatamaps)

export {
    VueDatamaps
}

export default (Vue) => {
    Vue.component(VueDatamaps.name, VueDatamaps)
}
