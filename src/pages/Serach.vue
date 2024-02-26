<script setup>
import axios from 'axios';
import { ref } from 'vue';

const search = ref('');

const searchPokemon = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.value}`);
    console.log(response.data); // Stampiamo i dati del Pokémon nella console
  } catch (error) {
    console.error('Nessun pokemon trovato:', error);
  }
};
</script>

<template>
  <div>
    <input type="text" v-model="search" placeholder="Ricerca il pokemon">
    <button @click="searchPokemon">Search</button>
  </div>
</template>

<style scoped>
/* Aggiungi stili CSS se necessario */
</style>
