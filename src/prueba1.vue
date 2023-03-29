
<template>

  <BaseGrid>
    <transition-group name="fade" appear>
      <MovieCard v-for="movie in visibleMovies " v-bind:movie="movie">  </MovieCard>
    </transition-group>
  </BaseGrid>


</template>

<script lang="js">

import MovieCard from "@/components/MovieCard.vue";
import BaseGrid from "@/components/BaseGrid.vue";



export default {

  components: {


    BaseGrid,
    MovieCard

  },
  data() {
    return {

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
        { "name": "Ali G In Da House",
          "image": "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51DCKRVFYDL._SY445_.jpg",
          "year":"2002",

        },



      ]

    }
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