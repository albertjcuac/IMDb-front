<template>
  <div class="autocomplete">
    <input  class="search" placeholder="Search for a movie" v-model="search"
           @input="onChange"
            type="text"
    />
    <ul v-show="isOpen"
        class="autocomplete-results"
    >
      <li
          v-for="(result, i) in results"
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
  props: {
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      search: '',
      results: [],
      isOpen: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {

    setResult(result) {
      this.search = result;
      this.isOpen = false;
    },
    filterResults() {
      this.results = this.items.filter(item => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1);
    },
    onChange() {
      this.filterResults();
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
  border-radius: 30px;
  font-size: 1rem;
  padding: 1em 1em;
  border: 0.1em solid #c7c7c7;
  align-self: center;

}

.autocomplete-results {
  position: absolute;
  padding: 1em 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  border: 1px solid #9a4ef1;
  border-radius: 10px;
  width: 20rem;
  height: auto;
  max-height: 4rem;
  overflow: auto;
  background-color: #1F2D50;
  z-index: 9999;


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
    width: 80%;
    height: 0.1rem;
    border-radius: 30px;
    font-size: 1rem;
    padding: 1em 1em;
    border: 0.1em solid #c7c7c7;
    align-self: center;

  }


  .autocomplete-results {
    position: absolute;
    padding: 1em 0.5rem;
    margin: 0.5rem;
    border: 1px solid #9a4ef1;
    border-radius: 10px;
    width: 10rem;
    height: auto;
    overflow:auto;
    z-index: 9999;
  }

}
</style>