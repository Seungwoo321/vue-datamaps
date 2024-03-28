<template>
    <div id="app">
        <h2>Vue Datamaps Example</h2>
        <hr>
        <DatamapsBasic/>
        <hr>
        <datamaps-state-label/>
        <hr>
        <datamaps-bubbles/>
        <hr>
        <datamaps-arcs/>
        <hr>
        <datamaps-graticules/>
        <hr>
        <datamaps-zoom/>
        <hr>
        <datamaps-south-korea/>
        <hr>
        <datamaps-custom-color/>
        <hr>
        <datamaps-aws-region-arc/>
        <hr>
        <datamaps-aws-region-bubble/>
        <hr>
        <DatamapsDataTransfer />
    </div>
</template>

<script>
import DatamapsBasic from '@/views/DatamapsBasic.vue'
import DatamapsStateLabel from '@/views/DatamapsStateLabel.vue'
import DatamapsBubbles from '@/views/DatamapsBubbles.vue'
import DatamapsArcs from '@/views/DatamapsArcs.vue'
import DatamapsGraticules from '@/views/DatamapsGraticules.vue'
import DatamapsZoom from '@/views/DatamapsZoom.vue'
import DatamapsSouthKorea from '@/views/DatamapsSouthKorea.vue'
import DatamapsCustomColor from '@/views/DatamapsCustomColor.vue'
import DatamapsAwsRegionArc from '@/views/DatamapsAwsRegionArc.vue'
import DatamapsAwsRegionBubble from '@/views/DatamapsAwsRegionBubble.vue'
import DatamapsDataTransfer from '@/views/DatamapsDataTransfer.vue'
export default {
    name: 'home',
    components: {
        DatamapsBasic,
        DatamapsStateLabel,
        DatamapsBubbles,
        DatamapsArcs,
        DatamapsGraticules,
        DatamapsZoom,
        DatamapsSouthKorea,
        DatamapsCustomColor,
        DatamapsAwsRegionArc,
        DatamapsAwsRegionBubble,
        DatamapsDataTransfer
    }
}
</script>
<style>
/* @import url('./assets/vue-datamaps.css'); */
</style>
