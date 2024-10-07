<script setup>
import { ref } from 'vue';
 
let message = ref('Hello Vue!');

</script>
 
<template>
    <div class="container mt-2">
        <input class="input" type="text" v-model="message">
        <div class="content">
            <h1>{{ message.split('').reverse('').join('') }}</h1>
        </div>
    </div>
    
</template>
 