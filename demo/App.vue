<template>
  <div id="app">
    <h2>Vue Datamaps Example</h2>
    <hr>
    <div>
        <h4>Basic:</h4>
        <vue-datamaps/>
    </div>
    <hr>
    <div>
        <h4>Choropleth:</h4>
        <vue-datamaps
            :projection="choropleth.projection"
            :data="choropleth.data"
            :fills="choropleth.fills"
        />
    </div>
    <hr>
    <div>
        <h4>State Labels:</h4>
        <vue-datamaps
            labels
            :scope="stateLabels.scope"
            :geographyConfig="stateLabels.geographyConfig"
            :fills="stateLabels.fills"
            :data="stateLabels.data"
            popupTemplate
            @custom:popup="popupTemplate"
        >
            <div slot="hoverinfo" class="hoverinfo" style="white-space: pre-line;">
                {{ stateLabels.popupData }}
            </div>
        </vue-datamaps>
    </div>
    <hr>
    <div>
        <h4>Bubbles:</h4>
        <vue-datamaps
            :geographyConfig="bubbles.geographyConfig"
            :bubblesConfig="bubbles.bubblesConfig"
            :fills="bubbles.fills"
            bubbles
        ></vue-datamaps>
    </div>
    <hr>
    <div>
        <h4>Korea:</h4>
        <vue-datamaps
            :scope="korea.scope"
            :setProjection="setProjection"
            :fills="korea.fills"
            :data="korea.data"
        />
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3v4'
export default {
    name: 'app',
    data () {
        return {
            choropleth: {
                projection: 'Mercator',
                fills: {
                    defaultFill: '#ABDDA4',
                    authorHasTraveledTo: '#fa0fa0',
                    USA: '#fa0fa0'
                },
                data: {
                    USA: {
                        fillKey: 'USA'
                    },
                    JPN: {
                        fillKey: 'authorHasTraveledTo'
                    },
                    ITA: {
                        fillKey: 'authorHasTraveledTo'
                    },
                    CRI: {
                        fillKey: 'authorHasTraveledTo'
                    },
                    KOR: {
                        fillKey: 'authorHasTraveledTo'
                    },
                    DEU: {
                        fillKey: 'authorHasTraveledTo'
                    }
                }
            },
            stateLabels: {
                scope: 'usa',
                geographyConfig: {
                    highlightBorderColor: '#bada55',
                    highlightBorderWidth: 3
                },
                fills: {
                    'Republican': '#CC4731',
                    'Democrat': '#306596',
                    'Heavy Democrat': '#667FAF',
                    'Light Democrat': '#A9C0DE',
                    'Heavy Republican': '#CA5E5B',
                    'Light Republican': '#EAA9A8',
                    defaultFill: '#EDDC4E'
                },
                data: {
                    'AZ': {
                        'fillKey': 'Republican',
                        'electoralVotes': 5
                    },
                    'CO': {
                        'fillKey': 'Light Democrat',
                        'electoralVotes': 5
                    },
                    'DE': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'FL': {
                        'fillKey': 'UNDECIDED',
                        'electoralVotes': 29
                    },
                    'GA': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'HI': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'ID': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'IL': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'IN': {
                        'fillKey': 'Republican',
                        'electoralVotes': 11
                    },
                    'IA': {
                        'fillKey': 'Light Democrat',
                        'electoralVotes': 11
                    },
                    'KS': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'KY': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'LA': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'MD': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'ME': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'MA': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'MN': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'MI': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'MS': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'MO': {
                        'fillKey': 'Republican',
                        'electoralVotes': 13
                    },
                    'MT': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'NC': {
                        'fillKey': 'Light Republican',
                        'electoralVotes': 32
                    },
                    'NE': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'NV': {
                        'fillKey': 'Heavy Democrat',
                        'electoralVotes': 32
                    },
                    'NH': {
                        'fillKey': 'Light Democrat',
                        'electoralVotes': 32
                    },
                    'NJ': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'NY': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'ND': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'NM': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'OH': {
                        'fillKey': 'UNDECIDED',
                        'electoralVotes': 32
                    },
                    'OK': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'OR': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'PA': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'RI': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'SC': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'SD': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'TN': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'TX': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'UT': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'WI': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'VA': {
                        'fillKey': 'Light Democrat',
                        'electoralVotes': 32
                    },
                    'VT': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'WA': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'WV': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'WY': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'CA': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'CT': {
                        'fillKey': 'Democrat',
                        'electoralVotes': 32
                    },
                    'AK': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'AR': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    },
                    'AL': {
                        'fillKey': 'Republican',
                        'electoralVotes': 32
                    }
                },
                popupData: ''
            },
            korea: {
                scope: 'kor',
                fills: {
                    // defaultFill: '#deb542',
                    color1: '#fa0fa0',
                    color2: '#A9C0DE'
                },
                data: {
                    'KR.SO': {
                        fillKey: 'color1'
                    },
                    'KR.TG': {
                        fillKey: 'color2'
                    }
                }
            },
            bubbles: {
                geographyConfig: {
                    popupOnHover: false,
                    highlightOnHover: false
                },
                fills: {
                    defaultFill: '#ABDDA4',
                    USA: 'blue',
                    RUS: 'red'
                },
                bubblesConfig: {
                    data: [
                        {
                            name: 'Not a bomb, but centered on Brazil',
                            radius: 23,
                            centered: 'BRA',
                            country: 'USA',
                            yeild: 0,
                            fillKey: 'USA',
                            date: '1954-03-01'
                        },
                        {
                            name: 'Not a bomb',
                            radius: 15,
                            yeild: 0,
                            country: 'USA',
                            centered: 'USA',
                            date: '1986-06-05',
                            significance: 'Centered on US',
                            fillKey: 'USA'
                        },
                        {
                            name: 'Castle Bravo',
                            radius: 25,
                            yeild: 15000,
                            country: 'USA',
                            significance: 'First dry fusion fuel "staged" thermonuclear weapon; a serious nuclear fallout accident occurred',
                            fillKey: 'USA',
                            date: '1954-03-01',
                            latitude: 11.415,
                            longitude: 165.1619
                        }, {
                            name: 'Tsar Bomba',
                            radius: 70,
                            yeild: 50000,
                            country: 'USSR',
                            fillKey: 'RUS',
                            significance: 'Largest thermonuclear weapon ever tested—scaled down from its initial 100 Mt design by 50%',
                            date: '1961-10-31',
                            latitude: 73.482,
                            longitude: 54.5854
                        }
                    ]
                }
            }
        }
    },
    computed: {
        colors () {
            return d3.schemeCategory10
        }
    },
    methods: {
        setProjection (d3, element) {
            const projection = d3.geoMercator().center([0, 0])
                .rotate([-128, -36])
                .scale(5000)
                .translate([element.offsetWidth / 2, element.offsetHeight / 2])
            const path = d3.geoPath().projection(projection)
            return { projection, path }
        },
        popupTemplate ({ geography, data }) {
            this.stateLabels.popupData = `${geography.properties.name}\nElectoral Votes: ${data.electoralVotes}`
        }
    },
    mounted () {
        // window.setInterval(() => {
        //     this.choropleth.fills.USA = this.colors[Math.floor(Math.random() * (10 - 1)) + 1]
        //     console.log(this.choropleth.data)
        // }, 2000)
    }
}
</script>

<style>
h2, h4 {
    text-align: center;
}
</style>
