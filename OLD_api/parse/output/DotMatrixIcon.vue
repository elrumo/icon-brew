
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-5.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-11 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm0-5.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM10 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm5.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color" :stroke="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="4.5" cy="4.5" r="1.5" :fill="color" :stroke="color" stroke-width="2"/><circle cx="19.5" cy="4.5" r="1.5" :fill="color" :stroke="color" stroke-width="2"/><path d="M13.5 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0 15a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" :fill="color" :stroke="color" stroke-width="2"/><circle cx="19.5" cy="19.5" r="1.5" :fill="color" :stroke="color" stroke-width="2"/><circle cx="4.5" cy="19.5" r="1.5" :fill="color" :stroke="color" stroke-width="2"/><path d="M6 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm7.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" :fill="color" :stroke="color" stroke-width="2"/></svg>
</template>


<script>
    export default {
        name: 'dot-matrixIcon',
        props: {
            size: {
                type: Number,
                required: false,
                default: 24
            },
            color: {
                type: String,
                required: false,
                default: "currentColor"
            }
        }
    }
</script>