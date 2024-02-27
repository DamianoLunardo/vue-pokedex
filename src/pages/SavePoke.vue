<script setup>
import { ref, onMounted } from 'vue';

const savedPokemon = ref([]);

// Evento personalizzato per ricevere il nuovo Pokémon salvato
window.addEventListener('pokemon-saved', (event) => {
  savedPokemon.value.push(event.detail);
});
</script>

<template>
  <div>
    <h1>Ciao</h1>
    <!-- Mostra le informazioni sui Pokémon salvati -->
    <div v-for="(pokemon, index) in savedPokemon" :key="index">
      <p>Name: {{ pokemon.name }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>


<style lang="scss" scoped>
</style>
