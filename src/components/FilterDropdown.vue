<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="filter-dropdown" ref="filter">
    <button class="filter-dropdown__button" @click="toggleFilter">
      <i class="fa fa-filter"></i> Filters
    </button>
    <div v-show="showFilter" class="filter-dropdown__filter">
      <div v-for="(category, index) in categories" :key="index" class="filter-dropdown__filter-item">
        <span class="filter-dropdown__filter-item-name">{{ category.name }}</span>
        <select class="filter-dropdown__filter-item-select" v-model="selectedValues[category.name]" @change="updateFilters(category.name, selectedValues[category.name])">
          <option disabled value="">Please select one</option>
          <option v-for="option in category.options" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
      <button class="filter-dropdown__clear-all-button" @click="clearAllFilters">Clear All</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedValues: {},
      showFilter: false,
    };
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    handleOutsideClick(event) {
      if (!this.$refs.filter.contains(event.target)) {
        this.showFilter = false;
      }
    },
    toggleFilter() {
      this.showFilter = !this.showFilter;
    },
    clearAllFilters() {
      for (let category of this.categories) {
        this.selectedValues[category.name] = 'all';
        this.updateFilters(category.name, 'all');
      }
    },
    updateFilters(categoryName, selectedValue) {
      this.selectedValues[categoryName] = selectedValue;
      switch (categoryName) {
        case 'Genre':
          this.$store.commit('search/setSelectedGenre', selectedValue);
          break;
        case 'Duration':
          this.$store.commit('search/setSelectedDuration', selectedValue);
          break;
        case 'Language':
          this.$store.commit('search/setSelectedLanguage', selectedValue);
          break;
      }
    }
  },


}
</script>


<style scoped>
.filter-dropdown {
  position: relative;
  display: inline-block;
}

.filter-dropdown__button {
  background-color: #9a4ef1;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-top: 1.4rem;
  height: 2.3rem;
  margin-bottom: 1.4rem;
  font-family: Futura;
}

.filter-dropdown__filter {
  position: absolute;
  top: 2.9rem;
  right: auto;
  background-color: #202020;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  margin-top: 1rem;
  width: 9rem;
}

.filter-dropdown__filter-item {
  display: flex;
  align-items: center;
  margin-right: 0;
  justify-content: flex-end;
}

.filter-dropdown__filter-item-name {
  margin-right: 0.5rem;
  color: white;
  font-size: 0.9rem;
}

.filter-dropdown__filter-item-select {
  width: 5rem;
}

.filter-dropdown__clear-all-button {
  appearance: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;
  cursor: pointer;
  display: inline-block;
  font-family: Futura;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  list-style: none;
  margin-top: 1rem;
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
}

.filter-dropdown__clear-all-button:hover {
  background-color: lightgray;
  text-decoration: none;
  transition-duration: 0.1s;
}

.filter-dropdown__clear-all-button:disabled {
  background-color: #fafbfc;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959da5;
  cursor: default;
}

.filter-dropdown__clear-all-button:active {
  background-color: #edeff2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.filter-dropdown__clear-all-button:focus {
  outline: 1px transparent;
}


</style>
