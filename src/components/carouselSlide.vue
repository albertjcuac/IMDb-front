<template>
<div class="carousel__item">
  <div class="card">
    <h1 class="title">{{page.title}}</h1>
    <img class="card__image" v-bind:src="page.img" >

  </div>

 <div>
   <p class="text">{{page.text}}</p>
   <router-link
       :to="page.route"
       custom
       v-slot="{ navigate }"
   >
   <a @click="navigate" role="link" class="button">Lets begin!</a>
   </router-link>
 </div>

</div>
</template>

<script>

export default {
  name: "carouselSlide",
  props: ["page"],

}
</script>

<style scoped>
a.button{
  background-color:#9a4ef1;
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.1em 0.1em 0;
  border:0.16em solid rgba(255,255,255,0);
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  color:#FFFFFF;
  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
  text-align:center;
  transition: all 0.2s;
}
a.button:hover{
  color: rgba(0,0,0,1);
}

.carousel__item {
  width: 100%;
  height: 18rem;
  background-color: white;
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.card__image {
  width:15rem; /* Anchura específica para la imagen */
  max-width: 30rem; /* Anchura máxima para la imagen */
  height: auto;
  padding-bottom: 2rem;
}
.card{
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;






}
.text{
  font-size: 1.2rem;
}


@media only screen and (max-width: 767px) {

  .carousel__item {
    width: 100%;
    height: 18rem;
    background-color: white;
    color: black;

    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

  }
  a.button{
    display:block;

    margin-bottom: 2rem;

    }
  .card {
    position: relative;
    display: flex;
    flex-flow: column;
    width: 15rem;
    height: 22rem;
  }
  .card__image {
    width: 70%; /* Anchura específica para la imagen */
    max-width: 18rem; /* Anchura máxima para la imagen */
    height: auto;
    padding-bottom: 0;
  }
  .text{
    font-size: 1rem;
  }
  .title{
    font-size: 1.2rem;
  }
}


</style>