<template>
  <div>
    <h4>AWS Region Bubbles:</h4>
    <vue-datamaps
        :geographyConfig="geographyConfig"
        :fills="fills"
        :bubblesConfig="bubblesConfig"
        bubbles
    >
    </vue-datamaps>
  </div>
</template>

<script>
import { VueDatamaps } from '../../../../src'
export default {
  components: {
    VueDatamaps
  },
  data () {
    return {
      bubblesConfig: {
        data: [
          {
            name: 'Seoul',
            radius: 100,
            region: 'APN2'
          },
          {
            name: 'Tokyo',
            radius: 10,
            region: 'APN1'
          },
          {
            name: 'Asia Pacific CDN',
            radius: 50,
            region: 'AP',
            coordinates: {
              latitude: 1.29,
              longitude: 103.85
            }
          }
        ],
        fillKey: 'region',
        highlightBorderColor: '#FFFFFF',
        highlightFillColor: '#ffba8f'
      },
      geographyConfig: {
        borderWidth: 0.2,
        dataUrl: 'https://raw.githubusercontent.com/Seungwoo321/vue-datamaps/master/demo/example-vue-cli3/public/data/world.json',
        popupOnHover: false,
        highlightOnHover: false
      },
      fills: {
        defaultFill: '#9fabaf',
        region: '#ff8132',
        red: 'red'
      }
    }
  },
  methods: {
    popupTemplate (datum) {
      this.popupData.origin = datum.origin.full_name
      this.popupData.destination = datum.destination.full_name
    }
  }
}
</script>

<style>

</style>
