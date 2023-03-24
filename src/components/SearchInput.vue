<template>

    <input class="search" placeholder="Search for a movie" @input="search"/>

</template>

<script>
export default {
  name: 'SearchInput',
  methods: {
    search(event) {
      this.$store.commit('search/setQuery',event.target.value)

    }
  }
}
</script>

<style>
.search {
  width: 30%;
  height: 0.1rem;
  border-radius: 60px;
  font-size: 1rem;
  padding: 1em 1em;
  box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
  border: 0.1em solid #c7c7c7;
  align-self: center;

}
.search:focus {
  outline: none; /* Remueve el outline default */
  border-color: #9a4ef1; /* Define el color del borde cuando esta en focus */
}

@media only screen and (max-width: 767px) {
  .search {
    width: 50%;
    height: 0.1rem;
    border-radius: 60px;
    font-size: 0.8rem;
    padding: 1em 1em;
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
    border: 0.1em solid #c7c7c7;
    align-self: center;

  }

}
</style>

