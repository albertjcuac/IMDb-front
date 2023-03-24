<template>
  <body>
  <div class="wrapper">

    <Header></Header>

    <div class="box content">
      <main>
      <RouterView></RouterView>

      </main>
    </div>

    <div class="footer">
      <footer>
        <p>&copy; 2023 Alberto Monedero Martín and José Pérez Rodríguez</p>
      </footer>
    </div>
  </div>
  </body>

</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "MainPage",
  components: {

    Header




  },
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto 1fr auto 1fr auto;
  height: 100vh;
  background-color: #10062E;
}

.box {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
}


.footer p{
  color: #f8f8f8;
}


.content {
  grid-column: 1/6;
  grid-row: 2/5;
}

.footer {
  grid-column: 1/6;
  grid-row: 5/6;
  text-align: center;

}
</style>