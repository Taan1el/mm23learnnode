<script setup>
import { ref } from 'vue';
 
let message = ref('Hello Vue!');
setTimeout(() => {
    message.value ='Something else'
}, 10000);
</script>
 
<template>
<h1>{{ message }}</h1>
</template>
 