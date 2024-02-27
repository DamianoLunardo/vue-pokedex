<script setup>
import { ref } from 'vue';

// Variabile per memorizzare i Pokémon salvati
const savedPokemon = ref([]);

// Evento personalizzato per ricevere il nuovo Pokémon salvato
window.addEventListener('pokemon-saved', (event) => {
  savedPokemon.value.push(event.detail);
});

// Funzione per rimuovere un Pokémon dalla lista dei salvati
const removePokemon = (index) => {
  savedPokemon.value.splice(index, 1);
};

// Variabile per memorizzare il Pokémon selezionato per il dettaglio
const selectedPokemon = ref(null);

// Funzione per impostare il Pokémon selezionato per visualizzare il dettaglio
const showPokemonDetail = (pokemon) => {
  selectedPokemon.value = pokemon;
};
</script>

<template>
  <div>
    <h1>Ciao</h1>
    <!-- Mostra le informazioni sui Pokémon salvati -->
    <div v-for="(pokemon, index) in savedPokemon" :key="index">
      <div @click="showPokemonDetail(pokemon)">
        <p>Name: {{ pokemon.name }}</p>
        <button @click.stop="removePokemon(index)">Remove</button>
      </div>
    </div>
    <!-- Dettaglio del Pokémon selezionato -->
    <div v-if="selectedPokemon">
      <h2>Dettaglio del Pokémon</h2>
      <p>Name: {{ selectedPokemon.name }}</p>
      <p>Types: {{ selectedPokemon.types.join(', ') }}</p>
      <p>Height: {{ selectedPokemon.height }}</p>
      <p>Weight: {{ selectedPokemon.weight }}</p>
      <p>Stats:</p>
      <ul>
        <li v-for="stat in selectedPokemon.stats" :key="stat.stat.name">
          {{ stat.stat.name }}: {{ stat.base_stat }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>





