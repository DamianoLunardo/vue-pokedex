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
  const event = new CustomEvent('pokemon-selected', { detail: pokemon });
  window.dispatchEvent(event);
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
    </div>
</template>

<style lang="scss" scoped>
</style>





