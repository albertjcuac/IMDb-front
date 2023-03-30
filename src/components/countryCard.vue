<template>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
  />
  <article class="country">



    <router-link v-bind:to="'/country/'+country.iso.toUpperCase()+'/'+country.name" tag="div" class="country__image-container" >

        <span v-bind:class="'fi fi-'+country.iso+'  flag country__flag'" ></span>

    </router-link>
    <div class="description">
      <h1>{{ country.name }}</h1>
      <p>{{ country.number }} movies</p>
    </div>

  </article>

</template>

<script>
export default {
  name: "countryCard",
  props: ["country"],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.country {
  position: relative;
  display: flex;
  flex-flow: column;
  width: 13rem;
  height: 16rem;
  border: 1px solid black;
  background-color: whitesmoke;
  border-radius: 20px;

}




.description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


}
.description h1, .description p{

  line-height: 0;


}
.description h1{
  margin-bottom: 2rem;
}

.country__image-container {
  height:100rem;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.country__flag {
  font-size: 10rem;

  object-fit: fill;
}


</style>
