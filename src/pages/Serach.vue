<script setup>
import axios from 'axios';
import { ref } from 'vue';

//la variabile search la definiamo come riferimento con ref e inizializzata a un valore vuoto
const search = ref('');
// gestisco il caso in cui il nome del pokemon non esiste
const errorMessage = ref('');

const searchPokemon = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.value}`);
    // Stampiamo i dati del Pokémon nella console
    console.log(response.data); 
    // inizialmente vuoto
    errorMessage.value = ''; 
  } catch (error) {
    console.error('Nessun pokemon trovato:', error);
    // messaggio di errore a schermo
    errorMessage.value = 'Nessuna pokemon trovato.';
  }
};
</script>

<template>
  <div>
    <input type="text" v-model="search" placeholder="Ricerca il pokemon">
    <button @click="searchPokemon">Search</button>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>

</style>
