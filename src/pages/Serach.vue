<script setup>
import axios from 'axios';
import { ref } from 'vue';

// La variabile search la definiamo come riferimento con ref e inizializzata a un valore vuoto
const search = ref('');
// Gestiamo il caso in cui il nome del Pokémon non esiste
const errorMessage = ref('');
// Variabile per memorizzare il nome del Pokémon
const pokemonName = ref('');
// Variabile per memorizzare le statistiche del Pokémon
const pokemonStats = ref(null);

const searchPokemon = async () => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.value}`);
    // Ottieni il nome del Pokémon dalla risposta
    pokemonName.value = response.data.name;
    // Ottieni le statistiche del Pokémon dalla risposta
    pokemonStats.value = response.data.stats;
    // Inizialmente vuoto
    errorMessage.value = ''; 
  } catch (error) {
    console.error('Nessun Pokémon trovato:', error);
    // Se non viene trovato il Pokémon, reimposta i valori delle variabili
    pokemonName.value = '';
    pokemonStats.value = null;
    // Messaggio di errore a schermo
    errorMessage.value = 'Nessun Pokémon trovato.';
  }
}; 

</script>

<template>
  <div>
    <input type="text" v-model="search" placeholder="Ricerca il Pokémon">
    <button @click="searchPokemon">Search</button>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
    <p v-if="pokemonName">Nome del Pokémon: {{ pokemonName }}</p>
    <ul v-if="pokemonStats">
      <li v-for="stat in pokemonStats" :key="stat.stat.name">{{ stat.stat.name }}: {{ stat.base_stat }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>


