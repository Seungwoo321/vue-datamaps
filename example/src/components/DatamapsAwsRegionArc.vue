<template>
    <div>
        <h4>AWS Region Arcs:</h4>
        <vue-datamaps
            :geographyConfig="geographyConfig"
            :fills="fills"
            :arcConfig="arcConfig"
            arc
            aws-regions
            :awsRegionsConfig="awsRegionsConfig"
            @custom:popup-arc="popupTemplate"
            :localData="world"
        >
        <div slot="hoverArcInfo" class="hoverinfo">
            <strong>{{ popupData.title }}</strong><br>
            {{ popupData.origin }} ▶▶▶ {{ popupData.destination }}
        </div>
        </vue-datamaps>
    </div>
</template>

<script>
import { world } from '../../../data/index'
// import { VueDatamaps } from 'vue-datamaps'
import { VueDatamaps } from '../../../src/index'
export default {
    components: {
        VueDatamaps
    },
    data () {
        return {
            world: world,
            geographyConfig: {
                borderWidth: 0.2,
                dataUrl: '',
                popupOnHover: false,
                highlightOnHover: false
            },
            fills: {
                defaultFill: '#9fabaf',
                active: '#e8762e'
            },
            awsRegionsConfig: {
                popupOnHover: true,
                borderColor: 'transparent',
                data: [
                    {
                        code: 'ap-northeast-1',
                        fillKey: 'active',
                        color: 'orange'
                    },
                    {
                        code: 'ap-northeast-2',
                        fillKey: 'active',
                        color: 'orange'
                    },

                    {
                        code: 'us-east-2',
                        fillKey: 'active',
                        color: 'red'
                    },
                    {
                        code: 'ap-southeast-1',
                        fillKey: 'active',
                        color: 'red'
                    },
                    {
                        code: 'ca-central-1',
                        fillKey: 'active',
                        color: 'red'
                    }
                ]
            },
            arcConfig: {
                popupOnHover: true,
                popupTemplate: true,
                data: [
                    {
                        origin: 'ap-northeast-1',
                        destination: 'ap-northeast-2',
                        color: 'orange'
                    },
                    {
                        origin: 'ap-southeast-1',
                        destination: 'ap-northeast-2',
                        color: 'red'
                    },
                    {
                        origin: 'ap-southeast-2',
                        destination: 'ap-northeast-1',
                        color: 'red'
                    },
                    {
                        origin: 'ca-central-1',
                        destination: 'ap-northeast-2',
                        color: 'red'
                    },
                    {
                        origin: 'us-east-2',
                        destination: 'ap-northeast-2',
                        color: 'red'
                    }
                ],
                strokeColor: '#e8762e',
                strokeWidth: 2,
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
