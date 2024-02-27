<script setup>
import HelloWord from './components/Header.vue'
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
    <HelloWord />
    <SearchPart />  
  </section>
 
  
</template>

<style lang="scss">
@use './styles/global.scss'

</style>
