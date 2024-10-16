
<script setup>
import { computed } from 'vue';
let props = defineProps({
    color: {
        type: String,
        required: false,
        validator(value, props) {
            return [
                'primary',
                'link',
                'info',
                'success',
                'warning',
                'danger',
                'light',
            ].includes(value);
        }
    },
    light: {
        type: Boolean,
        required: false,
    },

});

let classNames = computed(() => {
    let names = [];
    if(props.color){
        names.push('is-' + props.color);
    }
    if(props.light){
        names.push('is-light');
    }
    console.log(props);
    return names.join(' ');
})
</script>
<template>
   <div class="notification" :class="classNames">
  <button class="delete"></button>
  <slot></slot>
</div>
</template>
