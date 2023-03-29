

<template>





  <carousel class="carousel" :items-to-show="1">
    <slide v-for="page in slides" :key="page">
      <carousel-slide v-bind:page="page"></carousel-slide>
    </slide>

    <template #addons>
      <navigation />

    </template>
  </carousel>


  <BaseGrid>
    <transition-group name="fade" appear>
      <MovieCard v-for="movie in visibleMovies " v-bind:movie="movie">  </MovieCard>
    </transition-group>
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
      visibleMovies:[{
        "name": "Clerks",
        "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
        "year":"2001",

      },
        {
          "name": "Clerks",
          "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
          "year":"2001",

        },
        {
          "name": "Clerks",
          "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
          "year":"2001",

        },
        {
          "name": "Clerks",
          "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
          "year":"2001",

        },
        {
          "name": "Clerks",
          "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
          "year":"2001",

        },
        {
          "name": "Clerks",
          "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
          "year":"2001",

        },
        {
          "name": "Clerks",
          "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
          "year":"2001",

        },
        {
          "name": "Clerks",
          "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
          "year":"2001",

        },
        {
          "name": "Clerks",
          "image": "https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/206a5d19370f319b25158a5e33addbe9b3bed0b0122e993b7ba27786b0ac0498._V_SX600_.jpg",
          "year":"2001",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",


        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },




      ]

    };
  },
  watch: {

  },
  mounted(){

  },
  methods: {

    search() {


    },

    debouncedSearch(event) {
      const self = this;
      clearTimeout(self.searchTimeout);

      self.searchTimeout = setTimeout(() => {
        self.search(event); // Pasar el evento a la función search
      }, 400);
    },





  },
  computed:{

  },




};
</script>

<style scoped>




</style>