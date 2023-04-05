<template>
  <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css"
  />
  <article class="country">



    <router-link v-bind:to="'/country/'+country.iso.toUpperCase()+'/'+country.name" tag="div" class="country__image-container" >

        <span v-bind:class="'fi fi-'+country.iso+'  flag country__flag'" ></span>

    </router-link>
    <div class="country__description">
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
  transition: all 0.3s ease;
  box-shadow: 0px 0px 5px rgba(0,0,0,0.2);
}

.country:hover {
  transform: rotate(3deg);
  box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
  transition: all 0.3s ease;
}


.country__description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


}
.country__description h1, .country__description p{

  line-height: 0;


}
.country__description h1{
  margin-bottom: 2rem;
}

.country__image-container {
  height:100rem;
  overflow: hidden;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
/* si se esta usando*/
.country__flag {
  font-size: 10rem;

  object-fit: fill;
}


</style>
