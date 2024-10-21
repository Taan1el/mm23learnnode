<script setup>
import { ref } from 'vue';

let joke = ref('');
let response = await fetch('https://api.chucknorris.io/jokes/random');
let data = await response.json();
joke = data.value;
</script>
<template>
    <div class="container">
        <div class="content">
            <h1>{{ joke }}</h1>
        </div>
    </div>
</template>