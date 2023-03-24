<template>
  {{ filter }}<input class="checkbox" type="radio" :value="filter" @change="applyFilter" name="filters" >
</template>

<script>
export default {
  name: "FilterInput",
  props: ["filter"],
  methods: {
    applyFilter(){
      this.$store.commit('search/setSelectedFilter',this.filter)
    }
  }
}
</script>


<style scoped>
.checkbox{
  margin-right: 0.5rem;
}

</style>