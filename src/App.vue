<script setup>
import Tabs from './components/Tabs.vue';

</script>
<template>
<Tabs></Tabs>
<Suspense>
    <RouterView/>
</Suspense>
</template>