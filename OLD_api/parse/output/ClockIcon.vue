
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 9a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" :stroke="color"/><path d="M9 8.889V6m0 3H5.389" :stroke="color" stroke-linecap="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" :stroke="color" stroke-width="2"/><path d="M12 12V8m0 4H7" :stroke="color" stroke-width="2" stroke-linecap="round"/></svg>
</template>


<script>
    export default {
        name: 'clockIcon',
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