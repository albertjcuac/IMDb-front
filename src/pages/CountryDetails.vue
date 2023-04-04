<template>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
  />
  <div class="title">

    <h1> Showing movies from {{countryName}}</h1>
    <span v-bind:class="'fi fi-'+countryIso.toLowerCase()+' flag country__flag'" ></span>

  </div>

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
.title{
  margin-top: 4rem;
  display: flex;
  justify-content: center;

}
.country__flag {
  font-size: 4rem;
  margin-left: 3rem;

}
p{
  color:white;
}
@media only screen and (max-width: 767px) {
.title{
  flex-direction: column-reverse;
font-size: 0.8rem;
}
  .country__flag {
    align-self: center;
    margin-left: 0;
  }
}
</style>
