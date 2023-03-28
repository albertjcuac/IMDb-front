<template>
  <article class="movie">
    <img class="movie__image" v-bind:alt="'movie image of'+movie.name" v-bind:src="movie.image">
    <div class="description"> {{ movie.name }}
      <div v-bind:class="['status',movie.status.toLowerCase()]">{{ movie.status }}</div>
    </div>
    <div class="info" :class="{ 'show': showInfo }">
      <p>Gender:{{ movie.gender }}</p>
      <p>Specie:{{ movie.species }}</p>
      <p>Origin:{{ movie.origin.name }}</p>

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
  width: 15rem;
  height: 22rem;
  border: 1px solid black;
  background-color: whitesmoke;
  border-radius: 50px;
  transition: transform 0.5s ease;
  transform-style: preserve-3d;
}




.movie:hover {
  transform: rotateY(180deg);
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem;
}

.movie__image {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}

.status {
  padding: 5px;
  color: white;
}

.alive {
  background: green;
}

.dead {
  background: red;
}

.unknown {
  background: gray;
}

.info {
  border-radius: 50px;

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
