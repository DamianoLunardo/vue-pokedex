<script setup>
import { ref, onMounted } from 'vue';

// Variabile per memorizzare i Pokémon salvati
const savedPokemon = ref([]);

// Carica i dati salvati dal localStorage all'avvio del componente
onMounted(() => {
  const savedData = localStorage.getItem('savedPokemon');
  if (savedData) {
    savedPokemon.value = JSON.parse(savedData);
  }
});

// Funzione per salvare i Pokémon nel localStorage
const saveToLocalStorage = () => {
  localStorage.setItem('savedPokemon', JSON.stringify(savedPokemon.value));
};

// Evento personalizzato per ricevere il nuovo Pokémon salvato
window.addEventListener('pokemon-saved', (event) => {
  savedPokemon.value.push(event.detail);
  saveToLocalStorage();
});

// Funzione per rimuovere un Pokémon dalla lista e salvare nel localStorage
const removePokemon = (index) => {
  savedPokemon.value.splice(index, 1);
  saveToLocalStorage();
};

// Funzione per impostare il Pokémon selezionato per visualizzare il dettaglio
const showPokemonDetail = (pokemon) => {
  const event = new CustomEvent('pokemon-selected', { detail: pokemon });
  window.dispatchEvent(event);
};
</script>

<template>
  <div class="personalize">
    <h1 class="maisc">My Pokemon</h1>
    <!-- Mostra le informazioni sui Pokémon salvati -->
    <div class="maisc"  v-for="(pokemon, index) in savedPokemon" :key="index">
      <div class="saved-pokemon" @click="showPokemonDetail(pokemon)">
        <p class="maisc"> {{ pokemon.name }}</p>
        <button class="remove" @click.stop="removePokemon(index)">Remove</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/global.scss';
.saved-pokemon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  flex-wrap: wrap;
}

.personalize {
    border: solid 2px white;
    padding: 20px;
    background-color: white;
}

</style>






