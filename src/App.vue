<script setup>
import { ref } from 'vue';
let newItem = ref('');
let items = ref(['piim', 'viin' ,'sai', 'õlu']);

function add(){
    if (newItem.value.trim() !== ''){
    items.value.push(newItem.value);
    }
    newItem.value = '';
}

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
        <ul>
            <li v-for="item in items">{{ item }}</li>
        </ul>
    </div>
       
    </div>
    </template>