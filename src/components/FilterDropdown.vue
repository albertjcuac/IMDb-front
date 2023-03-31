<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="filter-dropdown" ref="filter">
    <button @click="toggleFilter" class="filter-button">
      <i class="fa fa-filter"></i> Filters
    </button>
    <div v-show="showFilter" class="filter">
      <div v-for="(category, index) in categories" :key="index" class="filter-item">
        <span>{{ category.name }}</span>
        <select v-model="selectedValues[category.name]">
          <option disabled value="">Please select one</option>
          <option v-for="option in category.options" :key="option" :value="option">{{ option }}</option>
        </select>
      </div>
      <button class="clear-all-button" @click="clearAllFilters">Clear All</button>
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
        this.selectedValues[category.name] = null;
      }


    },

  },
}
</script>

<style scoped>
.filter-dropdown {
  position: relative;
  display: inline-block;
}

.filter-button {
  background-color:#9a4ef1;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-top: 1.4rem;
  height:2.3rem;
  margin-bottom: 1.4rem;
}

.filter {
  position: absolute;
  top: 2.9rem;
  right: auto;
  background-color: #202020;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  margin-top:1rem;
  width: 8rem;
}

.filter-item {
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
}

.filter-item span {
  margin-right: 0.5rem;
  color: white;
}

.filter-item select {
  width: 100%;
  max-width: 200px;
}





                                                   /* CSS */
.clear-all-button {
  appearance: none;
  background-color: #FAFBFC;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292E;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
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

.clear-all-button:hover {
  background-color: lightgray;
  text-decoration: none;
  transition-duration: 0.1s;
}

.clear-all-button:disabled {
  background-color: #FAFBFC;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959DA5;
  cursor: default;
}

.clear-all-button:active {
  background-color: #EDEFF2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

.clear-all-button:focus {
  outline: 1px transparent;
}

.clear-all-button:before {
  display: none;
}


@media only screen and (max-width: 767px) {

  .filter-dropdown {
    width: 100%;
    display: block;
  }

  .filter-button {
    width: 95%;
    text-align: center;
  }

  .filter {
    position: static;
    background-color: transparent;
    min-width: auto;
    box-shadow: none;
    padding: 0;
    border: none;


  }

  .filter-item {
    display: block;
    margin-top: 0.5rem;
    width: 12.6rem;

  }

  .filter-item span {
    display: block;
    margin-bottom: 0.25rem;
  }

  .filter-item select {
    max-width: 100%;
    width: 100%;
  }

  .filter-item:not(:last-child) {
    border-bottom: 1px solid #ccc;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .filter-item:first-child {
    margin-top: 0.5rem;
  }

  .filter-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }

  .filter-item:not(:first-child) select {
    border-top: none;
  }

  .filter-item:not(:last-child) select {
    border-bottom: none;
  }
  .clear-all-button {
    font-size: 13px;



  }
}

</style>
