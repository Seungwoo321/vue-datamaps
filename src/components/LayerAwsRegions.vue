<template>
    <g class="bubbles-aws-regions" v-if="projection">
        <circle v-for="(item, index) in filterdData" :key="`${index}-inner`" class="circle-inner"
            :cx="latLng(item.coordinates)[0]"
            :cy="latLng(item.coordinates)[1]"
            :r="3"
            :style="innerStyles(item, index)"
            @mouseover="handleMouseOver($event, item)"
            @mouseout="handleMouseOut"
        >
        <animate attributeName="r" begin="200ms" dur="600ms" from="0" to="3"></animate>
        </circle>
        <circle v-for="(item, index) in filterdData" :key="`${index}-outer`" class="circle-outer"
            :cx="latLng(item.coordinates)[0]"
            :cy="latLng(item.coordinates)[1]"
            :r="9"
            :style="outerStyles(item, index)"
        >
        <animate attributeName="r" begin="200ms" dur="600ms" from="0" to="11"></animate>
        </circle>
    </g>
</template>

<script>
import { val, regions } from './helper'
export default {
    name: 'layer-aws-regions',
    props: ['awsRegionsConfig', 'path', 'projection', 'data'],
    data () {
        return {
        }
    },
    computed: {
        options () {
            return this.awsRegionsConfig
        },
        filterdData () {
            return regions.filter(region => this.options.showPrivateRegions ? region : region.public).map(region => {
                return {
                    ...region,
                    ...this.awsRegionsData[region.code]
                }
            })
        },
        awsRegionsData () {
            return this.options.data.reduce((accumulator, currentValue) => {
                accumulator[currentValue.code] = currentValue
                return accumulator
            }, {})
        }
    },
    methods: {
        innerStyles (datum, index) {
            return {
                stroke: val(datum.borderColor, this.options.borderColor, datum),
                strokeWidth: val(datum.borderWidth, this.options.borderWidth, datum),
                fill: this.options.fills[val(datum.fillKey, this.options.fillKey, datum)] || 'transparent',
                fillOpacity: val(datum.borderOpacity, this.options.borderOpacity, datum)
            }
        },
        outerStyles (datum, index) {
            return {
                stroke: val(datum.borderColor, this.options.borderColor, datum),
                strokeWidth: val(datum.borderWidth, this.options.borderWidth, datum),
                fill: 'transparent',
                fillOpacity: val(datum.borderOpacity, this.options.borderOpacity, datum)
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
