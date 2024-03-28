<template>
    <div>
        <h4>Basic:</h4>
        <!-- <vue-datamaps :geographyConfig="geographyConfig"/> -->
        <vue-datamaps/>
    </div>
</template>

<script>
import { VueDatamaps } from '../'

export default {
    components: {
        VueDatamaps
    },
    data () {
        return {
            geographyConfig: {
            }
        }
    }
}
</script>

<style>

</style>
