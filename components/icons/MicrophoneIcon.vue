
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 4.5a2 2 0 1 1 4 0V8a2 2 0 1 1-4 0V4.5z" :stroke="color"/><path d="M5 8v.417A3.583 3.583 0 0 0 8.583 12h.834A3.583 3.583 0 0 0 13 8.417V8m-4 4.5v3m0 0H6m3 0h3" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="3" width="6" height="10" rx="3" :stroke="color" stroke-width="2"/><path d="M6 10v.5a5.5 5.5 0 0 0 5.5 5.5h1a5.5 5.5 0 0 0 5.5-5.5V10m-6 7v4m0 0H7m5 0h5" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'microphoneIcon',
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