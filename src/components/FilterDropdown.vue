<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div class="filter-dropdown">
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
  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter;
    },
  },
};
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
  top: 40px;
  right: 0;
  background-color: #1F2D50;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  margin-top:1rem;
  border: 0.1em solid #9a4ef1;
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

@media only screen and (max-width: 767px) {

  .filter-dropdown {
    width: 100%;
    display: block;
  }

  .filter-button {
    width: 100%;
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
    margin-left: 0.5rem;
  }

  .filter-item span {
    display: block;
    margin-bottom: 0.25rem;
  }

  .filter-item select {
    max-width: 100%;
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
}
</style>
