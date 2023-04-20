<template>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
  />
  <div class="title">

    <h1> Showing movies from {{countryName}}</h1>
    <span v-bind:class="'fi fi-'+countryIso.toLowerCase()+' flag country__flag'" ></span>

  </div>


  <BaseGrid>

    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"></MovieCard>

  </BaseGrid>


</template>

<script>



import MovieCard from "@/components/MovieCard.vue";
import BaseGrid from "@/components/BaseGrid.vue";

export default {
  name: "CountryDetails",
  components: {

    MovieCard,
    BaseGrid


  },
  data() {
    return {
      countryName: this.$route.params.name,
      countryIso: this.$route.params.iso,


    }
  },
  mounted() {
    this.$store.commit('search/setRegion', this.countryIso);

    this.$store.commit('search/setRegionName', this.countryName);
    this.$store.dispatch('movies/fetchByCountry', this.countryIso)

  },
  computed: {
    movies() {
      return this.$store.getters['movies/getMovies']
    },
  }
}
</script>

<style scoped>
h1{
  color:#ffffee;
  text-align: center;
  align-self: center;
}
.title{
  margin-top: 4rem;
  display: flex;
  justify-content: center;

}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.country__flag {
  font-size: 4rem;
  margin-left: 3rem;
  animation: bounce 1s infinite;

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
