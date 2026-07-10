
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_201738)" :stroke="color"><path d="M16 9A7 7 0 1 1 2 9a7 7 0 0 1 14 0z"/><path d="M13.9 11.1a4.9 4.9 0 1 1-9.8 0 4.9 4.9 0 0 1 9.8 0z"/><path d="M11.8 13.2a2.8 2.8 0 1 1-5.6 0 2.8 2.8 0 0 1 5.6 0z"/></g><defs><clipPath id="clip0_489_201738"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191472)" :stroke="color" stroke-width="2"><path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"/><path d="M19 15a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/><path d="M16 18a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></g><defs><clipPath id="clip0_489_191472"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'scale-circleIcon',
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