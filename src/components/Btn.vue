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
                'white',
                'light',
                'dark',
                'text',
                'ghost',
            ].includes(value);
        }
    },
    light: {
        type: Boolean,
        required: false,
    },
    dark: {
        type: Boolean,
        required: false,
    },
    size: {
        type: String,
        required: false,
        validator(value, props) {
            return [
                'small',
                'normal',
                'medium',
                'large',
            ].includes(value);
        }
    },
    responsive: {
        type: Boolean,
        required: false,
    },
    fullwidth: {
        type: Boolean,
        required: false,
    },
    outlined: {
        type: Boolean,
        required: false,
    },
    inverted: {
        type: Boolean,
        required: false,
    },
    rounded: {
        type: Boolean,
        required: false,
    },
    state: {
        type: String,
        required: false,
        validator(value, props) {
            return [
                'hover',
                'focus',
                'active',
                'loading',
                'static'
            ].includes(value);
        }
    },
    disabled: {
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
    if(props.dark){
        names.push('is-dark');
    }
    if(props.size){
        names.push('is-' + props.size);
    }
    if(props.responsive){
        names.push('is-responsive');
    }
    if(props.responsive){
        names.push('is-fullwidth');
    }
    if(props.outlined){
        names.push('is-outlined');
    }
    if(props.inverted){
        names.push('is-inverted');
    }
    if(props.rounded){
        names.push('is-rounded');
    }
    if(props.state){
        names.push('is-' + props.state);
    }
    if(props.disabled){
        names.push('is-disabled');
    }
    console.log(props);
    return names.join(' ');
})
</script>
<template>
    <button class="button" :class="classNames">
        <slot></slot>
    </button>
</template>