import './style.scss';
import { createApp } from 'vue';
import App from './App.vue'; 

import { createMemoryHistory, createWebHashHistory, createWebHistory , createRouter } from 'vue-router';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Buttons from './pages/Buttons.vue';
import NotificationExample from './pages/NotificationExample.vue';
const routes = [
    { path: '/', component: ToDo, name: 'ToDo'},
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/buttons', component: Buttons, name: 'Buttons' },
    { path: '/notifications', component: NotificationExample, name: 'Notifications' },
];
  
const router = createRouter({
    history: createWebHistory(),
    routes,
});

let app = createApp(App).use(router).mount('#app');