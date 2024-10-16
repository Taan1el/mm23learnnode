<script setup>
defineProps(['active', 'url']);
</script>
<template>
    <div class="modal" :class="{ 'is-active': active }">
        <div class="modal-background" @click="$emit('close')"></div>
        <div class="modal-content">
            <slot>
                <p class="image is-4by3">
                    <img :src="url" alt="">
                </p>
            </slot>

        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
</template>