<template>
    <div class="map">
        <svg ref="svg" class="datamap" :style="svgStyle"
            :width="svgWidth"
            :height="svgHeight">
            <g :transform="transform">
                <path v-for="(item, index) in pathData" :key="index"
                    :d="pathAndProjection.path(item)"
                    :class="`datamaps-styleAttributes ${item.id || item.properties.code_hasc}`"
                    :fill="fillColor(item)"
                    :style="styleAttributes[item.id || item.properties.code_hasc]"
                    @mouseover="handleMouseoverGeographyConfig($event, item)"
                    @mouseout="handleMouseoutGeographyConfig($event, item)"
                />
            </g>
            <layer-label
                v-if="labels"
                :labelsConfig="labelsConfigOptions"
                :data="pathData"
                :projection="pathAndProjection.projection"
                :path="pathAndProjection.path"
            />
        </svg>
        <div v-if="(geograpphyConfigOptions.popupOnHover || bubblesConfigOptions.popupOnHover) && showHoverinfo" class="datamaps-hoverover" style="z-index:10001;position:absolute" :style="popupPosition">
            <slot name="hoverinfo">
                <div class="hoverinfo">
                    {{ popupData }}
                </div>
            </slot>
        </div>
    </div>
</template>
<script>
import * as d3 from 'd3v4'
import props from './props'
import { val } from './helper'
import LayerLabel from './LayerLabel'
export default {
    name: 'vue-datamaps',
    components: {
        LayerLabel
    },
    data () {
        return {
            showHoverinfo: false,
            popupData: '',
            popupPosition: {},
            options: {
                width: 0,
                height: 0,
                dataWidth: 0
            },
            geo: {
                projection: null,
                path: null
            },
            transform: 'scale(1)',
            pathData: [],
            styleAttributes: {},
            previousAttributes: {}
        }
    },
    mixins: [ props ],
    props: {
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        }
    },
    computed: {
        svg () {
            return d3.select(this.$refs.svg)
        },
        svgWidth: {
            get () {
                return this.options.width
            },
            set (element) {
                // this.options.dataWidth = this.width || element.offsetWidth
                this.options.width = this.width || element.offsetWidth
            }
        },
        svgHeight: {
            get () {
                return this.options.height
            },
            set (element) {
                this.options.height = this.height || element.offsetHeight || 300
            }
        },
        pathStyle () {
            return {
                'stroke-width': this.geograpphyConfigOptions.borderWidth,
                'stroke-opacity': this.geograpphyConfigOptions.borderOpacity,
                'stroke': this.geograpphyConfigOptions.borderColor
            }
        },
        svgStyle () {
            return {
                overflow: 'hidden',
                position: 'absolute',
                width: '100%',
                height: '100%'
            }
        },
        divStyle () {
            return {
                position: 'relative',
                'padding-bottom': `${(this.aspectRatio * 100)}%`
            }
        },
        pathAndProjection () {
            return { ...this.setProjection(d3, this.$el) }
        }
    },
    mounted () {
        this.svgWidth = this.$el
        this.svgHeight = this.$el
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
            const oldSize = this.svgWidth
            // this.svgWidth = this.$el
            const newSize = this.$el.clientWidth
            this.transform = `scale(${newSize / oldSize})`
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
            let result = this.geograpphyConfigOptions.dataUrl ? await d3[this.dataType](this.geograpphyConfigOptions.dataUrl) : await import(`./data/${this.scope}.json`)
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
            this.drawstyleAttributess(geoData)
        },
        drawstyleAttributess (data) {
            if (this.geograpphyConfigOptions.hideAntarctica) {
                data.default.features = data.features.filter(function (feature) {
                    return feature.id !== 'ATA'
                })
            }
            if (this.geograpphyConfigOptions.hideHawaiiAndAlaska) {
                data.default.features = data.features.filter(function (feature) {
                    return feature.id !== 'HI' && feature.id !== 'AK'
                })
            }
            this.pathData = data.default.features
        },
        handleMouseoverGeographyConfig (event, d) {
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
            if (popupOnHover) {
                this.updatePopup(event, d, true)
            }
        },
        handleMouseoutGeographyConfig (event, d) {
            const { highlightOnHover, popupOnHover } = this.geograpphyConfigOptions
            if (highlightOnHover) {
                const data = this.previousAttributes[d.id || d.properties.code_hasc]
                this.$set(this.styleAttributes, d.id || d.properties.code_hasc, data)
            }
            if (popupOnHover) {
                this.updatePopup(event, d, false)
            }
        },
        updatePopup (event, d, flag) {
            this.popupPosition = {
                left: `${event.layerX}px`,
                top: `${event.layerY + 30}px`
            }
            if (this.popupTemplate) {
                this.$emit('custom:popup', { geography: d, data: this.data[d.id || d.properties.code_hasc] })
            } else {
                this.popupData = d.properties.name
            }
            this.showHoverinfo = flag
        }
    }
}
</script>

<style>
.map {
    position: relative;
    margin: 0 auto;
    width: 750px;
    height: 500px;
}
@media (max-width: 900px) {
    .map {
        width: 100%;
        height: 300px;
    }
}
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
    stroke: #FFFFFF;
    stroke-width: 1px;
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
