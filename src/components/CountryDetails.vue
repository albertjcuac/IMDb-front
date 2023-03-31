<template>

 <h1> Showing movies from {{countryName}}</h1>
  <h1> {{countryIso}}</h1>
</template>

<script>
export default {
  name: "CountryDetails",
  data(){
    return{
      countryName: this.$route.params.name ,
      countryIso: this.$route.params.iso ,
    }
  }
}
</script>

<style scoped>
h1{
  color:white;
  text-align: center;
align-self: center;
}
</style>