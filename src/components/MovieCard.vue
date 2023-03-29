<template>
  <article class="movie">
    <div class="movie__image-container">

      <img class="movie__image" v-bind:alt="'movie image of'+movie.name" v-bind:src="movie.image">
    </div>
    <div class="description">
        <h1>{{ movie.name }}</h1>
        <p>{{ movie.year }}, nombredirector</p>
    </div>
    <div class="info" :class="{ 'show': showInfo }">
      <p>113min</p>
      <button class="label" disabled="true">comedy</button>
      <p>Ali G unwittingly becomes a pawn in the Chancellor's plot to overthrow the Prime Minister of Great Britain. However, Ali is embraced by the nation as a voice of the youth, making the PM and his government more popular than ever.</p>

    </div>
  </article>
</template>

<script>
export default {
  name: "movieCard",
  props: ["movie"],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.movie {
  position: relative;
  display: flex;
  flex-flow: column;
  width: 13rem;
  height: 18rem;
  border: 1px solid black;
  background-color: whitesmoke;
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
  justify-content: center;


}
.description h1, .description p{

  line-height: 0;

}
.description h1{
  margin-bottom: 0.8rem;
}

.movie__image-container {
  height:100rem;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.movie__image {
  height: 100%;
  width: 100%;
  object-fit: fill;
}


.label{
  border-color: #e7e7e5;
  color: black;
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
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
  background-color: whitesmoke;
}

.info p {
  margin: 0.5rem 0;
}

.show {
  transform: rotateY(0deg);
}
</style>
