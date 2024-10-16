<script setup>
import { ref, computed } from 'vue';
import ItemList from '../components/ItemList.vue';
let newItem = ref('');
let items = ref([
    {text: 'piim', done: true},
    {text: 'viin', done: false},
    {text: 'sai', done: true},
    {text: 'leib', done: false},
    {text: 'õlu', done: true},
    {text: 'banaan', done: false},
]);

function add(){
    if(newItem.value.trim() !== ''){
        items.value.push({text: newItem.value, done: false});
    }
    newItem.value = '';
}

let doneItems = computed(() => items.value.filter(item => item.done));
let toDoItems = computed(() => items.value.filter(item => !item.done));

</script>

<template>
    <div class="container mt-2">
        <div class="field has-addons">
            <div class="control is-expanded">
                <input class="input" type="text" v-model="newItem" @keydown.enter="add">
            </div>
            <div class="control">
                <button class="button is-info" @click="add">
                    Add
                </button>
            </div>
        </div>
        <div class="content">
            <ItemList :items="items" title="All Items"></ItemList>
            <ItemList :items="doneItems" title="Done Items"></ItemList>
            <ItemList :items="toDoItems" title="ToDo Items"></ItemList>
        </div>
    </div>
</template>