<template>
  <div>
    <h4>AWS Region:</h4>
    <vue-datamaps
        :geographyConfig="geographyConfig"
        :fills="fills"
        :arcConfig="arcConfig"
        arc
        aws-regions
        :awsRegionsConfig="awsRegionsConfig"
        @custom:popup-arc="popupTemplate"
    >
      <div slot="hoverArcInfo" class="hoverinfo">
        <strong>{{ popupData.title }}</strong><br>
        {{ popupData.origin }} ▶▶▶ {{ popupData.destination }}
      </div>
    </vue-datamaps>
  </div>
</template>

<script>
import { VueDatamaps } from 'vue-datamaps'
export default {
  components: {
    VueDatamaps
  },
  data () {
    return {
      geographyConfig: {
        dataUrl: 'https://raw.githubusercontent.com/Seungwoo321/vue-datamaps/master/demo/example-vue-cli3/public/data/world.json',
        popupOnHover: false,
        highlightOnHover: false
      },
      fills: {
        defaultFill: '#cfcfcf',
        active: '#0b5fd6'
      },
      awsRegionsConfig: {
        popupOnHover: true,
        data: [
          {
            code: 'ap-northeast-2',
            fillKey: 'active'
          },
          { code: 'ap-northeast-1',
            fillKey: 'active'
          },
          { code: 'us-east-2',
            fillKey: 'active'
          },
          { code: 'eu-north-1',
            fillKey: 'active'
          },
          { code: 'ca-central-1',
            fillKey: 'active'
          }
        ]
      },
      arcConfig: {
        popupOnHover: true,
        popupTemplate: true,
        data: [
          {
            origin: 'ap-northeast-2',
            destination: 'ap-northeast-1',
            options: {
              arcSharpness: 0.5
            }
          },
          {
            origin: 'ap-northeast-1',
            destination: 'ap-northeast-2',
            options: {
              arcSharpness: 0.5
            }
          },
          {
            origin: 'us-east-2',
            destination: 'ap-northeast-2',
            options: {
              arcSharpness: 3
            }
          },
          {
            origin: 'ap-northeast-2',
            destination: 'us-east-2',
            options: {
              arcSharpness: 3
            }
          },
          {
            origin: 'eu-north-1',
            destination: 'ap-northeast-2',
            options: {
              strokeColor: 'red',
              arcSharpness: 2
            }
          },
          {
            origin: 'ca-central-1',
            destination: 'eu-west-2',
            options: {
              strokeColor: 'rgba(100, 10, 200, 0.4)',
              arcSharpness: 3
            }
          }
        ],
        strokeColor: '#0b5fd6',
        greatArc: true,
        animationSpeed: 2000
      },
      popupData: {
        title: 'DataTransfer',
        origin: '',
        destination: ''
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
