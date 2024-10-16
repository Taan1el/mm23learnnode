<script setup>
import { RouterLink, useRoute,useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();
console.log(route,router.getRoutes());

</script>

<template>
<div class="tabs is-centered">
    <ul>
        <!--<li v-for="route in $router.getRoutes()" :class="{'is-active' : route.path === $route.path}">
            <RouterLink :to="route.path">{{ route.name }}</RouterLink>
        </li> -->
        <RouterLink :to="route.path" v-for="route in $router.getRoutes()"
            custom v-slot="{isActive, href, navigate}">
            <li :class="{'is-active':isActive}">
                <a :href="href" @click="navigate">{{ route.name }}</a>
            </li>
        </RouterLink>
    </ul>
</div>
</template>