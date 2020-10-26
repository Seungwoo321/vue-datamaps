<template>
  <div>
    <h4>Arcs:</h4>
    <vue-datamaps
      :scope="scope"
      :fills="fills"
      :data="data"
      :geographyConfig="geographyConfig"
      :arcConfig="arcConfig"
      :loalData="usa"
      arc
    />
  </div>
</template>

<script>
import { VueDatamaps } from '../../../../src'
import { usa } from '../../../../src/data/index'
export default {
  components: {
    VueDatamaps
  },
  data () {
    return {
      usa: usa,
      geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true
      },
      scope: 'usa',
      fills: {
        defaultFill: '#ABDDA4',
        win: '#0fa0fa'
      },
      data: {
        'TX': { fillKey: 'win' },
        'FL': { fillKey: 'win' },
        'NC': { fillKey: 'win' },
        'CA': { fillKey: 'win' },
        'NY': { fillKey: 'win' },
        'CO': { fillKey: 'win' }
      },
      arcConfig: {
        popupOnHover: true,
        data: [
          {
            origin: 'CA',
            destination: 'TX'
          },
          {
            origin: 'OR',
            destination: 'TX'
          },
          {
            origin: 'NY',
            destination: 'TX'
          },
          {
            origin: {
              latitude: 40.639722,
              longitude: -73.778889
            },
            destination: {
              latitude: 37.618889,
              longitude: -122.375
            }
          },
          {
            origin: {
              latitude: 30.194444,
              longitude: -97.67
            },
            destination: {
              latitude: 25.793333,
              longitude: -80.290556
            },
            options: {
              strokeWidth: 2,
              strokeColor: 'rgba(100, 10, 200, 0.4)',
              greatArc: true
            }
          },
          {
            origin: {
              latitude: 39.861667,
              longitude: -104.673056
            },
            destination: {
              latitude: 35.877778,
              longitude: -78.7875
            }
          }
        ],
        strokeWidth: 1,
        arcSharpness: 1.4
      }
    }
  }
}
</script>

<style>

</style>
