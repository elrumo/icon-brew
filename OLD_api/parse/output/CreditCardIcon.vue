
<template>
        <svg v-if="size === 18" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_198535)" :stroke="color" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.5c0-.943 0-1.414.293-1.707C3.086 4.5 3.557 4.5 4.5 4.5h9c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v5c0 .943 0 1.414-.293 1.707-.293.293-.764.293-1.707.293h-9c-.943 0-1.414 0-1.707-.293-.293-.293-.293-.764-.293-1.707v-5z"/><path d="M2.5 7.5L15.5 7.5"/><path d="M5 11h4"/></g><defs><clipPath id="clip0_489_198535"><path :fill="color" d="M0 0H18V18H0z"/></clipPath></defs></svg>
        

        <svg v-if="size === 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_489_191308)" :stroke="color" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9c0-1.886 0-2.828.586-3.414C4.172 5 5.114 5 7 5h10c1.886 0 2.828 0 3.414.586C21 6.172 21 7.114 21 9v6c0 1.886 0 2.828-.586 3.414C19.828 19 18.886 19 17 19H7c-1.886 0-2.828 0-3.414-.586C3 17.828 3 16.886 3 15V9z"/><path d="M3 9L21 9"/><path d="M7 15h6"/></g><defs><clipPath id="clip0_489_191308"><path :fill="color" d="M0 0H24V24H0z"/></clipPath></defs></svg>
</template>


<script>
    export default {
        name: 'credit-cardIcon',
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