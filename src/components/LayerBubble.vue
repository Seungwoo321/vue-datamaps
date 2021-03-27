<template>
    <g class="bubbles">
        <circle :ref="`${name}`" v-for="(item, index) in bubblesData" :key="index"
            :class="name"
            :cx="latLng(item)[0]"
            :cy="latLng(item)[1]"
            :r="radius(item)"
            :style="styleAttributes[index]"
            style="cursor:pointer;"
            @click="handleClickCallback($event, item, index)"
            @mouseover="handleMouseOver($event, item, index)"
            @mouseout="handleMouseOut(index)"
        >
        <animate attributeName="r" begin="0s" dur="400ms" from="0" :to="radius(item)"></animate>
        </circle>
    </g>
</template>

<script>
import { val } from './helper'
export default {
    name: 'layer-bubble',
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
            return this.options.data
        }
    },
    methods: {
        styles (datum, index) {
            const data = {
                stroke: val(datum.borderColor, this.options.borderColor, datum),
                strokeWidth: val(datum.borderWidth, this.options.borderWidth, datum),
                strokeOpacity: val(datum.borderOpacity, this.options.highlightBorderOpacity, datum),
                fill: this.options.fills[val(datum.fillKey, this.options.fillKey, datum)] || this.options.fills.defaultFill,
                fillOpacity: val(datum.fillOpacity, this.options.highlightFillOpacity, datum)
            }
            this.$set(this.styleAttributes, index, data)
        },
        radius (datum) {
            return val(datum.radius, this.options.radius, datum)
        },
        datumHasCoords (datum) {
            return typeof datum !== 'undefined' && typeof datum.latitude !== 'undefined' && typeof datum.longitude !== 'undefined'
        },
        latLngToXY (lat, lng) {
            return this.projection([lng, lat])
        },
        latLng (datum) {
            if (datum.region && this.data[datum.region]) {
                return this.latLngToXY(this.data[datum.region].coordinates.latitude, this.data[datum.region].coordinates.longitude)
            } else if (datum.region && !this.data[datum.region]) {
                return this.latLngToXY(datum.coordinates.latitude, datum.coordinates.longitude)
            } else if (this.datumHasCoords(datum)) {
                return this.latLngToXY(datum.latitude, datum.longitude)
            } else if (datum.centered === 'USA') {
                return this.projection([-98.58333, 39.83333])
            } else {
                return this.path.centroid(this.data[datum.centered])
            }
        },
        handleMouseOver (event, datum, index) {
            const target = event.target
            const previousAttributes = {
                fill: target.style.fill,
                stroke: target.style.stroke,
                strokeWidth: target.style.strokeWidth,
                fillOpacity: target.style.fillOpacity
            }
            this.$set(this.previousAttributes, index, previousAttributes)
            const { highlightOnHover, popupOnHover, highlightFillColor, highlightBorderColor, highlightBorderWidth, highlightBorderOpacity, highlightFillOpacity } = this.options
            if (highlightOnHover || popupOnHover) {
                const data = {
                    fill: val(datum.highlightFillColor, highlightFillColor, datum),
                    stroke: val(datum.highlightBorderColor, highlightBorderColor, datum),
                    strokeWidth: val(datum.highlightBorderWidth, highlightBorderWidth, datum),
                    strokeOpacity: val(datum.highlightBorderOpacity, highlightBorderOpacity, datum),
                    fillOpacity: val(datum.highlightFillOpacity, highlightFillOpacity, datum)
                }
                this.$set(this.styleAttributes, index, data)
            }
            if (popupOnHover) this.$emit('show:popup', { event, datum })
        },
        handleMouseOut (index) {
            const { highlightOnHover, popupOnHover } = this.options
            if (highlightOnHover) {
                const data = this.previousAttributes[index]
                this.$set(this.styleAttributes, index, data)
            }
            if (popupOnHover) this.$emit('hide:popup')
        },
        handleClickCallback (event, item, index) {
            this.$emit('click:bubble', { event, item, index })
        }
    },
    watch: {
        bubblesData: {
            handler (value, oldValue) {
                value.forEach((item, index) => {
                    this.styles(item, index)
                })
            },
            immediate: true
        }
    }
}
</script>

<style>

</style>
