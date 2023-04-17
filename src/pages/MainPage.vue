

<template>

        <carousel class="carousel" :items-to-show="1" :touchDrag="false">
          <slide v-for="page in slides" :key="page">
           <carousel-slide v-bind:page="page"></carousel-slide>
          </slide>

          <template #addons>
            <navigation />

          </template>
        </carousel>

  <BaseGrid>

      <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie"></MovieCard>

  </BaseGrid>






</template>

<script lang="js">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import carouselSlide from "@/components/carouselSlide.vue"
import MovieCard from "@/components/MovieCard.vue";
import BaseGrid from "@/components/BaseGrid.vue";




export default {

  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    carouselSlide,
    MovieCard,
    BaseGrid


  },
  data() {
    return {
      slides:[ {
        "label":"map",
        "route":"/country",
        "title": "Films Country Map",
        "text": "Explore different countries and their filmographies!",
        "img": "https://static.vecteezy.com/system/resources/previews/015/414/382/non_2x/world-map-isolated-on-white-background-flat-earth-map-template-for-web-site-pattern-anual-report-inphographics-worldmap-icon-travel-worldwide-map-silhouette-vector.jpg",

      }, {
        "label":"similar",
        "route":"/similar",
        "title": "Similar Films",
        "text": "Find similar movies to your favourite one!!",
        "img": "https://i.kym-cdn.com/photos/images/original/001/709/826/059.jpg",
      },
        {
          "label":"mostRated",
          "route":"/most-rated",
          "title": "Most Rated",
          "text": "Most rated movies by the comunity!!",
          "img": "https://media.istockphoto.com/id/1268205934/vector/rating-customer-review-and-feedback-concept-a-group-of-cartoon-people-holding-five-stars.jpg?s=170667a&w=0&k=20&c=Qd--e444iblMEDN2tCKYKHfgYFrdHUFZXpl3DlHg4YY=",
        }],

    };
  },
  watch: {

  },
  mounted(){
    this.$store.dispatch('movies/fetchAllMovies')

  },
  methods: {

    search() {


    },







  },
  computed:{
      movies(){
        return this.$store.getters['movies/getMovies']
      },
    visibleMovies(){
        return this.$store.getters['movies/getVisibleMovies']
    },
    savedMovies(){
      return this.$store.getters['movies/getSavedMovies']
    },
    selectedGenre(){
      return this.$store.getters['search/getSelectedGenre']
    },
    selectedDuration(){
      return this.$store.getters['search/getSelectedDuration']
    },
    selectedLanguage(){
      return this.$store.getters['search/getSelectedLanguage']
    },
    query(){
      return this.$store.getters['search/getQuery']
    }

  },




};
</script>

<style scoped>




</style>