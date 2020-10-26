<template>
  <div>
    <h4>Bubbles:</h4>
    <vue-datamaps
      :geographyConfig="geographyConfig"
      :bubblesConfig="bubblesConfig"
      :fills="fills"
      @custom:popup-bubble="popupTemplate"
      bubbles
      :localData="world"
    >
      <div slot="hoverBubbleInfo" class="hoverinfo" style="text-align:center;">
          <b>Yield</b>: {{ popupData.yeild }}<br>
          Exploded on {{ popupData.date }} by the {{ popupData.country }}
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
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true
      },
      fills: {
        defaultFill: '#ABDDA4',
        USA: 'blue',
        RUS: 'red'
      },
      bubblesConfig: {
        popupTemplate: true,
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
      },
      popupData: {
        yeild: '',
        date: '',
        country: ''
      }
    }
  },
  methods: {
    popupTemplate ({ datum }) {
      this.popupData = {
        yeild: datum.yeild,
        date: datum.date,
        country: datum.country
      }
    }
  }
}
</script>

<style>

</style>
