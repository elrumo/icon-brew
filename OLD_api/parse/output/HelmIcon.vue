
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 9A5 5 0 1 1 4 9a5 5 0 0 1 10 0z" :stroke="color"/><path d="M9 2.5v13M15.5 9h-13m2.006-4.494l8.945 8.945m.022-8.966L4.457 13.5" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191364)" :stroke="color" stroke-width="2"><circle cx="12" cy="12" r="7"/><path d="M5 5l14.086 14.086m0-14.086L5 19.086m-2-7.043h18M12 3v18" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191364"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'helmIcon',
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