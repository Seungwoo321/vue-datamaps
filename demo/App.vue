<template>
  <div id="app">
    <h2>Example</h2>
    <div>
        <h4>Basic:</h4>
        <vue-datamaps/>
    </div>
    <div>
        <h4>Choropleth:</h4>
        <vue-datamaps :projection="choropleth.projection" :data="choropleth.data" :fills="choropleth.fills" />
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
                    authorHasTraveledTo: '#fa0fa0'
                },
                data: {
                    USA: { fillKey: 'authorHasTraveledTo' },
                    JPN: { fillKey: 'authorHasTraveledTo' },
                    ITA: { fillKey: 'authorHasTraveledTo' },
                    CRI: { fillKey: 'authorHasTraveledTo' },
                    KOR: { fillKey: 'authorHasTraveledTo' },
                    DEU: { fillKey: 'authorHasTraveledTo' }
                }
            }
        }
    },
    computed: {
        colors () {
            return d3.schemeCategory10
        }
    },
    mounted () {
        // window.setInterval(() => {
        //     console.log(this.colors, Math.random() * 10)
        //     console.log(this.colors[Math.random() * 10])
        // }, 2000)
    }
}
</script>

<style>

</style>
