<template>
    <g class="arc">
        <path :ref="`${name}`" v-for="(item, index) in arcData" :key="index"
            :class="name"
            :style="styleAttributes[index]"
            :d="pathData(item)"
            @mouseover="handleMouseOver($event, item, index)"
            @mouseout="handleMouseOut($event, item, index)"
        >
        </path>
    </g>
</template>

<script>
import { val } from './helper'
export default {
    name: 'layer-arc',
    props: ['arcConfig', 'path', 'projection', 'data'],
    data () {
        return {
            name: 'datamaps-arc',
            styleAttributes: {}
        }
    },
    computed: {
        arc () {
            return this.$refs[`${this.name}`]
        },
        options () {
            return this.arcConfig
        },
        arcData () {
            return this.options.data.map(item => {
                return {
                    ...item,
                    ...item.options
                }
            })
        }
    },
    mounted () {
        this.arcData.forEach((item, index) => {
            this.styles(item, index)
        })
    },
    methods: {
        styles (datum, index) {
            const data = {
                strokeLinecap: 'round',
                stroke: val(datum.strokeColor, this.options.strokeColor, datum),
                fill: 'none',
                strokeWidth: val(datum.strokeWidth, this.options.strokeWidth, datum)
            }
            this.$set(this.styleAttributes, index, data)
        },
        latLngToXY (lat, lng) {
            return this.projection([lng, lat])
        },
        pathData (datum) {
            let originXY = []
            let destXY = []
            if (typeof datum.origin === 'string') {
                switch (datum.origin) {
                case 'CAN':
                    originXY = this.latLngToXY(56.624472, -114.665293)
                    break
                case 'CHL':
                    originXY = this.latLngToXY(-33.448890, -70.669265)
                    break
                case 'HRV':
                    originXY = this.latLngToXY(45.815011, 15.981919)
                    break
                case 'IDN':
                    originXY = this.latLngToXY(-6.208763, 106.845599)
                    break
                case 'JPN':
                    originXY = this.latLngToXY(35.689487, 139.691706)
                    break
                case 'MYS':
                    originXY = this.latLngToXY(3.139003, 101.686855)
                    break
                case 'NOR':
                    originXY = this.latLngToXY(59.913869, 10.752245)
                    break
                case 'USA':
                    originXY = this.latLngToXY(41.140276, -100.760145)
                    break
                case 'VNM':
                    originXY = this.latLngToXY(21.027764, 105.834160)
                    break
                default:
                    originXY = this.path.centroid(this.data[datum.origin])
                }
            } else {
                originXY = this.latLngToXY(val(datum.origin.latitude, datum), val(datum.origin.longitude, datum))
            }
            if (typeof datum.destination === 'string') {
                switch (datum.destination) {
                case 'CAN':
                    destXY = this.latLngToXY(56.624472, -114.665293)
                    break
                case 'CHL':
                    destXY = this.latLngToXY(-33.448890, -70.669265)
                    break
                case 'HRV':
                    destXY = this.latLngToXY(45.815011, 15.981919)
                    break
                case 'IDN':
                    destXY = this.latLngToXY(-6.208763, 106.845599)
                    break
                case 'JPN':
                    destXY = this.latLngToXY(35.689487, 139.691706)
                    break
                case 'MYS':
                    destXY = this.latLngToXY(3.139003, 101.686855)
                    break
                case 'NOR':
                    destXY = this.latLngToXY(59.913869, 10.752245)
                    break
                case 'USA':
                    destXY = this.latLngToXY(41.140276, -100.760145)
                    break
                case 'VNM':
                    destXY = this.latLngToXY(21.027764, 105.834160)
                    break
                default:
                    destXY = this.path.centroid(this.data[datum.destination])
                }
            } else {
                destXY = this.latLngToXY(val(datum.destination.latitude, datum), val(datum.destination.longitude, datum))
            }
            const midXY = [(originXY[0] + destXY[0]) / 2, (originXY[1] + destXY[1]) / 2]
            const sharpness = val(datum.arcSharpness, this.options.arcSharpness, datum)
            return `M${originXY[0]}, ${originXY[1]}S ${(midXY[0] + (50 * sharpness))}, ${(midXY[1] - (75 * sharpness))}, ${destXY[0]}, ${destXY[1]}`
        },
        handleMouseOver (event, datum, index) {
            // const { popupOnHover } = this.options
            // if (popupOnHover) this.$emit('update:popup', { event, geography: datum, data: this.options.data[index], flag: true })
        },
        handleMouseOut (event, datum, index) {
            // const { popupOnHover } = this.options
            // if (popupOnHover) this.$emit('update:popup', { event, geography: datum, data: this.options.data[index], flag: false })
        }
    }
}
</script>

<style>

</style>
