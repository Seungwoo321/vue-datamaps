import { regions } from './helper'
export default {
    props: {
        scope: {
            type: String,
            default: 'world'
        },
        setProjection: {
            type: Function,
            default: function (d3, element) {
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
                    projection.scale(this.svgWidth / Math.PI * 0.9).clipAngle(90).rotate(this.projectionConfigOptions.rotation)
                }

                path = d3.geoPath()
                    .projection(projection)
                return { projection, path }
            }
        },
        projection: {
            type: String,
            default: 'Equirectangular'
        },
        dataType: {
            type: String,
            default: 'json'
        },
        data: {
            type: Object,
            default: function () {
                return {}
            }
        },
        done: {
            type: Function,
            default: function () {
                return {}
            }
        },
        fills: {
            type: Object,
            default: function () {
                return {
                    authorHasTraveledTo: '#fa0fa0',
                    defaultFill: '#ABDDA4'
                }
            }
        },
        geographyConfig: {
            type: Object
        },
        projectionConfig: {
            type: Object
        },
        bubblesConfig: {
            type: Object
        },
        bubbles: {
            type: Boolean,
            default: false
        },
        arcConfig: {
            type: Object
        },
        arc: {
            type: Boolean,
            default: false
        },
        disableDefaultStyles: {
            type: Boolean,
            default: false
        },
        labelsConfig: {
            type: Object
        },
        labels: {
            type: Boolean,
            default: false
        },
        awsRegions: {
            type: Boolean,
            default: false
        },
        awsRegionsConfig: {
            type: Object
        },
        popupTemplate: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            defaultFill: '#ABDDA4',
            default: {
                geographyConfig: {
                    dataUrl: null,
                    hideAntarctica: true,
                    hideHawaiiAndAlaska: false,
                    borderWidth: 1,
                    borderOpacity: 1,
                    borderColor: '#FDFDFD',
                    popupOnHover: true,
                    highlightOnHover: true,
                    highlightFillColor: '#FC8D59',
                    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                    highlightBorderWidth: 2,
                    highlightBorderOpacity: 1,
                    highlightFillOpacity: 0.85
                },
                projectionConfig: {
                    rotation: [97, 0]
                },
                bubblesConfig: {
                    borderWidth: 2,
                    borderOpacity: 1,
                    borderColor: '#FFFFFF',
                    popupOnHover: true,
                    radius: null,
                    fillOpacity: 0.75,
                    animate: true,
                    highlightOnHover: true,
                    highlightFillColor: '#FC8D59',
                    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                    highlightBorderWidth: 2,
                    highlightBorderOpacity: 1,
                    highlightFillOpacity: 0.85,
                    exitDelay: 100,
                    key: JSON.stringify,
                    data: []
                },
                arcConfig: {
                    strokeColor: '#DD1C77',
                    strokeWidth: 1,
                    arcSharpness: 1,
                    animationSpeed: 600,
                    popupOnHover: false,
                    data: []
                },
                labelsConfig: {
                    fontSize: 10,
                    fontFamily: 'Verdana',
                    labelColor: '#000',
                    lineWidth: 1
                },
                awsRegionsConfig: {
                    borderWidth: 1.5,
                    borderOpacity: 1,
                    borderColor: '#0b5fd6',
                    popupOnHover: false,
                    fillOpacity: 1,
                    showPrivateRegions: false,
                    data: [],
                    region: null
                }
            }
        }
    },
    computed: {
        regionsMap: function () {
            return regions.reduce((accumulator, currentValue) => {
                accumulator[currentValue.code] = currentValue
                return accumulator
            }, {})
        },
        geograpphyConfigOptions () {
            return {
                ...this.default.geographyConfig,
                ...this.geographyConfig
            }
        },
        projectionConfigOptions () {
            return {
                ...this.default.projectionConfig,
                ...this.projectionConfig
            }
        },
        bubblesConfigOptions () {
            return {
                ...this.default.bubblesConfig,
                ...this.bubblesConfig,
                fills: this.fills
            }
        },
        arcConfigOptions () {
            return {
                ...this.default.arcConfig,
                ...this.arcConfig
            }
        },
        labelsConfigOptions () {
            return {
                ...this.default.labelsConfig,
                ...this.labelsConfig
            }
        },
        awsRegionsConfigOptions () {
            return {
                ...this.default.awsRegionsConfig,
                ...this.awsRegionsConfig,
                fills: this.fills
            }
        }
    }
}
