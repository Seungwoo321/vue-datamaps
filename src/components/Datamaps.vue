<template>
    <div class="map">
        <svg ref="svg" class="datamap" :style="svgStyle"
            :width="svgWidth"
            :height="svgHeight">
            <g>
                <path v-for="(item, index) in pathData" :key="index"
                    :d="pathAndProjection.path(item)"
                    :class="`datamaps-subunit ${item.id}`"
                    :fill="fillColor(item)"
                    :style="subunit[item.id]"
                    @mouseover="handleMouseoverGeographyConfig($event, item)"
                    @mouseout="handleMouseoutGeographyConfig($event, item)"
                />
            </g>
        </svg>
        <div v-if="defaultGeograpphyConfig.popupOnHover || defaultBubblesConfig.popupOnHover" class="datamaps-hoverover" style="z-index:10001;position:absolute"></div>
    </div>
</template>
<script>
import * as d3 from 'd3v4'
import props from './props'
import { val } from './helper'
export default {
    name: 'vue-datamaps',
    data () {
        return {
            attrs: {
                width: 0,
                height: 0,
                dataWidth: 0
            },
            previousAttributes: {},
            geo: {
                projection: null,
                path: null
            },
            pathData: [],
            subunit: {}
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
        },
        type: {
            type: String,
            default: 'world'
        }
    },
    computed: {
        svg () {
            return d3.select(this.$refs.svg)
        },
        svgWidth: {
            get () {
                return this.attrs.width
            },
            set (element) {
                this.attrs.dataWidth = this.width || element.offsetWidth
                this.attrs.width = this.width || element.offsetWidth
            }
        },
        svgHeight: {
            get () {
                return this.attrs.height
            },
            set (element) {
                this.attrs.height = this.height || element.offsetHeight
            }
        },
        pathStyle () {
            return {
                'stroke-width': this.defaultGeograpphyConfig.borderWidth,
                'stroke-opacity': this.defaultGeograpphyConfig.borderOpacity,
                'stroke': this.defaultGeograpphyConfig.borderColor
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
            let projection = null
            let path = null
            if (this.scope === 'usa') {
                projection = d3.geoAlbersUsa()
                    .scale(this.svgWidth)
                    .translate([this.svgWidth / 2, this.svgHeight / 2])
            } else if (this.scope === 'world') {
                projection = d3[`geo${this.projection}`]()
                    .scale((this.svgWidth + 1) / 2 / Math.PI)
                    .translate([this.svgWidth / 2, this.svgHeight / (this.projection === 'Mercator' ? 1.45 : 1.8)])
            }
            if (this.projection === 'Orthographic') {
                this.svg.append('defs').append('path')
                    .datum({ type: 'Sphere' })
                    .attr('id', 'sphere')
                    .attr('d', path)

                this.svg.append('use')
                    .attr('class', 'stroke')
                    .attr('xlink:href', '#sphere')

                this.svg.append('use')
                    .attr('class', 'fill')
                    .attr('xlink:href', '#sphere')
                projection.scale(250).clipAngle(90).rotate(this.defaultProjectionConfig.rotation)
            }

            path = d3.geoPath()
                .projection(projection)
            return { projection, path }
        }
    },
    mounted () {
        this.svgWidth = this.$el
        this.svgHeight = this.$el
        this.draw()
    },
    methods: {
        addPlugin () {
        },
        fillColor (d) {
            const { data, fills } = this
            const datum = data[d.id]
            if (datum && datum.fillKey) {
                return fills[ val(datum.fillKey, { data: data[d.id], geography: d }) ]
            }

            if (typeof fillColor === 'undefined') {
                return val(datum && datum.fillColor, fills.defaultFill, { data: data[d.id], geography: d })
            }
        },
        updateChoropleth (data) {
            console.log(data)
            console.log('csv data test')
        },
        async draw () {
            let geoData = null
            let result = this.defaultGeograpphyConfig.dataUrl ? await d3[this.dataType](this.defaultGeograpphyConfig.dataUrl) : await import(`./data/${this.type}.json`)
            if (this.defaultGeograpphyConfig.dataUrl) {
                if (this.dataType === 'csv' && (result && result.slice)) {
                    let tmpData = {}
                    result.forEach(element => item => { tmpData[item.id] = item })
                    geoData = tmpData
                }
                this.updateChoropleth(result)
            } else {
                geoData = result
            }
            this.drawSubunits(geoData)
        },
        drawSubunits (data) {
            if (this.defaultGeograpphyConfig.hideAntarctica) {
                data.default.features = data.features.filter(function (feature) {
                    return feature.id !== 'ATA'
                })
            }
            if (this.defaultGeograpphyConfig.hideHawaiiAndAlaska) {
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
            this.$set(this.previousAttributes, d.id, previousAttributes)
            const { highlightOnHover, popupOnHover, highlightFillColor, highlightBorderColor, highlightBorderWidth, highlightBorderOpacity, highlightFillOpacity } = this.defaultGeograpphyConfig
            const datum = this.data[d.id] || {}
            if (highlightOnHover || popupOnHover) {
                const data = {
                    fill: val(datum.highlightFillColor, highlightFillColor, datum),
                    stroke: val(datum.highlightBorderColor, highlightBorderColor, datum),
                    'stroke-width': val(datum.highlightBorderWidth, highlightBorderWidth, datum),
                    'stroke-opacity': val(datum.highlightBorderOpacity, highlightBorderOpacity, datum),
                    'fill-opacity': val(datum.highlightFillOpacity, highlightFillOpacity, datum)
                }
                this.$set(this.subunit, d.id, data)
            }
        },
        handleMouseoutGeographyConfig (event, d) {
            const { highlightOnHover } = this.defaultGeograpphyConfig
            if (highlightOnHover) {
                const data = this.previousAttributes[d.id]
                this.$set(this.subunit, d.id, data)
            }
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
    display: none;
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
