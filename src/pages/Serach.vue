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

window.addEventListener('pokemon-selected', (event) => {
  // Aggiorna i dettagli del Pokémon con i dati ricevuti dall'evento
  pokemonName.value = event.detail.name;
  pokemonTypes.value = event.detail.types;
  pokemonHeight.value = event.detail.height;
  pokemonWeight.value = event.detail.weight;
  pokemonStats.value = event.detail.stats;
});

</script>

<template>
    <div class="maisc bg">
        <!-- Input per inserire il nome del Pokémon da cercare -->
        <input class="maisc personal-imput" type="text" v-model="search" placeholder="Ricerca il Pokémon">
          <div class="d-button">
            <div>
            <!-- Bottone per avviare la ricerca --> 
            <button class="maisc search" @click="searchPokemon">Search</button>
            </div>
            <div>
            <!-- Bottone per salvare il Pokèmon -->
            <button class="maisc save" @click="savePokemon">Save</button>  
            </div>
          </div>
        <!-- Messaggio di errore, se non esiste il Pokèmon -->
        <p class="maisc" v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
        <!-- Mostra il nome  -->
        <p class="maisc bold-text" v-if="pokemonName"> Name: {{ pokemonName }}</p>
        <!-- Mostra i tipi  -->
        <p class="maisc bold-text" v-if="pokemonTypes.length > 0"> Type: {{ pokemonTypes.join(', ') }}</p>   
        <!-- Mostra l'altezza  -->
        <p class="maisc bold-text" v-if="pokemonHeight"> Height: {{ pokemonHeight }}</p>
        <!-- Mostra il peso -->
        <p class="maisc bold-text" v-if="pokemonWeight"> Weight: {{ pokemonWeight }} lbs</p>
        <!-- Mostra le statistiche-->
        <ul class="maisc stats" v-if="pokemonStats">
        <span class="bold-text">Stats:</span>
          <li class="maisc" v-for="stat in pokemonStats" :key="stat.stat.name">
            {{ stat.stat.name }}: {{ stat.base_stat }}
            <!-- Progress bar per visualizzare il valore della statistica -->
            <progress class="fix-distance" :value="stat.base_stat" max="100">{{ stat.base_stat }}</progress>
          </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/global.scss';

.bg {
  background-color: white;
  padding: 20px;
}

.personal-imput {
  width: 300px;
  height: 30px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
  line-height: 100px;
  
}

.d-button {
  display: flex;
  align-items: center;
  margin-top: 10px;
}
 
.fix-distance {
  width: 100px;
  height: 10px;
  margin-top: 10px;
  border: 1px solid black;
  border-radius: 5px;
}

.stats {
  margin-top: 10px;
}



</style>



