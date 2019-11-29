<template>
    <div class="map" :style="mapStyle">
        <svg ref="svg" class="datamap" :style="svgStyle"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewbox="0 0 750 500">
            <g :transform="transform">
                <path v-for="(item, index) in pathData" :key="index"
                    :d="pathAndProjection.path(item)"
                    :class="`datamaps-styleAttributes ${item.id || item.properties.code_hasc}`"
                    :fill="fillColor(item)"
                    :style="pathStyle[item.id || item.properties.code_hasc] || pathStyle"
                    @mouseover="handleMouseOver($event, item)"
                    @mouseout="handleMouseOut($event, item)"
                />
            </g>
            <layer-label
                v-if="labels && pathData.length > 0"
                :labelsConfig="labelsConfigOptions"
                :data="pathData"
                :projection="pathAndProjection.projection"
                :path="pathAndProjection.path"
            />
            <layer-bubble
                v-if="bubbles && pathData.length > 0"
                :bubblesConfig="bubblesConfigOptions"
                :data="bubbleGeoData"
                :projection="pathAndProjection.projection"
                :path="pathAndProjection.path"
                @update:popup="updatePopup"
            ></layer-bubble>
            <layer-arc
                v-if="arc && pathData.length > 0"
                :arcConfig="arcConfigOptions"
                :data="arcGeoData"
                :projection="pathAndProjection.projection"
                :path="pathAndProjection.path"
                @update:popup="updatePopup"
            >
            </layer-arc>
        </svg>
        <div v-if="(geograpphyConfigOptions.popupOnHover || bubblesConfigOptions.popupOnHover) && showHoverinfo"
            class="datamaps-hoverover"
            style="z-index:10001;position:absolute"
            :style="popupPosition"
        >
            <slot name="hoverinfo">
                <div class="hoverinfo">
                    <strong>
                        {{ popupData.name }}
                    </strong>
                </div>
            </slot>
            <!-- <div v-if="arc && pathData.length > 0" class="hoverinfo">
                <strong>Arc</strong><br>
                {{ data.origin }} -> {{ data.destination }}
            </div> -->
        </div>
    </div>
