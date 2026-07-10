
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198492)"><circle cx="9" cy="9" r="6.5" :stroke="color" stroke-linecap="round"/><path d="M9 2.5a6.5 6.5 0 1 1 0 13v-13z" :fill="color"/></g><defs><clipPath id="clip0_489_198492"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191306)"><circle cx="12" cy="12" r="9" :stroke="color" stroke-width="2" stroke-linecap="round"/><path d="M12 3a9 9 0 1 1 0 18V3z" :fill="color"/></g><defs><clipPath id="clip0_489_191306"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'contrastIcon',
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