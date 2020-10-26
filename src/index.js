import VueDatamaps from './components/Datamaps.vue'
import { FeatureCollectionMap } from './data/index'

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VueDatamaps)

export {
    VueDatamaps,
    FeatureCollectionMap
}

export default (Vue) => {
    Vue.component(VueDatamaps.name, VueDatamaps)
}
