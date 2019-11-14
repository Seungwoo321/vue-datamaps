<template>
    <g class="bubbles">
        <circle :ref="`${name}`" v-for="(item, index) in bubblesData" :key="index"
            :class="name"
            :cx="latLng(item)[0]"
            :cy="latLng(item)[1]"
            :r="radius(item)"
            :style="styles"
        />
    </g>
</template>

<script>
import { val } from './helper'
// import * as d3 from 'd3v4'
export default {
    props: ['bubblesConfig', 'path', 'projection', 'data'],
    data () {
        return {
            name: 'datamaps-bubble',
            styleAttributes: {},
            previousAttributes: {}
        }
    },
    computed: {
        bubbles () {
            return this.$refs[`${this.name}`]
        },
        options () {
            return this.bubblesConfig
        },
        bubblesData () {
            return this.options.data.slice()
        }
    },
    watch: {
        bubblesData: {
            immediate: true,
            handler (values) {
                this.$nextTick(() => {
                    this.bubbles.forEach((bubble, index) => {
                        const datum = values[index]
                        bubble.style.transitionProperty = 'r'
                        bubble.style.transitionDuration = `4000ms`
                        console.log(bubble.style.transitionDuration)
                        bubble.style.r = `${val(datum.radius, this.options.radius, datum)}`
                        // bubble.setAttribute('transition-duration', `4000ms`)
                        // bubble.setAttribute('r', `${val(datum.radius, this.options.radius, datum)}`)
                    })
                })
            }
        }
    },
    methods: {
        styles (datum) {
            return {
                stroke: val(datum.borderColor, this.options.borderColor, datum),
                strokeWidth: val(datum.borderWidth, this.options.borderWidth, datum)
            }
        },
        radius (datum) {
            // console.log(val(datum.radius, this.options.radius, datum))
            return this.options.animate ? 0 : val(datum.radius, this.options.radius, datum)
        },
        datumHasCoords (datum) {
            return typeof datum !== 'undefined' && typeof datum.latitude !== 'undefined' && typeof datum.longitude !== 'undefined'
        },
        latLngToXY (lat, lng) {
            return this.projection([lng, lat])
        },
        latLng (datum) {
            return this.datumHasCoords(datum) ? this.latLngToXY(datum.latitude, datum.longitude) : (datum.centered === 'USA' ? this.projection([-98.58333, 39.83333]) : this.path.centroid(this.data[datum.centered]))
        }
    }
}
</script>

<style>

</style>
