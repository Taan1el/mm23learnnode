
<script setup>
import axios from 'axios';
import { ref } from 'vue';
import CharacterCard from '../components/CharacterCard.vue';
let characters = ref([]);
axios.get('https://rickandmortyapi.com/api/character').then(response => {
    console.log(response);
    characters.value = response.data.results;
});
</script>
<template>
<div class="container">
    <div class="columns is-multiline">
        <div class="column is-one-quarter" v-for="character in characters">
            <CharacterCard :character="character"></CharacterCard>
        </div>
    </div>
    
</div>
</template>
