<template>
  <div class="dropdown">
    <button @click="toggleDropdown" class="dropbtn">{{ selectedOption || 'Saved Movies' }}</button>
    <div :class="{ 'dropdown-content': true, 'show': isOpen }">
      <input class="search-input" v-model="searchQuery" type="text" placeholder="Search.." id="myInput" />
      <a v-for="option in filteredOptions" :key="option.value" @click="selectOption(option)">
        {{ option.label }}
      </a>
    </div>
  </div>
  <router-link v-bind:to="'/similar/'+selectedOption">

    <button class="similar-button"> Go</button>

  </router-link>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      isOpen: false,
      searchQuery: "",
      selectedOption: this.value,
    };
  },
  computed: {
    filteredOptions() {
      const query = this.searchQuery.trim().toLowerCase();
      if (query) {
        return this.options.filter((option) =>
            option.label.toLowerCase().includes(query)
        );
      }
      return this.options;
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      if (!this.isOpen) {
        this.searchQuery = "";
      }
    },
    selectOption(option) {
      this.selectedOption = option.label;
      this.searchQuery = "";
      this.isOpen = false;
      this.$emit("input", option.value);
    },
  },
};
</script>

<style>
.dropbtn {
  background-color:#9a4ef1;
  color: white;
  padding: 1rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}

.dropbtn:hover,
.dropbtn:focus {
  background-color:#9932CC;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  overflow: auto;
  border: 1px solid #ddd;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 1rem 1.5rem;
  text-decoration: none;
  display: block;
}

.dropdown a:hover {
  background-color: #ddd;
}

.show {
  display: block;
}

.search-input{
  box-sizing: border-box;
  background-position: 14px 12px;
  background-repeat: no-repeat;
  font-size: 1rem;
  padding: 14px 20px 12px 45px;
  border: none;
  border-bottom: 1px solid #ddd;
}
.similar-button{
  margin-left: 0.5rem;
  width: 4rem;
  height: 3.2rem;
}
@media only screen and (max-width: 767px) {
  .search-input {
    padding: 14px 20px 12px 35px;
  }

  .dropdown {
    display: block;
  }

  .dropdown-content {
    max-height: 15rem;
    max-width: 15rem;
    border: none;
  }
}

</style>
