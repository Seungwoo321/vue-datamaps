import VueDatamaps from './components/Datamaps.vue'
import LayerArc from './components/LayerArc.vue'
import LayerBubble from './components/LayerBubble.vue'
import LayerLabel from './components/LayerLabel.vue'

const components = {
    VueDatamaps,
    LayerArc,
    LayerBubble,
    LayerLabel
}

if (typeof window !== 'undefined' && window.Vue) window.Vue.use(VueDatamaps)

export {
    VueDatamaps,
    LayerBubble,
    LayerLabel
}

export default (Vue) => {
    for (const key in components) {
        Vue.component(components[key].name, components[key])
    }
}
