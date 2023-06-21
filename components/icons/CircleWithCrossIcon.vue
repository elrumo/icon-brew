
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198286)" :stroke="color"><circle cx="9" cy="9" r="7"/><path d="M14.95 3.05L2 16m11.9-2.1L16 16 2 2m11.9 2.1L16 2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198286"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191294)" :stroke="color" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M20.5 3.5L2 22m17-3l3 3L2 2m17 3l3-3" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191294"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'circle-with-crossIcon',
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