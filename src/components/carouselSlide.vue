<template>
<div class="slide">
  <div class="slide__card">
    <h1 class="slide__card__title">{{page.title}}</h1>
    <img class="slide__card__image" v-bind:src="page.img" >

  </div>

 <div>
   <p class="slide__text">{{page.text}}</p>
   <router-link
       :to="page.route"
       custom
       v-slot="{ href, navigate }"
   >
   <a :href="href" @click="navigate" role="link" class="slide__button">Lets begin!</a>
   </router-link>
 </div>

</div>
</template>

<script>

export default {
  name: "carouselSlide",
  props: ["page"]
}
</script>

<style>
a.slide__button{
  background-color:#F6E49A;
  display:inline-block;
  padding:0.3em 1.2em;
  margin:0 0.1em 0.1em 0;
  border:0.16em solid rgba(255,255,255,0);
  border-radius:2em;
  box-sizing: border-box;
  text-decoration:none;
  font-weight:300;
  color:black;
  text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
  text-align:center;
  transition: all 0.2s;
}
a.slide__button:hover{
  color: #ffffee;
}

.slide {
  width: 100%;
  height: 18rem;
  background-color: white;
  color: black;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.slide__card__image {
  width:15rem; /* Anchura específica para la imagen */
  max-width: 30rem; /* Anchura máxima para la imagen */
  height: auto;
  padding-bottom: 2rem;
}
.slide__card{
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
}
/* si se esta usando*/
.carousel__icon{
  transform: scale(2)!important;
}

.slide__text{
  font-size: 1.2rem;
}


@media only screen and (max-width: 767px) {

  .slide {
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
  a.slide__button{
    display:block;
    margin-bottom: 2rem;

    }
  .slide__card {
    position: relative;
    display: flex;
    flex-flow: column;
    width: 15rem;
    height: 22rem;
  }
  .slide__card__image {
    width: 70%; /* Anchura específica para la imagen */
    max-width: 18rem; /* Anchura máxima para la imagen */
    height: auto;
    padding-bottom: 0;
  }
  .slide__text{
    font-size: 1rem;
  }
  .slide__card__title{
    font-size: 1.2rem;
  }
  /* si se esta usando*/
  .carousel__icon{
    transform: scale(3)!important;
  }
}


</style>