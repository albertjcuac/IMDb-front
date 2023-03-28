<template>
  <article class="movie">
    <div class="movie__image-container">

      <img class="movie__image" v-bind:alt="'movie image of'+movie.name" v-bind:src="movie.image">
    </div>
    <div class="description"> {{ movie.name }}
      <div v-bind:class="['status',movie.status.toLowerCase()]">{{ movie.status }}</div>
    </div>
    <div class="info" :class="{ 'show': showInfo }">
      <p>Gender:</p>
      <p>Specie:</p>
      <p>Origin:</p>

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
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 1rem;
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
