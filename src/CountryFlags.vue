<template>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
  />
  <BaseGrid>
    <transition-group name="fade" appear>
      <CountryCard v-for="country in countries " v-bind:country="country">  </CountryCard>
    </transition-group>
  </BaseGrid>


</template>

<script>
import CountryCard from "@/components/countryCard.vue";
import BaseGrid from "@/components/BaseGrid.vue";
export default {
  name: "CountryFlags",
  components: {CountryCard,BaseGrid},
  data(){
    return{
      countries: [{
        "iso": "br ",
        "name": "Brazil",
        "number":"2354",



      }, {
        "iso": "es",
        "name": "Spain",
        "number":"3078",
      },
        {
          "iso": "us",
          "name": "USA",
          "number":"9078",
        }]
    }
  }

}
</script>

<style scoped>

</style>