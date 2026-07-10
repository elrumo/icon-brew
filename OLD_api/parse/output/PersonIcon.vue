
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 7.5h3m3 0H9m0 0v3.27m0 0L6 14m3-3.23L12 14" :stroke="color" stroke-linecap="round"/><path d="M10 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" :fill="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9.5h6m6 0h-6m0 0v5.423m0 0L6.75 20M12 14.923L17.25 20" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M13.75 4.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0z" :fill="color"/></svg>
</template>


<script>
    export default {
        name: 'personIcon',
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