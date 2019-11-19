<template>
    <g class="labels">
        <template  v-for="(item, index) in data">
            <line v-if="smallStateIndex(item) > -1" :key="`line-${index}`"
                :x1="x(item) - 3"
                :y1="y(item) - 5"
                :x2="center(item)[0]"
                :y2="center(item)[1]"
                :style="`stroke:${labelsConfig.labelColor};stroke-width:${labelsConfig.lineWidth};`"
            />
            <text :key="`text-${index}`"
                :x="x(item)"
                :y="y(item)"
                :style="`font-size:${labelsConfig.fontSize}px;font-family:${labelsConfig.fontFamily};fill:${labelsConfig.labelColor}`"
            >
            {{ item.id }}
            </text>
        </template>
    </g>
</template>

<script>
export default {
    name: 'layer-label',
    props: ['labelsConfig', 'data', 'projection', 'path'],
    computed: {
        labelStartCoodinates () {
            return this.projection([-67.707617, 42.722131])
        }
    },
    methods: {
        x (d) {
            const xOffset = ['FL', 'KY', 'MI'].indexOf(d.id) > -1 ? -2.5 : (d.id === 'NY' ? -1 : (d.id === 'LA' ? 13 : 7.5))
            return this.smallStateIndex(d) > -1 ? this.labelStartCoodinates[0] : this.center(d)[0] - xOffset
        },
        y (d) {
            const yOffset = d.id === 'MI' ? 18 : 5
            return this.smallStateIndex(d) > -1 ? this.labelStartCoodinates[1] + (this.smallStateIndex(d) * (2 + this.labelsConfig.fontSize)) : this.center(d)[1] + yOffset
        },
        smallStateIndex (d) {
            return ['VT', 'NH', 'MA', 'RI', 'CT', 'NJ', 'DE', 'MD', 'DC'].indexOf(d.id)
        },
        center (d) {
            return d.properties.iso === 'USA' ? this.projection([-98.58333, 39.83333]) : this.path.centroid(d)
        }
    }
}
</script>

<style>

</style>
