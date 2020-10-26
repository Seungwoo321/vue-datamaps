<template>
  <div>
    <h4>Basic:</h4>
    <!-- <vue-datamaps :geographyConfig="geographyConfig"/> -->
    <vue-datamaps
        :localData="world"/>
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
        dataUrl: ''
      }
    }
  }
}
</script>

<style>

</style>
