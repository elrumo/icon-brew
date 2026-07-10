
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0zM9 3v6.5m0 6v-6m0 0l-4 4.568M9 9.5l4 4.5" :stroke="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9-9v9.25m0 9.25v-9.25m0 0L6 18.5m6-6.25l6.5 6.5" :stroke="color" stroke-width="2"/></svg>
</template>


<script>
    export default {
        name: 'peaceIcon',
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