
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198981)" :stroke="color"><path d="M16 9c0 1.727-3.5 5-7 5s-7-3.273-7-5c0-1.727 3.5-5 7-5s7 3.273 7 5z"/><circle cx="9" cy="9" r="2"/></g><defs><clipPath id="clip0_489_198981"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191337)" :stroke="color" stroke-width="2"><path d="M22 12c0 2.418-5 7-10 7S2 14.418 2 12s5-7 10-7 10 4.582 10 7z"/><circle cx="12" cy="12" r="3"/></g><defs><clipPath id="clip0_489_191337"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'eyeIcon',
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