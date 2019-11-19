import VueDatamaps from './components/Datamaps.vue'

const components = {
    VueDatamaps
}

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VueDatamaps)

export {
    VueDatamaps
}

export default (Vue) => {
    for (const key in components) {
        Vue.component(components[key].name, components[key])
    }
}
