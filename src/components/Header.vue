<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <header class="header">
    <router-link to="/" tag="div" class="logo" style="text-decoration: none;">

      <i class="fa fa-film logo__image" aria-hidden="true"> </i>

        <img src="@/static/Screenshot 2023-04-13 at 09.20.47.png"  class="logo__title">




      </router-link>

<div class="search-experience">
  <filter-dropdown v-if="showSearch" v-bind:categories="categories"></filter-dropdown>
  <SearchWithSelect v-if="showSearch"
      :items="[
        'Taxi Driver',
        'Amanece Que No Es Poco',
        'West Side story',
        'The Breakfast Club',
        'Clerks II'
      ]"
  />
<div class="blank-space" v-if="showSearch===false">   </div>


</div>
    <router-link to="/saved">

      <i class="fa fa-bookmark icon"></i>
    </router-link>
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

  },
  computed:{
    showSearch(){
      return this.$store.getters['search/getShowSearch']

    }

  }
}
</script>

<style scoped>

.search-experience{
  display: flex;
}
.logo{

  display: flex;
  margin-left: 1rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  align-items: center;


}
.logo__image {
  width: 2.5rem;
  height: 2rem;
  color: #F6E4C6;
  font-size: 2rem;

}

.logo__title {

  width: 7rem;
  height: 3rem;

}
.header {
  grid-column: 1/6;
  grid-row: 1/2;
  display: flex;
  justify-content: space-around;
  background-color: #0A0F00;
  flex-wrap: wrap;
  width: 100vw;
  margin: 0px;

}

.icon{
  color: #F6E49A;
  font-size: 2.2rem;
  margin-left: 1rem;
  align-self: center;
  align-self: center;
  margin-top: 1.4rem;
}
.blank-space{
  padding: 1em 1em;
  width: 25.2rem;
  margin-top: 3rem;
  height: 0.1rem;
}

@media only screen and (max-width: 767px) {

  .blank-space{
    padding: 1em 1em;
    width: 10rem;
    margin-top: 3rem;
    height: 0.1rem;
  }
  .header {
    grid-column: 1/6;
    grid-row: 1/2;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1rem;
    background-color:	#101010;

  }
  .logo {

    display: flex;
    margin-right: 3rem;
    font-size: 0.7rem;
  }


  .icon{
    position: fixed;
    height: 1.5rem;
    right:3rem;
    top:0rem;


  }

}

</style>