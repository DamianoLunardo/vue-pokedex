<script setup>
import HelloWord from './components/HelloWorld.vue'
import SearchPart from './components/SearchPart.vue';

</script>
export default {
  components: {
    HelloWorld,
    SearchPart
  }
}

<template>
 <HelloWord />
 <SearchPart />
  
</template>

<style lang="scss">
@use './styles/global.scss'

</style>
