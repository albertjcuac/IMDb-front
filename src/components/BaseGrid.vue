<template>
  <section class="grid">
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'BaseGrid',
}
</script>

<style scoped>
.grid {
  display: flex;
  flex-flow: row wrap;
  list-style-type: none;
  justify-content: center;
  gap: 4em;
  width: 80%;
  padding-top: 2rem;
  margin-bottom: 7rem;
  align-self: center;




}


</style>
