<template>
  <p style="color:white">HOLAAAA {{movieName}}</p>
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

</style>