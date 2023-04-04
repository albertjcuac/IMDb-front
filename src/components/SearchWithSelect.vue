<template>
  <div class="autocomplete">
    <input  class="search" placeholder="Search for a movie" v-model="searchValue"
            @click="onChange"
            type="text"
            @input="handleSearch"
    />

    <ul v-show="isOpen" class="autocomplete-results">
      <li>
        <h5 class="autocomplete-title" v-show="isOpen">Recent searches</h5>
        <hr>
      </li>

      <li
          v-for="(result, i) in recentSearches"
          :key="i"
          @click="setResult(result)"
          class="autocomplete-result"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchWithSelect",
  data() {
    return {
      searchValue: '',
      isOpen: false,
      recentSearches: ["Taxi driver", "Amanece que no es poco", "Labyrinth"],
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    handleSearch(event) {
      this.$store.commit('search/setQuery', event.target.value)
    },
    setResult(result) {
      this.searchValue = result;
      this.$store.commit('search/setQuery', result)
      this.isOpen = false;
    },
    onChange() {
      this.isOpen = true;
    },
    handleClickOutside(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    }
  }
}
</script>



<style scoped>


.autocomplete {

 align-self: center;


}
.search {
  width: 20rem;
  height: 0.1rem;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 30px;
  border-top-right-radius:30px;
  font-size: 1rem;
  padding: 1em 1em;
  border: 0.1em solid #c7c7c7;
  align-self: center;


}

.autocomplete-results {
  position: absolute;
  padding: 0.5rem 0.5rem;
  margin-top: 0;
  border-radius: 4px;
  width: 21rem;
  height: auto;
  max-height: 8rem;
  overflow: auto;
  background-color: #202020;
  z-index: 9999;


}
.autocomplete-title {
  font-weight: bold;
  margin: 0;
  padding: 0.5em;

  color: white;
}

.autocomplete-result {

  list-style: none;
  text-align: left;
  padding: 4px 2px;
  cursor: pointer;
  color: white;
}

.autocomplete-result:hover {
  background-color:#9a4ef1;
  color: white;
}
@media only screen and (max-width: 767px) {
  .search {
    width: 14rem;
    height: 0.1rem;
    border-radius: 30px;
    font-size: 0.9rem;
    padding: 1em 1em;
    border: 0.1em solid #c7c7c7;
    align-self: center;

  }


  .autocomplete-results {
    position: absolute;
    padding: 0.5em 0.5rem;
    margin: 0.5rem;
    width: 10rem;
    height: auto;
    overflow:auto;
    z-index: 9999;
  }

}
</style>