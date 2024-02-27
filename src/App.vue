<script setup>
import Header from './components/Header.vue'
import SearchPart from './components/SearchPart.vue';

</script>
export default {
  components: {
    Header,
    SearchPart
  }
}

<template>
  <section class="container">
    <Header />
    <SearchPart />  
  </section>
 
  
</template>

<style lang="scss">
@use './styles/global.scss';

.container {
  display: flex;
  flex-direction: column;
}



</style>
