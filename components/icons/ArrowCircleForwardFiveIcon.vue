
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_196643)"><g clip-path="url(#clip1_489_196643)"><path d="M14.5 10c0 2.974-2.462 5.5-5.5 5.5S3.5 12.975 3.5 10c0-2.974 2.462-5.5 5.5-5.5h5m0 0l-2.072-2M14 4.5l-2.072 2" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M10.5 8.115H7.988l-.484 2.62c.484-.318.996-.537 1.496-.537s1.5-.083 1.5 1.302S9.677 13 9 13s-1.5.048-1.5-.785" :stroke="color" stroke-width=".5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_196643"><path :fill="color" transform="matrix(-1 0 0 1 18 0)" d="M0 0H18V18H0z"/></clipPath><clipPath id="clip1_489_196643"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191215)"><g clip-path="url(#clip1_489_191215)"><path d="M19.878 13.286c0 4.26-2.96 7.714-7.378 7.714s-8-3.058-8-7.714c0-4.656 3.582-7.715 8-7.715h7m0 0L16.833 3M19.5 5.571l-2.667 2.572" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><path d="M14.37 10.357h-3.245L10.5 13.5c.625-.38.78-.643 1.995-.643s1.875.5 1.875 2-1.37 1.5-1.875 1.5c-.505 0-2 0-2-1" :stroke="color" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_489_191215"><path :fill="color" transform="matrix(-1 0 0 1 24 0)" d="M0 0H24V24H0z"/></clipPath><clipPath id="clip1_489_191215"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'arrow-circle-forward-fiveIcon',
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