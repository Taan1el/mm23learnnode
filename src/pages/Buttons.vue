<script setup>
import Btn from '../components/Btn.vue';
</script>
<template>
    <div class="container mt-2">
        <Btn color="primary" dark size="large" rounded state="loading">Button is cool</Btn>
        <a href="https://google.com" @click.prevent="console.log('hello')">Google</a>
    </div>
</template>