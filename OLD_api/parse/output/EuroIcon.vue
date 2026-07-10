
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198916)"><path d="M14.5 3.936C13.473 3.037 12.169 2.5 10.75 2.5c-3.314 0-6 2.93-6 6.545 0 3.615 2.686 6.546 6 6.546 1.419 0 2.723-.537 3.75-1.436m-3.375-3.8H2.5m8.625-2.619H2.5" :stroke="color" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_198916"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191332)"><path d="M19.5 4.974C18.13 3.739 16.392 3 14.5 3c-4.418 0-8 4.03-8 9s3.582 9 8 9c1.892 0 3.63-.739 5-1.974M15 13.8H3.5M15 10.2H3.5" :stroke="color" stroke-width="2" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191332"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'euroIcon',
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