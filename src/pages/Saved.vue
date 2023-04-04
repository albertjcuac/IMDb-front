<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <div class="title">

    <h1> Saved movies</h1>
    <i class="fa fa-bookmark icon"></i>

  </div>
</template>

<script>
export default {
  name: "Saved"
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
.icon{
  color: purple;
  font-size: 3rem;
  margin-left: 1rem;
  align-self: center;
}

@media only screen and (max-width: 767px) {
  .title {
    font-size: 0.8rem;
  }
  .icon{

    font-size: 2rem;
  }
}
</style>