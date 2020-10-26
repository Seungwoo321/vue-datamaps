<template>
  <div>
    <h4>AWS Region Bubbles:</h4>
    <vue-datamaps
        :geographyConfig="geographyConfig"
        :fills="fills"
        :bubblesConfig="bubblesConfig"
        bubbles
        @custom:popup-bubble="popupTemplate"
        :localData="world"
    >
        <div slot="hoverBubbleInfo" class="hoverinfo">
            <strong>
                {{ name }} ({{ code }})
            </strong>
            <div>
                {{ cost }}
            </div>
        </div>
    </vue-datamaps>
  </div>
</template>

<script>
import { VueDatamaps } from '../../../../src'
import { world } from '../../../../src/data/index'
export default {
  components: {
    VueDatamaps
  },
  data () {
    return {
      world: world,
      name: '',
      code: '',
      cost: '',
      bubblesConfig: {
        data: [
          {
            name: 'Seoul',
            radius: 100,
            cost: '$100',
            region: 'APN2'
          },
          {
            name: 'Tokyo',
            radius: 10,
            cost: '$10',
            region: 'APN1'
          },
          {
            name: 'Asia Pacific CDN',
            radius: 50,
            cost: '$50',
            region: 'AP',
            coordinates: {
              latitude: 1.29,
              longitude: 103.85
            }
          }
        ],
        fillKey: 'region',
        highlightBorderColor: '#FFFFFF',
        highlightFillColor: '#ffba8f',
        popupTemplate: true
      },
      geographyConfig: {
        borderWidth: 0.2,
        dataUrl: '',
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
    popupTemplate ({ datum }) {
      this.name = datum.name
      this.code = datum.region
      this.cost = datum.cost
    }
  }
}
</script>

<style>

</style>
