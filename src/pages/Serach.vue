<script setup>
import axios from 'axios';
import { ref } from 'vue';

// Variabili di riferimento per memorizzare i dati del Pokémon e il messaggio di errore
const search = ref(''); // Ricerca del Pokémon
const errorMessage = ref(''); // Messaggio di errore, se presente
const pokemonName = ref(''); // Nome del Pokémon
const pokemonStats = ref(null); // Statistiche del Pokémon
const pokemonTypes = ref([]); // Tipi del Pokémon
const pokemonHeight = ref(0); // Altezza del Pokémon
const pokemonWeight = ref(0); // Peso del Pokémon
const savedPokemon = ref([]); // Array per memorizzare i Pokémon salvati

// Funzione per cercare un Pokémon
const searchPokemon = async () => {
  try {
    // Effettua una richiesta GET all'API di PokeAPI per ottenere i dati del Pokémon
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.value}`);
    // Estrai i dati della risposta
    const data = response.data; 
    // Ottieni nome del Pokémon
    pokemonName.value = data.name;
    // Ottieni statistiche del Pokémon
    pokemonStats.value = data.stats;
    // Ottieni tipi del Pokémon
    pokemonTypes.value = data.types.map(type => type.type.name);
    // Ottieni altezza del Pokémon
    pokemonHeight.value = data.height;
    // Ottieni peso del Pokémon
    pokemonWeight.value = data.weight;
    // Inizialmente vuoto
    errorMessage.value = ''; 
  } catch (error) {
    console.error('Nessun Pokémon trovato:', error);
    // Se non viene trovato il Pokémon, reimposta i valori delle variabili
    pokemonName.value = '';
    pokemonStats.value = null;
    pokemonTypes.value = [];
    pokemonHeight.value = 0;
    pokemonWeight.value = 0;
    // Messaggio di errore a schermo
    errorMessage.value = 'No Pokémon found, do another search.';
  }
}; 

// Funzione per salvare il Pokémon trovato, quindi nome stats ecc...
const savePokemon = () => {
  const newPokemon = {
    name: pokemonName.value,
    types: pokemonTypes.value,
    height: pokemonHeight.value,
    weight: pokemonWeight.value,
    stats: pokemonStats.value
  };
  savedPokemon.value.push(newPokemon);
  console.log(savedPokemon.value);
  // Invia un evento personalizzato per notificare il nuovo Pokemon salvato
  const event = new CustomEvent('pokemon-saved', { detail: newPokemon });
  window.dispatchEvent(event);
};

</script>

<template>
    <div>
        <!-- Input per inserire il nome del Pokémon da cercare -->
        <input type="text" v-model="search" placeholder="Ricerca il Pokémon">
        <!-- Bottone per avviare la ricerca -->
        <button @click="searchPokemon">Search</button>
        <!-- Bottone per salvare il Pokèmon -->
        <button @click="savePokemon">Save</button>
        <!-- Messaggio di errore, se non esiste il Pokèmon -->
        <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
        <!-- Mostra il nome  -->
        <p v-if="pokemonName"> Name: {{ pokemonName }}</p>
        <!-- Mostra i tipi  -->
        <p v-if="pokemonTypes.length > 0"> Type: {{ pokemonTypes.join(', ') }}</p>   
        <!-- Mostra l'altezza  -->
        <p v-if="pokemonHeight"> Height: {{ pokemonHeight }}</p>
        <!-- Mostra il peso -->
        <p v-if="pokemonWeight"> Weight: {{ pokemonWeight }}</p>
        <!-- Mostra le statistiche-->
        <ul v-if="pokemonStats">
          Stats:
            <li v-for="stat in pokemonStats" :key="stat.stat.name">{{ stat.stat.name }}: {{ stat.base_stat }}</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

</style>



