<template>
  <v-main style="background-color:#212123">
    <v-col>
      <!--<v-row>
        <h1></h1>
      </v-row>
      <v-row v-else >
        <h1></h1>
          <v-col>
            <ModelCard></ModelCard>
          </v-col>
      </v-row>-->
    </v-col>
  </v-main>
</template>


<script>
import ModelCard from "@/components/ModelCard"
export default {
    name: 'MainViewComponent',
    components: ModelCard
}
</script>

<style>

</style>