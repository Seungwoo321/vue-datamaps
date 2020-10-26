<template>
  <div>
    <h4>South Korea:</h4>
    <vue-datamaps
        :scope="scope"
        :setProjection="setProjection('korea')"
        :fills="fills"
        :data="data"
        :localData="kor"
    />
  </div>
</template>

<script>
import { VueDatamaps } from '../../../../src'
import { kor } from '../../../../src/data/index'
export default {
  components: {
    VueDatamaps
  },
  data () {
    return {
      kor: kor,
      scope: 'kor',
      fills: {
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
    }
  },
  methods: {
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
