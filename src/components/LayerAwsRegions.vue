<template>
    <g class="bubbles-aws-regions" v-if="projection">
        <circle v-for="(item, index) in filterdData" :key="index"
            :cx="latLng(item.coordinates)[0]"
            :cy="latLng(item.coordinates)[1]"
            :r="5"
            :style="styles(item, index)"
            @mouseover="handleMouseOver($event, item)"
            @mouseout="handleMouseOut"
        >
        <animate attributeName="r" begin="200ms" dur="600ms" from="0" to="4"></animate>
        </circle>
    </g>
</template>

<script>
import { val } from './helper'
export default {
    name: 'layer-aws-regions',
    props: ['awsRegionsConfig', 'path', 'projection', 'regions', 'data'],
    data () {
        return {
        }
    },
    computed: {
        options () {
            return this.awsRegionsConfig
        },
        filterdData () {
            return this.regions.filter(region => this.options.showPrivateRegions ? region : region.public)
        },
        circleStyle () {
            return {
                stroke: this.options.strokeColor,
                strokeWidth: this.options.strokeWidth,
                fill: this.options.fill
            }
        },
        awsRegionsData () {
            return this.options.data.reduce((accumulator, currentValue) => {
                accumulator[currentValue.code] = currentValue
                return accumulator
            }, {})
        }
    },
    methods: {
        styles (datum, index) {
            return {
                stroke: val(datum.strokeColor, this.options.strokeColor, datum),
                strokeWidth: val(datum.strokeWidth, this.options.strokeWidth, datum),
                fill: this.options.fills[val(this.awsRegionsData[datum.code] && this.awsRegionsData[datum.code].fillKey, datum.fillKey, datum)] || this.options.fills.defaultFill,
                fillOpacity: val(datum.fillOpacity, this.options.highlightFillOpacity, datum)
            }
        },
        latLngToXY (lat, lng) {
            return this.projection([lng, lat])
        },
        latLng (datum) {
            return this.latLngToXY(datum.latitude, datum.longitude)
        },
        handleMouseOver (event, datum) {
            if (this.options.popupOnHover) this.$emit('show:popup', { event, datum })
        },
        handleMouseOut () {
            if (this.options.popupOnHover) this.$emit('hide:popup')
        }

    }
}
</script>

<style>

</style>
