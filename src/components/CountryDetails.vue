<template>
 <h1> {{countryName}}</h1>
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
}
</style>