
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196908)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="6.5"/><path d="M4.634 4.267A6.482 6.482 0 0 1 6.68 9a6.482 6.482 0 0 1-2.045 4.733m8.732 0A6.482 6.482 0 0 1 11.32 9c0-1.865.786-3.547 2.045-4.733M2.5 9h13M9 15.036V2.5"/></g><defs><clipPath id="clip0_489_196908"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191233)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M5.955 5.447A8.975 8.975 0 0 1 8.785 12a8.975 8.975 0 0 1-2.83 6.553m12.09 0A8.975 8.975 0 0 1 15.215 12a8.975 8.975 0 0 1 2.83-6.553M3 12h18m-9 8.357V3"/></g><defs><clipPath id="clip0_489_191233"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'basketballIcon',
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