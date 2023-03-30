<template>
  <header class="header">
    <router-link to="/" tag="div" class="logo">

      <img class="logo__image" src="@/static/clapperboard-256.png">
      <div class="logo__title">
        <h4>IMDb</h4>
        <h2>Movie Scope</h2>
      </div>



      </router-link>

    <SearchWithSelect
        :items="[
        'Taxi Driver',
        'Amanece Que No Es Poco',
        'West Side story',
        'The Breakfast Club',
        'Clerks II'
      ]"
    />
  <filter-dropdown v-bind:categories="categories"></filter-dropdown>

  </header>
</template>

<script>
import searchInput from "@/components/SearchInput.vue";
import SearchWithSelect from "@/components/SearchWithSelect.vue";
import FilterDropdown from "@/components/FilterDropdown.vue";
export default {
  name: "Header",
  components:{
    FilterDropdown,
    SearchWithSelect,
    searchInput
  },
  data(){
    return{
      categories:[{
        "name":"Genre",
        "options":["comedy","drama","action","fantasy"]



      },
        {
          "name":"Duration",
          "options":["under 1h","1h-2h","over 2h"]

        },
        {
          "name":"Language",
          "options":["spanish","english","french","italian","german"]

        }]
    }

  }
}
</script>

<style scoped>
.logo{

  display: flex;
  margin-left: 2rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  align-items: center;

}
.logo__image {
  width: 2.5rem;
  height: 2.5rem;

}

.logo__title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 0.5em;
}
.header {
  grid-column: 1/6;
  grid-row: 1/2;
  display: flex;
  justify-content: space-around;
  background-color: #1F2D50;
  flex-wrap: wrap

}
.logo__title h4, .logo__title h2 {
  margin: 0;
  text-align: center;
  line-height: 1.2em;
  color:white ;
}

@media only screen and (max-width: 767px) {

  .header {
    grid-column: 1/6;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #1F2D50;
    padding-bottom: 1rem;


  }
  .logo {

    display: flex;
    margin-right: 3rem;
    padding-bottom: 1rem;
    padding-top: 1rem;
    align-items: center;
  }
}

</style>