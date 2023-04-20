<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

  <div class="title">

    <h1> Most rated movies</h1>
    <i class="fa fa-star star"></i>

  </div>

  <BaseGrid>

    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"></MovieCard>

  </BaseGrid>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import BaseGrid from "@/components/BaseGrid.vue";

export default {
  name: "MostRated",
  components: {

    MovieCard,
    BaseGrid


  },
  mounted(){
    this.$store.dispatch('movies/fetchPopularMovies')
  },
  computed: {
    movies() {
      return this.$store.getters['movies/getPopularMovies']
    },
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
.star{
  color: #fbff00;
  font-size: 3rem;
  margin-left: 1rem;
  align-self: center;
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

.star {

  animation: bounce 1s infinite;

}
@media only screen and (max-width: 767px) {
  .title {
    font-size: 0.8rem;
  }
  .star{

    font-size: 2rem;
  }
}
</style>