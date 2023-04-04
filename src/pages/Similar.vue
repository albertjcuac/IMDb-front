

<template>

  <div class="title">

    <h1> Select one of your saved movies and find a similar one</h1>


  </div>
  <div class="selection">

    <FavsSelect :options="options" v-model="selectedOption"></FavsSelect>


  </div>









</template>

<script lang="js">

import FavsSelect from "@/components/FavsSelect.vue";




export default {

  components: {FavsSelect},
  data() {
    return {
      options: [
        { label: 'After sunrise', value: 'option1' },
        { label: 'West side story', value: 'option2' },
        { label: 'Baby driver', value: 'option3' },
        { label: 'Casino', value: 'option4' }
      ],

    };
  },
  watch: {

  },
  mounted(){

  },
  methods: {






  },
  computed:{

  },




};
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
.selection{
  margin-top: 5rem;
  display: flex;
 justify-content: center;
}


@media only screen and (max-width: 767px) {
  .title{
    margin-top:1rem;
    display: flex;
    justify-content: center;

  }
  h1{
    color:white;
    text-align: center;
    align-self: center;
    font-size: 1rem;
  }
  .selection{
    margin-top: 2rem;
  }
}
</style>