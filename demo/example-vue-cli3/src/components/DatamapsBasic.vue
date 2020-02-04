<template>
  <div>
    <h4>Basic:</h4>
    <vue-datamaps :geographyConfig="geographyConfig"/>
    <!-- <vue-datamaps/> -->
  </div>
</template>

<script>
import VueDatamaps from 'vue-datamaps'
export default {
  components: {
    VueDatamaps
  },
  data () {
    return {
      geographyConfig: {
        dataUrl: 'https://raw.githubusercontent.com/Seungwoo321/vue-datamaps/master/demo/example-vue-cli3/public/data/world.json'
      }
    }
  }
}
</script>

<style>

</style>
