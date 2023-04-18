<template>


  <div class="wrapper">

    <Header></Header>

    <div class="box content">

      <RouterView></RouterView>


    </div>


    <div class="footer">
      <footer>
        <p>&copy; 2023 Alberto Monedero Martín and José Pérez Rodríguez</p>
      </footer>
    </div>
  </div>


</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "MainPage",
  components: {

    Header




  },
  methods:{
    updateCurrentRoute(){
      this.$store.commit("search/setCurrentRoute",this.$route.path);
    },
    updateShowSearch() {
      // Dependiendo de la ruta actual, ocultar o mostrar el buscador
      if (this.$route.path === '/country' ||this.$route.path === '/similar'||this.$route.path === '/saved') {
        this.$store.commit("search/setShowSearch",false);
      } else {
        this.$store.commit("search/setShowSearch",true);
      }
    }
  },
  mounted() {
    this.updateShowSearch();
    this.updateCurrentRoute();
  },
  watch: {
    $route() {
      this.updateShowSearch();
      this.updateCurrentRoute();
    }
  }

}

</script>

<style scoped>



.wrapper {
  /*background-color: #10062E;

   */
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto 1fr auto 1fr auto;
  min-height: 100vh;
  background-color: #0A0F00;
  font-family: Futura;
}


.box {
  display: flex;
  flex-direction: column;
  padding: 1rem;
 margin-top: 1.5rem;
}


.footer p{
  color: #ffffee;

}


.content {
  grid-column: 1/6;
  grid-row: 2/5;

  margin: 0;

}

.footer {
  display: flex;
  grid-column: 1/6;
  grid-row: 5/6;
  justify-content: center;
  margin: 0;

}
@media only screen and (max-width: 767px) {

  .footer p{
    color: #f8f8f8;
    font-size: 60%;
  }



}



</style>