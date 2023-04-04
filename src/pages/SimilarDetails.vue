<template>

  <div class="title">

    <h1> Showing similar movies to {{movieName}}</h1>


  </div>
</template>

<script>
export default {
  name: "SimilarDetails",
  data(){
    return{
      movieName: this.$route.params.name ,
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

@media only screen and (max-width: 767px) {
  .title {
    flex-direction: column-reverse;
    font-size: 0.8rem;
  }
}
</style>