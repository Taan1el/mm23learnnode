<script setup>
import { ref } from 'vue';
import Modal from '../components/Modal.vue';
let modalActive = ref(false);
let modal2Active = ref(false);
let modal3Active = ref(false);

</script>
<template>
    <div class="container mt-2">
        <button class="button is-primary" @click="modalActive = true">Modal 1</button>
        <button class="button is-secondary" @click="modal2Active = true">Modal 2</button>
        <button class="button is-warning" @click="modal3Active = true">Modal 3</button>
    </div>
    <Modal :active="modalActive" @close="modalActive = false"
        url="https://bulma.io/assets/images/placeholders/1280x960.png">


    </Modal>
    <Modal :active="modal2Active" @close="modal2Active = false" url="https://picsum.photos/seed/modal2/1280/960">
    </Modal>

    <Modal :active="modal3Active" @close="modal3Active = false">
        <div class="notification is-primary">
            <button class="delete" @click="modal3Active = false"></button>
            Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum
            dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
            nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus
            diam, et dictum <a>felis venenatis</a> efficitur.
        </div>
    </Modal>
</template>