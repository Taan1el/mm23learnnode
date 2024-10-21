alert('hello')

import './style.scss';
import { createApp } from 'vue';
import App from './App.vue'; 

import { createMemoryHistory, createWebHashHistory, createWebHistory , createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Buttons from './pages/Buttons.vue';
import NotificationExample from './pages/NotificationExample.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import RickAndMorty from './pages/RickAndMorty.vue';

const routes = [
    { path: '/', component: ToDo, name: 'ToDo'},
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/buttons', component: Buttons, name: 'Buttons' },
    { path: '/notifications', component: NotificationExample, name: 'Notifications' },
    { path: '/chuck', component: ChuckNorris, name: 'Chuck Norris' },
    { path: '/rickandmorty', component: RickAndMorty, name: 'Rick and Morty' },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});

let app = createApp(App).use(router).mount('#app');