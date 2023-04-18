<template>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <article class="movie" :key="movie.id">
    <div class="movie__image-container">

      <img class="movie__image" v-bind:alt="'movie image of'+movie.name" v-bind:src="movie.imageUrl">
    </div>
    <div class="description">
        <h1>{{ movie.primaryTitle }}</h1>
        <p>{{ movie.startYear }}, {{ movie.director }}</p>
      <div class="misc">
        <div class="rating">
          <i class="fa fa-star" style="color: #fcff42;"></i>
          <span>{{ movie.averageRating}}</span>
        </div>
      </div>
    </div>
    <div class="info" :class="{ 'show': showInfo }">
      <div class="info2">
        <p>{{movie.runtimeMinutes}} min</p>
        <div class ="genres">
        <button class="label" v-for="genre in movie.genres" :key="genre" disabled>{{ genre }}</button>
        </div>
      </div>

      <div class="info3">
        <p> Writer: {{ movie.writer }}</p>
        <p> Cast: {{ movie.actors }}</p>
        <p> Rated: {{ movie.rated }}</p>
      </div>


    </div>
  </article>
</template>

<script>
export default {
  name: "movieCard",
  props: ["movie"],
  data() {
    return {
     showInfo: false,
    }
  }
}
</script>

<style scoped>

.movie {
  position: relative;
  display: flex;
  flex-flow: column;
  width: 18rem;
  height: 25rem;
  background-color:#202020;
  color:white;
  border-radius: 20px;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}




 .movie:hover {
  transform: rotateY(180deg);
}

.description {
  display: flex;
  flex-direction: column;
  align-items: center;




}
.description h1, .description p{



}
.description h1{
  margin-bottom: 0.5rem;
  font-size: 100%;

}

.movie__image-container {
  height: 14rem; /* ajusta el tamaño a tu preferencia */
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin: 1rem; /* agrega un margen alrededor de la imagen */
}


.movie__image {
  height: 100%;
  width: 100%;
  object-fit: fill;
}


.label{

  background-color: #9a4ef1;
  color: white;
  margin-left: 0.3rem;
}

.misc{
  display: flex;
  margin-top: 1rem;
  margin-bottom: 0.5rem;


}
.info {
  border-radius: 20px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  box-sizing: border-box;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
  background-color:#202020;
}

.info p {
  margin: 0.5rem 0;
}
.info2{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
.info3{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
}
.info3 p{
  align-self: flex-start;
}

.genres{
  display: flex;


}
.rating {
  display: flex;
  align-items: center;
  justify-content: center;




}

.rating i {
  margin-right: 0.5rem;
}

.rating span {
  font-weight: bold;
}

.show {
  transform: rotateY(0deg);
}

</style>
