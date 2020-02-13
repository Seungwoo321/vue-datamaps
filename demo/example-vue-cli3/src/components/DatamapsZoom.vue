<template>
  <div>
    <h4>Zoom:</h4>
    <vue-datamaps
      :scope="scope"
      :data="data"
      :fills="fills"
      :bubblesConfig="bubblesConfig"
      bubbles
      @custom:popup-bubble="popupTemplate"
      :setProjection="setProjection('zoom')"
    >
      <div slot="hoverBubbleInfo" class="hoverinfo" style="text-align:center;">
        {{ popupData.name }}
      </div>
    </vue-datamaps>
  </div>
</template>

<script>
import { VueDatamaps } from 'vue-datamaps'
import * as d3 from 'd3v4'
export default {
  components: {
    VueDatamaps
  },
  data () {
    return {
      scope: 'world',
      fills: {
        defaultFill: '#ABDDA4',
        gt50: d3.schemeCategory20[Math.floor(Math.random() * 20)],
        eq50: d3.schemeCategory20b[Math.floor(Math.random() * 20)],
        lt25: d3.schemeCategory20c[Math.floor(Math.random() * 20)],
        gt75: d3.schemeCategory20[Math.floor(Math.random() * 20)],
        lt50: d3.schemeCategory10[Math.floor(Math.random() * 10)],
        eq0: d3.schemeCategory10[Math.floor(Math.random() * 1)],
        pink: '#0fa0fa',
        gt500: d3.schemeCategory10[Math.floor(Math.random() * 1)]
      },
      data: {
        'ZAF': { fillKey: 'gt50' },
        'ZWE': { fillKey: 'lt25' },
        'NGA': { fillKey: 'lt50' },
        'MOZ': { fillKey: 'eq50' },
        'MDG': { fillKey: 'eq50' },
        'EGY': { fillKey: 'gt75' },
        'TZA': { fillKey: 'gt75' },
        'LBY': { fillKey: 'eq0' },
        'DZA': { fillKey: 'gt500' },
        'SSD': { fillKey: 'pink' },
        'SOM': { fillKey: 'gt50' },
        'GIB': { fillKey: 'eq50' },
        'AGO': { fillKey: 'lt50' }
      },
      bubblesConfig: {
        popupOnHover: true,
        popupTemplate: true,
        data: [
          { name: 'Bubble 1', latitude: 21.32, longitude: -7.32, radius: 45, fillKey: 'gt500' },
          { name: 'Bubble 2', latitude: 12.32, longitude: 27.32, radius: 25, fillKey: 'eq0' },
          { name: 'Bubble 3', latitude: 0.32, longitude: 23.32, radius: 35, fillKey: 'lt25' },
          { name: 'Bubble 4', latitude: -31.32, longitude: 23.32, radius: 55, fillKey: 'eq50' }
        ]
      },
      popupData: {
        name: ''
      }
    }
  },
  methods: {
    popupTemplate ({ datum }) {
      this.popupData.name = `Bubble for ${datum.name}`
    },
    setProjection (type) {
      const createProjection = {
        korea: function (d3, element) {
          const projection = d3.geoMercator().center([0, 0])
            .rotate([-128, -36])
            .scale(element.offsetWidth * 6)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2])
          const path = d3.geoPath().projection(projection)
          return { projection, path }
        },
        zoom: function (d3, element) {
          var projection = d3.geoEquirectangular()
            .center([23, -3])
            .rotate([4.4, 0])
            .scale(element.offsetHeight * 0.6)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2])
          var path = d3.geoPath()
            .projection(projection)
          return { path: path, projection: projection }
        }
      }
      return createProjection[type]
    }
  }
}
</script>

<style>

</style>
