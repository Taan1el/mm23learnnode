<script setup>
import {useRoute, useRouter} from 'vue-router';
const route = useRoute();
const router = useRouter();
console.log(route, router.getRoutes());

</script>
<template>
    <div class="tabs is-centered">
        <ul>
            <li v-for="route in $router.getRoutes()" :class="{'is-active': route.path === $route.path}">
                <RouterLink :to="route.path">{{ route.name }}</RouterLink>
            </li>
        </ul>
    </div>
</template>