export default {
    props: {
        scope: {
            type: String,
            default: 'world'
        },
        responsive: {
            type: Boolean,
            default: false
        },
        aspectRatio: {
            type: Number,
            default: 0.5625
        },
        // setProjection: setProjection,
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
        filters: {
            type: Object,
            default: function () {
                return {}
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
        arcConfig: {
            type: Object
        },
        disableDefaultStyles: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            default: {
                geographyConfig: {
                    dataUrl: null,
                    hideAntarctica: true,
                    hideHawaiiAndAlaska: false,
                    borderWidth: 1,
                    borderOpacity: 1,
                    borderColor: '#FDFDFD',
                    popupTemplate: function (geography, data) {
                        return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong></div>'
                    },
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
                    popupTemplate: function (geography, data) {
                        return '<div class="hoverinfo"><strong>' + data.name + '</strong></div>'
                    },
                    fillOpacity: 0.75,
                    animate: true,
                    highlightOnHover: true,
                    highlightFillColor: '#FC8D59',
                    highlightBorderColor: 'rgba(250, 15, 160, 0.2)',
                    highlightBorderWidth: 2,
                    highlightBorderOpacity: 1,
                    highlightFillOpacity: 0.85,
                    exitDelay: 100,
                    key: JSON.stringify
                },
                arcConfig: {
                    strokeColor: '#DD1C77',
                    strokeWidth: 1,
                    arcSharpness: 1,
                    animationSpeed: 600,
                    popupOnHover: false,
                    popupTemplate: function (geography, data) {
                        if ((data.origin && data.destination) && data.origin.latitude && data.origin.longitude && data.destination.latitude && data.destination.longitude) {
                            return '<div class="hoverinfo"><strong>Arc</strong><br>Origin: ' + JSON.stringify(data.origin) + '<br>Destination: ' + JSON.stringify(data.destination) + '</div>'
                        } else if (data.origin && data.destination) {
                            return '<div class="hoverinfo"><strong>Arc</strong><br>' + data.origin + ' -> ' + data.destination + '</div>'
                        } else {
                            return ''
                        }
                    }
                }
            }
        }
    },
    computed: {
        defaultGeograpphyConfig () {
            return {
                ...this.default.geographyConfig,
                ...this.geographyConfig
            }
        },
        defaultProjectionConfig () {
            return {
                ...this.default.projectionConfig,
                ...this.projectionConfig
            }
        },
        defaultBubblesConfig () {
            return {
                ...this.default.bubblesConfig,
                ...this.bubblesConfig
            }
        },
        defaultArcConfig () {
            return {
                ...this.default.arcConfig,
                ...this.arcConfig
            }
        }
    }
}
