<template>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
  />
  <BaseGrid>

      <CountryCard v-for="country in countries " v-bind:country="country">  </CountryCard>

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


    }
  },
  computed: {
    countries() {
      return this.$store.getters['search/getRegions']
    },
  }

}
</script>

<style scoped>

</style>