import Datamaps from './components/Datamaps.vue'
// import './pivottable.css'
const components = {
    Datamaps
}

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(Datamaps)

export {
    Datamaps
}

export default (Vue) => {
    for (const key in components) {
        Vue.component(components[key].name, components[key])
    }
}
