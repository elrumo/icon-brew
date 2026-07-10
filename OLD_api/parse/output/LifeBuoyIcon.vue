
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="6.5" :stroke="color"/><circle cx="9" cy="9" r="3.5" :stroke="color"/><path d="M6.5 6.5l-2-2m9 9l-2-2m0-5l2-2m-9 9l2-2" :stroke="color"/></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191383)" :stroke="color" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M9 9L6 6m12 12l-3-3m0-6l3-3M6 18l3-3"/></g><defs><clipPath id="clip0_489_191383"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'life-buoyIcon',
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