</template>
<script>
import * as d3 from 'd3v4'
import props from './props'
import { val } from './helper'
import LayerLabel from './LayerLabel'
import LayerBubble from './LayerBubble'
import LayerArc from './LayerArc'
export default {
    name: 'vue-datamaps',
    components: {
        LayerLabel,
        LayerBubble,
        LayerArc
    },
    data () {
        return {
            setProjectionData: {
                path: null,
                projection: null
            },
            showHoverinfo: false,
            popupData: {
                name: '',
                origin: '',
                destination: ''
            },
            popupPosition: {},
            viewbox: {
                width: 0,
                height: 0
            },
            geo: {
                projection: null,
                path: null
            },
            transform: 'scale(1)',
            pathData: [],
            bubbleGeoData: {},
            arcGeoData: {},
            styleAttributes: {},
            previousAttributes: {}
        }
    },
    mixins: [ props ],
    props: {
        width: {
            type: Number,
            default: 750
        },
        height: {
            type: Number,
            default: 500
        }
    },
    computed: {
        svg () {
            return d3.select(this.$refs.svg)
        },
        svgWidth: {
            get () {
                return this.viewbox.width
            },
            set (element) {
                this.viewbox.width = element.getBoundingClientRect().width
            }
        },
        svgHeight: {
            get () {
                return this.viewbox.height
            },
            set (element) {
                this.viewbox.height = element.getBoundingClientRect().height
            }
        },
        // svgWidth () {
        //     return this.$el.getBoundingClientRect().width
        // },
        // svgHeight () {
        //     return this.$el.getBoundingClientRect().height
        // },
        pathStyle () {
            return this.styleAttributes || {
                'stroke-width': this.geograpphyConfigOptions.borderWidth,
                'stroke-opacity': this.geograpphyConfigOptions.borderOpacity,
                'stroke': this.geograpphyConfigOptions.borderColor
            }
        },
        svgStyle () {
            return {
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }
        },
        mapStyle () {
            return {
                width: '100%',
                height: 0,
                position: 'relative',
                'padding-top': (500 / 750) * 100 + '%',
                margin: '0 auto'
            }
        },
        pathAndProjection: {
            get () {
                return this.setProjectionData
            },
            set (element) {
                this.setProjectionData = {
                    path: this.setProjection(d3, element).path,
                    projection: this.setProjection(d3, element).projection
                }
            }
        }
    },
    mounted () {
        this.svgWidth = this.$el
        this.svgHeight = this.$el
        this.pathAndProjection = this.$el
        this.draw()
        window.addEventListener('resize', this.resize)
    },
    beforeDestroy () {
        window.removeEventListener('resize', this.resize)
    },
    methods: {
        addPlugin () {
        },
        resize () {
            this.svgWidth = this.$el
            this.svgHeight = this.$el
            this.pathAndProjection = this.$el
        },
        fillColor (d) {
            let { data, fills, defaultFill } = this
            fills = { defaultFill, ...fills }
            const datum = data[d.id || d.properties.code_hasc]
            let color
            if (datum && datum.fillKey) {
                color = fills[ val(datum.fillKey, { data: data[d.id || d.properties.code_hasc], geography: d }) ]
            }
            if (typeof color === 'undefined') {
                color = val(datum && datum.fillColor, fills.defaultFill, { data: data[d.id || d.properties.code_hasc], geography: d })
            }
            return color
        },
        // updateChoropleth (data) {
        //     console.log(data)
        //     console.log('csv data test')
        // },
        async draw () {
            let geoData = null
            // let result = await d3[this.dataType](this.geograpphyConfigOptions.dataUrl || '/data/world.json')
            const response = await fetch(this.geograpphyConfigOptions.dataUrl || `/data/${this.scope}.${this.dataType}`)
            const result = await response.json()
            if (this.geograpphyConfigOptions.dataUrl) {
                if (this.dataType === 'csv' && (result && result.slice)) {
                    let tmpData = {}
                    result.forEach(element => item => { tmpData[item.id || item.properties.code_hasc] = item })
                    geoData = tmpData
                }
                this.updateChoropleth(result)
            } else {
                geoData = result
            }
            this.drawSubunits(geoData)
        },
        drawSubunits (data) {
            if (this.geograpphyConfigOptions.hideAntarctica) {
                this.pathData = data.features.slice().filter(function (feature) {
                    return feature.id !== 'ATA'
                })
            }
            if (this.geograpphyConfigOptions.hideHawaiiAndAlaska) {
                this.pathData = data.features.slice().filter(function (feature) {
                    return feature.id !== 'HI' && feature.id !== 'AK'
                })
            }
            if (this.bubbles && this.bubblesConfigOptions.data) {
                const filters = this.bubblesConfigOptions.data.filter(item => item.centered).map(item => item.centered)
                this.bubbleGeoData = data.features.slice().reduce((previousValue, currentValue) => {
                    if (filters.includes(currentValue.id)) {
                        previousValue[currentValue.id] = currentValue
                    }
                    return previousValue
                }, {})
            }
            if (this.arc && this.arcConfigOptions.data) {
                const filtered = this.arcConfigOptions.data.filter(item => typeof item.origin === 'string' || typeof item.destination === 'string')
                const filters = new Set([...filtered.slice().map(item => item.origin), ...filtered.slice().map(item => item.destination)])
                this.arcGeoData = data.features.slice().reduce((previousValue, currentValue) => {
                    if (filters.has(currentValue.id)) {
                        previousValue[currentValue.id] = currentValue
                    }
                    return previousValue
                }, {})
            }
        },
        handleMouseOver (event, d) {
            const target = event.target
            const previousAttributes = {
                'fill': target.style['fill'],
                'stroke': target.style['stroke'],
                'stroke-width': target.style['stroke-width'],
                'fill-opacity': target.style['fill-opacity']
            }
            this.$set(this.previousAttributes, d.id || d.properties.code_hasc, previousAttributes)

            const { highlightOnHover, popupOnHover, highlightFillColor, highlightBorderColor, highlightBorderWidth, highlightBorderOpacity, highlightFillOpacity } = this.geograpphyConfigOptions
            const datum = this.data[d.id || d.properties.code_hasc] || {}

            if (highlightOnHover || popupOnHover) {
                const data = {
                    fill: val(datum.highlightFillColor, highlightFillColor, datum),
                    stroke: val(datum.highlightBorderColor, highlightBorderColor, datum),
                    'stroke-width': val(datum.highlightBorderWidth, highlightBorderWidth, datum),
                    'stroke-opacity': val(datum.highlightBorderOpacity, highlightBorderOpacity, datum),
                    'fill-opacity': val(datum.highlightFillOpacity, highlightFillOpacity, datum)
                }
                this.$set(this.styleAttributes, d.id || d.properties.code_hasc, data)
            }
            if (popupOnHover) this.updatePopup({ event, geography: d, data: this.data[d.id || d.properties.code_hasc], flag: true })
        },
        handleMouseOut (event, d) {
            const { highlightOnHover, popupOnHover } = this.geograpphyConfigOptions
            if (highlightOnHover || popupOnHover) {
                const data = this.previousAttributes[d.id || d.properties.code_hasc]
                this.$set(this.styleAttributes, d.id || d.properties.code_hasc, data)
            }
            if (popupOnHover) this.updatePopup({ event, geography: d, data: this.data[d.id || d.properties.code_hasc], flag: false })
        },
        updatePopup ({ event, geography, data, flag }) {
            this.popupPosition = {
                left: `${event.layerX}px`,
                top: `${event.layerY + 30}px`
            }
            if (flag) {
                this.popupTemplate ? this.$emit('custom:popup', { geography, data }) : this.popupData.name = data.name || geography.properties.name
            }
            this.showHoverinfo = flag
        }
    }
}
</script>

<style>
/* .map {
    position: relative;
    margin: 0 auto;
} */
.datamap path.datamaps-graticule {
    fill: none;
    stroke: #777;
    stroke-width: 0.5px;
    stroke-opacity: .5;
    pointer-events: none;
}
.datamap .labels {
    pointer-events: none;
}
.datamap path:not(.datamaps-arc), .datamap circle, .datamap line {
    /* stroke: #FFFFFF; */
    /* stroke-width: 1px; */
}
.datamaps-legend dt, .datamaps-legend dd {
    float: left;
    margin: 0 3px 0 0;
}
.datamaps-legend dd {
    width: 20px;
    margin-right: 6px;
    border-radius: 3px;
}
.datamaps-legend {
    padding-bottom: 20px;
    z-index: 1001;
    position: absolute;
    left: 4px;
    font-size: 12px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.datamaps-hoverover {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.hoverinfo {
    padding: 4px;
    border-radius: 1px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px #CCC;
    font-size: 12px;
    border: 1px solid #CCC;
}
.hoverinfo hr {
    border:1px dotted #CCC;
}
</style>
